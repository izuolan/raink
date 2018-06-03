const lang = require("./lang");

module.exports = {
  description: "This page records the books I have read every month.",
  lists: [
    {
      time: lang.reading,
      summary: "Summary text",
      books: [
        {
          title: "三体",
          doubanID: "s2768378",
          url: "https://book.douban.com/subject/2567698/"
        },
        {
          title: "三体Ⅱ:黑暗森林",
          doubanID: "s3078482",
          url: "https://book.douban.com/subject/3066477/"
        },
        {
          title: "三体Ⅲ:死神永生",
          doubanID: "s26012674",
          url: "https://book.douban.com/subject/5363767/"
        },
        {
          title: "优秀的绵羊",
          coverUrl: "https://img1.doubanio.com/lpic/s28522258.jpg",
          url: "https://book.douban.com/subject/26747208/"
        },
      ]
    },
  ]
};
