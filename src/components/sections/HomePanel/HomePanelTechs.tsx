import { Grid, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import Sticker from './Sticker';

import nodeLogo from "./media/nodeLogo.png";
import mongoLogo from "./media/mongoLogo.png";
import expressLogo from "./media/expressLogo.png";
import reactLogo from "./media/reactLogo.png";
import materialLogo from "./media/materialLogo.png";
import jqueryLogo from "./media/jqueryLogo.png";
import webpackLogo from "./media/webpackLogo.png";
import nginxLogo from "./media/nginxLogo.png";

export default function HomePanelTechs() {
  const theme = useTheme();

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={4} style={{ padding: theme.spacing(4), maxWidth: "none" }}>
      { technologies.map((technology, i) =>
        <Grid item key={i} xs={(mobileView) ? 12 : 6}>
          <Sticker direction={(i % 2 === 0) ? "row" : "row-reverse"} imgSrc={technology.imgSrc} text={technology.text} />
        </Grid>
      ) }
    </Grid>
  )
}

const technologies = [
  { imgSrc: nodeLogo, text: "Node" },
  { imgSrc: mongoLogo, text: "MongoDB" },
  { imgSrc: expressLogo, text: "Express" },
  { imgSrc: reactLogo, text: "React" },
  { imgSrc: materialLogo, text: "Material UI" },
  { imgSrc: jqueryLogo, text: "JQuery" },
  { imgSrc: webpackLogo, text: "Webpack" },
  { imgSrc: nginxLogo, text: "NGINX" },
]