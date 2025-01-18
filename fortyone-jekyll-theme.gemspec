# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "fortyone-jekyll-theme"
  spec.version       = "1.2.5"
  spec.authors       = ["Andrew Banchich","Agustí B.R"]
  spec.email         = ["hola@agusti.cat"]

  spec.summary       = %q{Jekyll theme of the "Forty" theme by HTML5 UP.}
  spec.homepage      = "https://gitlab.com/agustibr/fortyone-jekyll-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_development_dependency "jekyll", "~> 3.3"
  spec.add_development_dependency "jekyll-seo-tag", "~> 2.6.1"
  spec.add_development_dependency "bundler", "~> 1.12"
end
