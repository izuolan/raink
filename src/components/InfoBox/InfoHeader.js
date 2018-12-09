import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";
import IconButton from "material-ui/IconButton";

import ExpandMoreIcon from "material-ui-icons/ExpandMore";

// import avatar from "../../images/avatar.svg";
import config from "../../../content/meta/config";
import lang from "../../../content/meta/lang";

const styles = theme => ({
  header: {
    lineHeight: 1,
    position: "relative"
  },
  avatarLink: {
    willChange: "left, top",
    float: "left",
    display: "block",
    position: "relative",
    margin: "0 12px 0 0",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      margin: "0 20px 0 0"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      position: "absolute",
      top: "10px",
      left: "50%",
      marginLeft: "-30px",
      transition: "all .5s",
      transitionTimingFunction: "ease",
      ".navigator-in-transition-from.navigator-is-opened &": {
        left: "50%"
      },
      ".is-aside.open &": {
        left: "8%",
        top: "0"
      }
    }
  },
  avatar: {
    width: "36px",
    height: "36px",
    transition: "all .3s",
    transitionTimingFunction: "ease",
    display: "inline-block",
    overflow: "hidden",
    "& img": {
      maxWidth: "100%"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "44px",
      height: "44px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: "60px",
      height: "60px"
    },
    "@media (hover: hover)": {
      "&:hover": {
        // filter: 'drop-shadow(3px 2px 4px hsla(170, 50%, 45%, 1))',
        "& svg": {
          fill: theme.info.colors.iconsHover
        }
      }
    }
  },
  title: {
    // willChange cause Chinese fonts to be blurred! Maybe is Chrome bug.
    // willChange: "transform, left, top",
    fontSize: `${theme.info.fonts.boxTitleSize}em`,
    margin: 0,
    float: "left",
    transitionTimingFunction: "ease",
    color: theme.info.colors.text,
    "&:hover": {
      color: theme.navigator.colors.postsListItemLinkHover,
    },
    "& small": {
      display: "block",
      fontSize: ".6em",
      marginTop: ".3em"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.info.fonts.boxTitleSizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.info.fonts.boxTitleSizeL}em`,
      position: "absolute",
      top: "85px",
      textAlign: "center",
      left: "50%",
      transform: "translate(-50%)",
      transition: "all .5s",
      ".is-aside.open &": {
        left: "50%",
        top: `${1.9 - theme.info.fonts.boxTitleSizeL}em`,
        textAlign: "left"
      }
    }
  },
  expand: {
    position: "absolute",
    top: "30px",
    right: "-25px",
    display: "none",
    color: theme.info.colors.text,
    ".is-aside.open &": {
      display: "block"
    }
  }
});

const InfoHeader = props => {
  const { classes, avatarOnClick, expandOnClick } = props;

  return (
    <header className={classes.header}>
      <Link className={classes.avatarLink} onClick={avatarOnClick} to="/">
        <div className={classes.avatar}>
          {/* <img src={avatar} alt="" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="40pt" height="40pt" viewBox="0 0 105 105">
            <g transform="translate(0.000000,105) scale(0.080000,-0.080000)">
              <path d="M762 1203 c-6 -15 -13 -46 -17 -68 -4 -22 -13 -49 -20 -61 -15 -23 -122 -69 -257 -109 -49 -14 -88 -28 -88 -29 0 -2 33 -20 73 -40 49 -24 87 -36 115 -36 28 0 42 -4 42 -13 0 -34 -295 -517 -390 -639 -40 -52 -4 -28 86 56 49 46 105 109 124 141 19 31 64 98 100 148 77 108 125 186 173 283 20 39 46 78 59 86 13 8 69 34 126 58 107 45 118 57 110 111 -3 21 -10 25 -78 34 l-75 10 -5 45 c-5 42 -7 45 -36 48 -26 3 -33 -1 -42 -25z"/>
              <path d="M754 616 c-40 -19 -88 -39 -108 -46 -43 -14 -45 -30 -7 -72 25 -28 33 -31 80 -30 39 1 54 -3 58 -15 7 -18 -30 -140 -58 -192 -36 -67 6 -93 135 -84 l86 6 0 -26 c0 -14 -4 -37 -10 -51 -5 -14 -8 -26 -6 -26 7 0 110 68 129 85 11 10 17 30 17 60 0 62 -22 70 -150 57 -52 -5 -98 -6 -103 -2 -4 3 3 31 16 61 13 30 32 78 42 108 10 30 28 70 41 89 26 38 30 63 14 93 -17 31 -91 25 -176 -15z"/>
            </g>
          </svg>
        </div>
      </Link>
      <Link onClick={avatarOnClick} to="/">
        <h1 className={classes.title}>
          {config.infoTitle.replace(/ /g, "\u00a0")}
          <small>{config.infoTitleNote}</small>
        </h1>
      </Link>
      <IconButton
        aria-label={lang.expand_the_box}
        className={classes.expand}
        onClick={expandOnClick}
        title={lang.expand_the_box}
      >
        <ExpandMoreIcon />
      </IconButton>
    </header>
  );
};

InfoHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  avatarOnClick: PropTypes.func.isRequired,
  expandOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(InfoHeader);
