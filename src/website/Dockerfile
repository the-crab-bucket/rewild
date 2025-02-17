FROM ruby:latest

RUN gem install jekyll bundler

WORKDIR /srv/jekyll

ENV GEM_HOME="/usr/local/bundle"
ENV PATH="$GEM_HOME/bin:$PATH"

COPY jekyll/Gemfile* ./

RUN bundle install
