import Layout from "layout/Layout"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Grid, Typography } from "@mui/material"
import { useStyles } from "../../../../styles/viewIdeasInnovator.style";
import CampaignCard from "components/CampaignCard";

const InnovatorIdeas = () => {
    const classes = useStyles()
    const router = useRouter()

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user")).isAuthenticated
            : false
        if (!isAuthenticated) {
            router.push("/login")
        }
    }, [router])

    const ideas = [
        <CampaignCard page="dashboard" index={0} key={1} />,
        <CampaignCard page="dashboard" index={1} key={2} />,
        <CampaignCard page="dashboard" index={2} key={3} />
    ]


    return (
        <Layout>
            <div className={classes.container}>
                <Typography variant="heading" className={classes.ideaHeading}>
                    Your Ideas
                </Typography>
                <Typography
                    variant="description"
                    className={classes.ideaDescription}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
                    dolor sit amet.
                </Typography>

                <Grid container spacing="30" style={{ paddingBottom: '4rem' }}>
                    {ideas && ideas.map((idea) => (
                        <Grid item md={6} xs={12}>
                            {idea}
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Layout >
    )
}

export default InnovatorIdeas
