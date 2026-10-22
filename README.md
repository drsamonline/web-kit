# web-kit

**The shared offline-first runtime for drsamonline apps.** One file, no build
step, no CDN. Works from `file://` and from GitHub Pages.

Every single-file app was re-implementing the same things — storage, languages,
CSV export, theming, SEO. This is that code, once.

## Use it

Drop `web-kit.js` next to your `index.html` and include it:

```html
<script src="web-kit.js"></script>
<script>
  Loom.theme.apply();            // light/dark from the system, remembered
  Loom.storage.set("count", 1);  // namespaced, JSON-safe
  document.body.textContent = Loom.i18n.t("app_ready");
</script>
```

For a truly single-file app, inline the contents of `web-kit.js` in a `<script>`
block. Nothing else is required.

## What's in it

| API | Does |
|---|---|
| `Loom.storage` | `get/set/remove/clear` on localStorage (namespaced), plus a small IndexedDB wrapper (`put/getItem/all`) for larger data. |
| `Loom.i18n` | `t(key)`, `setLang`, `langs`, `extend` — English, Hindi and Gujarati built in. |
| `Loom.csv` | `toCSV(rows)`, `fromCSV(text)`, `download(name, text)`. |
| `Loom.theme` | `apply`, `set`, `toggle` — light/dark tokens as CSS variables. |
| `Loom.a11y` | `trapFocus(el)`, `announce(msg)`. |
| `Loom.pwa` | `register(sw)`, `themeColor(color)`. |
| `Loom.seo` | `title`, `description`, `jsonld`. |
| `Loom.ui` | `el(tag, props, children)` — a tiny DOM helper. |

## Conventions it follows

- **Offline-first:** no network calls, no CDN, no telemetry.
- **No accounts:** all data stays on the device.
- **Small:** one dependency-free file you can read in one sitting.

## Demo and tests

- `demo/index.html` — a working mini-app (counter, theme toggle, language
  switch, CSV export).
- `test/index.html` — a tiny assertion page; open it and check the console.

## Licence

MIT. (c) 2026 Dr Sohil Momin.

Part of the Forge system. Kits are open; the orchestrator is licensed.
