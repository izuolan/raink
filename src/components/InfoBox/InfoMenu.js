import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Link from "gatsby-link";
import Button from 'material-ui/Button';

import LibraryBooksIcon from "material-ui-icons/LibraryBooks";
import BookIcon from "material-ui-icons/Book";
import HomeIcon from "material-ui-icons/Home";
import HelpIcon from "material-ui-icons/Help";
import LabelIcon from "material-ui-icons/Label";
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
  button: {
    margin: ".2em",
    color: theme.info.colors.text,
  },
  buttonLeft: {
    marginRight: "9px",
  },
  buttonRight: {
    marginLeft: "9px",
  },
  buttonIcons: {
    paddingRight: 4,
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
      <div className={classes.button}>
        <Button href="/" className={classes.buttonLeft}>
          <HomeIcon className={classes.buttonIcons} />{lang.home}
        </Button>
        <Button href={config.resumeUrl} className={classes.buttonRight} disabled onClick={linkOnClick} data-shape="closed">
          <WorkIcon className={`${classes.buttonIcons} ${classes.disabled}`} />{lang.resume}
        </Button>
      </div>
      <div className={classes.button}>
        <Button href={config.noteUrl} className={classes.buttonLeft}>
          <LibraryBooksIcon className={classes.buttonIcons} />{lang.note}
        </Button>
        <Button href={config.booksUrl} className={classes.buttonRight} onClick={linkOnClick} data-shape="closed">
          <BookIcon className={classes.buttonIcons} />{lang.books}
        </Button>
      </div>
      <div className={classes.button}>
        <Button href="/about" className={classes.buttonLeft} onClick={linkOnClick} data-shape="closed">
          <AccountBoxIcon className={classes.buttonIcons} />{lang.about}
        </Button>
        <Button href="/friends" className={classes.buttonRight} onClick={linkOnClick} data-shape="closed">
          <SupervisorAccountIcon className={classes.buttonIcons} />{lang.friends}
        </Button>
      </div>
      <Button href="/contact" className={classes.button} onClick={linkOnClick} data-shape="closed">
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
