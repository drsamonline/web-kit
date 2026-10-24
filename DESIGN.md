# DESIGN.md — how a drsamonline app looks

The artefacts live beside this file: `icons.js` (140 inline SVG icons), `design.css`
(tokens, reset, keyframes). This is the document that says **how to use them**, so a
future app matches the house style instead of the agent guessing. It is short on
purpose — short enough to read in full, concrete enough to decide from.

## Type scale

| token | size | use |
|---|---|---|
| `--step-4` | 2.2rem | the page title, once |
| `--step-3` | 1.7rem | section headings |
| `--step-2` | 1.35rem | sub-headings, card titles |
| `--step-1` | 1.1rem | lead paragraphs |
| `--step-0` | 0.95rem | body |
| `.mut` | same, `--faint` | secondary text |

Line height is `--lh` (1.55) for body, 1.15-1.2 for headings. **Do not introduce a
size that is not on this scale** — that is how a house style drifts.

## Palette

**Use the token NAMES, never hex values.** A hex written into an app is a colour that
will not follow when the palette changes.

`--bg0` page · `--bg1` recessed · `--surface` raised · `--line` borders ·
`--ink` text · `--ink-soft` secondary · `--faint` tertiary ·
`--accent` links and primary action · `--gold` highlight · `--ok` / `--warn` / `--bad` status.

Dark mode is a single attribute: `data-theme="dark"` on the root element. **Every
colour must come from a token or dark mode breaks** — that is the test.

## Spacing and layout

`--space` (12px) is the unit. `--radius` for cards, `--radius-sm` for controls.
Content width: 68ch for prose, no maximum for tables and dashboards.
**Controls and anything needing attention go at the TOP of a page; long lists go
below.** That is the console's arrangement and it is deliberate.

## Icons

`ICONS.icon(name, {size, label, class})` returns markup. 24×24 grid, 2px stroke,
round caps. `ICONS.names()` lists what exists; `ICONS.has(n)` checks.

- **Do** use an icon beside a label when it aids scanning.
- **Do** pass `label` when the icon is the only content — that is its accessible name.
- **Don't** use an icon as the only way to convey state (colour and icon alone fail
  for some readers).
- **Don't** add an icon that is not in the set; add it to `icons.js` from the same
  source (tabler, MIT) so the grid and stroke match.

## Motion

`fade`, `rise`, `pulse`, `shimmer` exist as classes. `prefers-reduced-motion` is
honoured in `design.css` — **do not write an animation that ignores it.** Motion is
for feedback and state change, never decoration that runs forever.

## Do / don't

- **Do** link `design.css` and take the tokens. **Don't** copy hex values out of it.
- **Do** keep the page's own CSS small and specific. **Don't** add a framework —
  not Bootstrap, not Tailwind, not an icon font. Zero-dependency is the whole point.
- **Do** put the one thing the page is FOR at the top. **Don't** open with a hero.

## Adopting this

It is additive and opt-in. Link `design.css`, load `icons.js`, and replace text
labels or emoji with `ICONS.icon(...)` where an icon reads better. Nothing changes in
an app that does not ask for it.
