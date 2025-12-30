source "https://rubygems.org"
ruby "3.3.6"

# Jekyll core
gem "jekyll", "~> 4.4"

# Required for Ruby 3.3+ (removed from stdlib)
gem "logger"
gem "csv"
gem "base64"
gem "bigdecimal"

# Fix for listen gem issue with Ruby 3.3
gem "listen", "3.8.0"

# Plugins
gem "jekyll-toc", "~> 0.19"
gem "jekyll-sitemap", "~> 1.4"
gem "jekyll-seo-tag", path: "plugins/jekyll-seo-tag"
gem "jekyll-treehouse", path: "plugins/jekyll-treehouse"

# AMP support
gem "amp-jekyll", "~> 1.0"
gem "sanitize", "~> 6.1"

# Development
gem "pry", "~> 0.15", group: :development

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.17"
end

# Windows support
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.2", platforms: [:mingw, :x64_mingw, :mswin]
