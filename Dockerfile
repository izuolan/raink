FROM node:slim

RUN npm install --global gatsby-cli && \
    apt-get update && \
    apt-get install entr libpng-dev -y && \
    # Clean
    apt-get autoclean -y && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
    mkdir -p /site

WORKDIR /site
VOLUME ["/site", "/content"]
EXPOSE 8000
COPY scripts/*.sh /

ENTRYPOINT ["bash", "/entry.sh"]