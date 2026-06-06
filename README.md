# Jordan Benjamin — Personal Site

Academic personal site built with [Jekyll 4](https://jekyllrb.com/) and the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) remote theme. Originally forked from [AcademicPages](https://github.com/academicpages/academicpages.github.io).

## Local development

**Requirements:** Ruby 3.1+ (latest Ruby works fine) and Bundler.

```bash
# macOS: install Ruby if needed
brew install ruby
# then ensure Homebrew Ruby is on your PATH (brew prints instructions after install)

bundle install
bin/serve
```

Open [http://127.0.0.1:4000](http://127.0.0.1:4000). The server rebuilds automatically on file changes.

`bin/serve` loads `_config_dev.yml` so internal links stay on localhost (production `url` in `_config.yml` is unchanged for deploy).

**Local preview workflow:** save a file → wait for `...done in X seconds` → refresh the browser (Cmd+Shift+R). Do not refresh while a rebuild is running. If the site looks broken (missing CSS/photo), run `bin/build` then restart `bin/serve`. Restart `bin/serve` after any `_config.yml` change.

Other useful commands:

```bash
bundle exec jekyll build          # one-off build → _site/
bundle exec jekyll serve --livereload --drafts  # include draft posts
```

## Editing content

| What | Where |
|------|-------|
| Home page | `_pages/about.md` |
| Site settings, author info, nav | `_config.yml`, `_data/navigation.yml` |
| Blog posts | `_posts/` |
| Publications | `_publications/` |
| Talks | `_talks/` |
| Teaching | `_teaching/` |
| Software | `_software/` |
| CV | `_pages/cv.md` |

Restart the dev server after changing `_config.yml`.

## Deployment

The site is built and deployed via GitHub Actions (`.github/workflows/deploy.yml`), not GitHub's legacy Jekyll builder. This allows Jekyll 4 and the remote theme.

To publish:

1. Push to `main`
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. The deploy workflow runs automatically on each push to `main`

The repo can stay private if you have GitHub Pro (or equivalent) with Pages enabled.

## Tech stack

- Jekyll 4.4 + Minimal Mistakes (remote theme)
- GitHub Actions for build and deploy
- Sass via `jekyll-sass-converter` + `sassc`

## Related projects

Notes on other academic site templates and tools worth comparing:

- [Minimal Mistakes Theme](https://mmistakes.github.io/minimal-mistakes/) — Actively maintained Jekyll theme
- [AcademicPages](https://github.com/academicpages/academicpages.github.io) — Original template this was forked from
- [al-folio](https://github.com/alshedivat/al-folio) — Alternative academic portfolio template
- [astro](https://github.com/withastro/astro)
- [Hugo, HugoBlox](https://github.com/HugoBlox/hugo-theme-academic-cv), https://github.com/HugoBlox/kit
- https://github.com/sbryngelson/academic-website-template [and https://ethan-pickering.github.io/aboutwebsite.html]

---

A Github Pages template for academic websites. This was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License. See LICENSE.md.
