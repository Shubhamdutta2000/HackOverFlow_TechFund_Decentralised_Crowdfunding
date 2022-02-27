import React from 'react'
import Image from "next/image";
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import {
    Grid,
    Box,
    Tab,
    TabPanel,
    Tabs,
    Typography,
    TextField,
    Button,
    useMediaQuery,
    Card,
    CardActions,
    CardContent,
} from "@mui/material";

import DashboardCoverImg from '../../public/assets/desktop/DashboardCoverImg.png'
import UserPic from '../../public/assets/desktop/InnovatorProfileImg.png'
import Graph from "../../public/assets/desktop/InnovatorGraphImg.png"
import Metamask from "../../public/assets/desktop/MetamaskImg.png"

import { useStyles } from '../../styles/contributorDashboard.style'

const InnovatorDashboardComp = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <main style={classes.main}>
                <Grid container>
                    <div>
                        <Grid item>
                            <Image
                                src={DashboardCoverImg}
                                alt="DashboardImg"
                            >
                            </Image>
                        </Grid>
                    </div>
                    <div>
                        <Grid item xs={12} sm={12} md={6} display="flex" justifyContent="flex-end">
                            <Card sx={{ maxWidth: 345 }}>
                                <Image
                                    src={UserPic}
                                    alt="User Image"
                                ></Image>
                                <CardContent>
                                    <Typography gutterBottom variant="h4" component="div">
                                        John Doe
                                    </Typography>
                                    <Typography gutterBottom variant="h12" component="div">
                                        johndoe@example.com
                                    </Typography>
                                    <Typography className={classes.roleContent}>
                                        Contributor
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Bio
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} justifyContent="flex-start">
                            <Image
                                src={Graph}
                                alt="Graph"
                            ></Image>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} display="flex" justifyContent="flex-end">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardContent>
                                    <Typography className={classes.roleContent}>
                                        Contributor
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Bio
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} justifySelf="right">
                            <Image
                                src={Metamask}
                                alt="Metamask"
                            >
                            </Image>
                        </Grid>
                        <Grid xs={12} sm={12} md={6} className={classes.details} display="flex" justifyContent="flex-end">
                            <div className={classes.detailGroup}>
                                <Typography variant='ideaStats' className={classes.greenText}>
                                    2 ETH
                                </Typography>
                                <Typography variant='ideaStats'>raised of 5 ETH</Typography>
                            </div>
                            <div className={classes.detailGroup}>
                                <Typography variant='ideaStats' className={classes.greenText}>
                                    12
                                </Typography>
                                <Typography variant='ideaStats'>backers</Typography>
                            </div>
                            <div className={classes.detailGroup}>
                                <Typography variant='ideaStats' className={classes.redText}>
                                    1hr 30min 45sec
                                </Typography>
                                <Typography variant='ideaStats'>Ending in</Typography>
                            </div>
                        </Grid>
                    </div>
                </Grid>
            </main>
        </div>
    )
}

export default InnovatorDashboardComp