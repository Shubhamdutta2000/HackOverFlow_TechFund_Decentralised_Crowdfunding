import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    top: "-0.1vw",
    padding: "3rem 0 1rem 8.1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 2.3rem",
    },
  },
  campaignHeader: {
    // color: "#333CFF",
    marginLeft: "4.5rem",
    marginBottom: "2.6rem",
  },
  yourLatestCard: {
    marginTop: "2.3rem",
    backgroundColor: "#f4f4f4",
    padding: "2vw 0 0 2.3vw",
    marginTop: "1.8rem",
    borderRadius: "2rem",
    width: "92.5%",
    boxShadow:
      "4px 4px 20px rgba(0, 0, 0, 0.13), -5px -5px 20px rgba(0, 0, 0, 0.13)",
  },
  yourLatestSection: {
    position: "relative",
    margin: "2.3rem 0 3rem",
    left: "8rem",
    width: "90%",
  },
  yourLatestHeading: {
    position: "relative",
    fontSize: "2.4rem",
    fontWeight: "500",
    color: theme.palette.primary.main,
  },
  yourLatestPicDiv: {
    position: "relative",
    width: "40%",
    paddingBottom: "2vw",
  },
  yourLatestPic: {
    borderRadius: "1.4vw",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  yourLatestCardContent: {
    position: "relative",
    margin: "0",
    marginLeft: "2.9vw",
    width: "55%",
    padding: "0",
  },
  yourLatestBadge: {
    fontSize: "1.38vw",
    fontWeight: "500",
  },
  yourLatestCardHeading: {
    color: "#000",
    fontSize: "2.41vw",
    fontWeight: "500",
  },
  yourLatestCardDescription: {
    position: "relative",
    display: "block",
    fontSize: "1.13vw",
    fontWeight: "500",
    width: "85%",
  },
  yourLatestCard_innovatorDiv: {
    marginTop: "1rem",
  },
  yourLatestCard_innovatorPic: {
    position: "relative",
    align: "center",
    borderRadius: "50%",
    width: "2.25vw",
    height: "2.25vw",
    objectFit: "cover",
    marginRight: "0.7rem",
    verticalAlign: "middle",
  },
  yourLatestCard_innovatorName: {
    position: "relative",
    width: "78%",
    fontSize: "1vw",
    fontWeight: "500",
    paddingTop: "0.35rem",
  },
  details: {
    backgroundColor: "#141414",
    width: "100%",
    borderRadius: "0.4rem",
    borderBottomRightRadius: "2rem",
    borderBottomLeftRadius: "0",
    padding: "1.1rem 0",
    margin: "1.5rem 0 0 0",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  detailGroup: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: "5px",
    },
  },
  greenText: {
    color: "#82ed68",
  },
  redText: {
    color: "#e9696d",
  },
}));
