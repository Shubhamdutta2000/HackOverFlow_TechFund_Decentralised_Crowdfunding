import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import NavLogo from "../public/assets/NavLogo.svg";

import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useMediaQuery } from "@mui/material";

import { useStyles } from "../styles/Navbar.style.js";

export default function Navbar(props) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:768px)");

  const [hamburger, setHamburger] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setHamburger({ ...hamburger, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Learn", "Contribute", "Discover", "Login"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <div className={classes.navbar}>
        <Toolbar
          style={{
            padding: "1.1rem 0",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className={classes.navLogo}>
            <Link href="/">
              <Image src={NavLogo} alt="Picture of the author" />
            </Link>
          </div>
          {!isMobile ? (
            <div className={classes.allNavItems}>
              {/* ---------------Desktop View Nav items-------------------------- */}
              <Link href="/" style={{ textDecoration: "none" }}>
                <Typography variant="description" className={classes.navItems}>
                  Learn
                </Typography>
              </Link>

              <Link href="/about-us" style={{ textDecoration: "none" }}>
                <Typography variant="description" className={classes.navItems}>
                  Contribute
                </Typography>
              </Link>

              <Link href="/pricing" style={{ textDecoration: "none" }}>
                <Typography variant="description" className={classes.navItems}>
                  Discover
                </Typography>
              </Link>

              <Link href="/pricing" style={{ textDecoration: "none" }}>
                <Button
                  variant="description"
                  className={classes.navItems_Login}
                >
                  Login
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div>
                <>
                  <Button onClick={toggleDrawer("right", true)}>
                    <MenuIcon color="alternate" className={classes.hamIcon} />
                  </Button>
                  <SwipeableDrawer
                    anchor={"right"}
                    open={hamburger["right"]}
                    onClose={toggleDrawer("right", false)}
                    onOpen={toggleDrawer("right", true)}
                  >
                    {list("right")}
                  </SwipeableDrawer>
                </>
              </div>
              {/* ---------------------------------FOR MOBILE VIEW----------------------------------- */}
            </>
          )}
        </Toolbar>
      </div>
    </>
  );
}
