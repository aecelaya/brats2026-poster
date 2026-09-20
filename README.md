# BraTS 2026 Poster — MISFIT & MIST

Conference poster for our BraTS 2026 challenge report, covering **MISFIT**, our
in-development framework for self-supervised pretraining of 3D medical-imaging
encoders via masked autoencoding (MAE), and **MIST**, our modular, end-to-end
framework for training, testing, and evaluating segmentation methods. The
poster reports a preliminary test of MISFIT pretraining across three BraTS
2026 segmentation tasks (brain metastases, pediatric tumors, and
cross-population generalizability).

**Authors:** Adrian Celaya, Yogesh Kumar, Awj Twam, Beatrice Riviere, David Fuentes, Tucker Netherton

**Affiliations:** The University of Texas MD Anderson Cancer Center · Rice University

## Contents

- `poster.html` — poster source, a single self-contained HTML/CSS document
- `poster.pdf` — print-ready export, portrait, 33.1 in × 46.8 in (A0)
- `images/` — logos and figures used in the poster
- `render.js` — Playwright script that renders `poster.html` to `poster.pdf`
- `package.json` — declares the `playwright` dependency used by `render.js`

## Rendering

`poster.html` is sized to print at exactly A0 portrait (33.1in × 46.8in) via
CSS `@page` sizing, and `poster.pdf` is generated from it with headless
Chrome (Playwright) at that fixed page size — not a browser's print dialog,
which would rescale it.

To regenerate `poster.pdf` from `poster.html`:

```bash
npm install
npx playwright install chromium   # first time only, downloads the browser
npm run render                    # writes poster.pdf
```

Or run the script directly:

```bash
node render.js                      # poster.html -> poster.pdf
node render.js poster.html out.pdf  # custom input/output paths
```

**If you edit `poster.html`,** double-check the result still fits on a single
page before committing — content that overflows the fixed page size gets
silently pushed onto a hidden second page by Chrome's print pagination
rather than clipped or flagged. Sanity-check with:

```bash
pdfinfo poster.pdf | grep Pages   # must read "Pages: 1"
```

If it ever reads more than 1, something overflowed the 46.8in height and
needs trimming (font sizes, image caps, spacing) before it will print
correctly at A0.

## Links

- MIST & MISFIT: https://github.com/mist-medical

## License

Apache License 2.0 — see [LICENSE](LICENSE).
