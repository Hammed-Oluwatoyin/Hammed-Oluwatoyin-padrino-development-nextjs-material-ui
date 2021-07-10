import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "../src/Link";
import footerAdornment from "../../assets/Footer Adornment.svg";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.lightPink,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "13em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "black",
    fontFamily: "Arial",
    fontSize: "0.95rem",
    fontWeight: "bold",
    textDecoration: "none",
  },

  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          direction="row"
          justify="center"
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(0)}
                href="/"
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                href="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                component={Link}
                href="/customsoftware"
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                href="/mobileapps"
                className={classes.link}
              >
                IOS/Android App Development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                className={classes.link}
                to="/websites"
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                className={classes.link}
                href="/revolution"
              >
                The Revolution
              </Grid>
              <Grid
                item
                onClick={() => props.setValue(2)}
                component={Link}
                className={classes.link}
                to="/revolution"
              >
                Vision
              </Grid>
              <Grid
                item
                onClick={() => props.setValue(2)}
                component={Link}
                className={classes.link}
                href="/revolution"
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(2)}
                className={classes.link}
                href="/revolution"
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(3)}
                className={classes.link}
                to="/about"
              >
                About Us
              </Grid>
              <Grid
                item
                onClick={() => props.setValue(3)}
                component={Link}
                className={classes.link}
                href="/about"
              >
                History
              </Grid>
              <Grid
                onClick={() => props.setValue(3)}
                item
                component={Link}
                className={classes.link}
                href="/about"
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => props.setValue(4)}
                className={classes.link}
                href="/contact"
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <Grid item>
        <img
          alt="black decorative slash"
          src={footerAdornment}
          className={classes.adornment}
        />
      </Grid>

      <Grid item>
        <Grid
          container
          flex-direction="row"
          justify="flex-end"
          spacing={2}
          className={classes.socialContainer}
        >
          <Grid
            item
            component={"a"}
            href="https://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="facebook logo"
              src="/assets/facebook.svg"
              className={classes.icon}
            />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="twitter logo"
              src="/assets/twitter.svg"
              className={classes.icon}
            />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              alt="instagram logo"
              src="/assets/instagram.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
