import Image from "next/image";

import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

//Assets
import DiscoverCardIdeaCoverImg from "../public/assets/desktop/DiscoverCardIdeaCoverImg.png";
import CardBluePartBg from "../public/assets/desktop/CardBluePartBg.png";

import { useStyles } from "../styles/DiscoverCard.style.js";

export default function DiscoverCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.discoverCard}>
      <CardActionArea>
        <div className={classes.discoverCardImg}>
          <Image
            height="1050"
            className={classes.discoverCardImgCover}
            src={DiscoverCardIdeaCoverImg}
            alt="HeroBg"
            objectFit="cover"
          />
        </div>
        <CardContent style={{ marginTop: "0", paddingTop: "0" }}>
          <Typography
            gutterBottom
            variant="description"
            component="div"
            className={classes.discoverCard_badge}
          >
            Design
          </Typography>
          <Typography
            gutterBottom
            variant="description"
            component="div"
            className={classes.discoverCard_heading}
          >
            Learn Web 3.0
          </Typography>
          <Typography
            variant="description"
            className={classes.discoverCard_description}
          >
            Lizards are a widespread group of squamate reptiles...
          </Typography>
          <div className={classes.discoverCard_innovatorDiv}>
            <Typography
              variant="description"
              color="text.secondary"
              className={classes.discoverCard_innovatorName}
            >
              @ Stylercross Pvt. Ltd.
            </Typography>
            <img
              className={classes.discoverCard_innovatorPic}
              src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d0/d0ca94e64f22a73c804405bd2565d6221ae6f1a2_full.jpg"
              alt="abcd"
            />
          </div>
        </CardContent>

        {/* Blue Part */}
        <CardContent
          style={{
            margin: "0",
            padding: "0",
            position: "relative",
            // top: "0.28rem",
          }}
        >
          <div style={{ position: "relative", margin: "0", padding: "0" }}>
            <Image src={CardBluePartBg} alt="HeroBg" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "absolute",
              width: "100%",
              top: "0",
              zIndex: "10",
              padding: "0.8rem 1rem",
            }}
          >
            <div>
              <Typography
                gutterBottom
                variant="description"
                className={classes.discoverCardBluePart_ethRaised}
              >
                2 ETH
              </Typography>
              <Typography
                gutterBottom
                variant="description"
                className={classes.discoverCardBluePart_totalEth}
              >
                raised of 5 ETH
              </Typography>
            </div>
            <div>
              <Typography
                gutterBottom
                variant="description"
                className={classes.discoverCardBluePart_ethRaised}
              >
                12
              </Typography>
              <Typography
                gutterBottom
                variant="description"
                className={classes.discoverCardBluePart_totalEth}
              >
                contributors
              </Typography>
            </div>
          </div>
          <Typography
            variant="description"
            className={classes.discoverCardBluePart_endingIn}
          >
            <span style={{ color: "#FFABAB" }}>Ending in </span>
            &nbsp; 1hr 30min 45sec
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
