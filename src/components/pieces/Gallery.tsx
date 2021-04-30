import { Divider, IconButton, Slide, Theme, Toolbar, Typography, useMediaQuery, useTheme, WithStyles, withStyles } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
import React, { useState } from 'react'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ImageIcon from '@material-ui/icons/Image';

interface Props extends WithStyles<typeof styles> {
  className?: string;
  style?: CSSProperties;
  imgs: { src: string, title: string }[];
}

function Gallery(props: Props) {
  const { className, style, classes, imgs } = props;
  const theme = useTheme();

  const [ currentImg, setCurrentImg ] = useState(0);
  const [ direction, setDirection ] = useState("right" as "right" | "left");

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const changeImg = (index: number, direction: "right" | "left") => {
    if(index < 0) index = imgs.length - 1;
    if(index > imgs.length - 1) index = 0;
    setDirection(direction);
    setCurrentImg(index);
  }

  return (
    <div style={{ width: "100%", ...style }}>
      <Toolbar disableGutters={mobileView}>
        <ImageIcon />
        <Typography
          variant={(mobileView) ? "h6" : "h5"}
          component="h3"
          style={{ marginLeft: theme.spacing(2), marginRight: theme.spacing(2) }}
        >Gallery</Typography>
        <Typography
          variant={(mobileView) ? "body2" : "h6"}
          component="h3"
          align="right"
          noWrap
          style={{ flexGrow: 1, overflow: "hidden" }}
        >{ imgs[currentImg].title }</Typography>
      </Toolbar>
      <Divider style={{ width: "100%", marginBottom: theme.spacing(2) }} />
      <div
        style={{
          position:"relative",
          paddingBottom: "56.25%",
          overflow: "hidden",
          boxShadow: theme.shadows[16],
        }}
        className={className}
      >
        { imgs.map((img, i) =>
          <Slide
            key={i}
            in={currentImg === i}
            direction={(currentImg === i) ? direction : (direction === "right") ? "left" : "right"}
            timeout={200}
          >
            <div 
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${img.src})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                zIndex: (currentImg === i) ? theme.zIndex.speedDial - 100 : 0
              }}
            />
          </Slide>
        )}
        <IconButton
          color="secondary"
          style={{ left: theme.spacing(2) }}
          className={classes.button}
          onClick={() => changeImg(currentImg - 1, "right")}
        ><ArrowBackIcon /></IconButton>
        <IconButton
          color="secondary"
          style={{ right: theme.spacing(2) }}
          className={classes.button}
          onClick={() => changeImg(currentImg + 1, "left")}
        ><ArrowForwardIcon /></IconButton>
      </div>
    </div>
  )
}

const styles = (theme: Theme) => ({
  button: {
    position: "absolute" as "absolute",
    top: "50%",
    transform: "translateY(-50%)",

    backgroundColor: theme.palette.background.default,
    opacity: 0.75,
    zIndex: theme.zIndex.speedDial
  }
});

export default withStyles(styles)(Gallery);