A Github Pages template for academic websites. This was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License. See LICENSE.md.

I think I've got things running smoothly and fixed some major bugs, but feel free to file issues or make pull requests if you want to improve the generic template / theme.

# Setup

## Getting Started

This is a Jekyll site hosted on GitHub Pages using the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) remote theme.

### Configuration

1. Edit `_config.yml` to set your site title, author name, and other metadata
2. Update social links in the `author` section (email, twitter, github, etc.)
3. Add your content:
   - Blog posts in `_posts/`
   - Publication info in `_publications/`
   - Teaching materials in `_teaching/`
   - Talks in `_talks/`
   - Portfolio items in `_portfolio/`

## To run locally (not on GitHub Pages, to serve on your own computer)

1. Clone the repository: `git clone https://github.com/jbphyswx/jbphyswx.github.io.git`
1. Install Ruby 3.1.4 (or check `.ruby-version` for current version)
1. Run `bundle install` to install dependencies
1. Run `bundle exec jekyll serve --livereload` to start the dev server at `localhost:4000`
   - The site will automatically rebuild and refresh on changes
   - Press `Ctrl+C` to stop the server

## Tech Stack

- **Jekyll 4.4.1** - Static site generator
- **Minimal Mistakes** - Remote theme (no local theme assets needed)
- **GitHub Pages** - Automatic deployment on push
- **Ruby 3.1.4** - Via rbenv for reproducible environments
- **Sass** - CSS preprocessing (pure-Ruby for broad OS compatibility)


## Related Projects

- [Minimal Mistakes Theme](https://mmistakes.github.io/minimal-mistakes/) - Actively maintained Jekyll theme
- [AcademicPages](https://github.com/academicpages/academicpages.github.io) - Original template this was forked from
- [al-folio](https://github.com/alshedivat/al-folio) - Alternative academic portfolio template
