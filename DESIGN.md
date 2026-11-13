# Design

<!-- Visual system of the résumé site. Product truth lives in PRODUCT.md; the surface contract in .impeccable/surfaces/home.md. -->

## World

A transit network diagram. White signage ground, near-black ink, and line colours used at full strength as
the only colour. No shadows, no gradients, no cards: regions are divided by 2px ink rules and line strokes.

## Colour

| Token | Value | Role |
|---|---|---|
| `--paper` | `#ffffff` | Ground |
| `--paper-2` | `#f3f3f0` | Alternate section (Experience) |
| `--ink` | `#141414` | Text, rules, interchanges, contact terminus |
| `--ink-2` / `--muted` | `#3d3d3d` / `#5a5a5a` | Body copy / secondary text (≥ 6.5:1 on paper) |
| `--rule` | `#d9d9d4` | Hairlines between projects |
| `--line-1` | `#0455a1` | SchedulingApi; also focus ring and primary hover |
| `--line-2` | `#007e5e` | WebhookRelay; availability dot |
| `--line-3` | `#d52b1e` | SchedulingDashboard |
| `--line-4` | `#ffd400` | EduPlatformJS (always cased in ink, ink text on it); text selection |
| `--line-5` | `#8e3289` | DesafioBackend |

A line colour is never decoration: it only marks its own project (roundel, route, stops, demo button).

## Type

Archivo, variable weight and width, one family for everything. Hierarchy by weight (600–800) and width:
display and section titles at 118–122% width, project names at 112%, body at 100%.
Tabular numerals everywhere. Display tracking −0.035em; body 1.0625rem / 1.55.

## Components

- **Roundel**: circle in the line colour with the line number (sm 1.6rem, md 2.25rem, lg 3.25rem).
- **Station**: white circle with a 3–3.5px border in the line colour; **interchange**: larger white circle with a 4px ink border.
- **Route list (`.stops`)**: a 6px line in the project colour with stations, one per feature.
- **Journey**: the same grammar in ink for the experience timeline.
- **Buttons**: 2px ink border, 6px radius; primary is ink; `.btn-line` takes the project colour.

## Motion

One authored moment: the map's lines draw in on load (1.4s, ease-out expo, 140ms stagger), only under
`prefers-reduced-motion: no-preference`. Focusing a line dims the rest to 12% (0.25s). Nothing else animates.

## Responsive

Hero is 5/12 copy + 7/12 map at ≥1024px, stacked below. On ≤640px the map keeps only interchange labels
(short variants). Projects collapse from three columns to two (≤900px) and one (≤480px).
