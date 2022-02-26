import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  navbar: {
    position: "relative",
    backgroundColor: theme.palette.background.secondary,
    padding: "0 7.5rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
    },
  },
  title: {
    flexGrow: 1,
    // margin: '1rem 1rem 1rem 0'
  },
  navLogo: {
    position: "relative",
    width: "8.85rem",
    marginLeft: "2.4vw",
    marginTop: "0.3rem",
    [theme.breakpoints.down("sm")]: {
      width: "33vw",
      left: "4vw",
      top: "0.5vw",
    },
  },
  allNavItems: {
    position: "relative",
    display: "flex",
    width: "35.5vw",
  },
  navItems: {
    color: theme.palette.alternate.main,
    flexGrow: 1,
    fontWeight: "500",
    fontSize: "1.2rem",
    margin: "0.3rem 1.6vw 0",
    cursor: "pointer",
  },
  navItems_Login: {
    color: "#fff",
    textTransform: "none",
    fontWeight: "500",
    fontSize: "1.2rem",
    fontFamily: "'Euclid Circular A', sans-serif",
    margin: "0 0.6rem 0 1.5rem",
    borderRadius: "100rem",
    padding: "0.1rem 1.67rem 0.2rem",
    border: "2px solid" + theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: "transparent",
      border: "2px solid" + theme.palette.primary.main,
    },
  },
  menuButton: {
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
  hamIcon: {
    fontSize: "2rem",
    width: "2rem",
  },
}));
