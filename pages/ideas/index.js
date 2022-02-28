import Image from "next/image";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CampaignCarousal from "components/CampaignsCarousal";
import Layout from "layout/Layout";

import DiscoverCardIdeaCoverImg from "../../public/assets/desktop/DiscoverCardIdeaCoverImg.png";

import { useStyles } from "styles/RelatedCampaigns/RelatedCampaigns.style";
import CampaignCard from "components/CampaignCard";

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
        <CampaignCard />
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
