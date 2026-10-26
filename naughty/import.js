// Naughty inputs - import
//
// SPDX-FileCopyrightText: 2026 Dr Sohil Momin
// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
//
// Import hazards - reserved strings, numeric strings, and MSDOS device names. Must round-trip through JSON and CSV unchanged.
//
// Extracted BY SECTION from blns.txt (big-list-of-naughty-strings, MIT), not
// hand-typed. Every string is written with \\uXXXX escapes so this file is safe to
// read, diff and cat - which is the point, because the hazards that matter most
// are the ones you cannot see. Print JSON.stringify(entry.s) when debugging.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.NAUGHTY_IMPORT = factory();
})(typeof self !== "undefined" ? self : this, function () {
  return [
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "undefined" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "undef" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "null" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "NULL" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "(null)" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "nil" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "NIL" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "true" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "false" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "True" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "False" },
    { hazard: "import", section: "Reserved Strings", why: "strings meaningful to code and to formats - must round-trip through JSON and CSV", s: "TRUE" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "0" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "1" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "1.00" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "$1.00" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "1/2" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "1E2" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "1E02" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "1E+02" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "-1" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "-1.00" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "-$1.00" },
    { hazard: "import", section: "Numeric Strings", why: "strings that parse as numbers - must not silently become one", s: "-1/2" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "CON" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "PRN" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "AUX" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "CLOCK$" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "NUL" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "A:" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "ZZ:" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "COM1" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "LPT1" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "LPT2" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "LPT3" },
    { hazard: "import", section: "MSDOS/Windows Special Filenames", why: "reserved device names - the case that breaks a naive file writer", s: "COM2" },
  ];
});
