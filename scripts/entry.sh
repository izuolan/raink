#!/bin/sh
set -e

export GATSBY_DIR="/site"
# export PATH="$PATH:/usr/local/bin/gatsby"
# /usr/bin/gatsby

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
while [ -n "$1" ]; do
  case "$1" in
    develop)
        gatsby develop --host 0.0.0.0;;
    build)
        gatsby build
        generate-app-icons.sh
    ;;
    serve)
        gatsby build
        gatsby serve --port 8000
    ;;
    *)
        echo "develop, build or serve"
        exit 1;;
  esac
  shift
done