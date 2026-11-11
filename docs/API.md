# web-kit — API reference

**Version 1.0.0.** The shared offline-first runtime for drsamonline apps: one file, no
build step, no CDN, works from `file://` and from GitHub Pages.

Generated from `web-kit.js`: every name and argument below is read out of the source.
The kit is organised as namespaces — `Loom.storage`, `Loom.ui`, `Loom.i18n` — each one
a closure that returns its methods, which is why the surface is two levels deep.

```js
<script src="web-kit.js"></script>
Loom.storage.get('theme', 'light')
```

## `Loom.storage` (9 methods)

| Method | Arguments |
|---|---|
| `Loom.storage.get` | `(name, fallback)` |
| `Loom.storage.set` | `(name, value)` |
| `Loom.storage.remove` | `(name)` |
| `Loom.storage.clear` | `()` |
| `Loom.storage.put` | `(db, store, k, v)` |
| `Loom.storage.getItem` | `(db, store, k)` |
| `Loom.storage.all` | `(db, store)` |
| `Loom.storage.namespace` | `(name)` |
| `Loom.storage.prefix` | `()` |

## `Loom.i18n` (4 methods)

| Method | Arguments |
|---|---|
| `Loom.i18n.langs` | `()` |
| `Loom.i18n.setLang` | `(l)` |
| `Loom.i18n.t` | `(key, fallback)` |
| `Loom.i18n.extend` | `(l, obj)` |

## `Loom.csv` (4 methods)

| Method | Arguments |
|---|---|
| `Loom.csv.csvSafe` | `()` |
| `Loom.csv.toCSV` | `(rows)` |
| `Loom.csv.fromCSV` | `(text)` |
| `Loom.csv.download` | `(filename, text)` |

## `Loom.theme` (4 methods)

| Method | Arguments |
|---|---|
| `Loom.theme.tokens` | `()` |
| `Loom.theme.apply` | `(mode)` |
| `Loom.theme.set` | `(mode)` |
| `Loom.theme.toggle` | `()` |

## `Loom.a11y` (2 methods)

| Method | Arguments |
|---|---|
| `Loom.a11y.trapFocus` | `(el)` |
| `Loom.a11y.announce` | `(msg)` |

## `Loom.pwa` (2 methods)

| Method | Arguments |
|---|---|
| `Loom.pwa.register` | `(swPath)` |
| `Loom.pwa.themeColor` | `(color)` |

## `Loom.seo` (3 methods)

| Method | Arguments |
|---|---|
| `Loom.seo.title` | `(t)` |
| `Loom.seo.description` | `(d)` |
| `Loom.seo.jsonld` | `(obj)` |

## `Loom.ui` (1 methods)

| Method | Arguments |
|---|---|
| `Loom.ui.el` | `(tag, props, children)` |

## Notes

- Zero dependencies. `Loom.storage` prefers IndexedDB and falls back to localStorage;
  `Loom.ui` builds elements without a framework; `Loom.pwa` and `Loom.seo` write the
  head tags a static page needs.
