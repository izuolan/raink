import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import Content from "../components/Main/Content";

import config from "../../content/meta/config";
import lang from "../../content/meta/lang.js";

import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    // backgroundColor: theme.base.colors.background.color,
    height: "100%",    
  },
  info: {
    minWidth: 100,
    maxWidth: 400,    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Resume extends React.Component {
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
    const { classes } = this.props;

    return (
      <Main>
        <div className={classes.root}>
          <AppBar position="sticky" color="inherit">
            <Tabs
              value={this.state.value}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              fullWidth centered
            >
              <Tab label="个人信息" />
              <Tab label="工作经历" />
              <Tab label="项目经验" />
              <Tab label="社区贡献" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <TabContainer>
              <Card className={classes.info}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary">
                    <p>{lang.email_to_me}<Obfuscate email={config.authorEmail} /></p>
                  </Typography>
                  <Typography variant="headline" component="h2">
                    左蓝
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Docker & DevOps
                  </Typography>
                  <Typography component="p">
                    简单介绍。
                  </Typography>
                </CardContent>
              </Card>
            </TabContainer>
            <TabContainer>Item Two</TabContainer>
            <TabContainer>Item Three</TabContainer>
            <TabContainer>Item Four</TabContainer>
          </SwipeableViews>
        </div>
      </Main>
    );
  }
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Resume);
