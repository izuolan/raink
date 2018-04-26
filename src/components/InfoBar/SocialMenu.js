import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { MenuItem, MenuList } from "material-ui/Menu";
import { ListItemIcon, ListItemText } from 'material-ui/List';

import MoreVertIcon from "material-ui-icons/MoreVert";
import IconButton from "material-ui/IconButton";

import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import Grow from "material-ui/transitions/Grow";
import Paper from "material-ui/Paper";
import classNames from "classnames";

import config from "../../../content/meta/config";
import lang from "../../../content/meta/lang";

import { ReactComponent as GithubIcon } from "../../images/svg-icons/github.svg";
import { ReactComponent as GitlabIcon } from "../../images/svg-icons/gitlab.svg";
import { ReactComponent as TelegramIcon } from "../../images/svg-icons/telegram.svg";
import { ReactComponent as TwitterIcon } from "../../images/svg-icons/twitter.svg";
import { ReactComponent as RssFeedIcon } from "../../images/svg-icons/rss.svg";

const styles = theme => ({
  topMenu: {
    float: "right",
    margin: "5px 10px 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  open: {
    color: theme.bars.colors.icon
  },
  popperClose: {
    pointerEvents: "none"
  },
  svg: {
    width: "20px",
    height: "20px",
    fill: theme.info.colors.text,
    transition: "all .5s"
  }
});

class SocialMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    if (!this.state.open) {
      return;
    }

    this.timeout = setTimeout(() => {
      this.setState({ open: false });
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open } = this.state;
    const items = config.authorSocialLinks;
    const icons = {
      Github: GithubIcon,
      Gitlab: GitlabIcon,
      Telegram: TelegramIcon,
      Twitter: TwitterIcon,
      RSS: RssFeedIcon
    };

    return (
      <nav className={classes.topMenu}>
        <Manager>
          <Target>
            <IconButton
              aria-label={lang.more}
              aria-owns={anchorEl ? "long-menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              className={classes.open}
            >
              <MoreVertIcon />
            </IconButton>
          </Target>
          <Popper
            placement="bottom-end"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="social-menu" style={{ transformOrigin: "top right" }}>
                <Paper>
                  <MenuList role="menu">
                    {items.map(item => {
                      const Icon = icons[item.name];
                      return (
                        <a href={item.url}
                          style={{ display: "block" }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MenuItem
                            onClick={e => {
                              this.props.pageLinkOnClick(e);
                              this.handleClose();
                            }}
                          >
                            <ListItemIcon>
                              <Icon className={classes.svg} />
                            </ListItemIcon>
                            <ListItemText inset primary={item.name} />
                          </MenuItem>
                        </a>                        
                      );
                    })}
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </nav>
    );
  }
}

SocialMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(SocialMenu);
