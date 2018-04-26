import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import avatar from "../../images/avatar.svg";

import lang from "../../../content/meta/lang";

const styles = theme => ({
  header: {
    margin: "0 0 3em"
  },
  title: {
    color: theme.main.colors.title,
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: theme.main.fonts.title.lineHeight,
    margin: "0 0 0.4em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeL}em`,
      letterSpacing: "-0.05em"
    }
  },
  subTitle: {
    color: theme.main.colors.subTitle,
    fontSize: `${theme.main.fonts.subTitle.size}em`,
    lineHeight: theme.main.fonts.subTitle.lineHeight,
    fontWeight: theme.main.fonts.subTitle.weight,
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.subTitle.sizeL}em`
    }
  },
  avatar: {
    marginLeft: ".4em",    
    width: "1.5em",
    height: "1.5em",
  },
  meta: {
    fontSize: `${theme.main.fonts.meta.size}em`,
    fontWeight: theme.main.fonts.meta.weight,
    color: theme.main.colors.meta
  },
  tags: {
    float: "right",
    margin: ".21em",
    [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
      display: "none"
    },
  },
  alert: {
    margin: "2em",
    alignItems: "center",
    textAlign: "center",
    justifyContent: 'center',
    flexWrap: 'wrap',
    [`@media (max-width: ${theme.mediaQueryTresholds.M}px)`]: {
      display: "none"
    },
  }
});

Date.prototype.format = function(fmt) {
  var o = {
      "M+" : this.getMonth()+1,
      "d+" : this.getDate(),
  };
  if(/(y+)/.test(fmt)) {
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt;
}

const PostHeader = props => {
  const { classes, title, subTitle, date, tags } = props;
  const ago = parseInt((new Date() - (new Date(date)))/86400000);

  function postDate(dateString) {
    const dateObj = new Date(dateString);
    const localDate = dateObj.format("yyyy-MM-dd");

    if (ago === 0) {
      return <p>{lang.published_today}（{localDate}）</p>;
    } else if (ago === 1) {
      return <p>{lang.published_yesterday}（{localDate}）</p>;
    } else if (ago === 2) {
      return <p>{lang.published_three_days}（{localDate}）</p>;
    } else {
      return <p>{lang.published_before}{ago}{lang.published_after}（{localDate}）</p>;
    }
  }

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes.subTitle}>{subTitle}</h2>
      <div className={classes.meta}>
        <Chip avatar={
          <Avatar
            alt="avatar"
            src={avatar} 
            className={classes.avatar}
          />}
          label={postDate(date)}
        />
        {tags.map(data => {
          return (
            <Chip
              label={data}
              className={classes.tags}
            />
          );
        })}
      </div>
      <div className={classes.alert}>
        {ago > 100 && <Chip label={lang.over_date} />}
      </div>
    </header>
  );
};

PostHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  date: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostHeader);
