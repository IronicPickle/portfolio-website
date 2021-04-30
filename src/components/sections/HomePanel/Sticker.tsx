import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react'

interface Props {
  imgSrc: string;
  text: string;
  direction: "row" | "row-reverse";
}

export default function Sticker(props: Props) {
  const { imgSrc, text, direction = "row" } = props;
  const theme = useTheme();

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{
      height: 100,
      display: "flex",
      flexDirection: direction,
      alignItems: "center"
    }}>
        <div style={{
          height: 100,
          width: 100,
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }} />
      <div style={{ flex: "1 0 0" }}>
        <Typography
          variant={(mobileView) ? "h5" : "h4"}
          component="h2"
          align={(mobileView) ? (direction === "row") ? "right" : "left" : "center" }
        >{ text }</Typography>
      </div>
    </div>
  )
}
