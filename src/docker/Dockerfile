FROM ruby:latest

RUN gem install jekyll bundler

WORKDIR /srv/jekyll

ENV GEM_HOME="/usr/local/bundle"
ENV PATH="$GEM_HOME/bin:$PATH"

COPY jekyll/Gemfile* ./

RUN bundle install

# EXPOSE 4000

# CMD ["jekyll", "serve", "--watch", "--force_polling", "--host", "0.0.0.0"]
