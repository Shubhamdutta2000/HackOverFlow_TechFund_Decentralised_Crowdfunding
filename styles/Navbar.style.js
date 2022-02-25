import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "relative",
  },
  title: {
    flexGrow: 1,
    // margin: '1rem 1rem 1rem 0'
  },
  navLogo: {
    position: "relative",
    width: "7.5rem",
    // left: "4.4vw",
    marginTop: "0.3rem",
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      width: "33vw",
      left: "4vw",
      top: "0.5vw",
    },
  },
  allNavItems: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "33vw",
  },
  navItems: {
    color: "#000",
    flexGrow: 1,
    fontWeight: "600",
    fontSize: "1.15rem",
    // fontFamily: "'Shizuru', sans-serif",
    margin: "0.3rem 2.67rem 0",
    "&:hover": {
      color: "#5145FF",
    },
  },
  navItems_Login: {
    color: "#fff",
    textTransform: "none",
    // flexGrow: 1,
    fontWeight: "600",
    fontSize: "1.1vw",
    margin: "0 2.67rem",
    borderRadius: "100rem",
    padding: "0.15rem 2.9rem",
    border: "2px solid #333CFF",
    backgroundColor: "#333CFF",
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid #333CFF",
    },
  },
  menuButton: {
    // marginRight: theme.spacing(3),
    color: theme.palette.primary.main,
    marginLeft: "45%",
  },
  menuButtonHam: {
    width: "10vw",
    height: "10vw",
  },
  //   list: {
  //     width: sideNavWidth,
  //   },

  mobilenavItems: {
    color: "#4D7178",
    fontWeight: 600,
    margin: theme.spacing(3, 0),
  },
}));
