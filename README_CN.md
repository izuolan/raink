# Raink - Gatsby.js 个人博客主题

[English README](README.md)

## 预览与功能

* [Netlify 的演示站点](https://raink.netlify.com)
* [我的博客（使用 Docker 部署）](https://zuolan.me/)

<details><summary>截图</summary>

稍后补上

</details>

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
* [ ] 桌面级更新提醒
* [ ] 简历密码
* [ ] 博客后台

## 入门

#### 开启外部服务（必须）

主题的一些功能使用了外部服务，例如联系表单，评论，搜索，分析等等。要使用这些服务，你必须申请相应的 API/KEY。不要担心，所有服务都是免费的，或者有足够配额的免费套餐供个人博客使用。

首先在相应的网站上申请接口，然后在项目根目录新建一个`.env`文件，内容如下：

```
GOOGLE_ANALYTICS_ID = ...
ALGOLIA_APP_ID = ...
ALGOLIA_SEARCH_ONLY_API_KEY = ...
ALGOLIA_ADMIN_API_KEY = ...
ALGOLIA_INDEX_NAME = ...
FB_APP_ID = ...
DISQUS = ...
```

如果你将网站部署到 [Netlify](https://www.netlify.com/)，那么联系表单不需要任何设置即可使用，提交数据会发送到 Netlify 后台。

----

#### 下面有几种不同的方式部署 Raink:

<details><summary>使用 Docker 部署（推荐）</summary>

提醒：你的 Gatsby.js 网站静态文件将自动创建到 `~/raink/public` 中。

克隆这个仓库：

```
$ git clone https://github.com/izuolan/raink.git ~/raink && cd $_
```

#### deploy（生产级部署）

这个命令首先会生成一些 PWA 必须的图标，然后构建静态文件，构建结束后会进入监视状态，一旦 `content` 文件夹内容有变动便会触发再次构建：

```shell
$ docker run -dit --restart=always --name raink \
    -v ~/raink:/site \
    -v ~/content:/site/content \
    zuolan/raink deploy

# 查看构建日志
$ docker logs -f raink
```

现在一切准备就绪，你可以把 `~/raink/public` 目录放到任意一种 HTTP 服务中，例如 Github Pages。

#### develop（开发）

使用 `develop` 命令部署可以在修改主题文件时快速看到修改结果，打开 `SERVER_IP:8000` 即可看到页面:

```shell
$ docker run -it --rm -p 8000:8000 \
    -v ~/raink:/site \
    -v ~/content:/site/content \
    zuolan/raink develop
```

#### build 和 serve

使用 `build` 命令用于构建生产级的静态页面，构建后的内容会输出到 `public` 文件夹：

```shell
$ docker run -it --rm \
    -v ~/raink:/site \
    -v ~/content:/site/content \
    zuolan/raink build
```

使用 `serve` 命令运行一个 HTTP 服务:

```shell
$ docker run -dit --name raink-public \
    -p 8000:8000 \
    -v ~/raink:/site \
    -v ~/content:/site/content \
    zuolan/raink serve
```

#### other

安装一个新的 npm 包:

```
$ docker run -it --rm \
    -v ~/raink:/site \
    -v ~/content:/site/content \
    zuolan/raink yarn add gatsby-transformer-yaml
```

</details>

<details><summary>通过 Netlify 部署（不需要服务器）</summary>

1. Fork 这个仓库，注册登录 [Netlify](https://www.netlify.com/)。
2. 点击 [Create a new site](https://app.netlify.com/start) 然后选择你刚才 forked 的仓库。
3. 在 Netlify 构建页面设置 `.ENV` 变量，不懂就看下面那张图。

    <details><summary>如何配置环境变量</summary>

    ![Set ENV in Netlify](https://i.imgur.com/WmcYkOZ.png)

    </details>

4. 其他设置保持默认（**Basic build settings** 不需要改动），点击 **Deploy site** 即可开始部署。

稍等片刻就可以看到网站已经部署完成，你可以克隆你的 Forked 仓库，修改 `content` 文件夹里面的内容然后提交，Netlify 会自动触发构建。

</details>

<details><summary>从源代码构建部署</summary>

```shell
$ git clone https://github.com/izuolan/raink.git && cd $_
$ npm install --global gatsby-cli
$ yarn install
$ yarn develop
```

</details>
