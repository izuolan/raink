import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import IconButton from "material-ui/IconButton";

import Link from "gatsby-link";
import { connect } from "react-redux";
import screenfull from "screenfull";

import HomeIcon from "material-ui-icons/Home";
import SearchIcon from "material-ui-icons/Search";
import LabelIcon from "material-ui-icons/Label";
import GTranslateIcon from "material-ui-icons/GTranslate";
// Category

import FullscreenIcon from "material-ui-icons/Fullscreen";
import FullscreenExitIcon from "material-ui-icons/FullscreenExit";

// Font
import TocIcon from "material-ui-icons/Toc";
import DarkThemeIcon from "material-ui-icons/Brightness4";
import LightThemeIcon from "material-ui-icons/Brightness5";
import ArrowUpwardIcon from "material-ui-icons/ArrowUpward";

import {
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop,
  setFontSizeIncrease,
  setThemeMode,
  setCategoryFilter
} from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";
import FontSetter from "./FontSetter";
import CategoryFilter from "./CategoryFilter";

import lang from "../../../content/meta/lang";

const styles = theme => ({
  actionsBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    // left: 0,
    // top: `calc(100vh - ${theme.bars.sizes.actionsBar}px)`,
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    padding: `0 ${theme.base.sizes.linesMargin}`,
    justifyContent: "space-between",
    height: `${theme.bars.sizes.actionsBar}px`,
    width: "100%",
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.base.sizes.linesMargin,
      right: theme.base.sizes.linesMargin,
      height: 0,
      top: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `0 calc(${theme.base.sizes.linesMargin} * 1.5)`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column",
      top: 0,
      left: 0,
      right: "auto",
      height: "100%",
      padding: `${theme.base.sizes.linesMargin} 0`,
      width: `${theme.bars.sizes.actionsBar}px`,
      "&::after": {
        content: `""`,
        position: "absolute",
        right: 0,
        top: theme.base.sizes.linesMargin,
        bottom: theme.base.sizes.linesMargin,
        width: "1px",
        borderRight: `1px solid ${theme.base.colors.lines}`
      }
    }
  },
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      flexDirection: "column"
    }
  },
  button: {
    color: theme.bars.colors.icon
  }
});

class ActionsBar extends React.Component {
  state = {
    fullscreen: false
  };

  componentDidMount() {
    if (screenfull.enabled) {
      screenfull.on("change", () => {
        this.setState({
          fullscreen: screenfull.isFullscreen
        });
      });
    }
  }

  homeOnClick = featureNavigator.bind(this);
  searchOnClick = moveNavigatorAside.bind(this);

  fullscreenOnClick = () => {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  };

  arrowUpOnClick = () => {
    this.props.setScrollToTop(true);
  };

  fontSetterOnClick = val => {
    this.props.setFontSizeIncrease(val);

    if (typeof localStorage !== "undefined") {
      localStorage.setItem("font-size-increase", val);
    }
  };

  themeSetterOnClick = () => {
    const storeTheme = this.props.themeMode;
    if (storeTheme == "light") {
      var newTheme = "dark";
    } else {
      newTheme = "light"
    }
    this.props.setThemeMode(newTheme);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("theme-mode", newTheme);
    }
  };

  categoryFilterOnClick = val => {
    this.props.setCategoryFilter(val);
  };

  render() {
    const { classes, navigatorPosition, navigatorShape, isWideScreen, categories, themeMode } = this.props;

    return (
      <div className={classes.actionsBar}>
        <div className={classes.group}>
          <IconButton
            aria-label={lang.back_to_home}
            onClick={this.homeOnClick}
            title={lang.back_to_home}
            className={classes.button}
          >
            <HomeIcon />
          </IconButton>
          {((isWideScreen && navigatorShape === "open") || navigatorPosition !== "is-aside") && (
            <CategoryFilter categories={categories} filterCategory={this.categoryFilterOnClick} />
          )}
          <IconButton
            aria-label={lang.search}
            onClick={this.searchOnClick}
            component={Link}
            data-shape="closed"
            to="/search/"
            title={lang.search}
            className={classes.button}
          >
            <SearchIcon className={classes.button} />
          </IconButton>
        </div>
        <div className={classes.group}>
          {navigatorPosition === "is-aside" && <FontSetter increaseFont={this.fontSetterOnClick} />}
          {screenfull.enabled && (
            <IconButton
              aria-label={lang.fullscreen}
              onClick={this.fullscreenOnClick}
              title={lang.fullscreen}
              className={classes.button}
            >
              {this.state.fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          )}
          <IconButton
            aria-label={lang.theme}
            onClick={this.themeSetterOnClick}
            title={lang.theme}
          >
            {themeMode == "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
          </IconButton>
          <IconButton
            aria-label={lang.scroll_to_top}
            onClick={this.arrowUpOnClick}
            title={lang.scroll_to_top}
          >
            <ArrowUpwardIcon className={classes.button} />
          </IconButton>
        </div>
      </div>
    );
  }
}

ActionsBar.propTypes = {
  classes: PropTypes.object.isRequired,
  navigatorPosition: PropTypes.string.isRequired,
  navigatorShape: PropTypes.string.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
  setScrollToTop: PropTypes.func.isRequired,
  setFontSizeIncrease: PropTypes.func.isRequired,
  setThemeMode: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  setCategoryFilter: PropTypes.func.isRequired,
  categoryFilter: PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape,
    isWideScreen: state.isWideScreen,
    themeMode: state.themeMode,    
    categoryFilter: state.categoryFilter
  };
};

const mapDispatchToProps = {
  setNavigatorPosition,
  setNavigatorShape,
  setScrollToTop,
  setFontSizeIncrease,
  setThemeMode,
  setCategoryFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(ActionsBar));
