const lang = require("./lang");

module.exports = {
  description: "This page records the books I have read every month.",
  lists: [
    {
      time: lang.reading,
      summary: "Summary text",
      books: [
        {
          title: "Book one",
          cover: "https://img3.doubanio.com/lpic/s28268070.jpg",
          url: "https://github.com/izuolan"
        },
        {
          title: "Book two",
          cover: "https://img3.doubanio.com/lpic/s28268070.jpg",
          url: "https://github.com/izuolan"
        },
        {
          title: "Book three",
          cover: "https://img3.doubanio.com/lpic/s28268070.jpg",
          url: "https://github.com/izuolan"
        },
      ]
    },
  ]
};
