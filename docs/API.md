# web-kit — API reference

**Version 1.0.0.** **The shared offline-first runtime for drsamonline apps.** One file, no build step, no CDN. Works from `file://` and from GitHub Pages.

Generated from the source in this repository: every name, argument and
note below is read out of the kit file, so it cannot describe a function
that is not there.

```js
<script src="web-kit.js"></script>
Kit.onupgradeneeded(...)
// or: const Kit = require('./web-kit.js')
```

## The surface (3 entries)

| Name | Arguments | What it does |
|---|---|---|
| `Kit.onupgradeneeded` | `()` | — |
| `Kit.onsuccess` | `()` | — |
| `Kit.onerror` | `()` | — |

## Notes

- Zero dependencies, one file, no build step: it works from `file://`, from a
  `<script>` tag and from Node.
- The version above is the `VERSION` file in this repository; a pinned copy is
  what an app vendors.
