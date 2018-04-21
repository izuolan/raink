import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import Content from "../Main/Content";

import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  container: {
    height: "100%",
    // display: "none",
    ".is-aside.open &, .moving-featured.open &": {
      display: "block"
    }
    // TODO Mobile hide
  }
});

class Contents extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, post } = this.props;
    const html = (post || {}).html;

    return (
      <div>
        <AppBar position="sticky" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth centered
          >
            <Tab label="All Posts" />
            <Tab label="Contents" />
          </Tabs>
        </AppBar>
        <SwipeableViews 
          className={classes.container}
          containerStyle={{
            height: "100%",
          }}
          // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer className={classes.container}>
            <Content html={html} />
          </TabContainer>
          <TabContainer className={classes.container}>
            <div
              dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
              className="toc"
            />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  };
}

Contents.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

export default (injectSheet(styles)(Contents));