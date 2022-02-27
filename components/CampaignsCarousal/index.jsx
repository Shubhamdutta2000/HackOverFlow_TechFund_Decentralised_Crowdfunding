import { Typography } from "@mui/material";
import { useStyles } from "styles/RelatedCampaigns/RelatedCampaigns.style";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import DiscoverCard from "components/DiscoverCard";

const CampaignCarousal = ({ color, bgColor, heading }) => {
    const classes = useStyles();

    const responsive = {
        428: { items: 1 },
        768: { items: 2 },
        1024: { items: 4 },
    };

    const campaigns = [
        <DiscoverCard />,
        <DiscoverCard />,
        <DiscoverCard />,
        <DiscoverCard />,
        <DiscoverCard />,
    ];

    return (
        <div
            style={{
                position: 'relative',
                backgroundColor: bgColor, 
                background: (heading === "Newest Campaigns") && 'url("assets/desktop/ListAllProj_NewestCampaignBg.png")',
                color: color, 
                top: (heading === "Newest Campaigns") ? "6.5vw" : "0",
                zIndex: (heading === "Newest Campaigns") ? "-1" : "0"
            }}
            className={classes.container}
        >
            <Typography
                style={{
                    position: "relative",
                    top: (heading === "Newest Campaigns") ? "-8vw" : "0",
                    marginBottom: "2rem",
                    color: heading==="Newest Campaigns" ? "#333CFF" : "#FFFCDC"
                }}
                component={"h1"}
                variant="heading"
            >
                {heading}
            </Typography>

            <div style={{
                position: "relative",
                width: "95%",
                top: (heading === "Newest Campaigns") ? "-8vw" : "0",
            }}>
                <AliceCarousel
                    mouseTracking
                    items={campaigns}
                    responsive={responsive}
                    // controlsStrategy="alternate"
                />
            </div>
        </div>
    );
};

export default CampaignCarousal;
