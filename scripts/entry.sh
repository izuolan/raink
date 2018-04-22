#!/bin/bash
set -e
export GATSBY_DIR="/site"

# Initialize Gatsby or run NPM install if needed
if [ ! -f "$GATSBY_DIR/package.json" ]; then
  echo "package.json not found, check your docker command and volume."
  exit 1
elif [ ! -e "$GATSBY_DIR/node_modules/" ]; then
  echo "Node modules is empty. Running yarn install..."
  yarn install
fi

cd $GATSBY_DIR
yarn clean

# Decide what to do
if [ "$1" == "develop" ]; then
  gatsby develop --host 0.0.0.0
elif [ "$1" == "build" ]; then
  gatsby build
elif [ "$1" == "serve" ]; then
  gatsby serve --port 8000
elif [ "$1" == "deploy" ]; then
  gatsby build
  bash /generate-app-icons.sh
  while true; do
    find content/ | entr sh -c 'gatsby build'
  done
else
  exec $@
fi