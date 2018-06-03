import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";
import Helmet from "react-helmet";

import Main from "../components/Main";
import Content from "../components/Main/Content";
import Article from "../components/Main/Article";
import config from "../../content/meta/config";
import lang from "../../content/meta/lang.js";
import books from "../../content/meta/books.js";

import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import ButtonBase from 'material-ui/ButtonBase';
import Tooltip from 'material-ui/Tooltip';

const styles = theme => ({
  root: {
    flexGrow: 1,
    [`@media (max-width: ${theme.mediaQueryTresholds.L}px)`]: {
      paddingTop: `${theme.bars.sizes.infoBar}px`,
      paddingBottom: `${theme.bars.sizes.actionsBar}px`
    },
  },
  panel: {
    backgroundColor: theme.base.colors.panel,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  image: {
    position: 'relative',
    height: 200,
    width: 140,
    boxShadow: "2px 8px 20px -6px hsla(170, 50%, 45%, 1)",
    // [theme.breakpoints.down('xs')]: {
    //   width: '100% !important', // Overrides inline-style
    //   height: 100,
    // },
    '&:hover': {
      zIndex: 0,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.6,
    },
    '&:hover $imageButton': {
      display: 'flex',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.05,
    transition: theme.transitions.create('opacity'),
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  }
});

class Books extends React.Component {
  state = {
    expanded: lang.reading,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const lists = books.lists;
    const { expanded } = this.state;

    return (
      <Main>
        <div className={classes.root}>
          {lists.map(month => {
            const books = month.books;
            return (
              <ExpansionPanel onChange={this.handleChange(month.time)} expanded={expanded === month.time}
                className={classes.panel}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>{month.time}</Typography>
                  <Typography className={classes.secondaryHeading}>{month.summary}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container xs={12}>
                    {books.map(book => {
                      return (
                        <Grid item>
                          <ButtonBase focusRipple
                            href={book.url}
                            rel="noopener noreferrer"
                            target="_blank"
                            key={book.title}
                            className={classes.image}
                          >
                            { book.coverUrl &&
                              <span className={classes.imageSrc}
                                style={{
                                  backgroundImage: `url(${book.coverUrl})`
                                }}
                              />
                            }
                            <span className={classes.imageSrc}
                              style={{
                                backgroundImage: `url(https://img1.doubanio.com/mpic/${book.doubanID}.jpg)`
                              }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                              {book.title}
                            </span>
                          </ButtonBase>
                        </Grid>
                      );
                    })}
                  </Grid> 
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}
        </div>
        <Helmet
          htmlAttributes={{
            lang: config.siteLanguage,
            prefix: "og: http://ogp.me/ns#"
          }}
        >
          {/* General tags */}
          <title>{lang.books} - {config.shortSiteTitle}</title>
          <meta name="description" content={books.description} />
          {/* OpenGraph tags */}
          <meta property="og:url" content="/books" />
          <meta property="og:title" content={lang.books} />
          <meta property="og:description" content={books.description} />
          <meta property="og:image" content={books.cover} />
          <meta property="og:type" content="website" />
          {/* Twitter Card tags */}
          <meta name="twitter:card" content={books.description} />
          <meta
            name="twitter:creator"
            content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
          />
        </Helmet>
      </Main>
    );
  }
}

Books.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Books);