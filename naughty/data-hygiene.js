// Naughty inputs - data-hygiene
//
// SPDX-FileCopyrightText: 2026 Dr Sohil Momin
// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
//
// Invisible or forbidden characters - C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs, plus NUL/LF/CR which blns cannot express.
//
// Extracted BY SECTION from blns.txt (big-list-of-naughty-strings, MIT), not
// hand-typed. Every string is written with \\uXXXX escapes so this file is safe to
// read, diff and cat - which is the point, because the hazards that matter most
// are the ones you cannot see. Print JSON.stringify(entry.s) when debugging.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.NAUGHTY_DATA_HYGIENE = factory();
})(typeof self !== "undefined" ? self : this, function () {
  return [
    { hazard: "data-hygiene", section: "Special Characters", why: "C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs - forbidden in XML, reused as interna", s: ",./;'[]\u005c-=" },
    { hazard: "data-hygiene", section: "Special Characters", why: "C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs - forbidden in XML, reused as interna", s: "<>?:\u0022{}|_+" },
    { hazard: "data-hygiene", section: "Special Characters", why: "C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs - forbidden in XML, reused as interna", s: "!@#$%^&*()`~" },
    { hazard: "data-hygiene", section: "Special Characters", why: "C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs - forbidden in XML, reused as interna", s: "\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b" },
    { hazard: "data-hygiene", section: "Special Characters", why: "C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs - forbidden in XML, reused as interna", s: "\u001f\u007f" },
    { hazard: "data-hygiene", section: "Special Characters", why: "C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs - forbidden in XML, reused as interna", s: "\u0080\u0081\u0082\u0083\u0084\u0086\u0087\u0088\u0089\u008a\u008b\u008c\u008d\u008e\u008f\u0090\u0091\u0092\u0093\u0094\u0095\u0096\u0097\u0098\u0099\u009a\u009b\u009c\u009d\u009e\u009f" },
    { hazard: "data-hygiene", section: "Special Characters", why: "C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs - forbidden in XML, reused as interna", s: "\u00a0\u1680\u2002\u2003\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b" },
    { hazard: "data-hygiene", section: "Special Characters", why: "C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs - forbidden in XML, reused as interna", s: "\u00ad\u0600\u0601\u0602\u0603\u0604\u0605\u061c\u06dd\u070f\u180e\u200b\u200c\u200d\u200e\u200f\u202a\u202b\u202c\u202d\u202e\u2060\u2061\u2062\u2063\u2064\u2066\u2067\u2068\u2069\u206a\u206b\u206c\u206d\u206e\u206f\ufeff\ufff9\ufffa\ufffb\u110bd\u1bca0\u1bca1\u1bca2\u1bca3\u1d173\u1d174\u1d175\u1d176\u1d177\u1d178\u1d179\u1d17a\ue0001\ue0020\ue0021\ue0022\ue0023\ue0024\ue0025\ue0026\ue0027\ue0028\ue0029\ue002a\ue002b\ue002c\ue002d\ue002e\ue002f\ue0030\ue0031\ue0032\ue0033\ue0034\ue0035\ue0036\ue0037\ue0038\ue0039\ue003a\ue003b\ue003c\ue003d\ue003e\ue003f\ue0040\ue0041\ue0042\ue0043\ue0044\ue0045\ue0046\ue0047\ue0048\ue0049\ue004a\ue004b\ue004c\ue004d\ue004e\ue004f\ue0050\ue0051\ue0052\ue0053\ue0054\ue0055\ue0056\ue0057\ue0058\ue0059\ue005a\ue005b\ue005c\ue005d\ue005e\ue005f\ue0060\ue0061\ue0062\ue0063\ue0064\ue0065\ue0066\ue0067\ue0068\ue0069\ue006a\ue006b\ue006c\ue006d\ue006e\ue006f\ue0070\ue0071\ue0072\ue0073\ue0074\ue0075\ue0076\ue0077\ue0078\ue0079\ue007a\ue007b\ue007c\ue007d\ue007e\ue007f" },
    { hazard: "data-hygiene", section: "Special Characters", why: "C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs - forbidden in XML, reused as interna", s: "\ufeff" },
    { hazard: "data-hygiene", section: "Special Characters", why: "C0/C1 controls, whitespace Zs/Zl/Zp, Cf controls, BOMs - forbidden in XML, reused as interna", s: "\ufffe" },
    { hazard: "data-hygiene", section: "added", why: "NUL - blns cannot express it; terminates strings in C and truncates in many parsers", s: "\u0000" },
    { hazard: "data-hygiene", section: "added", why: "LF - blns cannot express it; the CSV and log separator", s: "\u000a" },
    { hazard: "data-hygiene", section: "added", why: "CR - blns cannot express it; the CRLF injection case", s: "\u000d" },
  ];
});
