import Link from "next/link";
import Head from "next/head";
import { useState } from "react";

import {
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuIcon,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useMediaQuery } from "@mui/material";

import { useStyles } from "../styles/Navbar.style.js";

export default function Navbar(props) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [toggle, setToggle] = useState(false);

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
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

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div style={{ backgroundColor: "grey", padding: "0 7.5rem" }}>
        <Toolbar style={{ padding: "1.1rem 0" }}>
          <Link href="/">
            <img src="abcd" className={classes.navLogo} alt="nav logo" />
          </Link>
          {!isMobile ? (
            <div className={classes.allNavItems}>
              {/* ---------------Desktop View Nav items-------------------------- */}
              <Link href="/learn" style={{ textDecoration: "none" }}>
                <Typography variant="description" className={classes.navItems}>
                  Learn
                </Typography>
              </Link>

              <Link href="/ideas/:id" style={{ textDecoration: "none" }}>
                <Typography variant="description" className={classes.navItems}>
                  Contribute
                </Typography>
              </Link>

              <Link href="/ideas" style={{ textDecoration: "none" }}>
                <Typography variant="description" className={classes.navItems}>
                  Discover
                </Typography>
              </Link>

              <Link href="/login" style={{ textDecoration: "none" }}>
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
                {["left", "right", "top", "bottom"].map((anchor) => (
                  <>
                    <Button onClick={toggleDrawer(anchor, true)}>
                      {anchor}
                    </Button>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </>
                ))}
              </div>
              {/* ---------------------------------FOR MOBILE VIEW----------------------------------- */}
            </>
          )}
        </Toolbar>
      </div>
    </>
  );
}
