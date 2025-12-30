# frozen_string_literal: true

$LOAD_PATH.push File.expand_path('lib', __dir__)

require "jekyll-treehouse/version"

Gem::Specification.new do |spec|
  spec.name        = "jekyll-treehouse"
  spec.summary     = "Treehouse GEM"
  spec.version     = Jekyll::Treehouse::VERSION
  spec.authors     = ["Bartlomiej Matlega"]
  spec.email       = "support@github.com"
  spec.homepage    = ""
  spec.licenses    = []

  spec.files = Dir['{lib}/**/*']

  spec.required_ruby_version = ">= 3.1.0"

  spec.add_dependency "jekyll", ">= 3.8", "< 5.0"

  spec.add_runtime_dependency 'nokogiri', '~> 1.12'

  spec.add_development_dependency "pry", '~> 0.15'
  spec.add_development_dependency "bundler", ">= 2.0"
  spec.add_development_dependency "rake", "~> 13.0"
  spec.add_development_dependency "rspec", "~> 3.12"
  spec.add_development_dependency "rubocop-jekyll", "~> 0.14"
end
