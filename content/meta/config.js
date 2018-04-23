const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "左蓝 - 我将开口", // <title>
  shortSiteTitle: "左蓝的博客", // <title> ending for posts and pages
  siteDescription: "左蓝的个人博客，记录个人日常的生活以及学习经验。",
  siteUrl: "https://zuolan.me",
  pathPrefix: "",
  siteImage: "favicon.png",
  siteLanguage: "zh_CN",
  // author
  authorName: "左蓝",
  authorEmail: "i@zuolan.me",
  authorTwitterAccount: "izuolan", // SEO and share
  // info
  infoTitle: "左蓝",
  infoTitleNote: "我将开口",
  noteUrl: "https://note.zuolan.me", // Your notebook url
  resumeUrl: "", // Your resume url
  booksUrl: "/books", // Your bookshelf url
  // manifest.json
  manifestName: "左蓝的博客",
  manifestShortName: "Zuolan", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: "#FFFFFF",
  manifestThemeColor: "#FFFFFF",
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "Github", url: "https://github.com/izuolan" },
    { name: "Gitlab", url: "https://gitlab.com/zuolan" },
    { name: "Telegram", url: "http://t.me/zuolan" },    
    { name: "Twitter", url: "https://twitter.com/izuolan" },
    { name: "RSS", url: "/rss.xml" }
  ]
};
