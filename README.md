# Raink - Personal blog starter for Gatsby.js

[Chinese README](README_CN.md)

## Preview and feature

* [Netlify Demo](https://raink.netlify.com)
* [My Blog (Deploy with Docker)](https://zuolan.me/)

<details><summary>Screenshots</summary>

Lighthouse score:

![Lighthouse](https://i.imgur.com/QeO8Gh8.jpg)

</details>

* [x] Markdown posts, pages and fragments
* [x] Themes switch (dark and light)
* [x] Contact form
* [x] Searching (by Algolia)
* [x] Progressive Web App (PWA)
* [x] Favicons generator
* [x] RSS, Sitemap, SEO
* [x] Social sharing
* [x] Google analytics
* [ ] Filtering by tag
* [ ] multi-language
* [ ] Disqus and FB comments
* [ ] Support PWA notification
* [ ] Resume page
* [ ] Dashboard

## Getting started

#### Enable external services (Required)

The starter uses external services for some functions: contact form, comments, searching, analytics. To use them you have to secure some access data. Don't worries, all services are free or have generous free tiers big enough for a personal blog.

The starter needs an `.env` file like this in the root folder:

```
GOOGLE_ANALYTICS_ID = ...
ALGOLIA_APP_ID = ...
ALGOLIA_SEARCH_ONLY_API_KEY = ...
ALGOLIA_ADMIN_API_KEY = ...
ALGOLIA_INDEX_NAME = ...
FB_APP_ID = ...
DISQUS = ...
```

The contact form does not need any settings it should work out of the box if you deploy the website to [Netlify](https://www.netlify.com/).

----

#### There are various ways to get started with Raink:

<details><summary>Deploying with Docker (Recommended)</summary>

NOTE: Your GatsbyJS site static files will be created into `~/raink/public` automatically.

Clone this repository:

```
$ git clone https://github.com/izuolan/raink.git ~/raink && cd $_
```

#### deploy (production)

This command will be build your site and generate app icons, then run a monitor to monitoring the `content` folder, automatically build and redeploy when file changes:

```shell
$ docker run -dit --restart=always --name raink \
    -v ~/raink:/site \
    -v ~/content:/site/content \
    zuolan/raink deploy

# Check the container build log
$ docker logs -f raink
```

Now, everything is ready, you can host the `~/raink/public` folder to any http service, such as Github Pages.

#### develop (development)

Use `develop` command to deploying your site, then open `SERVER_IP:8000`:

```shell
$ docker run -it --rm -p 8000:8000 \
    -v ~/raink:/site \
    -v ~/content:/site/content \
    zuolan/raink develop
```

#### build and serve

Use `build` command to building your site, then the static files will output the `public` folder:

```shell
$ docker run -it --rm \
    -v ~/raink:/site \
    -v ~/content:/site/content \
    zuolan/raink build
```

Use `serve` command to run a http serve:

```shell
$ docker run -dit --name raink-public \
    -p 8000:8000 \
    -v ~/raink:/site \
    -v ~/content:/site/content \
    zuolan/raink serve
```

#### other

For example to install a new NPM-module:

```
$ docker run -it --rm \
    -v ~/raink:/site \
    -v ~/content:/site/content \
    zuolan/raink yarn add gatsby-transformer-yaml
```

</details>

<details><summary>Deploying with Netlify (Serverless)</summary>

1. Fork this repository, and sign in [Netlify](https://www.netlify.com/).
2. [Create a new site](https://app.netlify.com/start) and select your forked repository.
3. Set `.ENV` in Netlify.

    <details><summary>How</summary>

    ![Set ENV in Netlify](https://i.imgur.com/WmcYkOZ.png)

    </details>

4. Keep all default **Basic build settings**, just click **Deploy site** button.

That's all.

</details>

<details><summary>Deploying from Source</summary>

```shell
$ git clone https://github.com/izuolan/raink.git && cd $_
$ npm install --global gatsby-cli
$ yarn install
$ yarn develop
```

</details>

## Thanks

**Note: This starter forked from an [educational project](https://forgatsby.greglobinski.com/gatsby-starter-personal-blog/). Some features will be merged into the original project in the future (My code seems terrible, lol).**