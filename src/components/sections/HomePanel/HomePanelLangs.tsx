import { Grid, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import Sticker from './Sticker';

import jsLogo from "./media/jsLogo.png";
import tsLogo from "./media/tsLogo.png";
import htmlLogo from "./media/htmlLogo.png";
import cssLogo from "./media/cssLogo.png";
import pythonLogo from "./media/pythonLogo.png";
import luaLogo from "./media/luaLogo.png";

export default function HomePanelLangs() {
  const theme = useTheme();

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={4} style={{ padding: theme.spacing(4), maxWidth: "none" }}>
      { languages.map((language, i) =>
        <Grid item key={i} xs={(mobileView) ? 12 : 6}>
          <Sticker direction={(i % 2 === 0) ? "row" : "row-reverse"} imgSrc={language.imgSrc} text={language.text} />
        </Grid>
      ) }
    </Grid>
  )
}

const languages = [
  { imgSrc: jsLogo, text: "JavaScript" },
  { imgSrc: tsLogo, text: "TypeScript" },
  { imgSrc: cssLogo, text: "CSS" },
  { imgSrc: htmlLogo, text: "HTML" },
  { imgSrc: pythonLogo, text: "Python" },
  { imgSrc: luaLogo, text: "Lua" },
]