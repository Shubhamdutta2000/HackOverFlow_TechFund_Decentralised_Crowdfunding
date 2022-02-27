import Link from "next/link";
import Image from "next/image";

import { Grid, Container, Typography, useMediaQuery } from "@mui/material";

import NavLogo from "../public/assets/NavLogo.svg";
import FooterBgDesktop from "../public/assets/desktop/FooterBg.png";
import FooterBgmobile from "../public/assets/mobile/MobileFooterBg.png";
import { useStyles } from "../styles/Footer.style.js";

export default function Footer() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div
      className={classes.footer}
      style={{
        position: "relative",
        backgroundImage: !isMobile
          ? `url("assets/desktop/FooterBg.png")`
          : `url("assets/mobile/MobileFooterBg.png")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className={classes.footerBg}>
        <Image
          src={!isMobile ? FooterBgDesktop : FooterBgmobile}
          alt="FooterBg"
        />
      </div> */}

      <Grid container className={classes.footerLinksContainer}>
        {/* Navigate Part */}
        <ul className={classes.footerLinks_ul}>
          <Typography variant="heading" className={classes.footer_heading}>
            Navigate
          </Typography>
          <li className={classes.footerLinks}>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography variant="description">Home</Typography>
            </Link>
          </li>
          <li className={classes.footerLinks}>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography variant="description">About Us</Typography>
            </Link>
          </li>
          <li className={classes.footerLinks}>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography variant="description">Login</Typography>
            </Link>
          </li>
          <li className={classes.footerLinks}>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography variant="description">Careers</Typography>
            </Link>
          </li>
        </ul>

        {/* Need Help part */}
        <ul className={classes.footerLinks_ul}>
          <Typography variant="heading" className={classes.footer_heading}>
            Need Help?
          </Typography>
          <li className={classes.footerLinks}>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography variant="description">Contact Us</Typography>
            </Link>
          </li>
          <li className={classes.footerLinks}>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography variant="description">Research</Typography>
            </Link>
          </li>
        </ul>

        {/* Legal Part */}
        <ul className={classes.footerLinks_ul}>
          <Typography variant="heading" className={classes.footer_heading}>
            Legal
          </Typography>
          <li className={classes.footerLinks}>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography variant="description">Terms of Use</Typography>
            </Link>
          </li>
          <li className={classes.footerLinks}>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography variant="description">Trust & Safety</Typography>
            </Link>
          </li>
          <li className={classes.footerLinks}>
            <Link href="#" style={{ textDecoration: "none" }}>
              <Typography variant="description">Privacy Policy</Typography>
            </Link>
          </li>
        </ul>
      </Grid>
      {/* Logo */}
      <Container maxwidth="xl" className={classes.footerLogoPart}>
        <div align="right" className={classes.footerLogo}>
          <Link href="/">
            <Image src={NavLogo} alt="Logo" />
          </Link>
        </div>

        <hr className={classes.footer__horizontalLine}></hr>

        <Typography
          variant="description"
          className={classes.footer_rightsReserved}
        >
          All rights reserved — 2022 © TechFund
        </Typography>
      </Container>
    </div>
  );
}
