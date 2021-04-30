import { Theme, withStyles } from '@material-ui/core'

function GlobalCSS() {
  return null
}

const styles = (theme: Theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "4px",
      height: "4px"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": `inset 0 0 8px ${theme.palette.primary.main}`
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.background.default
    },
    pre: {
      whiteSpace: "pre-wrap"
    },
    a: {
      color: "unset",
      fontWeight: 600
    }
  }
});

export default withStyles(styles, { withTheme: true })(GlobalCSS);