/* Node test for web-kit: the parts that do not need a DOM — namespaced storage,
 * CSV, and i18n. The browser-only parts (theme, ui, a11y, seo, pwa) are covered
 * by test/index.html, which needs a real document.
 *
 * This is the file the `Test` workflow runs (`node test-node.js`).
 */
"use strict";

/* ---- a minimal localStorage so Loom.storage works outside the browser ---- */
(function () {
  // a Storage-like object: stored keys are own enumerable properties, so
  // web-kit's clear() (which iterates Object.keys(localStorage)) behaves as in a browser.
  const ls = {
    getItem(k) { k = String(k); return Object.prototype.hasOwnProperty.call(this, k) ? this[k] : null; },
    setItem(k, v) { this[String(k)] = String(v); },
    removeItem(k) { delete this[String(k)]; },
    clear() { for (const k of Object.keys(this)) if (typeof this[k] !== "function") delete this[k]; },
    key(i) { return Object.keys(this).filter((k) => typeof this[k] !== "function")[i] ?? null; },
    get length() { return Object.keys(this).filter((k) => typeof this[k] !== "function").length; },
  };
  global.localStorage = ls;
})();

const Loom = require("./web-kit.js").Loom;

let pass = 0, fail = 0;
function ok(cond, label, extra) {
  if (cond) { pass++; console.log("PASS  " + label); }
  else { fail++; console.log("FAIL  " + label + (extra !== undefined ? "  " + JSON.stringify(extra) : "")); }
}

ok(!!Loom && typeof Loom.version === "string", "exposes Loom with a version", Loom && Loom.version);

/* ---- storage: namespaced, JSON-safe ---- */
Loom.storage.set("t", { a: 1 });
ok(JSON.stringify(Loom.storage.get("t")) === '{"a":1}', "storage set/get roundtrip (JSON)");
ok(Loom.storage.get("nope", "x") === "x", "storage get fallback");
ok(localStorage.getItem("loom:t") === '{"a":1}', "storage is namespaced under loom:");
Loom.storage.remove("t");
ok(Loom.storage.get("t") === undefined, "storage remove");
Loom.storage.set("a", 1); Loom.storage.set("b", 2);
Loom.storage.clear();
ok(Loom.storage.get("a") === undefined && Loom.storage.get("b") === undefined, "storage clear wipes only namespaced keys");

/* ---- csv ---- */
const rows = [{ a: "x", b: 'q,"z"' }, { a: "1", b: "2" }];
const csv = Loom.csv.toCSV(rows);
const back = Loom.csv.fromCSV(csv);
ok(back.length === 2 && back[0].b === 'q,"z"' && back[1].a === "1", "csv roundtrip");
ok(csv.indexOf('"q,""z"""') !== -1, "csv escapes quotes and commas");

/* ---- i18n ---- */
ok(Loom.i18n.t("save") === "Save", "i18n en", Loom.i18n.t("save"));
Loom.i18n.setLang("hi");
ok(Loom.i18n.t("save") === "सहेजें", "i18n hi", Loom.i18n.t("save"));
Loom.i18n.setLang("gu");
ok(Loom.i18n.t("save") === "સાચવો", "i18n gu", Loom.i18n.t("save"));
ok(Loom.i18n.t("missing_key") === "missing_key", "i18n fallback to the key");
Loom.i18n.setLang("en");

console.log("\n" + pass + " passed, " + fail + " failed");
process.exit(fail ? 1 : 0);
