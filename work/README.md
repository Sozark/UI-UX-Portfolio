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

1. In repo settings → Pages, set the source to this branch with `/work` as
   the publish directory (or move `work/` contents to the repo root of a
   dedicated Pages branch if the host requires root-only publishing).
2. Add a `CNAME` record at your DNS provider: `work` → `<username>.github.io`.
3. GitHub Pages will pick up the `CNAME` file in this folder automatically
   once it's the published root.

Images are currently pulled from the `Portfolio-Website` repo's raw GitHub
URLs to avoid duplicating binary assets — swap in locally hosted copies
under `work/img/` if you'd rather not depend on that repo staying public.
