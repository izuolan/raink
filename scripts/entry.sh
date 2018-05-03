#!/bin/bash
set -e
export GATSBY_DIR="/site"
Separator="============================================================="

# Initialize Gatsby or run NPM install if needed
if [ ! -f "$GATSBY_DIR/package.json" ]; then
  echo "Raink: package.json not found, check your docker command and volume."
  echo $Separator
  exit 1
elif [ ! -e "$GATSBY_DIR/node_modules/" ]; then
  echo "Raink: Node modules is empty. Running yarn install..."
  echo $Separator
  yarn install
fi

cd $GATSBY_DIR
yarn clean
echo "Raink: Initialized."
echo $Separator

# Decide what to do
if [ "$1" == "develop" ]; then
  gatsby develop --host 0.0.0.0
elif [ "$1" == "build" ]; then
  gatsby build
elif [ "$1" == "serve" ]; then
  gatsby serve --port 8000
elif [ "$1" == "deploy" ]; then
  echo "Raink: Generate app icons."
  echo $Separator
  bash /generate-app-icons.sh
  gatsby build
  rm -rf /public/* && cp -r public/* /public
  echo "Raink: Build success, now monitoring content folder."
  echo $Separator
  while true; do
    find content src | entr sh -c 'gatsby build && rm -rf /public/* && cp -r public/* /public'
  done
else
  exec $@
fi
