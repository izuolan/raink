import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import FacebookProvider, { Comments } from "react-facebook";
import { CommentCount, DiscussionEmbed } from "disqus-react";

import Zoom from 'material-ui/transitions/Zoom';
import Button from 'material-ui/Button';
import CommentIcon from 'material-ui-icons/Comment';

require("core-js/fn/array/find");

import config from "../../../content/meta/config";

const styles = theme => ({
  postComments: {
    margin: "3em 0 0",
    padding: "3em 0 0",
    borderTop: `1px solid ${theme.base.colors.lines}`
  },
  comments: {
    zIndex: 1,
    position: 'fixed',
    bottom: '5em',
    right: '1.5em',
    [`@media (max-width: ${theme.mediaQueryTresholds.L}px)`]: {
      bottom: '4.55em',
      right: '5em',
    }
  }
});

class PostComments extends React.Component {

  render() {
    const { classes, post, slug, disqus, facebook } = this.props;
    const { excerpt, frontmatter } = post;
    const { title } = frontmatter;
    const url = config.siteUrl + config.pathPrefix + slug;
    const disqusConfig = {
      url: url,
      identifier: slug,
      title: title,
    };

    return (
      <div id="post-comments" className={classes.postComments}>
        <Zoom in="true" unmountOnExit
          style={{
            transitionDelay: 1300,
          }}
        >
          <a href="#post-comments" aria-label="Comments link" className={classes.comments}>
            <Button variant="fab" mini color="secondary"
              aria-label="Go to comments"
            >
              <CommentIcon />
            </Button>
          </a>
        </Zoom>
        
        {disqus &&
          <CommentCount shortname={disqus.shortname} config={disqusConfig} /> &&
          <DiscussionEmbed shortname={disqus.shortname} config={disqusConfig} />
        }

        {facebook.appId && <FacebookProvider appId={facebook}>
          <Comments
            href={`${config.siteUrl}${slug}`}
            width="100%"
            colorscheme={props.theme.main.colors.fbCommentsColorscheme}
          />
        </FacebookProvider>}
      </div>
    );
  };
}

PostComments.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  disqus: PropTypes.object.isRequired,
  facebook: PropTypes.object.isRequired
};

export default injectSheet(styles)(PostComments);
