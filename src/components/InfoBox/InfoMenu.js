import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import LibraryBooksIcon from "material-ui-icons/LibraryBooks";
import BookIcon from "material-ui-icons/Book";
import HomeIcon from "material-ui-icons/Home";
import HelpIcon from "material-ui-icons/Help";
import WorkIcon from "material-ui-icons/Work";
import AccountBoxIcon from "material-ui-icons/AccountBox";
import SupervisorAccountIcon from "material-ui-icons/SupervisorAccount";

import config from "../../../content/meta/config";
import lang from "../../../content/meta/lang";

const styles = theme => ({
  infoMenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    listStyle: "none",
    margin: 0,
    width: "100%"
  },
  link: {
    padding: ".5em",
    fontWeight: 300,
    fontTransform: "lowercase",
    color: theme.info.colors.menuLink,
    "&:hover": {
      color: theme.info.colors.menuLinkHover
    }
  },
  buttonLeft: {
    marginTop: ".4em",
    color: theme.info.colors.text,
  },
  buttonRight: {
    marginTop: ".4em",
    color: theme.info.colors.text,
  },
  buttonCenter: {
    margin: ".4em",
    justifyContent: "center",
    alignItems: "center",
    color: theme.info.colors.text,
  },
  buttonIcons: {
    paddingRight: "4px",
    color: theme.info.colors.text,
  },
  disabled: {
    color: theme.info.colors.icons,
  }
});

const InfoMenu = props => {
  const { classes, pages, linkOnClick } = props;

  return (
    <nav className={classes.infoMenu}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Button href="/" className={classes.buttonLeft}>
            <HomeIcon className={classes.buttonIcons} />{lang.home}
          </Button>
          <Button href={config.noteUrl} className={classes.buttonLeft}>
            <LibraryBooksIcon className={classes.buttonIcons} />{lang.note}
          </Button>
          <Button href="/about" className={classes.buttonLeft} onClick={linkOnClick} data-shape="closed">
            <AccountBoxIcon className={classes.buttonIcons} />{lang.about}
          </Button>
        </Grid>
        {/* TODO Resume page */}
        <Grid item xs={6}>
          <Button href={config.resumeUrl} disabled
            className={`${classes.buttonRight} ${classes.disabled}`}
            onClick={linkOnClick}
            data-shape="closed"
          >
            <WorkIcon className={`${classes.buttonIcons} ${classes.disabled}`} />{lang.resume}
          </Button>
          <Button href={config.booksUrl} className={classes.buttonRight} onClick={linkOnClick} data-shape="closed">
            <BookIcon className={classes.buttonIcons} />{lang.books}
          </Button>
          <Button href="/friends" className={classes.buttonRight} onClick={linkOnClick} data-shape="closed">
            <SupervisorAccountIcon className={classes.buttonIcons} />{lang.friends}
          </Button>
        </Grid>
      </Grid>
      <Button href="/contact" className={classes.buttonCenter} onClick={linkOnClick} data-shape="closed">
        <HelpIcon className={classes.buttonIcons} />{lang.contact}
      </Button>
      {/* <Link to="/contact/" onClick={linkOnClick} className={classes.link} data-shape="closed">
        {lang.contact}
      </Link>
      {pages.map((page, i) => {
        const { fields, frontmatter } = page.node;
        return (
          <Link
            key={fields.slug}
            to={fields.slug}
            onClick={linkOnClick}
            className={classes.link}
            data-shape="closed"
          >
            {frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title}
          </Link>
        );
      })} */}
    </nav>
  );
};

InfoMenu.propTypes = {
  pages: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  linkOnClick: PropTypes.func.isRequired
};

export default injectSheet(styles)(InfoMenu);
