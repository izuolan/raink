import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from "react-jss";

import Zoom from 'material-ui/transitions/Zoom';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import TocIcon from 'material-ui-icons/Toc';

import lang from "../../../content/meta/lang";

const styles = theme => ({
  tocHeader: {
    margin: '1em',
    justifyContent: "center",
    alignItems: "center",
    color: "gray"
  },
  tocList: {
    // minWidth: "15em",
    "& ul": {
      paddingLeft: "1em",
      listStyle: "none",
      margin: '.4em',
    },
    "& li": {
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
      [`@media (max-width: ${theme.mediaQueryTresholds.L}px)`]: {
        margin: 5,
      }
    },
  },
  tocButton: {
    zIndex: 1,
    position: 'fixed',
    bottom: '1em',
    right: `calc(${theme.bars.sizes.actionsBar}px + 1em)`,
    [`@media (max-width: ${theme.mediaQueryTresholds.L}px)`]: {
      bottom: '3em',
      right: '1em',
    }
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