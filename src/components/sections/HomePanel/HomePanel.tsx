import { Container, Divider, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { ReactChild, ReactFragment, ReactPortal } from 'react'

interface Props {
  id?: string;
  color: "primary" | "secondary";
  children: boolean | ReactChild | ReactFragment | ReactPortal;
  title: boolean | ReactChild | ReactFragment | ReactPortal;
}

export default function HomePanel(props: Props) {
  const theme = useTheme();
  const { id, children, title} = props;
  const color = theme.palette[props.color].main;

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const spacing = theme.spacing((mobileView) ? 6 : 8);

  return (
    <Container id={id} maxWidth="xl" style={{
      backgroundColor: color,
      display: "flex",
      paddingTop: spacing,
      paddingBottom: spacing
    }} disableGutters>
      <Container>
        <Typography
          variant={ (mobileView) ? "h4" : "h3" }
          component="h2"
          align="center"
          style={{ marginBottom: spacing }}
        >{ title }</Typography>
        <Divider />
        { children }
        <Divider />
      </Container>
    </Container>
  )
}