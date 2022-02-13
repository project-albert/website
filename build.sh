# Installing Jekyll and bundle setup
gem install jekyll bundler
bundle config set deployement true
bundle instal --gemfile static/Gemfile

# build
jekyll build --source static --destination dist
