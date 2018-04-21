import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import { ReactComponent as ReactIcon } from "../../images/svg-icons/react.svg";
import { ReactComponent as GraphqlIcon } from "../../images/svg-icons/graphql.svg";
import { ReactComponent as DockerIcon } from "../../images/svg-icons/docker.svg";
import { ReactComponent as ReduxIcon } from "../../images/svg-icons/redux.svg";
import { ReactComponent as GatsbyIcon } from "../../images/svg-icons/gatsby.svg";
import { ReactComponent as WebpackIcon } from "../../images/svg-icons/webpack.svg";

import lang from "../../../content/meta/lang";

const styles = theme => ({
  stack: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      padding: "1em 2em"
    }
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  link: {
    display: "inline-block",
    padding: "8px",
    "&:hover": {
      "& svg": {
        fill: theme.info.colors.iconsHover
      }
    }
  },
  svg: {
    width: "22px",
    height: "22px",
    fill: theme.info.colors.icons,
    transition: "all .5s"
  },
  header: {
    textAlign: "center",
    fontSize: ".85em",
    letterSpacing: ".2em",
    width: "100%",
    margin: "0 0 .8em 0",
    fontWeight: 300,
    color: theme.info.colors.icons
  }
});

const StackIcons = props => {
  const { classes } = props;

  const items = [
    { name: "Gatsby", url: "https://www.gatsbyjs.org/", comp: GatsbyIcon },
    { name: "Graphql", url: "http://graphql.org/", comp: GraphqlIcon },
    { name: "React", url: "https://reactjs.org/", comp: ReactIcon },
    { name: "Redux", url: "https://redux.js.org/", comp: ReduxIcon },
    { name: "Webpack", url: "https://webpack.js.org/", comp: WebpackIcon },
    { name: "Docker", url: "https://docker.com/", comp: DockerIcon },    
  ];

  return (
    <div className={classes.stack}>
      <h5 className={classes.header}>{lang.build_with}</h5>
      <div className={classes.box}>
        {items.map(item => {
          const Icon = item.comp;
          return (
            <a
              href={item.url}
              key={item.name}
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
            >
              <Icon className={classes.svg} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

StackIcons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(StackIcons);