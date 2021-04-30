import { Divider, Theme, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'
import ProjectDuct from '../../pieces/projects/duct/ProjectDuct';
import ProjectForum from '../../pieces/projects/forum/ProjectForum';
import ProjectLykos from '../../pieces/projects/lykos/ProjectLykos';

interface Props extends WithStyles<typeof styles> {}

function HomePanelProjects(props: Props) {
  const { classes } = props;

  return (
    <>
      <div className={classes.projectWrapper} >
        <ProjectLykos />
      </div>
      <Divider />
      <div className={classes.projectWrapper} >
        <ProjectDuct />
      </div>
      <Divider />
      <div className={classes.projectWrapper} >
        <ProjectForum />
      </div>
    </>
  )
}

const styles = (theme: Theme) => ({
  projectWrapper: {
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    maxWidth: "none",
    padding: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }
  }
});

export default withStyles(styles)(HomePanelProjects);