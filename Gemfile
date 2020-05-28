source "https://rubygems.org"

gem "jekyll", "~> 4.0.0"
gem 'jekyll-toc', '~> 0.12.2'
gem 'jekyll-sitemap'
gem 'jekyll-seo-tag', path: 'plugins/jekyll-seo-tag'
gem 'jekyll-treehouse', path: 'plugins/jekyll-treehouse'

gem 'amp-jekyll'
gem 'sanitize', '~> 5.1.0'
gem "pry", '~> 0.12.2'

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
