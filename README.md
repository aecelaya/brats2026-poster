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

## Rendering

`poster.html` is sized to print at exactly A0 portrait (33.1in × 46.8in) via
CSS `@page` sizing, and `poster.pdf` was generated from it with headless
Chrome (Playwright) at that fixed page size.

## Links

- MIST & MISFIT: https://github.com/mist-medical

## License

Apache License 2.0 — see [LICENSE](LICENSE).
