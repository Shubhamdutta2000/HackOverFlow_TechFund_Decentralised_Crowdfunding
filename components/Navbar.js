import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import NavLogo from "../public/assets/NavLogo.svg";

import {
  Box,
  Toolbar,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useMediaQuery } from "@mui/material";

import { useStyles } from "../styles/Navbar.style.js";
import { useMoralis } from "react-moralis";

export default function Navbar(props) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const { logout, isAuthenticated, user } = useMoralis();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [hamburger, setHamburger] = useState({
    right: false,
  });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = () => {
    if (isAuthenticated) {
      logout();
      localStorage.removeItem("user");
    }
  };

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

              <Link href="/ideas" style={{ textDecoration: "none" }} >
                <Typography variant="description" className={classes.navItems}>
                  Discover
                </Typography>
              </Link>

              {!isAuthenticated ? (
                //If user is not authenticated
                <Link href="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="description"
                    className={classes.navItems_Login}
                  >
                    Login
                  </Button>
                </Link>
              ) : (
                // if user is authenticated
                <Box sx={{
                  flexGrow: 0
                }}>
                  <Tooltip title="Profile">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt={user && user.get('username')} src="/static/images/avatar/2.jpg" />
                      <Typography variant="description" className={classes.navItems} style={{ marginLeft: "0.48rem" }} textAlign="center">{user && user.get('username')}</Typography>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Link href={`/dashboard/${user.get('userType')}`} style={{ textDecoration: "none" }}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Dashboard</Typography>
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={logoutHandler}>
                      <Typography
                        textAlign="center"
                      >
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
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
