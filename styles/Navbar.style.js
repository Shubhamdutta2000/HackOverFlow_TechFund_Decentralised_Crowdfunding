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
    width: "0.5rem",
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
    justifyContent: "sapce-between",
    width: "35.5vw",
  },
  navItems: {
    color: "#000",
    flexGrow: 1,
    fontWeight: "500",
    fontSize: "1.2rem",
    // fontFamily: "'Shizuru', sans-serif",
    margin: "0.3rem 1.6rem 0",
    cursor: "pointer",
    "&:hover": {
      color: "#5145FF",
    },
  },
  navItems_Login: {
    color: "#fff",
    textTransform: "none",
    // flexGrow: 1,
    fontWeight: "500",
    fontSize: "1.2rem",
    fontFamily: "'Euclid Circular A', sans-serif",
    margin: "0 0 0 1.5rem",
    borderRadius: "100rem",
    padding: "0.1rem 1.67rem 0.2rem",
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
  mobilenavItems: {
    color: "#4D7178",
    fontWeight: 600,
    margin: theme.spacing(3, 0),
  },
}));
