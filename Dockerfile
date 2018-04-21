# https://github.com/aripalo/gatsby-docker
FROM node:alpine

RUN apk update && \
    apk add --update --repository http://dl-3.alpinelinux.org/alpine/edge/testing vips-tools vips-dev fftw-dev gcc g++ make libc6-compat && \
    apk add --no-cache git python && \
    rm -rf /var/cache/apk/* && mkdir -p /site && \
    npm install --global gatsby-cli

# npm install --global gatsby --no-optional gatsby@1.9
WORKDIR /site
VOLUME /site
EXPOSE 8000
COPY scripts/*.sh /

ENTRYPOINT ["sh", "/entry.sh"]