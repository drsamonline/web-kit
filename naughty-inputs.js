// Naughty inputs - the index. A curated subset of big-list-of-naughty-strings
// (MIT, minimaxir/big-list-of-naughty-strings), extracted BY SECTION from blns.txt
// rather than hand-typed, plus five the corpus deliberately cannot express.
//
// SPDX-FileCopyrightText: 2026 Dr Sohil Momin
// SPDX-License-Identifier: MIT
//
// Split by hazard rather than kept in one file: the full corpus is 742 lines, the
// curated subset is 133 entries, and a single file of that size is awkward to
// review and to commit. Each group stands alone, so a test can load just one.
//
// hazard tells you WHAT BROKE:
//   render       must survive esc() and not break the DOM or the layout
//   import       must round-trip through JSON and CSV unchanged
//   search       must not throw the tokeniser or the ranker
//   storage      must round-trip byte-for-byte
//   indic        the everyday Indic case: 2-byte, byte-length change, RTL, RTL-override
//   attack       must be INERT after esc() and must never close a tag
//   logging      must be stripped BEFORE it reaches a log file
//   data-hygiene invisible or forbidden characters
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.NAUGHTY = factory();
})(typeof self !== "undefined" ? self : this, function () {
  var groups = {
    "attack": require("./naughty/attack.js"),
    "indic": require("./naughty/indic.js"),
    "data-hygiene": require("./naughty/data-hygiene.js"),
    "logging": require("./naughty/logging.js"),
    "render": require("./naughty/render.js"),
    "import": require("./naughty/import.js"),
  };
  var entries = [];
  Object.keys(groups).forEach(function (h) {
    groups[h].forEach(function (e) { entries.push(e); });
  });
  var all = entries.map(function (e) { return e.s; });
  return { entries: entries, all: all, groups: groups, count: entries.length };
});
