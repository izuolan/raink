import { createMuiTheme } from "material-ui/styles";
import Color from "color";
import colors from "./colors";

const theme = createMuiTheme({
  base: {
    fonts: {
      unstyledFamily: `Arial`,
      styledFamily: "Open Sans",
      styledFonts: "300,400,600"
    }
  },
  info: {
    sizes: {}
  },
  mediaQueryTresholds: {
    M: 600,
    L: 1024
  }
});

export default theme;
