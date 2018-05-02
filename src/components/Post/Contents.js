import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from "react-jss";

import Zoom from 'material-ui/transitions/Zoom';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import TocIcon from 'material-ui-icons/Toc';

import lang from "../../../content/meta/lang";

const styles = theme => ({
  tocButton: {
    zIndex: 1,
    position: 'fixed',
    bottom: '1em',
    right: '1em',
    [`@media (max-width: ${theme.mediaQueryTresholds.L}px)`]: {
      bottom: '3em',
      right: '1em',
    }
  },
  tocHeader: {
    margin: '1em',
    justifyContent: "center",
    alignItems: "center",
    color: "gray"
  },
  tocList: {
    maxWidth: "20em",
    "& ul": {
      paddingLeft: "1em",
      listStyle: "none",
      margin: '.4em',
      position: "relative",
    },
    "& li": {
      // paddingLeft: ".8em",
      // borderLeft: "1px dashed #ddd",
      margin: '.4em',
    },
    "& p": {
      margin: 2,
      color: theme.base.colors.text,
      "&:hover": {
        color: theme.base.colors.linkHover,
      },
      [`@media (max-width: ${theme.mediaQueryTresholds.L}px)`]: {
        margin: 5,
      }
    },
    "& a": {
      margin: 2,
      color: theme.base.colors.text,
      "&:hover": {
        color: theme.base.colors.linkHover,
      },
      // "&::before": {
      //   position: "relative",
      //   top: 0,
      //   left: "-8px",
      //   display: "inline-block",
      //   width: "10px",
      //   height: "10px",
      //   content: `""`,
      //   borderRadius: "50%",
      //   backgroundColor: "#1296db",
      // },
      [`@media (max-width: ${theme.mediaQueryTresholds.L}px)`]: {
        margin: 5,
      }
    },
  },
});

class Contents extends React.Component {
  state = {
    toc: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      toc: open,
    });
  };

  render() {
    const { classes, post } = this.props;
    const title = ((post || {}).frontmatter || {}).title;

    return (
      <div>
        <Zoom in="true" unmountOnExit
          style={{
            transitionDelay: 1000,
          }}
        >
          <Button variant="fab" mini color="primary"
            aria-label="Table of contents"
            onClick={this.toggleDrawer(true)}
            className={classes.tocButton}
          >
            <TocIcon />
          </Button>
        </Zoom>
        <Drawer anchor="right" open={this.state.toc} onClose={this.toggleDrawer(false)}>
          <div className={classes.tocHeader}>
            {lang.tableOfContents}
          </div>
          <div
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
            dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
            className={classes.tocList}
          />
        </Drawer>
      </div>
    );
  }
}

Contents.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contents);