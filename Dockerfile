FROM alpine:edge AS build-entr

RUN apk add --update make gcc git && \
    git clone https://bitbucket.org/eradman/entr /tmp/entr && \
    cd /tmp/entr && \
    ./configure && \
    make test && \
    make install

FROM node:slim

RUN npm install --global gatsby-cli && \
    apt update && \
    apt install libpng-dev -y && \
    # Clean
    apt-get autoclean -y && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    mkdir -p /site

WORKDIR /site
VOLUME ["/site"]
EXPOSE 8000
COPY COPY --from=build-entr /usr/local/bin/entr /bin/entr
COPY scripts/*.sh /

ENTRYPOINT ["bash", "/entry.sh"]