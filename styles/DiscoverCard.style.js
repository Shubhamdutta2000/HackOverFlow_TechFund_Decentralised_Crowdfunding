import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  discoverCard: {
    position: "relative",
    width: "16.8rem",
    padding: "0",
    filter:
      "drop-shadow(0px 3.55774px 3.55774px rgba(0, 0, 0, 0.25)) drop-shadow(-3.55774px 3.55774px 24.9042px rgba(0, 0, 0, 0.13))",
  },
  discoverCardImg: {
    margin: "1rem",
  },
  discoverCard_badge: {
    marginTop: "0",
    fontSize: "0.85rem",
    fontWeight: "500",
  },
  discoverCard_heading: {
    fontSize: "1.6rem",
    fontWeight: "500",
  },
  discoverCard_description: {
    fontSize: "0.8rem",
    display: "block",
    width: "80%",
    fontWeight: "500",
  },
  discoverCard_innovatorDiv: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
  },
  discoverCard_innovatorName: {
    position: "relative",
    width: "78%",
    fontSize: "0.8rem",
    fontWeight: "500",
  },
  discoverCard_innovatorPic: {
    align: "center",
    width: "1.7rem",
    height: "1.7rem",
    borderRadius: "50%",
    marginRight: "0.5rem",
  },
  discoverCardBluePart_ethRaised: {
    fontSize: "1.27rem",
    fontWeight: "500",
    color: "#59FF69",
  },
  discoverCardBluePart_totalEth: {
    display: "block",
    fontSize: "0.81rem",
    fontWeight: "400",
    color: "#fff",
  },
  discoverCardBluePart_endingIn: {
    position: "absolute",
    width: "100%",
    bottom: "0",
    zIndex: "10",
    padding: "0rem 1rem 1.1rem",
    fontSize: "0.85rem",
    fontWeight: "400",
    color: "#fff",
  },
}));
