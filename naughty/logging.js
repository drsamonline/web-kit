// Naughty inputs - logging
//
// SPDX-FileCopyrightText: 2026 Dr Sohil Momin
// SPDX-License-Identifier: MIT
//
// Terminal escape codes - these punish anyone who cats the file. Must be stripped BEFORE logging, not just before rendering.
//
// Extracted BY SECTION from blns.txt (big-list-of-naughty-strings, MIT), not
// hand-typed. Every string is written with \\uXXXX escapes so this file is safe to
// read, diff and cat - which is the point, because the hazards that matter most
// are the ones you cannot see. Print JSON.stringify(entry.s) when debugging.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.NAUGHTY_LOGGING = factory();
})(typeof self !== "undefined" ? self : this, function () {
  return [
    { hazard: "logging", section: "Terminal escape codes", why: "punishes anyone who cats the file - stripped BEFORE logging, not just before rendering", s: "Roses are \u001b[0;31mred\u001b[0m, violets are \u001b[0;34mblue. Hope you enjoy terminal hue" },
    { hazard: "logging", section: "Terminal escape codes", why: "punishes anyone who cats the file - stripped BEFORE logging, not just before rendering", s: "But now...\u001b[20Cfor my greatest trick...\u001b[8m" },
    { hazard: "logging", section: "Terminal escape codes", why: "punishes anyone who cats the file - stripped BEFORE logging, not just before rendering", s: "The quic\u0008\u0008\u0008\u0008\u0008\u0008k brown fo\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007\u0007x... [Beeeep]" },
  ];
});
