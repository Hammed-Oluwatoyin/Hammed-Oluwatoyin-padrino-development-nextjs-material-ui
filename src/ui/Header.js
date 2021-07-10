import React, { useState, useEffect, useMemo } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.svg";
import Link from "../src/Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  tabContainer: {
    marginLeft: "auto",
  },

  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },

  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",

    height: "45px",
    "&:hover": {
      color: "white",
      backgroundColor: "black",
    },
  },

  menu: {
    backgroundColor: theme.palette.common.lightPink,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: `${theme.palette.common.black}`,
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  drawer: {
    backgroundColor: theme.palette.common.lightPink,
  },

  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      color: theme.palette.common.white,
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.common.black,
    },
  },
  drawerItemSelected: {
    opacity: 1,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (newValue) => {
    props.setValue(newValue);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (event, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(i);
  };

  const expensiveMenuOptions = useMemo(
    () => [
      {
        name: "Services",
        link: "/services",
        activeIndex: 1,
        selectedIndex: 0,
      },
      {
        name: "Custom Software Development",
        link: "/customsoftware",
        activeIndex: 1,
        selectedIndex: 1,
      },
      {
        name: "IOS/Android App Development",
        link: "/mobileapps",
        activeIndex: 1,
        selectedIndex: 2,
      },
      {
        name: "Website Development",
        link: "/websites",
        activeIndex: 1,
        selectedIndex: 3,
      },
    ],
    []
  );

  const routes = useMemo(
    () => [
      { name: "Home", link: "/", activeIndex: 0 },
      {
        name: "Services",
        link: "/services",
        activeIndex: 1,
        ariaOwns: anchorEl ? "simple-menu" : undefined,
        ariaPopup: anchorEl ? "true" : undefined,
        mouseOver: (event) => handleClick(event),
      },
      {
        name: "The Revolution",
        link: "/revolution",
        activeIndex: 2,
      },
      {
        name: "About Us",
        link: "/about",
        activeIndex: 3,
      },
      {
        name: "Contact Us",
        link: "/contact",
        activeIndex: 4,
      },
    ],
    [anchorEl]
  );

  useEffect(() => {
    [...expensiveMenuOptions, ...routes].forEach((route, index) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          props.setValue(5);
          break;
        default:
          break;
      }
    });
  }, [props.value, expensiveMenuOptions, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        onChange={handleChange}
        value={props.value}
        className={classes.tabContainer}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        className={classes.button}
        component={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        onClick={() => props.setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={() => {
          handleClose();
        }}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {expensiveMenuOptions.map((option, i) => (
          <MenuItem
            key={option.name}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              props.setValue(1);
              handleClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route.name}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={props.value === route.activeIndex}
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(route.activeIndex);
              }}
            >
              <ListItemText
                className={
                  props.value === route.activeIndex
                    ? [classes.drawerItem, classes.drawerItemSelected].join(" ")
                    : classes.drawerItem
                }
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
            component={Link}
            divider
            button
            to="/estimate"
            className={classes.drawerItemEstimate}
            selected={props.value === 5}
          >
            <ListItemText
              disableTypography
              className={
                props.value === 5
                  ? [classes.drawerItem, classes.drawerItemSelected].join(" ")
                  : classes.drawerItem
              }
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              disableRipple
              onClick={() => {
                setOpenDrawer(false);
                props.setValue(0);
              }}
              className={classes.logoContainer}
            >
              <img
                alt="company logo"
                className={classes.logo}
                src="/assets/logo.svg"
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
