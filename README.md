# Raink - Personal blog starter for Gatsby

## 1. Preview and feature

[Demo](https://zuolan.me/)

<details><summary>Screenshots</summary><br>
Later
<br>
<br>
</details>

* [x] Markdown posts, pages and fragments
* [x] Themes switch (dark and light)
* [x] Contact form
* [x] Searching (by Algolia)
* [x] PWA (Support notification)
* [x] Favicons generator
* [x] RSS, Sitemap, SEO
* [x] Social sharing
* [x] Google analytics
* [ ] Filtering by tag
* [ ] multi-language
* [ ] Disqus and FB comments

## 2. Getting started

There are various ways to get started with **Raink**:

<details><summary>Deploying from Source</summary>

```shell
$ git clone https://github.com/izuolan/raink.git && cd $_
$ npm install --global gatsby-cli
$ yarn install
$ yarn develop
```

</details>

<details><summary>Deploying with Netlify</summary>

Fork this project, and deploy to [Netlify](https://www.netlify.com/).

</details>

<details><summary>Deploying with Docker</summary>

NOTE: Your GatsbyJS site static files will be created into `~/raink/public` automatically.

Clone this repository:

```
$ git clone https://github.com/izuolan/raink.git ~/raink
```

#### develop

Use `develop` command to deploying your site, then open `SERVER_IP:8000`:

```shell
$ docker run -it --rm -p 8000:8000 -v ~/raink:/site zuolan/raink develop
```

#### build and serve

Use `build` command to building your site, then the static files will output the `public` folder:"

```shell
$ docker run -it --rm -v ~/raink:/site zuolan/raink build
```

Use `serve` command to run a http serve:

```shell
$ docker run -dit --name raink -p 8000:8000 -v ~/raink:/site zuolan/raink serve
```

#### deploy

This command will be build your site and generate app icons, and run a monitor to monitoring the `content` folder, automatically build and redeploy when file changes:

```shell
$ docker run -dit --name raink -v ~/raink:/site zuolan/raink deploy
```

#### other

For example to install a new NPM-module:

```
$ docker run -it --rm -v ~/raink:/site zuolan/raink yarn add gatsby-transformer-yaml
```

</details>

<details><summary>Enable external services</summary>

The starter uses external services for some functions: contact form, comments, searching, analytics. To use them you have to secure some access data. No worries, all services are free or have generous free tiers big enough for a personal blog.

The starter needs an `.env` file like this in the root folder

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

</details>

## Dashboard

Netlify CMS

## Thanks

**Note: This starter forked from an [educational project](https://forgatsby.greglobinski.com/gatsby-starter-personal-blog/). Some features will be merged into the original project in the future (My code seems terrible, lol).**