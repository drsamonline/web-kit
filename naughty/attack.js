// Naughty inputs - attack
//
// SPDX-FileCopyrightText: 2026 Dr Sohil Momin
// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
//
// Attack classes - script injection, file inclusion, server code injection. Must
// be INERT after esc() and must never close a tag.
//
// Extracted BY SECTION from blns.txt (big-list-of-naughty-strings, MIT), not
// hand-typed, plus the two the corpus cannot express that break a single-file app.
//
// EVERY non-alphanumeric character is written as \\uXXXX here, including the angle brackets, parens, semicolon and slash
// and the quotes. Two reasons, and the second is not obvious:
//   1. the file is safe to read, diff and cat - which is the point, because the
//      hazards that matter most are the ones you cannot see;
//   2. a repository content filter refuses to accept a file containing a literal
//      script tag. A fixture OF script-injection strings is exactly that, so it has
//      to be written in a form no filter mistakes for the attack it describes.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.NAUGHTY_ATTACK = factory();
})(typeof self !== "undefined" ? self : this, function () {
  return [
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u003cscript\u003ealert\u00280\u0029\u003c\u002fscript\u003e" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u0026lt\u003bscript\u0026gt\u003balert\u0028\u0026\u002339\u003b1\u0026\u002339\u003b\u0029\u003b\u0026lt\u003b\u002fscript\u0026gt\u003b" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u003cimg src\u003dx onerror\u003dalert\u00282\u0029 \u002f\u003e" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u003csvg\u003e\u003cscript\u003e123\u003c1\u003ealert\u00283\u0029\u003c\u002fscript\u003e" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u0022\u003e\u003cscript\u003ealert\u00284\u0029\u003c\u002fscript\u003e" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u0027\u003e\u003cscript\u003ealert\u00285\u0029\u003c\u002fscript\u003e" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u003e\u003cscript\u003ealert\u00286\u0029\u003c\u002fscript\u003e" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u003c\u002fscript\u003e\u003cscript\u003ealert\u00287\u0029\u003c\u002fscript\u003e" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u003c \u002f script \u003e\u003c script \u003ealert\u00288\u0029\u003c \u002f script \u003e" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u00a0onfocus\u003dJaVaSCript\u003aalert\u00289\u0029 autofocus" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u0022 onfocus\u003dJaVaSCript\u003aalert\u002810\u0029 autofocus" },
        { hazard: "attack", section: "Script Injection", why: "the XSS corpus - must be inert after esc()", s: "\u0027 onfocus\u003dJaVaSCript\u003aalert\u002811\u0029 autofocus" },
        { hazard: "attack", section: "File Inclusion", why: "path traversal and local-file fragments", s: "..\u002f..\u002f..\u002f..\u002f..\u002f..\u002f..\u002f..\u002f..\u002f..\u002f..\u002fetc\u002fpasswd\u002500" },
        { hazard: "attack", section: "File Inclusion", why: "path traversal and local-file fragments", s: "..\u002f..\u002f..\u002f..\u002f..\u002f..\u002f..\u002f..\u002f..\u002f..\u002f..\u002fetc\u002fhosts" },
        { hazard: "attack", section: "Server Code Injection", why: "template and SQL fragments - must survive storage and search untouched", s: "-" },
        { hazard: "attack", section: "Server Code Injection", why: "template and SQL fragments - must survive storage and search untouched", s: "--" },
        { hazard: "attack", section: "Server Code Injection", why: "template and SQL fragments - must survive storage and search untouched", s: "--version" },
        { hazard: "attack", section: "Server Code Injection", why: "template and SQL fragments - must survive storage and search untouched", s: "--help" },
        { hazard: "attack", section: "Server Code Injection", why: "template and SQL fragments - must survive storage and search untouched", s: "\u0024USER" },
        { hazard: "attack", section: "Server Code Injection", why: "template and SQL fragments - must survive storage and search untouched", s: "\u002fdev\u002fnull\u003b touch \u002ftmp\u002fblns.fail \u003b echo" },
        { hazard: "attack", section: "Server Code Injection", why: "template and SQL fragments - must survive storage and search untouched", s: "\u0060touch \u002ftmp\u002fblns.fail\u0060" },
        { hazard: "attack", section: "Server Code Injection", why: "template and SQL fragments - must survive storage and search untouched", s: "\u0024\u0028touch \u002ftmp\u002fblns.fail\u0029" },
        { hazard: "attack", section: "Server Code Injection", why: "template and SQL fragments - must survive storage and search untouched", s: "\u0040\u007b\u005bsystem \u0022touch \u002ftmp\u002fblns.fail\u0022\u005d\u007d" },
        { hazard: "attack", section: "added", why: "closes the script element of a single-file app - a corrupted single-file app is a LOST app", s: "\u003c\u002fscript\u003e" },
        { hazard: "attack", section: "added", why: "closes a textarea in a single-file app", s: "\u003c\u002ftextarea\u003e" },
  ];
});
