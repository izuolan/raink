import React from "react";
import PropTypes from "prop-types";

import Article from "../Main/Article";
import PostHeader from "./PostHeader";
import Content from "../Main/Content";
import PostFooter from "./PostFooter";
import Contents from "./Contents";

const Post = props => {
  const { post, author, slug, disqus, facebook } = props;
  const frontmatter = (post || {}).frontmatter;
  const title = ((post || {}).frontmatter || {}).title;
  const subTitle = ((post || {}).frontmatter || {}).subTitle;
  const tags = ((post || {}).frontmatter || {}).tags;
  const date = ((post || {}).fields || {}).prefix;
  const html = (post || {}).html;

  return (
    <Article>
      <PostHeader title={title} subTitle={subTitle} date={date} tags={tags}/>
      <Contents post={post} />
      <Content html={html} />
      <PostFooter author={author} post={post} slug={slug} disqus={disqus} facebook={facebook} />
    </Article>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  disqus: PropTypes.object.isRequired,
  facebook: PropTypes.object.isRequired
};

export default Post;