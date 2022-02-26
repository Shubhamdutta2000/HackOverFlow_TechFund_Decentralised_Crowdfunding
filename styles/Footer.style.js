import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  footerBg: {
    position: "absolute",
    zIndex: "-1",
    width: "100%",
    // height: "20vh",
  },
  footerLinksContainer: {
    position: "relative",
    width: "54%",
    display: "flex",
    justifyContent: "space-around",
    left: "5.7rem",
    top: "5.1vw",
  },
  footerLinks_ul: {
    position: "relative",
    width: "12rem",
    listStyleType: "none",
  },
  footer_heading: {
    color: "#B4B4B4",
    fontWeight: "700",
    fontSize: "1.3rem",
  },
  footerLinks: {
    position: "relative",
    fontSize: "1.1rem",
    color: "#B4B4B4",
    margin: "0.38rem 0",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  },
  footerLogoPart: {
    position: "relative",
    width: "84.5%",
    top: "10.5vw",
  },
  footer__horizontalLine: {
    border: "none",
    borderBottom: "1px solid #3a3a3a",
  },
  footer_rightsReserved: {
    position: "relative",
    fontSize: "1.1rem",
    color: "#B4B4B4",
    top: "1rem",
    left: "2.1rem",
  },
}));
