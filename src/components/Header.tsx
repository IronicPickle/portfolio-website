import { AppBar, Grid, IconButton, Slide, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import NavDrawer from './pieces/NavDrawer';

import MenuIcon from '@material-ui/icons/Menu';
import ContactIcons from './pieces/ContactIcons';

export default function Header() {
  const [ drawerState, setDrawerState ] = useState(false);
  const [ headerState, setHeaderState ] = useState(true);
  const theme = useTheme();

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const ref = useRef({ prevScrollY: window.scrollY })
  const setRef = (prevScrollY: number) => { ref.current = { prevScrollY } }

  useEffect(() => {
    const documentScroll = () => {
      setHeaderState(window.scrollY < ref.current.prevScrollY || window.scrollY < 10);
      setRef(window.scrollY);
    }
    document.addEventListener("scroll", () => documentScroll() );
    window.addEventListener("hashchange", () => setHeaderState(false) );
    return () => {
      document.removeEventListener("scroll", () => documentScroll() );
      window.removeEventListener("hashchange", () => setHeaderState(false) );
    }
  }, []);

  return (
    <>
      <NavDrawer drawerState={drawerState} onClose={() => setDrawerState(false)} />
      <Slide in={headerState || !mobileView} >
        <AppBar style={{
          backgroundColor: theme.palette.background.default,
        }}>
          <Toolbar>
            <Grid container justify="flex-start">
              <IconButton onClick={() => setDrawerState(true)} color="primary">
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid container justify="center">
              <Typography
                variant="h4"
                component="h1"
                color="primary"
              >Nathan</Typography>
            </Grid>
            <Grid container justify="flex-end" >
              { !mobileView && <ContactIcons color="primary" /> }
            </Grid>
          </Toolbar>
        </AppBar>
        </Slide>
    </>
  )
}