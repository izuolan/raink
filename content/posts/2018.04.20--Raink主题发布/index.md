---
title: 博客主题 Raink 0.1 发布
subTitle: 一个基于 Gatsby.js 的 PWA 静态博客主题
category: "博客"
tags: ["博客", "主题", "Gatsby.js", "Raink"]
cover: cover.png
---

Raink 是一个 Gatsby.js 博客主题，界面使用 Material-UI@Next 库编写。采用的技术工具在博客左边底部可以看到。

## 主题特点

该有的都有了，或者已经在写。慢慢增加功能中....

* [x] 文章和页面使用 Markdown 编写
* [x] 主题切换（目前只有黑白两种）
* [x] 联系表单
* [x] 搜索（基于 Algolia）
* [x] 全站支持 PWA，可离线访问
* [x] Favicons 生成器
* [x] RSS, 站点地图, SEO
* [x] 社交分享
* [x] Google analytics
* [ ] 文章标签
* [ ] 多语言
* [ ] Disqus 和 Facebook 评论集成

## 如何使用

**Raink** 是一个标准的 Gatsby.js 模板，你可以使用下面任意一种方式部署。

<details><summary>使用 Netlify 部署（不需要服务器）</summary><br>
Development
<br>
<br>
</details>

<details><summary>使用 Docker 部署</summary><br>
Development
<br>
<br>
</details>

<details><summary>从源代码部署</summary><br>
Gatsby
<br>
<br>
</details>

<details><summary>启用扩展服务（搜索、谷歌分析、联系表单、评论等等）</summary><br>

这个模板的一些功能必须使用外部服务，例如联系表单，评论，搜索，谷歌分析等等。要使用这些功能，你必须申请一些接口（API）。不用担心，所有的服务都是免费的（个人博客使用的话）。

首先申请各个服务的 API，你可以从搜索引擎中找到它们的官网。

然后创建一个名为 `.env` 的文件，内容如下，把申请来的 API 填入其中，并保存到主题文件夹的根目录（和 package.json 一起）：

```yaml
GOOGLE_ANALYTICS_ID = ...
ALGOLIA_APP_ID = ...
ALGOLIA_SEARCH_ONLY_API_KEY = ...
ALGOLIA_ADMIN_API_KEY = ...
ALGOLIA_INDEX_NAME = ...
FB_APP_ID = ...
DISQUS = ...
```

如果你使用 [Netlify](https://www.netlify.com/) 来部署网站，那么联系表单不需要任何设置就能工作。

<br>
<br>
</details>

## 博客后台

Netlify CMS

**注意：本主题 fork 自一个[教程项目](https://forgatsby.greglobinski.com/gatsby-starter-personal-blog/)，一些特性正在合并回上游，至于个性化和中文化的一些特性就不打算合并回上游了。**
