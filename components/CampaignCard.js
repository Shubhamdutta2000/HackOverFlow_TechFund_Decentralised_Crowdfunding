import React from 'react'
import { Typography, Box, Card } from "@mui/material";
import { useStyles } from "styles/RelatedCampaigns/RelatedCampaigns.style";
import Image from 'next/image';
import LatestPic from "../public/assets/desktop/DiscoverCardIdeaCoverImg.png"

export default function CampaignCard({ page, innovator }) {
    const classes = useStyles();

    return (
        <Card style={{ width: page === "dashboard" && "100%" }} className={classes.yourLatestCard}>
            <Box
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0",
                    margin: "0",
                }}
            >
                <div className={classes.yourLatestPicDiv}>
                    <Image
                        src={LatestPic}
                        height={page === "dashboard" ? innovator === "true" ? '1800' : '1450' : "860"}
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
                        style={{ fontSize: page === "dashboard" && '1rem' }}
                        className={classes.yourLatestBadge}
                    >
                        Design
                    </Typography>
                    <Typography
                        variant="description"
                        style={{ fontSize: page === "dashboard" && '1.8vw' }}
                        className={classes.yourLatestCardHeading}
                        component="div"

                    >
                        Learn Web 3.0
                    </Typography>
                    <Typography
                        variant="description"
                        style={{ fontSize: page === "dashboard" && '1vw' }}
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
                            style={{ fontSize: page === "dashboard" && '0.9vw' }}
                        >
                            @ Stylercross Pvt. Ltd.
                        </Typography>
                    </div>

                    {/* Black Part */}
                    <div className={classes.details}>
                        <div className={classes.detailGroup}>
                            <Typography style={{ fontSize: "16px" }} variant="ideaStats" className={classes.greenText}>
                                2 ETH
                            </Typography>
                            <Typography style={{ fontSize: "18px" }} variant="ideaStats">raised of 5 ETH</Typography>
                        </div>
                        <div className={classes.detailGroup}>
                            <Typography style={{ fontSize: "16px" }} variant="ideaStats" className={classes.greenText}>
                                12
                            </Typography>
                            <Typography style={{ fontSize: "18px" }} variant="ideaStats">contributors</Typography>
                        </div>
                        {page !== "dashboard" &&
                            <div className={classes.detailGroup}>
                                <Typography style={{ fontSize: "16px" }} variant="ideaStats" className={classes.redText}>
                                    1hr 30min 45sec
                                </Typography>
                                <Typography style={{ fontSize: "18px" }} variant="ideaStats">Ending in</Typography>
                            </div>
                        }
                    </div>
                </div>
            </Box>
        </Card>
    )
}
