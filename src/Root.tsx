import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Header from "./components/Header";
import GlobalCSS from "./GlobalCSS";
import Home from "./pages/Home";
import mainTheme from "./themes/mainTheme";
import ReactGA from "react-ga";

const theme = mainTheme;

export default function Root() {
  document.body.style.backgroundColor = theme.palette.background.default;

  ReactGA.initialize("UA-204799069-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Header />
      <Home />
    </ThemeProvider>
  );
}
