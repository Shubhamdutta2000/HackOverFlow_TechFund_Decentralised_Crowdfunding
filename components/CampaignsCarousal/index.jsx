import { Typography } from "@mui/material";
import { useStyles } from "styles/RelatedCampaigns/RelatedCampaigns.style";
// import Carousel from 'react-elastic-carousel'

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
            style={{ backgroundColor: bgColor, color: color }}
            className={classes.container}
        >
            <Typography
                style={{
                    marginBottom: "2rem",
                }}
                component={"h1"}
                variant="heading"
            >
                {heading}
            </Typography>

            <AliceCarousel
                mouseTracking
                items={campaigns}
                responsive={responsive}
            // controlsStrategy="alternate"
            />
        </div>
    );
};

export default CampaignCarousal;
