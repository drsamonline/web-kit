// Naughty inputs - indic
//
// SPDX-FileCopyrightText: 2026 Dr Sohil Momin
// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
//
// The everyday Indic case - two-byte characters, characters that change BYTE length when lowercased, RTL, the right-to-left override, the VMware globalization super-string.
//
// Extracted BY SECTION from blns.txt (big-list-of-naughty-strings, MIT), not
// hand-typed. Every string is written with \\uXXXX escapes so this file is safe to
// read, diff and cat - which is the point, because the hazards that matter most
// are the ones you cannot see. Print JSON.stringify(entry.s) when debugging.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.NAUGHTY_INDIC = factory();
})(typeof self !== "undefined" ? self : this, function () {
  return [
    { hazard: "indic", section: "Two-Byte Characters", why: "2-byte UTF-8 - the everyday case for Indic scripts", s: "\u7530\u4e2d\u3055\u3093\u306b\u3042\u3052\u3066\u4e0b\u3055\u3044" },
    { hazard: "indic", section: "Two-Byte Characters", why: "2-byte UTF-8 - the everyday case for Indic scripts", s: "\u30d1\u30fc\u30c6\u30a3\u30fc\u3078\u884c\u304b\u306a\u3044\u304b" },
    { hazard: "indic", section: "Two-Byte Characters", why: "2-byte UTF-8 - the everyday case for Indic scripts", s: "\u548c\u88fd\u6f22\u8a9e" },
    { hazard: "indic", section: "Two-Byte Characters", why: "2-byte UTF-8 - the everyday case for Indic scripts", s: "\u90e8\u843d\u683c" },
    { hazard: "indic", section: "Two-Byte Characters", why: "2-byte UTF-8 - the everyday case for Indic scripts", s: "\uc0ac\ud68c\uacfc\ud559\uc6d0 \uc5b4\ud559\uc5f0\uad6c\uc18c" },
    { hazard: "indic", section: "Two-Byte Characters", why: "2-byte UTF-8 - the everyday case for Indic scripts", s: "\ucc26\ucc28\ub97c \ud0c0\uace0 \uc628 \ud3b2\uc2dc\ub9e8\uacfc \uc45b\ub2e4\ub9ac \ub620\ubc29\uac01\ud558" },
    { hazard: "indic", section: "Two-Byte Characters", why: "2-byte UTF-8 - the everyday case for Indic scripts", s: "\u793e\u6703\u79d1\u5b78\u9662\u8a9e\u5b78\u7814\u7a76\u6240" },
    { hazard: "indic", section: "Two-Byte Characters", why: "2-byte UTF-8 - the everyday case for Indic scripts", s: "\uc6b8\ub780\ubc14\ud1a0\ub974" },
    { hazard: "indic", section: "Two-Byte Characters", why: "2-byte UTF-8 - the everyday case for Indic scripts", s: "\u2070e\u20731\u20779\u20c53\u20c78\u20c96\u20ccf" },
    { hazard: "indic", section: "Two-Byte Characters", why: "2-byte UTF-8 - the everyday case for Indic scripts", s: "\u1041c \u10414\u10407\u1041d\u10400\u10421\u10407\u10413 \u10419\u1040a\u10421\u1041d\u10413/\u1041d\u10407\u10417\u1040a\u10424\u10414 \u10412\u1040b\u10417 \u10412\u1040c \u1041c \u10421\u10400\u10416\u10407\u10424\u10413\u1041d \u10431\u10442 \u10444 \u10414\u10407\u1041d\u10400\u10421\u10407\u10413 \u1040f\u10406\u10405\u10424\u10406\u1041a\u1040a\u10421\u1041d\u10406\u10413\u10406" },
    { hazard: "indic", section: "Changing length when lowercased", why: "grows 2 to 3 bytes when lowercased - breaks any length-based bound", s: "\u023a" },
    { hazard: "indic", section: "Changing length when lowercased", why: "grows 2 to 3 bytes when lowercased - breaks any length-based bound", s: "\u023e" },
    { hazard: "indic", section: "Right-To-Left Strings", why: "Arabic and Hebrew - reorder a line visually, break position assumptions", s: "\u062b\u0645 \u0646\u0641\u0633 \u0633\u0642\u0637\u062a \u0648\u0628\u0627\u0644\u062a\u062d\u062f\u064a\u062f\u060c, \u062c\u0632\u064a\u0631\u062a\u064a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0623\u0646 \u062f\u0646\u0648. \u0625\u0630 \u0647\u0646\u0627\u061f \u0627\u0644\u0633\u062a\u0627\u0631 \u0648\u062a\u0646\u0635\u064a\u0628 \u0643\u0627\u0646. \u0623\u0647\u0651\u0644 \u0627\u064a\u0637\u0627\u0644\u064a\u0627\u060c \u0628\u0631\u064a\u0637\u0627\u0646\u064a\u0627-\u0641\u0631\u0646\u0633\u0627 \u0642\u062f \u0623\u062e\u0630. \u0633\u0644\u064a\u0645\u0627\u0646\u060c \u0625\u062a\u0641\u0627\u0642\u064a\u0629 \u0628\u064a\u0646 \u0645\u0627, \u064a\u0630\u0643\u0631 \u0627\u0644\u062d\u062f\u0648\u062f \u0623\u064a \u0628\u0639\u062f, \u0645\u0639\u0627\u0645\u0644\u0629 \u0628\u0648\u0644\u0646\u062f\u0627\u060c \u0627\u0644\u0625\u0637\u0644\u0627\u0642 \u0639\u0644 \u0625\u064a\u0648." },
    { hazard: "indic", section: "Right-To-Left Strings", why: "Arabic and Hebrew - reorder a line visually, break position assumptions", s: "\u05d1\u05b0\u05bc\u05e8\u05b5\u05d0\u05e9\u05b4\u05c1\u05d9\u05ea, \u05d1\u05b8\u05bc\u05e8\u05b8\u05d0 \u05d0\u05b1\u05dc\u05b9\u05d4\u05b4\u05d9\u05dd, \u05d0\u05b5\u05ea \u05d4\u05b7\u05e9\u05b8\u05bc\u05c1\u05de\u05b7\u05d9\u05b4\u05dd, \u05d5\u05b0\u05d0\u05b5\u05ea \u05d4\u05b8\u05d0\u05b8\u05e8\u05b6\u05e5" },
    { hazard: "indic", section: "Right-To-Left Strings", why: "Arabic and Hebrew - reorder a line visually, break position assumptions", s: "\u05d4\u05b8\u05d9\u05b0\u05ea\u05b8\u05d4test\u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0627\u0644\u062a\u0651\u062d\u0648\u0644" },
    { hazard: "indic", section: "Right-To-Left Strings", why: "Arabic and Hebrew - reorder a line visually, break position assumptions", s: "\ufdfd" },
    { hazard: "indic", section: "Right-To-Left Strings", why: "Arabic and Hebrew - reorder a line visually, break position assumptions", s: "\ufdfa" },
    { hazard: "indic", section: "Right-To-Left Strings", why: "Arabic and Hebrew - reorder a line visually, break position assumptions", s: "\u0645\u064f\u0646\u064e\u0627\u0642\u064e\u0634\u064e\u0629\u064f \u0633\u064f\u0628\u064f\u0644\u0650 \u0627\u0650\u0633\u0652\u062a\u0650\u062e\u0652\u062f\u064e\u0627\u0645\u0650 \u0627\u0644\u0644\u064f\u0651\u063a\u064e\u0629\u0650 \u0641\u0650\u064a \u0627\u0644\u0646\u064f\u0651\u0638\u064f\u0645\u0650 \u0627\u0644\u0652\u0642\u064e\u0627\u0626\u0650\u0645\u064e\u0629\u0650 \u0648\u064e\u0641\u0650\u064a\u0645 \u064a\u064e\u062e\u064f\u0635\u064e\u0651 \u0627\u0644\u062a\u064e\u0651\u0637\u0652\u0628\u0650\u064a\u0642\u064e\u0627\u062a\u064f \u0627\u0644\u0652\u062d\u0627\u0633\u064f\u0648\u0628\u0650\u064a\u064e\u0651\u0629\u064f\u060c" },
    { hazard: "indic", section: "Right-To-Left Strings", why: "Arabic and Hebrew - reorder a line visually, break position assumptions", s: "\u0627\u0644\u0643\u0644 \u0641\u064a \u0627\u0644\u0645\u062c\u0645\u0648 \u0639\u0629 (5)" },
    { hazard: "indic", section: "Trick Unicode", why: "the right-to-left OVERRIDE - reverses everything after it", s: "\u202a\u202atest\u202a" },
    { hazard: "indic", section: "Trick Unicode", why: "the right-to-left OVERRIDE - reverses everything after it", s: "\u202btest\u202b" },
    { hazard: "indic", section: "Trick Unicode", why: "the right-to-left OVERRIDE - reverses everything after it", s: "test" },
    { hazard: "indic", section: "Trick Unicode", why: "the right-to-left OVERRIDE - reverses everything after it", s: "test\u2060test\u202b" },
    { hazard: "indic", section: "Trick Unicode", why: "the right-to-left OVERRIDE - reverses everything after it", s: "\u2066test\u2067" },
    { hazard: "indic", section: "Special Unicode Characters Union", why: "the VMware globalization super-string", s: "\u8868\u30dd\u3042A\u9dd7\u0152\u00e9\uff22\u900d\u00dc\u00df\u00aa\u0105\u00f1\u4e02\u3400\u20000" },
  ];
});
