import { Container, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React from 'react'
import ContactIcons from '../../pieces/ContactIcons';

interface Props {
  id?: string;
}

export default function HomeBack(props: Props) {
  const { id } = props;
  const theme = useTheme();

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="xl" id={id} style={{ position: "relative" }}>
      <Container style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing((mobileView) ? 2 : 4),
        paddingBottom: theme.spacing((mobileView) ? 4 : 5),
      }}>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          style={{ color: theme.palette.primary.main }}
        >Where to find me</Typography>
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
        <ContactIcons color="primary" />
      </div>
      </Container>
      <Typography
        variant="caption"
        component="span"
        align="center"
        noWrap
        style={{
          position: "absolute",
          bottom: theme.spacing(0.5),
          left: 0,
          right: 0,
          color: theme.palette.primary.main
        }}
      >Copyright © 2021 Nathan Rath. All Rights Reserved.</Typography>
    </Container>
  )
}