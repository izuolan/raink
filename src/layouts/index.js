import React from "react";
import injectSheet from "react-jss";
import { MuiThemeProvider } from "material-ui/styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import theme from "../styles/theme";
import lightTheme from "../styles/theme.light";
import darkTheme from "../styles/theme.dark";
import globals from "../styles/globals";

import { setFontSizeIncrease, setIsWideScreen, setThemeMode } from "../state/store";

import asyncComponent from "../components/common/AsyncComponent/";
import Loading from "../components/common/Loading/";
import Navigator from "../components/Navigator/";
import ActionsBar from "../components/ActionsBar/";
import InfoBar from "../components/InfoBar/";

import { isWideScreen, timeoutThrottlerHandler } from "../utils/helpers";

const InfoBox = asyncComponent(
  () =>
    import("../components/InfoBox/")
      .then(module => {
        return module;
      })
      .catch(error => {}),
  <Loading />
);

class Layout extends React.Component {
  timeouts = {};
  categories = [];

  componentDidMount() {
    this.props.setIsWideScreen(isWideScreen());
    if (typeof window !== "undefined") {
      window.addEventListener("resize", this.resizeThrottler, false);
    }
  }

  componentWillMount() {
    if (typeof localStorage !== "undefined") {
      const localFSize = +localStorage.getItem("font-size-increase");
      const storeFSize = this.props.fontSizeIncrease;

      const storeTheme = this.props.themeMode;
      const localTheme = localStorage.getItem("theme-mode");

      if (localFSize && localFSize !== storeFSize && localFSize >= 1 && localFSize <= 1.5) {
        this.props.setFontSizeIncrease(localFSize);
      }
      if (localTheme && localTheme !== storeTheme) {
        this.props.setThemeMode(localTheme);
      }
    }

    this.getCategories();
  }

  getCategories = () => {
    this.categories = this.props.data.posts.edges.reduce((list, edge, i) => {
      const category = edge.node.frontmatter.category;
      if (category && !~list.indexOf(category)) {
        return list.concat(edge.node.frontmatter.category);
      } else {
        return list;
      }
    }, []);
  };

  resizeThrottler = () => {
    return timeoutThrottlerHandler(this.timeouts, "resize", 500, this.resizeHandler);
  };

  resizeHandler = () => {
    this.props.setIsWideScreen(isWideScreen());
  };

  render() {
    const { children, data, themeMode } = this.props;
    const theme = themeMode == "light" ? lightTheme : darkTheme

    // TODO: dynamic management of tabindexes for keybord navigation
    return (
      <MuiThemeProvider theme={theme}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "hidden",
            background: theme.base.colors.background.color,
            backgroundImage: theme.base.colors.background.image
          }}
        >
          {children()}
          <Navigator posts={data.posts.edges} />
          <ActionsBar categories={this.categories} />
          <InfoBar pages={data.pages.edges} parts={data.parts.edges} />
          {this.props.isWideScreen && <InfoBox pages={data.pages.edges} parts={data.parts.edges} />}
        </div>
      </MuiThemeProvider>
    );
  }
}

Layout.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
  setIsWideScreen: PropTypes.func.isRequired,
  isWideScreen: PropTypes.bool.isRequired,
  fontSizeIncrease: PropTypes.number.isRequired,
  setFontSizeIncrease: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
  setThemeMode: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    pages: state.pages,
    isWideScreen: state.isWideScreen,
    fontSizeIncrease: state.fontSizeIncrease,
    themeMode: state.themeMode
  };
};

const mapDispatchToProps = {
  setIsWideScreen,
  setFontSizeIncrease,
  setThemeMode
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(globals)(Layout));

// eslint-disable-next-line no-undef
export const globalQuery = graphql`
  query LayoutQuery {
    posts: allMarkdownRemark(
      filter: { id: { regex: "//posts//" } }
      sort: { fields: [fields___prefix], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            subTitle
            category
            cover {
              children {
                ... on ImageSharp {
                  resolutions(width: 90, height: 90, cropFocus: CENTER) {
                    ...GatsbyImageSharpResolutions_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
    pages: allMarkdownRemark(
      filter: { id: { regex: "//pages//" }, fields: { prefix: { regex: "/^\\d+$/" } } }
      sort: { fields: [fields___prefix], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            menuTitle
          }
        }
      }
    }
    parts: allMarkdownRemark(filter: { id: { regex: "//parts//" } }) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
