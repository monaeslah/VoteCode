import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: any) => ({
  formPaper: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(8),
    marginRight: theme.spacing(7),

    [theme.breakpoints.down("sm")]: {
      width: "unset",
      marginBottom: theme.spacing(6),
      marginTop: "3rem",
      marginRight: "unset",
      padding: theme.spacing(6),
    },
  },
  headLine: { fontWeight: 700, color: theme.palette.surface.mediumSurface },
  title: {
    color: theme.palette.surface.highSurface,
  },
  content: {
    color: theme.palette.surface.mediumSurface,
  },
  contentContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      maxWidth: "500px",
    },
  },

  noteContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    alignSelf: "stretch",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    width: "71%",
    marginBottom: "auto",
    gap: "16px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  auth: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "4px",
  },
  authLabel: {
    color: theme.palette.surface.highSurface,
  },
  label: {
    color: theme.palette.common.inputLabel,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  submit: {
    padding: "14px",
    color: "rgba(6, 6, 30, 0.38)",
  },
  disable: {
    background: "#EBEAEE",
    color: "rgba(6, 6, 30, 0.38)",
    borderRadius: "8px",
  },
  infoIcon: {
    display: "flex",
    width: "463px",
  },
  infoIconImg: {
    width: "16px",
    height: "16px",
    marginTop: "auto",
    marginBottom: "12px",
    marginLeft: "4px",
  },
}));

export default useStyles;