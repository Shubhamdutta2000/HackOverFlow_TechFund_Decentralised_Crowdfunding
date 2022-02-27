import Image from "next/image";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CampaignCarousal from "components/CampaignsCarousal";
import Layout from "layout/Layout";

import DiscoverCardIdeaCoverImg from "../../public/assets/desktop/DiscoverCardIdeaCoverImg.png";

import { useStyles } from "styles/RelatedCampaigns/RelatedCampaigns.style";

const AllIdeas = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Layout>
      <CampaignCarousal
        color="#fff"
        bgColor="#141414"
        heading={"Relevant Auctions"}
      />
      <div className={classes.yourLatestSection}>
        <Typography variant="heading" className={classes.yourLatestHeading}>
          Your Latest Campaign Invest
        </Typography>

        <Card className={classes.yourLatestCard}>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0",
              margin: "0",
            }}
          >
            <div className={classes.yourLatestPicDiv}>
              <img
                src="assets/desktop/DiscoverCardIdeaCoverImg.png"
                className={classes.yourLatestPic}
              />
            </div>
            <div
              // sx={{ flex: "1 0 auto" }}
              className={classes.yourLatestCardContent}
            >
              <Typography
                component="div"
                color="text.secondary"
                variant="description"
                className={classes.yourLatestBadge}
              >
                Design
              </Typography>
              <Typography
                variant="description"
                className={classes.yourLatestCardHeading}
                component="div"
              >
                Learn Web 3.0
              </Typography>
              <Typography
                variant="description"
                className={classes.yourLatestCardDescription}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
                ipsum dolor sit amet, consectetur adipiscing elit
              </Typography>

              <div className={classes.yourLatestCard_innovatorDiv}>
                <img
                  className={classes.yourLatestCard_innovatorPic}
                  src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d0/d0ca94e64f22a73c804405bd2565d6221ae6f1a2_full.jpg"
                  alt="abcd"
                />
                <Typography
                  variant="description"
                  color="text.secondary"
                  className={classes.yourLatestCard_innovatorName}
                >
                  @ Stylercross Pvt. Ltd.
                </Typography>
              </div>

              {/* Black Part */}
              <div className={classes.details}>
                <div className={classes.detailGroup}>
                  <Typography variant="ideaStats" className={classes.greenText}>
                    2 ETH
                  </Typography>
                  <Typography variant="ideaStats">raised of 5 ETH</Typography>
                </div>
                <div className={classes.detailGroup}>
                  <Typography variant="ideaStats" className={classes.greenText}>
                    12
                  </Typography>
                  <Typography variant="ideaStats">contributors</Typography>
                </div>
                <div className={classes.detailGroup}>
                  <Typography variant="ideaStats" className={classes.redText}>
                    1hr 30min 45sec
                  </Typography>
                  <Typography variant="ideaStats">Ending in</Typography>
                </div>
              </div>
            </div>
          </Box>
        </Card>
      </div>

      <CampaignCarousal
        color="#fff"
        bgColor="#141414"
        heading={"Newest Campaigns"}
      />
    </Layout>
  );
};

export default AllIdeas;
