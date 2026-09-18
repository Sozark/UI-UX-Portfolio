# work.noahcjones.dev

A clean, corporate-friendly UX/product design portfolio for Noah C. Jones,
separate from the main creative portfolio at [noahcjones.dev](https://noahcjones.dev).

This site is scoped to UX/product/design-engineering hiring audiences:
four case studies (Tempo Trails, StayFinder AI, NJEM, Sidéral), an About
page, and a Contact page. No games/art/music sections — those live on the
main site, which is linked from the footer of every page here.

## Structure

```
work/
  index.html                     Home — hero, case study grid, approach, toolkit
  about.html                     Bio, quick facts, skills
  contact.html                   Contact info + résumé link
  case-study-tempo-trails.html
  case-study-stayfinder.html
  case-study-njem.html
  case-study-sideral.html
  css/style.css                  Shared design system (light/dark aware)
  js/main.js                     Mobile nav toggle
  CNAME                          work.noahcjones.dev
```

## Deploying via GitHub Pages

Branch-based Pages can only publish from the repo root or `/docs`, never an
arbitrary subdirectory, so this site deploys through GitHub Actions instead:
`.github/workflows/pages.yml` uploads only `work/` as the Pages artifact.

1. Repo Settings → Pages → **Source: GitHub Actions**. This is a one-time
   manual step; everything else is automated.
2. Merge to `main`. The workflow runs on any push touching `work/`, and can
   also be triggered by hand via *Run workflow*.
3. Because only `work/` is uploaded, `work/CNAME` lands at the published
   root and claims `work.noahcjones.dev`. `portfolio-final/` is never
   published, so its `jonesncharbonnet.com` CNAME is inert.

DNS is already in place: `*.noahcjones.dev` is a wildcard CNAME to
`sozark.github.io`, which covers this subdomain. An explicit `work` →
`sozark.github.io` record would be tidier but isn't required.

Case study images are self-hosted under `work/img/`, so the site does not
depend on the `Portfolio-Website` repo staying public.
