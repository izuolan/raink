# Raink - Personal blog starter for Gatsby

## Preview and feature

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

## Getting started

There are various ways to get started with **Raink**:

<details><summary>Deploying with Netlify</summary><br>
Fork this project, and deploy to [Netlify](https://www.netlify.com/).
<br>
<br>
</details>

<details><summary>Deploying with Docker</summary><br>
NOTE: Your GatsbyJS site will be created into `$(pwd)/site` automatically.

```
# develop
docker run -it --rm -v $(pwd)/site:/site -p 8000:8000 zuolan/gatsby develop

# build
docker run -it --rm -v $(pwd)/site:/site -p 8000:8000 zuolan/gatsby build

# serve
docker run -it --rm -v $(pwd)/site:/site -p 8000:8000 zuolan/gatsby serve

# other
docker run -it --rm -v $(pwd)/site:/site -p 8000:8000 zuolan/gatsby <YOUR COMMAND>
```

For example to install a new NPM-module:

```
docker run -it --rm -v $(pwd)/site:/site aripalo/gatsby-docker yarn add gatsby-transformer-yaml
```
<br>
<br>
</details>

<details><summary>Deploying from Source</summary><br>
Later
<br>
<br>
</details>

<details><summary>Enable external services</summary><br>
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
<br>
<br>
</details>

## Dashboard

Netlify CMS

## Thanks

**Note: This starter forked from an [educational project](https://forgatsby.greglobinski.com/gatsby-starter-personal-blog/). Some features will be merged into the original project in the future (My code seems terrible, lol).**