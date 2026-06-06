source "https://rubygems.org"

# Required on Ruby 3.4+ where bigdecimal is no longer a default gem
gem "bigdecimal"

# Jekyll 4 with GitHub Pages support via remote theme
gem "jekyll", "~> 4.3"
gem "jekyll-remote-theme"
# Use older jekyll-sass-converter (v2.x) which uses pure Ruby Sass, not sass-embedded
gem "jekyll-sass-converter", "~> 2.2"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-include-cache"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate"
end

gem "wdm", "~> 0.1.0" if Gem.win_platform?
