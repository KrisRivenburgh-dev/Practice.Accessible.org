# Practice · Accessible.org

The hands-on accessibility practice ground from Accessible.org. Each lesson is three pages: a
normal-looking **practice** page with real barriers hidden inside it, a **breakdown** that explains
each barrier at the code level, and a **fixed** page that works. You find the problems yourself,
then check your work.

Built with [Astro](https://astro.build). Ships (almost) zero JavaScript and deploys to GitHub Pages
as plain static files.

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Keyboard Practice | `/keyboard-practice` |
| Keyboard Breakdown | `/keyboard-breakdown` |
| Keyboard Fixed | `/keyboard-fixed` |
| About | `/about` |
| Accessibility statement | `/accessibility` |
| Privacy policy | `/privacy` |
| Terms of use | `/terms` |

Legal/info pages are linked from the footer, not the main nav. The accessibility statement
deliberately documents that the "Testing" practice pages are intentionally non-conformant for
training; everything else targets WCAG 2.2 AA.

Icons are inline SVGs from [Lucide](https://lucide.dev) (ISC License), see `src/components/Icon.astro`.

## Develop

```bash
npm install      # first time only
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # preview the production build
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo (default branch `main`).
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically.

### URL / base path

`astro.config.mjs` is set up for a root deployment (custom domain or a `user.github.io` site):

```js
site: 'https://practice.accessible.org',
base: '/',
```

If instead you deploy to a **project page** at `https://<user>.github.io/<repo>/`, change `base`
to `'/<repo>/'` and update `site`. All internal links already respect `base`, so nothing else needs
to change.

> Using a custom domain like `practice.accessible.org`? Add a `public/CNAME` file containing the
> bare domain, and point the DNS record at GitHub Pages.

## Adding a lesson

Each lesson is two pages — `*-error.astro` and `*-fix.astro` — using the shared `Base` layout.
Copy the keyboard pair as a template, then add the lesson to the index list in `src/pages/index.astro`.
