import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import Header from './components/Header';
import GlobalCSS from './GlobalCSS';
import Home from './pages/Home'
import mainTheme from './themes/mainTheme'

const theme = mainTheme;

export default function Root() {
  document.body.style.backgroundColor = theme.palette.background.default

  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Header />
      <Home />
    </ThemeProvider>
  )
}