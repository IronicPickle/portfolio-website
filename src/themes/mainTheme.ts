import { createMuiTheme } from "@material-ui/core";

import "@fontsource/open-sans";

// rgba(177,237,232,1)
// rgba(255,105,120,1)

export default createMuiTheme({
  palette: {
    primary: {
      main: "#DADDD8"
    },
    secondary: {
      main: "#ECEBE4"
    },
    background: {
      default: "#1C1C1C"
    }
  },
  typography: {
    fontFamily: "'Open Sans', san-serif"
  }
});