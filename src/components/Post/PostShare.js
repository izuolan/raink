import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import QRCode from "qrcode-react";

import config from "../../../content/meta/config";
import lang from "../../../content/meta/lang";

import { ReactComponent as QQIcon } from "../../images/svg-icons/tencentqq.svg";
import { ReactComponent as WeiboIcon } from "../../images/svg-icons/sinaweibo.svg";
import { ReactComponent as GooglePlusIcon } from "../../images/svg-icons/googleplus.svg";
import { ReactComponent as FacebookIcon } from "../../images/svg-icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/svg-icons/twitter.svg";

const styles = theme => ({
  stack: {
    display: "none",
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "block",
      // position: "absolute",
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
    width: "29px",
    height: "29px",
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
    color: theme.base.colors.text
  },
  qrcode: {
    textAlign: "center"
  }
});

class PostShare extends React.Component {
  render() {
    const { post, classes, slug, theme } = this.props;
    const { excerpt, frontmatter } = post;
    const { title } = frontmatter;
    const url = config.siteUrl + config.pathPrefix + slug;

    const items = [
      { name: "QQ", comp: QQIcon, url: `http://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&source=${url}&desc=${excerpt}` },
      { name: "Weibo", comp: WeiboIcon, url: `http://service.weibo.com/share/share.php?url=${url}&title=《${title}》${excerpt}` },
      { name: "Facebook", comp: FacebookIcon, url: `https://www.facebook.com/sharer/sharer.php?u=${url}` },
      { name: "Twitter", comp: TwitterIcon, url: `https://twitter.com/intent/tweet?text=《${title}》${excerpt}&url=${url}&via=${config.authorTwitterAccount}` },
      { name: "GooglePlus", comp: GooglePlusIcon, url: `https://plus.google.com/share?url=${url}` },      
    ];

    return (
      <div className={classes.stack}>
        <h5 className={classes.header}>{lang.share_before}《{title}》{lang.share_after}</h5>
        <div className={classes.qrcode}>
          {/* https://github.com/cssivision/qrcode-react#available-props */}
          <QRCode value={url}
            // logo={avatar} logoWidth={100}
            bgColor={theme.base.colors.background.color}
            fgColor={theme.base.colors.text}
          />
        </div>
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
  }
}

PostShare.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};

export default injectSheet(styles)(PostShare);