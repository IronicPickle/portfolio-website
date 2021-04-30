import { Divider, Drawer, Tab, Tabs, Theme, Toolbar, Typography, useMediaQuery, useTheme, WithStyles, withStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ContactIcons from './ContactIcons';

interface Props extends WithStyles<typeof styles> {
  drawerState: boolean;
  onClose?: () => void;
}

function NavDrawer(props: Props) {
  const { classes, drawerState, onClose } = props;
  const theme = useTheme();

  const [ currentTab, setCurrentTab ] = useState(window.location.hash || "#home");

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    window.addEventListener("hashchange", event => setCurrentTab(window.location.hash));
    return window.removeEventListener("hashchange", event => setCurrentTab(window.location.hash));
  });

  return (
    <Drawer
      open={drawerState}
      onClose={onClose}
      PaperProps={{
        style: {
          width: (mobileView) ? "50%" : 250
        }
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          style={{ width: "100%" }}
        >Navigation</Typography>
      </Toolbar>
      <Divider style={{ marginBottom: theme.spacing(2) }} />
      <Tabs
        variant="scrollable"
        scrollButtons="off"
        value={currentTab}
        orientation="vertical"
        style={{
          display: "flex",
          flex: "1 0 0",
          width: `calc(100% - ${theme.spacing(4)}px)`,
          padding: theme.spacing(2),
          maxWidth: "unset"
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: theme.palette.secondary.contrastText
          }
        }}
        onChange={() => setTimeout(() => (onClose != null) ? onClose() : null, 100)}
      >
        <Tab value="#home" href="#home" label="Home" className={classes.tab} />
        <Tab value="#about" href="#about" label="About" className={classes.tab}  />
        <Tab value="#langs" href="#langs" label="Skills" className={classes.tab}  />
        <Tab value="#projects" href="#projects" label="Projects" className={classes.tab}  />
      </Tabs>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: theme.spacing(2)
      }}><ContactIcons /></div>
    </Drawer>
  )
}

const styles = (theme: Theme) => ({
  tab: {
    maxWidth: "unset"
  }
});

export default withStyles(styles)(NavDrawer)