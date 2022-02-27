import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
} from "@mui/material";

//Components
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import DiscoverCard from "../components/DiscoverCard.js";

//Assets
import HeroBgDesktop from "../public/assets/desktop/HeroBlackBg3.png";
import HeroBgMobile from "../public/assets/mobile/MobileHeroBlackBg.png";
import Section01Img from "../public/assets/desktop/Section01Img.png";
import Section02Img from "../public/assets/desktop/Section02Img.png";
import InvestBgImg from "../public/assets/desktop/InvestBgImg.png";
import OurVisionImg from "../public/assets/desktop/OurVisionImg.png";

import styles from "../styles/Home.module.css";
import { useStyles } from "../styles/Home.style.js";

export default function Home() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:768px)");
  const router = useRouter();

  const responsive = {
    428: { items: 1 },
    768: { items: 2 },
    1024: { items: 4 },
  };

  const items = [
    <DiscoverCard />,
    <DiscoverCard />,
    <DiscoverCard />,
    <DiscoverCard />,
    <DiscoverCard />,
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>TechFund</title>
        <meta
          name="description"
          content="An evolutionary ecosystem that uses decentralization to connect contributors with innovators, ultimately making new business ideas touch the moon."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar path={router.pathname} />

        {/* Hero */}
        <div className={classes.fullHero}>
          <div className={classes.heroBg}>
            <Image
              src={!isMobile ? HeroBgDesktop : HeroBgMobile}
              alt="HeroBg"
              quality={100}
            />
          </div>

          <Typography variant="heading" className={classes.heroHeading}>
            Fund the most innovative tech projects
          </Typography>
          <Typography variant="description" className={classes.heroDescription}>
            An evolutionary ecosystem that uses decentralization to connect
            contributors with innovators, ultimately making new business ideas
            touch the moon.
          </Typography>

          <Grid container maxwidth="xl" className={classes.heroButtons}>
            <Grid item md={6} align="center">
              <Link href="/">
                <Button
                  className={clsx(classes.heroBtn, classes.heroBtn_discover)}
                >
                  Discover ideas
                </Button>
              </Link>
            </Grid>
            <Grid item md={6} align="center">
              <Link href="/">
                <Button
                  className={clsx(classes.heroBtn, classes.heroBtn_getStarted)}
                >
                  Get started
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>

        {/* Steps */}
        {/* 1st Section */}
        <Grid container style={{ marginTop: "-3vw", paddingBottom: "2vw" }}>
          <Grid item md={6} align="center">
            <div className={classes.section01Img}>
              <Image src={Section01Img} alt="Section01Img" quality={100} />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.sectionContentDiv}>
              <Typography className={classes.sectionNumber}>01</Typography>
              <Typography variant="heading" className={classes.sectionHeading}>
                Make your tech ideas liftoff with our help
              </Typography>
              <Typography
                variant="description"
                className={classes.sectionDescription}
              >
                We respect your innovating decisions. That’s why we offer you
                full support to make your ideas turn into real life business
                giants.
              </Typography>
              <hr className={classes.sectionHorizontalLine} />
            </div>
          </Grid>
        </Grid>

        {/* 2nd Section */}
        <Grid container style={{ marginTop: "5vw", paddingBottom: "2vw" }}>
          <Grid item md={6}>
            <div className={classes.section02ContentDiv}>
              <Typography className={classes.sectionNumber}>02</Typography>
              <Typography variant="heading" className={classes.sectionHeading}>
                Decentralized -Security at it’s Best
              </Typography>
              <Typography
                variant="description"
                className={classes.section02Description}
              >
                We verify every innovator and contributor <br /> before they
                start using our product. Decentralized encryption, verified
                users, 100% foolproof.
              </Typography>
              <hr className={classes.section02HorizontalLine} />
              <Link href="/">
                <Button className={classes.sectionContributorBtn}>
                  Become a Contributor
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item md={6} align="center">
            <div className={classes.section02Img}>
              <Image src={Section02Img} alt="Section02Img" quality={100} />
            </div>
          </Grid>
        </Grid>

        {/* Invest Section */}
        <div>
          <div
            className={classes.investSection}
            style={{
              backgroundImage: "url(" + "assets/desktop/InvestBgImg.png" + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                position: "relative",
                top: "0",
                left: "11.8vw",
                width: "88%",
              }}
            >
              <Typography
                variant="heading"
                className={classes.investSectionHeading}
              >
                Invest in minds. Invest for the future.
              </Typography>
              <div
                style={{
                  position: "relative",
                  top: "8.3vw",
                  marginBottom: "3rem",
                }}
              >
                <AliceCarousel
                  mouseTracking
                  items={items}
                  responsive={responsive}
                  // controlsStrategy="alternate"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision */}
        <Grid container style={{ paddingBottom: "2vw" }}>
          <Grid item md={6} align="center">
            <div className={classes.ourVisionImg}>
              <Image src={OurVisionImg} alt="OurVisionImg" />
            </div>
          </Grid>
          <Grid item md={6}>
            <div className={classes.ourVisionContentDiv}>
              <Typography className={classes.sectionNumber}>
                Our Vision
              </Typography>
              <Typography variant="heading" className={classes.sectionHeading}>
                Our goal is make ideas stand out.
              </Typography>
              <Typography
                variant="description"
                className={classes.sectionDescription}
              >
                We are here to clear a path so that new business ideas can come
                through. Once you contribute, you get the chance to be a part of
                a greater evergrowing universe.
              </Typography>
            </div>
          </Grid>
        </Grid>

        {/* Newsletter */}
        <Grid container style={{ margin: "5.5vw 0", paddingBottom: "2vw" }}>
          <Grid item md={8}>
            <div className={classes.newsletterContentDiv}>
              <Typography
                variant="heading"
                className={classes.newsletterHeading}
              >
                Get notified when something crazily brilliant happens.
              </Typography>
              <Typography
                variant="description"
                className={classes.newsletterDescription}
              >
                Join the newsletter and stay updated on new features and
                tutorials.
              </Typography>
            </div>
          </Grid>
          <Grid item md={4} align="left">
            <div
              align="right"
              maxwidth="xl"
              style={{ position: "relative", width: "69%" }}
            >
              <TextField
                className={classes.newsletterTextField}
                placeholder="example@domain.com"
              />
              <Button className={classes.subscribeBtn}>Subscribe</Button>
            </div>
          </Grid>
        </Grid>

        <Footer />
      </main>
    </div>
  );
}
