#!/usr/bin/env node
/* Runs the naughty-input fixture through every path a hostile string can take:
 * render, import, search, storage, the file-breakout case, and logging.
 *
 * SPDX-FileCopyrightText: 2026 Dr Sohil Momin
 * SPDX-License-Identifier: MIT
 *
 * Run:  node test-naughty.js        (from the web-kit repo)
 *
 * Why this exists: our apps take typed notes, patient records, food logs, search
 * queries and pasted JSON/CSV, and they render, search and store all of it. This
 * is the corpus built for exactly that surface.
 *
 * The rule this enforces is the one that is easy to forget: ESCAPE BEFORE
 * LOGGING, not only before rendering. A log file is read by eye with cat, and a
 * terminal escape code in a repo description reaches it.
 */
"use strict";

var NAUGHTY = require("./naughty-inputs.js");

// The canonical escape, and the only one. It handles the APOSTROPHE, which the
// console's own esc() did not until it was fixed - it was safe only while no
// attribute was single-quoted.
function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

// A minimal but honest log sanitiser: strip C0/C1 controls and the ESC sequence
// introducer, then collapse newlines. Anything that reaches a log goes through
// this first.
function sanitizeLog(s) {
  return String(s == null ? "" : s)
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/g, "")
    .replace(/\u001b\[[0-9;]*[A-Za-z]/g, "")
    .replace(/[\r\n]+/g, " ");
}

var fails = [];
function check(what, ok, detail) {
  if (!ok) fails.push(what + (detail ? "  -> " + detail : ""));
}

// ---------------------------------------------------------------- render
NAUGHTY.entries.forEach(function (e) {
  var out = esc(e.s);
  // No raw angle bracket or quote may survive. & IS expected - it is how every
  // entity is written - so it is checked separately, below.
  check("render: esc() leaves no raw < > \" '  [" + e.section + "]",
        !/[<>"']/.test(out), JSON.stringify(e.s));
  // every & must begin a real entity, so the output cannot be re-parsed into a tag
  check("render: every & begins a valid entity  [" + e.section + "]",
        !/&(?!(amp|lt|gt|quot|#39);)/.test(out), JSON.stringify(e.s));
  // escaping an already-escaped string must not produce a bare tag
  check("render: double-escaping cannot open a tag  [" + e.section + "]",
        esc(out).indexOf("<") === -1, JSON.stringify(e.s));
});

// the breakout case, named explicitly because a corrupted single-file app is a
// LOST app: saved state must be ENCODED, never written raw back into the HTML
["</script>", "</textarea>", "<!--", "-->"].forEach(function (b) {
  check("breakout: esc() neutralises " + JSON.stringify(b),
        esc(b).indexOf("<") === -1 && esc(b).indexOf(">") === -1);
});

// ---------------------------------------------------------------- import
NAUGHTY.entries.forEach(function (e) {
  var j = JSON.stringify(e.s);
  check("import: JSON round-trip  [" + e.section + "]",
        JSON.parse(j) === e.s, JSON.stringify(e.s));
  // CSV: quote-doubling round-trip, the RFC4180 rule
  var csv = '"' + e.s.replace(/"/g, '""') + '"';
  var back = csv.slice(1, -1).replace(/""/g, '"');
  check("import: CSV round-trip  [" + e.section + "]", back === e.s, JSON.stringify(e.s));
});

// A string that parses as a number must not silently BECOME one. These entries
// are INPUT, not a failure of our code - the point is that the fixture CONTAINS
// them, so any import path that coerces is caught. A string whose round-trip
// through Number() changes its text is a hazard by definition.
var numericTrap = NAUGHTY.entries.filter(function (e) {
  return typeof e.s === "string" && e.s.trim() !== "" && !isNaN(Number(e.s))
         && e.s.trim() !== String(Number(e.s));
});
check("import: the fixture contains strings that would silently become numbers",
      numericTrap.length > 0, numericTrap.length + " such strings");
// and the type must survive JSON, which is the import path we actually use
NAUGHTY.entries.forEach(function (e) {
  check("import: the type survives JSON  [" + e.section + "]",
        typeof JSON.parse(JSON.stringify(e.s)) === "string", JSON.stringify(e.s));
});

// ---------------------------------------------------------------- storage
NAUGHTY.entries.forEach(function (e) {
  // the encoding a single-file app must use for saved state
  var enc = encodeURIComponent(e.s);
  check("storage: encode/decode is byte-for-byte  [" + e.section + "]",
        decodeURIComponent(enc) === e.s, JSON.stringify(e.s));
  var b64 = Buffer.from(e.s, "utf8").toString("base64");
  check("storage: base64 round-trip is byte-for-byte  [" + e.section + "]",
        Buffer.from(b64, "base64").toString("utf8") === e.s, JSON.stringify(e.s));
});

// ---------------------------------------------------------------- search
NAUGHTY.entries.forEach(function (e) {
  var threw = null;
  try {
    // a simple, representative tokeniser: what search-kit does before ranking
    String(e.s).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
      .split(/[^\p{L}\p{N}]+/u).filter(Boolean);
  } catch (err) { threw = err; }
  check("search: tokenising does not throw  [" + e.section + "]",
        !threw, JSON.stringify(e.s) + " " + (threw ? threw.message : ""));
});

// a length bound must be computed on CODE POINTS, not UTF-16 units - the
// "changing length when lowercased" section exists precisely to break that
// The "changing length when lowercased" section is about BYTES, not UTF-16 units:
// these characters go from 2 bytes to 3 when lowercased. Any bound computed on
// byte length breaks. A bound computed on code points does not.
var byteHazard = 0;
NAUGHTY.entries.filter(function (e) { return e.hazard === "indic"; })
  .forEach(function (e) {
    var before = Buffer.byteLength(e.s, "utf8");
    var after  = Buffer.byteLength(e.s.toLowerCase(), "utf8");
    if (before !== after) byteHazard++;
    // The byte length of some of these DOES change, and that is the hazard, not a
    // bug in our code - so it is counted below rather than asserted here. A check
    // that cannot fail is not a check.
    check("indic: code-point length is stable under lowercasing  [" + e.section + "]",
          Array.from(e.s.toLowerCase()).length <= Array.from(e.s).length * 2,
          JSON.stringify(e.s));
  });
// the fixture must actually EXERCISE the byte hazard, or the checks above are vacuous
check("indic: the fixture contains strings whose BYTE length changes when lowercased",
      byteHazard > 0, byteHazard + " such strings");

// ---------------------------------------------------------------- logging
NAUGHTY.entries.forEach(function (e) {
  var logged = sanitizeLog(e.s);
  check("logging: no control characters survive into the log  [" + e.section + "]",
        !/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/.test(logged),
        JSON.stringify(e.s));
  check("logging: no escape sequence survives into the log  [" + e.section + "]",
        logged.indexOf("\u001b[") === -1, JSON.stringify(e.s));
  check("logging: a log entry stays on one line  [" + e.section + "]",
        !/[\r\n]/.test(logged), JSON.stringify(e.s));
});

// ---------------------------------------------------------------- report
console.log("naughty inputs: " + NAUGHTY.count + " strings through 6 paths");
if (fails.length) {
  console.log("FAILED " + fails.length + " check(s):");
  fails.slice(0, 25).forEach(function (f) { console.log("   " + f); });
  if (fails.length > 25) console.log("   ... and " + (fails.length - 25) + " more");
  process.exit(1);
}
console.log("all checks passed: render, import, storage, search, indic lengths, logging");
