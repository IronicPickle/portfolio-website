import { IconButton, Tooltip } from '@material-ui/core'
import React from 'react'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

interface Props {
  color?: "primary" | "secondary";
}

export default function ContactIcons(props: Props) {
  const { color } = props;

  return (
    <>
      { icons.map((icon, i) => (
        <Tooltip title={icon.title}  key={i} >
          <IconButton color={color} href={icon.href} target="_blank">
            { icon.icon }
          </IconButton>
        </Tooltip>
      )) }
    </>
  )
}

const icons = [
  { title: "LinkedIn", icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/nathanrath98/" },
  { title: "GitHub", icon: <GitHubIcon />, href: "https://github.com/IronicPickle" },
  { title: "Email", icon: <EmailIcon />, href: "mailto:nathanrath@live.co.uk" }
]