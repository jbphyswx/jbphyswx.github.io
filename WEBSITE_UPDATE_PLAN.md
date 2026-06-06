# Website Modernization Plan (2026)

This site is currently a forked academic website template derived from the older `academicpages` / `minimal-mistakes` Jekyll stack. The repository is functional, but the build and theme versions are outdated for 2026.

## Current state

- Uses `github-pages` gem version 232
- Builds with Jekyll 3.10.0
- Uses a detached academicpages-like template rather than a modern remote theme
- Contains legacy config comments and an older README
- Has a local `Gemfile.lock` and `vendor/` bundle state that need cleanup
- Current source works locally after SSL fix

## What is outdated / not ideal

- Jekyll 3.10 is old in 2026; GitHub Pages now supports newer Jekyll versions
- `github-pages` v232 pins old plugin versions
- The site has legacy config and styling from the academicpages fork
- `README.md` contains outdated local development instructions
- `hawkins` and other legacy plugins may no longer be necessary

## Goals

1. Keep the content and structure that still works
2. Update the site to a modern 2026 Jekyll/GitHub Pages stack
3. Clean up dependencies and remove unused legacy cruft
4. Optionally move to a modern theme or simplified site structure
5. Add a reproducible local development flow and deployment plan

## Recommended path

### Option A — Update in place (recommended first pass)

1. Create an audit branch: `site-update/audit`
2. Commit the current working state and remove `vendor/` from tracked files if needed
3. Update `Gemfile` to a supported `github-pages` version or plain Jekyll 4+
4. Run `bundle update github-pages` or `bundle update` and verify the site still builds
5. Remove unused plugins and clean `_config.yml`
6. Keep the current content and use the existing theme layout if it still looks acceptable
7. Update `README.md` with current local development commands

### Option B — Migrate to a modern theme

If you want a fresher design and less custom legacy code:

1. Pick a modern GitHub Pages compatible theme such as `minimal-mistakes` (current version) or a newer Jekyll theme
2. Switch to `remote_theme` or the theme gem in `Gemfile`
3. Migrate page metadata and templates into the new theme structure
4. Verify all pages and collections render correctly

Option B is a bigger project, but it usually yields a cleaner modern site.

## Practical 2026 modernization steps

### Step 1 — Preview and audit
- Run `bundle exec jekyll serve --livereload`
- Open `http://127.0.0.1:4000`
- Note which pages/layouts need visual polish
- Note any broken or unnecessary plugins

### Step 2 — Clean dependencies
- Ensure `Gemfile.lock` is committed
- Add `vendor/` to `.gitignore` and remove it from git tracking if present
- Remove unused gems from `Gemfile`
- Replace old plugin usage only if needed

### Step 3 — Update Jekyll stack
- Decide on either:
  - `github-pages` updated to latest supported version
  - or plain `gem 'jekyll'` with Jekyll 4 or 5
- Run `bundle update` and test locally
- Fix any config or theme compatibility issues

### Step 4 — Improve the site structure
- Clean `_config.yml`
- Remove obsolete commented-out theme options
- Simplify the page collection definitions if possible
- Replace old CSS or theme files if migrating to a new theme

### Step 5 — Add developer tooling
- Update `README.md` with:
  - `bundle install`
  - `bundle exec jekyll serve --livereload`
  - `bundle exec jekyll build`
- Consider adding GitHub Actions for preview or build checks

### Step 6 — Deploy and verify
- Push the update branch
- Confirm GitHub Pages builds successfully
- Review the live site

## What we do next

I recommend we do the following in order:

1. Create a branch and commit the current working version
2. Run a dependency audit and modernize `Gemfile` / `Gemfile.lock`
3. Decide whether to keep the current theme or migrate to a newer one
4. Clean the config and update `README`

## A concrete first task

- Run `bundle exec jekyll serve --livereload`
- Open the local site
- Confirm whether the current look is acceptable or whether you want a visual refresh

If you want, I can now execute the first two steps and produce a branch with the cleaned `Gemfile` and `README` updates.
