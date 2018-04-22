FROM node:alpine

RUN npm install --global gatsby-cli && \
    apk update && \
    apk add --no-cache git python && \
    apk add --no-cache --update \
        --repository http://dl-3.alpinelinux.org/alpine/edge/testing \
        gcc g++ make \
        vips-tools vips-dev \
        fftw-dev libc6-compat && \
    rm -rf /var/cache/apk/* && \
    mkdir -p /site

WORKDIR /site
VOLUME ["/site"]
EXPOSE 8000
COPY scripts/*.sh /

ENTRYPOINT ["sh", "/entry.sh"]