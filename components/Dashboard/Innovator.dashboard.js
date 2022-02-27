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
    CardActions,
    CardContent,
} from "@mui/material";

import DashboardCoverImg from "../../public/assets/desktop/DashboardCoverImg.png";
import UserPic from "../../public/assets/desktop/InnovatorProfileImg.png";
import Graph from "../../public/assets/desktop/InnovatorGraphImg.png";
import Metamask from "../../public/assets/desktop/MetamaskImg.png";

import { useStyles } from "../../styles/contributorDashboard.style";

const InnovatorDashboardComp = () => {
    const classes = useStyles();
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Image
                src={DashboardCoverImg}
                alt="DashboardImg"
                height={"200"}
            ></Image>

            <Grid container className={classes.container}>
                {/* Left side card */}
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    display="flex"
                    justifyContent="flex-start"
                >
                    <Card sx={{ maxWidth: 345 }}>
                        <Image src={UserPic} alt="User Image"></Image>
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

                {/* Right side tab */}
                <Grid item md={7} sm={12} xs={12}>
                    <Box sx={{ width: "100%", typography: "body1" }}>
                        <TabContext value={value}>
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
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Grid
                                    style={{ marginTop: "0.5rem" }}
                                    spacing={"20"}
                                    container
                                >
                                    <Grid className={classes.details} item md={9} xs={12}>
                                        <div className={classes.detailGroup}>
                                            <Typography
                                                variant="ideaStats"
                                                style={{
                                                    marginRight: "4rem",
                                                }}
                                                className={classes.greenText}
                                            >
                                                8
                                            </Typography>
                                            <Typography variant="ideaStats">Total Ideas</Typography>
                                        </div>
                                        <div className={classes.detailGroup}>
                                            <Typography
                                                variant="ideaStats"
                                                className={classes.greenText}
                                            >
                                                12
                                            </Typography>
                                            <Typography variant="ideaStats">
                                                Total Contributors
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item md={3} xs={12}>
                                        <Image src={Metamask} alt="Metamask"></Image>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            sx={{
                                                fontFamily: "'Euclid Circular A', sans-serif",
                                                borderRadius: "100rem",
                                                fontSize: "0.9vw",
                                                color: "#fff",
                                            }}
                                        >
                                            Post a new Idea
                                        </Button>
                                    </Grid>
                                </Grid>

                                <Grid spacing={"20"} style={{ marginTop: "4rem" }} container>
                                    <Grid item md={5} xs={12}>
                                        <Card elevation={'8'} sx={{ maxWidth: 300 }}>
                                            <CardContent sx={{ padding: "1.6rem" }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    View All Ideas
                                                </Typography>
                                                <Typography variant="heading" color="text.secondary">
                                                    Take a look back to see how much contributors
                                                    invested in your ideas
                                                </Typography>
                                            </CardContent>
                                            <CardActions style={{ backgroundColor: "#141414", height: "5rem", padding: "1rem" }}>
                                                <Button
                                                    variant="outlined"
                                                    sx={{
                                                        fontFamily: "'Euclid Circular A', sans-serif",
                                                        borderRadius: "100rem",
                                                        fontSize: "0.9vw",
                                                        color: "#fff",
                                                        borderRadius: '18px',
                                                        border: "3px solid #fff",
                                                        marginLeft: "75%"
                                                    }}
                                                >
                                                    View
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                    <Grid item md={7} xs={12}>
                                        <Image src={Graph} alt="Graph"></Image>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default InnovatorDashboardComp;
