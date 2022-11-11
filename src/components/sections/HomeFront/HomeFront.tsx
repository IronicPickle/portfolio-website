import {
  Container,
  Divider,
  Fade,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
  WithStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";
import screenshot1 from "./media/screenshot1.png";
import screenshot2 from "./media/screenshot2.png";
import screenshot3 from "./media/screenshot3.png";

interface Props extends WithStyles<typeof styles> {
  id?: string;
}

function HomeFront(props: Props) {
  const { id, classes } = props;
  const theme = useTheme();

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletView = useMediaQuery(theme.breakpoints.down("md"));

  const screenshots = [
    { className: classes.screenshot1, src: screenshot1, timeout: 1500 },
    { className: classes.screenshot2, src: screenshot2, timeout: 1000 },
    { className: classes.screenshot3, src: screenshot3, timeout: 500 },
  ];

  return (
    <Container
      maxWidth="xl"
      style={{
        marginTop: theme.spacing(8),
      }}
      id={id}
    >
      <div className={classes.mainWrapper}>
        <Container
          maxWidth="xl"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: tabletView ? "column" : "row",
          }}
        >
          <div className={classes.titleWrapper}>
            <Typography
              variant={mobileView ? "h4" : "h3"}
              color="primary"
              align="center"
              style={{ marginBottom: theme.spacing(2) }}
            >
              Self-Taught, Full-Stack Web Developer
            </Typography>
            {!tabletView && (
              <Divider
                style={{
                  backgroundColor: theme.palette.secondary.main,
                }}
              />
            )}
            <Typography
              variant={mobileView ? "h6" : "h5"}
              color="primary"
              align="center"
              style={{ marginTop: theme.spacing(4) }}
            >
              With 4 years of programming experience and more projects than I
              can remember.
            </Typography>
            <Typography
              variant={mobileView ? "body1" : "h6"}
              color="primary"
              align="center"
              style={{ marginTop: theme.spacing(4) }}
            >
              That more or less sums me up...
            </Typography>
          </div>
          <div className={classes.screenshotWrapper}>
            {screenshots.map((screenshot, i) => (
              <Fade in timeout={screenshot.timeout} key={i}>
                <img
                  src={screenshot.src}
                  alt={`Screenshot ${i}`}
                  className={`${classes.screenshot} ${screenshot.className}`}
                />
              </Fade>
            ))}
          </div>
        </Container>
      </div>
    </Container>
  );
}

const styles = (theme: Theme) => ({
  mainWrapper: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    minHeight: 500,
    [theme.breakpoints.down("md")]: {
      minHeight: 950,
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: 850,
    },
  },
  titleWrapper: {
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    marginLeft: theme.spacing(16),
    marginTop: 0,
    maxWidth: "30%",
    [theme.breakpoints.down("lg")]: {
      marginLeft: theme.spacing(8),
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginTop: theme.spacing(6),
      maxWidth: "unset",
    },
  },
  screenshotWrapper: {
    display: "flex" as "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative" as "relative",
    margin: theme.spacing(16),
    [theme.breakpoints.down("lg")]: {
      margin: theme.spacing(8),
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
    flexGrow: 1,
  },
  screenshot: {
    position: "absolute" as "absolute",
    width: "100%",
    boxShadow: theme.shadows[4],
    borderRadius: 8,
    borderColor: theme.palette.primary.main,
    borderWidth: 1,
    borderStyle: "solid",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "90vh",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80vh",
    },
  },
  screenshot1: {
    marginTop: theme.spacing(-24),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  screenshot2: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  screenshot3: {
    marginTop: theme.spacing(24),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
});

export default withStyles(styles)(HomeFront);
