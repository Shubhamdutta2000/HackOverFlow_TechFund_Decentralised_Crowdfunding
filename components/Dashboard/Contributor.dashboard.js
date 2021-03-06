import React, { useState } from "react";
import Image from "next/image";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import {
  Grid,
  Box,
  Tab,
  Typography,
  Button,
  Card,
  CardContent,
} from "@mui/material";

import DashboardCoverImg from "../../public/assets/desktop/DashboardCoverImg.png";
import UserPic from "../../public/assets/desktop/InnovatorProfileImg.png";
import Metamask from "../../public/assets/desktop/MetamaskImg.png";

import { useStyles } from "../../styles/dashboard.style";
import { useMoralis } from "react-moralis";
import CampaignCard from "components/CampaignCard";
import Link from "next/link";

const ContributorDashboardComp = () => {
  const classes = useStyles();
  const [value, setValue] = useState("1");
  const { user } = useMoralis();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Image src={DashboardCoverImg} alt="DashboardImg" height={"200"}></Image>

      <Grid
        style={{ height: "80%" }}
        spacing={"12"}
        container
        className={classes.container}
      >
        {/* Left side card */}
        <Grid item xs={12} sm={12} md={5} display="flex">
          <Card
            style={{
              width: "70%",
              height: "95%",
              marginTop: "-5.3rem",
              zIndex: "1",
              marginLeft: "3vw",
              padding: "2rem 0.5rem",
              borderRadius: "1.1rem",
              boxShadow:
                "0px 4px 4px rgba(0, 0, 0, 0.25), -5px 0px 20px 4px rgba(0, 0, 0, 0.06)",
            }}
          >
            <div style={{ marginLeft: "50%", transform: "translateX(-50%)" }}>
              <Image src={UserPic} alt="User Image"></Image>
            </div>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  fontFamily: "'Euclid Circular A', sans-serif",
                  fontSize: "1.9rem",
                  color: "#333CFF",
                  fontWeight: "600",
                  marginBottom: "0.25vw",
                }}
                align="center"
                variant="h4"
                component="div"
              >
                {user && user.get("username")}
              </Typography>
              <Typography
                align="center"
                gutterBottom
                variant="description"
                component="div"
              >
                {user && user.get("email")}
              </Typography>
              <Button
                sx={{
                  padding: "0.3rem 1.5rem",
                  textTransform: "none",
                  maxWidth: "160px",
                  color: "rgba(0, 0, 0, 1)",
                  background: "#D3FFD0",
                  borderRadius: "54px",
                  fontSize: "1.1rem",
                  marginTop: "0.6rem",
                  marginLeft: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "Euclid Circular A, sans-serif",
                  "&:hover": {
                    background: "#D3FFD0",
                  },
                }}
              >
                {user && user.get("userType")}
              </Button>
              <Typography
                sx={{
                  fontFamily: "'Euclid Circular A', sans-serif",
                  marginTop: "1.1rem",
                }}
                align="center"
                color="primary"
              >
                Bio
              </Typography>
              <Typography
                style={{
                  fontFamily: "'Euclid Circular A', sans-serif",
                  marginTop: "1rem",
                  fontSize: "1.1rem",
                  display: "block",
                }}
                align="center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right side tab */}
        <Grid item md={7} sm={12} xs={12}>
          <Box sx={{ width: "100%", typography: "body1", marginTop: "2rem" }}>
            <TabContext value={value} style={{ padding: "0" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="lab API tabs">
                  <Tab
                    sx={{
                      fontFamily: "Circular Std, sans-serif",
                      textTransform: "none",
                      fontStyle: "normal",
                      fontWeight: 450,
                      fontSize: "20px",
                      lineHeight: "107%",
                      textAlign: "center",
                      color: "#000000",
                    }}
                    label="Overview"
                    value="1"
                  />
                  <Tab
                    sx={{
                      fontFamily: "Circular Std, sans-serif",
                      textTransform: "none",
                      fontStyle: "normal",
                      fontWeight: 450,
                      fontSize: "20px",
                      lineHeight: "107%",
                      textAlign: "center",
                      color: "#000000",
                    }}
                    label="Investments"
                    value="2"
                  />
                  <img
                    src={"/assets/desktop/MetamaskImg.png"}
                    style={{
                      position: "absolute",
                      right: "2.5vw",
                      bottom: "0",
                      height: "2.5rem",
                    }}
                    alt="Metamask"
                  />
                </TabList>
              </Box>
              <TabPanel
                value="1"
                style={{
                  paddingLeft: "0",
                  marginTop: "1rem",
                  marginRight: "1rem",
                }}
              >
                <div className={classes.details} item md={9} xs={12}>
                  <div className={classes.detailGroup}>
                    <Typography
                      variant="ideaStats"
                      style={{
                        marginRight: "4rem",
                        fontSize: "1.5rem",
                        marginTop: "0.7rem",
                        color: "#d3ffd0",
                      }}
                      className={classes.greenText}
                    >
                      8
                    </Typography>
                    <Typography
                      variant="ideaStats"
                      style={{ fontWeight: "500", marginTop: "0" }}
                    >
                      Total Ideas
                    </Typography>
                  </div>
                  <div className={classes.detailGroup}>
                    <Typography
                      variant="ideaStats"
                      className={classes.greenText}
                      style={{
                        fontSize: "1.5rem",
                        marginTop: "0.7rem",
                        color: "#D3FFD0",
                      }}
                    >
                      12
                    </Typography>
                    <Typography
                      variant="ideaStats"
                      style={{ fontWeight: "500", marginTop: "0" }}
                    >
                      Total Contributors
                    </Typography>
                  </div>
                  <div className={classes.detailGroup}>
                    <Typography
                      variant="ideaStats"
                      className={classes.greenText}
                      style={{
                        fontSize: "1.5rem",
                        marginTop: "0.7rem",
                        color: "#D3FFD0",
                      }}
                    >
                      10 ETH
                    </Typography>
                    <Typography
                      variant="ideaStats"
                      style={{ fontWeight: "500", marginTop: "0" }}
                    >
                      Total Profit Till date
                    </Typography>
                  </div>
                </div>
                <img
                  style={{ width: "100%", marginTop: "3rem" }}
                  src={"/assets/desktop/AnalyzedViewPart.svg"}
                />
              </TabPanel>
              <TabPanel value="2">
                <div className={classes.yourLatestSection}>
                  <Typography
                    variant="heading"
                    className={classes.yourLatestHeading}
                  >
                    Your Latest Campaign Invest
                  </Typography>
                  <CampaignCard page="dashboard" index={0} />
                </div>
                <Link
                  style={{ textDecoration: "none" }}
                  href={"/dashboard/contributor/contributions"}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.viewAll}
                  >
                    View All Investments
                  </Button>
                </Link>
              </TabPanel>
            </TabContext>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContributorDashboardComp;
