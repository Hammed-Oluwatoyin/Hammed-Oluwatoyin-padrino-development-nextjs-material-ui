import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../src/Link";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../src/ui/ButtonArrow";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "pacifico",
    color: theme.palette.common.lightPink,
  },
  subtitle: {
    marginBottom: "1em",
  },

  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },

  serviceContainer: {
    marginTop: "10em",

    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },

  learnButton: {
    ...theme.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));

export default function Services(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const { setValue, setSelectedIndex } = props;

  return (
    <Grid container direction="column">
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h2"
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      {/* {-----IOS/Android App  Block Start} */}
      <Grid item>
        {" "}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">IOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              href="/mobileapps"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.black}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              alt="mobile phone icon"
              src="/assets/mobileIcon.svg"
              className={classes.icon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* {-----IOS/ANDROID Block End} */}
      {/* {-----Custom Software Block Start} */}
      <Grid item>
        {" "}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time, SaveMoney.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              href="/customsoftware"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.black}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom software icon"
              src="/assets/customSoftwareIcon.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* {-----Custom Software Block end} */}
      {/* {-----Website Block Start} */}
      <Grid item>
        {" "}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed
            </Typography>
            <Button
              variant="outlined"
              component={Link}
              href="/websites"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.black}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              alt="website icon"
              src="/assets/websiteIcon.svg"
              className={classes.icon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* {-----Website Block end} */}
    </Grid>
  );
}
