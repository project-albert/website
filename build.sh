# Installing Jekyll and bundle setup
gem install jekyll bundler
bundle config set deployement true
bundle instal --gemfile static/Gemfile

# Installing npm components
npm --prefix apps ci

# build
jekyll build --source static --destination dist
npm --prefix apps run build
