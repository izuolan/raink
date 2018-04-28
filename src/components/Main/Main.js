import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import SpringScrollbars from "../SpringScrollbars";

const styles = theme => ({
  main: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    background: theme.main.colors.background,
    animationName: "main-entry",
    animationDuration: ".5s",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: `calc(100vw - ${theme.info.sizes.width}px - ${theme.bars.sizes.actionsBar}px)`,
      left: `calc(${theme.info.sizes.width}px + ${theme.bars.sizes.actionsBar}px)`
    }
  },
  "@keyframes main-entry": {
    "0%": {
      opacity: 0,
      transform: "translateY(20px)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  }
});

const Main = props => {
  const { classes, children } = props;

  return (
    <main className={classes.main}>
      <SpringScrollbars>{children}</SpringScrollbars>
    </main>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired
};

export default injectSheet(styles)(Main);
