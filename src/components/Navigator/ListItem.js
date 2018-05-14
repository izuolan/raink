import React from "react";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import LazyLoad from "react-lazyload";

import lang from "../../../content/meta/lang";

const styles = theme => ({
  listItem: {
    margin: "0 0 .7em 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 0 1.5rem 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      ".moving-featured &, .is-aside &": {
        margin: "0 0 .4rem 0"
      }
    }
  },
  listLink: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    padding: ".7em 1em .7em 1em",
  },
  listItemPointer: {
    position: "relative",
    flexShrink: 0,
    overflow: "hidden",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    margin: "0",
    transition: "all .5s",
    "&:hover": {
      boxShadow: "2px 8px 20px -6px hsla(170, 50%, 45%, 1)",
    },
    "& img": {
      width: "100%",
      height: "100%"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      marginRight: ".5em",
      width: "80px",
      height: "80px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      marginRight: ".8em",
      width: "90px",
      height: "90px",
      transition: "all .3s",
      transitionTimingFunction: "ease",
      ".moving-featured &, .is-aside &": {
        width: "30px",
        height: "30px"
      }
    }
  },
  listItemText: {
    margin: "0 0 0 1.5em",
    color: theme.navigator.colors.postsListItemLink,
    transition: "all .3s",    
    "@media (hover: hover)": {
      "&:hover": {
        color: theme.navigator.colors.postsListItemLinkHover,
      }
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      ".moving-featured &, .is-aside &": {
        margin: "0 0 0 .5em",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }
    }
  },
  title: {
    lineHeight: 1.15,
    fontWeight: 600,
    letterSpacing: "-0.03em",
    margin: 0,
    fontSize: `${theme.navigator.sizes.postsListItemH1Font}em`,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.navigator.sizes.postsListItemH1Font *
        theme.navigator.sizes.fontIncraseForM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.navigator.sizes.postsListItemH1Font *
        theme.navigator.sizes.fontIncraseForL}em`,
      ".moving-featured &, .is-aside &": {
        fontSize: "1em",
        fontWeight: 400
      }
    }
  },
  subTitle: {
    lineHeight: 1.2,
    display: "block",
    fontSize: `${theme.navigator.sizes.postsListItemH2Font}em`,
    margin: ".3em 0 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.navigator.sizes.postsListItemH2Font *
        theme.navigator.sizes.fontIncraseForM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.navigator.sizes.postsListItemH2Font *
        theme.navigator.sizes.fontIncraseForL}em`,
      ".moving-featured &, .is-aside &": {
        display: "none"
      }
    }
  },
  active: {
    // color: theme.navigator.colors.postsListItemLinkHover
  },
});

class ListItem extends React.Component {
  state = {
    hidden: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.categoryFilter !== this.props.categoryFilter) {
      const category = this.props.post.node.frontmatter.category;
      const categoryFilter = this.props.categoryFilter;

      if (categoryFilter === lang.all_posts) {
        this.setState({ hidden: false });
      } else if (category !== categoryFilter) {
        this.setState({ hidden: true });
      } else if (category === categoryFilter) {
        this.setState({ hidden: false });
      }
    }
  }

  render() {
    const { classes, post, linkOnClick } = this.props;

    return (
      <li
        className={`${classes.listItem} ${post.node.frontmatter.category}`}
        style={{ display: `${this.state.hidden ? "none" : "block"}` }}
        key={post.node.fields.slug}
      >
        <div className={classes.listLink}>
          <Link
            activeClassName={classes.active}
            className={`${classes.listItemPointer} pointer`}
            to={post.node.fields.slug}
            onClick={linkOnClick}
          >
            <LazyLoad height={60} overflow={true} throttle={300} once={true} offset={100}>
            {post.node.frontmatter.cover && (
              <picture>
                  <source
                    type="image/webp"
                    srcSet={post.node.frontmatter.cover.children[0].resolutions.srcSetWebp}
                  />
                  <source srcSet={post.node.frontmatter.cover.children[0].resolutions.srcSet} />
                  <img
                    src={post.node.frontmatter.cover.children[0].resolutions.src}
                    alt={post.node.frontmatter.title}
                  />
                </picture>
            )}
            </LazyLoad>
            {/*<Img sizes={post.node.frontmatter.cover.children[0].sizes} />*/}
          </Link>
          <Link
            activeClassName={classes.active}
            className={classes.listItemText}
            to={post.node.fields.slug}
            onClick={linkOnClick}
          >
            <h1 className={classes.title}>{post.node.frontmatter.title}</h1>
            {post.node.frontmatter.subTitle && <h2 className={classes.subTitle}>{post.node.frontmatter.subTitle}</h2>}
          </Link>
        </div>
      </li>
    );
  }
}

ListItem.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  linkOnClick: PropTypes.func.isRequired,
  categoryFilter: PropTypes.string.isRequired
};

export default injectSheet(styles)(ListItem);
