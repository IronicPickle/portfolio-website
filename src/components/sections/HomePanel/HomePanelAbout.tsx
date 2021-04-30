import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react'

import CodeIcon from '@material-ui/icons/Code';

export default function HomePanelAbout() {
  const theme = useTheme();

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ display: "flex", flexDirection: (mobileView) ? "column" : "row-reverse", padding: theme.spacing(4) }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: "1 0 0"
      }}>
        <CodeIcon style={{ fontSize: (mobileView) ? 250 : 350, width: "100%" }} />
      </div>
      <div style={{
        textAlign: (mobileView) ? "center" : "left",
        flex: "0 1 60%"
      }}>
        <Typography
          variant={(mobileView) ? "h6" : "h5"}
          component="p"
          style={{ marginTop: theme.spacing(2) }}
        >
          I've been fascinated by automated and intelligent systems for as long as I can remember.
          When I was young, I used to watch in awe as traffic lights would change in sequence, seamlessly controlling the flow of traffic.
          I used to love creating things with my dad, like the home-made radio and the automatic tea-stirrer we made together.
          <br /><br />
          That obsession with creation and technology never left me, as I fell towards computers, where I realised just how much you can do with a mouse and keyboard.
          Web development really pulled me in, where I would over-engineer problems with the power of a Node.js server.
          <br /><br />
          After creating ridiculous full-stack solutions that spanned across multiple web servers, ripe with web sockets and about 12 million APIs, I discovered React.
          That's where I realised just how much I loved to watch code visualise itself in the form of a beautiful and responsive web page.
          There's something about watching data seamlessly sort itself into a series of div tags.
        </Typography>
      </div>
    </div>
  )
}
