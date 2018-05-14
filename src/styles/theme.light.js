import { createMuiTheme } from "material-ui/styles";
import Color from "color";
import Background from "../images/texture.png";
const colors = require("./colors");
const theme = createMuiTheme({
  base: {
    colors: {
      background: {
        color: colors.light_bg,
        // image: `url(${Background})`,
        position: [0, 0],
        repeat: 'repeat'
      },
      text: colors.light_base_text,
      link: colors.light_accent,
      linkHover: Color(colors.light_accent)
        .lighten(0.1)
        .string(),
      accent: colors.light_accent,
      lines: colors.light_lines,
      panel: colors.light_panel
    },
    sizes: {
      linesMargin: "20px"
    },
    fonts: {},
  },
  bars: {
    colors: {
      background: {
        color: colors.light_bg,
        // image: `url(${Background})`,
        position: [0, 0],
        repeat: 'repeat'
      },
      title: colors.light_gray
    },
    sizes: {
      actionsBar: 60,
      infoBar: 60
    }
  },
  info: {
    colors: {
      text: colors.light_gray,
      background: {
        color: colors.light_bg,
        // image: `url(${Background})`,
        position: [0, 0],
        repeat: 'repeat'
      },
      icons: colors.light_lightGray,
      iconsHover: colors.light_accent,
      menuLink: colors.light_gray,
      menuLinkHover: colors.light_accent
    },
    sizes: {
      width: 320,
      headerHeight: 170
    },
    fonts: {
      boxTitleSize: 1.3,
      boxTitleSizeM: 1.5,
      boxTitleSizeL: 1.7
    }
  },
  navigator: {
    colors: {
      background: {
        color: colors.light_bg,
        // image: `url(${Background})`,
        position: [0, 0],
        repeat: 'repeat'
      },
      postsListItemLink: colors.light_gray,
      postsListItemLinkHover: colors.light_accent,
      postsHeader: colors.light_gray
    },
    sizes: {
      closedHeight: 80,
      postsListItemH1Font: 1.3,
      postsListItemH2Font: 1.1,
      fontIncraseForM: 1.15,
      fontIncraseForL: 1.3
    }
  },
  main: {
    colors: {
      background: {
        color: colors.light_bg,
        // image: `url(${Background})`,
        position: [0, 0],
        repeat: 'repeat'
      },
      title: colors.light_gray,
      subTitle: colors.light_gray,
      meta: colors.light_gray,
      content: colors.light_base_text,
      footer: colors.light_gray,
      contentHeading: colors.light_gray,
      blockquoteFrame: colors.light_lightGray,
      link: colors.light_accent,
      linkHover: colors.light_base_text,
      scroll: colors.light_scroll
    },
    sizes: {
      articleMaxWidth: "50em"
    },
    fonts: {
      title: {
        size: 1.9,
        sizeM: 2.5,
        sizeL: 2.7,
        weight: 600,
        lineHeight: 1.1
      },
      subTitle: {
        size: 1.5,
        sizeM: 1.8,
        sizeL: 1.95,
        weight: 300,
        lineHeight: 1.1
      },
      meta: {
        size: 0.9,
        weight: 600
      },
      content: {
        size: 1.0,
        sizeM: 1.15,
        sizeL: 1.1,
        lineHeight: 1.6
      },
      contentHeading: {
        h2Size: 1.5,
        h3Size: 1.3,
        weight: 600,
        lineHeight: 1.3
      },
      footer: {
        size: 1,
        lineHeight: 1.4
      }
    }
  },
  footer: {
    colors: {
      text: Color(colors.light_gray)
        .lighten(0.5)
        .string(),
      link: colors.light_accent,
      linkHover: Color(colors.light_accent)
        .lighten(0.2)
        .string()
    },
    fonts: {
      footnote: {
        size: 0.8,
        lineHeight: 1.4
      }
    }
  },
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  },
  typography: {
    fontFamily: `Arial, sans-serif`,
    fontSize: 16
  },
  palette: {
    primary: {
      main: "#709425"
    },
    action: {
      hover: "rgba(0, 0, 0, 0.01)"
    },
    type: 'light'
  }
});

export default theme;
