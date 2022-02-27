import { Typography } from "@mui/material";
import { useStyles } from "styles/IndividualIdea/RelatedCampaigns/RelatedCampaigns.style";
import Carousel from 'react-elastic-carousel'
import DiscoverCard from "components/DiscoverCard";

const CampaignCarousal = ({ heading }) => {
    const classes = useStyles();
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 3 },
        { width: 768, itemsToShow: 4 }
    ]

    const campaigns = [1, 2, 3, 4]

    return (
        <div className={classes.container}>
            <Typography component={'h1'} className={classes.campaignHeader} variant='heading' >
                {heading}
            </Typography>
            <Carousel infinite breakPoints={breakPoints}>
                {campaigns.map((testimonial) => {
                    return (
                        <DiscoverCard />
                    )
                })}
            </Carousel>

        </div>
    )
}

export default CampaignCarousal