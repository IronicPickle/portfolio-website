import { Box, Divider, IconButton, Toolbar, Tooltip, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { ReactChild, ReactFragment, ReactPortal } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import Gallery from '../../pieces/Gallery';

import InfoIcon from '@material-ui/icons/Info';

interface Props {
  title: string;
  subTitle: string;
  repoLink: string;
  imgs: { src: string, title: string }[];
  about: boolean | ReactChild | ReactFragment | ReactPortal;
}

export default function HomePanelProject(props: Props) {
  const theme = useTheme();
  const { title, subTitle, repoLink, imgs, about } = props;

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ width: (mobileView) ? "100%" : "unset", float: "left"}}>
      <Toolbar disableGutters style={{ minHeight: 0 }}>
        <Box flexGrow={1}>
          <Typography
            variant={(mobileView) ? "h5" : "h3"}
            component="h2"
            align={(mobileView) ? "center" : "left"}
          >{ title }</Typography>
        </Box>
        <Box position="absolute" right={0}>
          <Tooltip title="Github Repo">
            <IconButton href={repoLink} target="_blank">
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
      <Divider style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(1) }} />
      <Typography
        variant={(mobileView) ? "h6" : "h5"}
        component="h2"
        align={(mobileView) ? "center" : "left"}
      ><i>{ subTitle }</i></Typography>
      
      <Gallery imgs={imgs} style={{ marginTop: theme.spacing((mobileView) ? 4 : 8) }} />
      
      <Toolbar disableGutters={mobileView} style={{ marginTop: theme.spacing(2) }}>
        <InfoIcon />
        <Typography
          variant={(mobileView) ? "h6" : "h5"}
          component="h3"
          style={{ marginLeft: theme.spacing(2), marginRight: theme.spacing(2) }}
        >A Quick Overview</Typography>
      </Toolbar>

      <Divider style={{ width: "100%", marginBottom: theme.spacing(2) }} />

      <Typography
        variant={(mobileView) ? "h6" : "h5"}
        component="p"
        align={(mobileView) ? "left" : "left"}
        style={{ marginLeft: (mobileView) ? 0 : theme.spacing(2), lineHeight: (mobileView) ? 1.75 : 2 }}
      >{ about }</Typography>
    </div>
  )
}