import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { MenuItem, MenuList } from "material-ui/Menu";
import IconButton from "material-ui/IconButton";
import { Manager, Target, Popper } from "react-popper";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import Grow from "material-ui/transitions/Grow";
import Paper from "material-ui/Paper";
import classNames from "classnames";
import FilterListIcon from "material-ui-icons/FilterList";

import lang from "../../../content/meta/lang";

const styles = theme => ({
  fontSizeSetter: {
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {}
  },
  open: {
    color: theme.bars.colors.icon
  },
  popperClose: {
    pointerEvents: "none"
  },
  popper: {
    zIndex: 1
  }
});

class CategoryFilter extends React.Component {
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

  handleFiltering = e => {
    const category = e.target.innerText.trim();
    this.props.filterCategory(category);
    this.handleClose();
  };

  render() {
    const { classes, categories } = this.props;
    const { anchorEl, open } = this.state;

    return (
      <nav className={classes.fontSizeSetter}>
        <Manager>
          <Target>
            <IconButton
              aria-label={lang.filter}
              aria-owns={anchorEl ? "long-menu" : null}
              aria-haspopup="true"
              onClick={this.handleClick}
              title={lang.filter}
              className={classes.open}
            >
              <FilterListIcon />
            </IconButton>
          </Target>
          <Popper
            placement="bottom-end"
            eventsEnabled={open}
            className={`${classNames({ [classes.popperClose]: !open })} ${classes.popper}`}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow in={open} id="cat-menu-list" style={{ transformOrigin: "0 0 0" }}>
                <Paper>
                  <MenuList role="menu">
                    <MenuItem key="all" onClick={this.handleFiltering}>
                      {lang.all_posts}
                    </MenuItem>
                    {categories.map(category => (
                      <MenuItem key={category} onClick={this.handleFiltering}>
                        {category}
                      </MenuItem>
                    ))}
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

CategoryFilter.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  filterCategory: PropTypes.func.isRequired
};

export default injectSheet(styles)(CategoryFilter);
