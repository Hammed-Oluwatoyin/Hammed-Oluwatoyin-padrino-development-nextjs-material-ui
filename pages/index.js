import React from "react";
import Lottie from "react-lottie";
import Link from "../src/Link";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../src/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import Head from "next/head";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import CallToAction from "../src/ui/CallToAction";

import landingAnimationData from "../public/animations/landinganimation/data.json";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "20em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "22em",
    },
  },

  buttonContainer: {
    marginTop: "1em",
  },

  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.lightPink,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: "black",
      color: "pink",
    },
  },
  learnButtonHero: {
    ...theme.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
    "&:hover": {
      backgroundColor: "black",
      color: "white",
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
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },

  heroTextContainer: {
    minWidth: " 21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
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
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },

  revolutionBackground: {
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoBackground: {
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },

  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
}));

export default function LandingPage(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { setValue, setSelectedIndex } = props;

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites | Padrino Development
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!"
        />
        <meta
          property="og:title"
          content="Bringing High Fidelity Technology to the West Africa | Padrino Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="padrino.vercel.app" />
        <link rel="canonical" key="canonical" href="padrino.vercel.app" />
      </Head>
      <Grid item>
        {/* {-----Hero Block------} */}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing High Fidelity Technology
              <br /> to the West Africa
            </Typography>
            <Grid
              container
              className={classes.buttonContainer}
              justify="center"
            >
              <Grid item>
                <Button
                  style={{ textDecoration: "none" }}
                  component={Link}
                  href="/estimate"
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={{ textDecoration: "none" }}
                  className={classes.learnButtonHero}
                  component={Link}
                  href="/revolution"
                  variant="outlined"
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.black}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
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
              style={{ textDecoration: "none" }}
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
            <LazyLoadImage
              alt="custom software icon"
              src="/assets/customSoftwareIcon.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* {-----Custom Software Block end} */}

      {/* {-----IOS/Android App  Block Start} */}
      <Grid item>
        {" "}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
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
              style={{ textDecoration: "none" }}
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
            <LazyLoadImage
              alt="mobile phone icon"
              src="/assets/mobileIcon.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* {-----IOS/ANDROID Block End} */}
      {/* {-----Website Block Start} */}
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
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed
            </Typography>
            <Button
              style={{ textDecoration: "none" }}
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
          <Grid item>
            <LazyLoadImage
              alt="website icon"
              src="/assets/websiteIcon.svg"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* {-----Website Block end} */}
      {/* {-----Revolution Block Start} */}
      <Grid item>
        <Grid
          container
          style={{ height: "100em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                    style={{ textDecoration: "none" }}
                    className={classes.learnButtonHero}
                    variant="outlined"
                    component={Link}
                    href="/revolution"
                    onClick={() => {
                      setValue(2);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.black}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <LazyLoadComponent threshold={500}>
            <div className={classes.revolutionBackground} />
          </LazyLoadComponent>
        </Grid>
      </Grid>
      {/* {-----Revolution Block end} */}
      {/* {-----Information Block Start} */}
      <Grid item>
        <Grid
          container
          style={{ height: "80em" }}
          alignItems="center"
          direction="row"
        >
          <Grid item>
            <Grid
              container
              style={{
                position: "absolute",
                textAlign: matchesXS ? "center" : "inherit",
              }}
              direction={matchesXS ? "column" : "row"}
            >
              <Grid
                item
                sm
                style={{
                  marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                }}
              >
                <Grid
                  container
                  style={{ marginBottom: matchesXS ? "10em" : 0 }}
                  direction="column"
                >
                  <Typography variant="h2" style={{ color: "black" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      style={{ textDecoration: "none" }}
                      variant="outlined"
                      component={Link}
                      href="/about"
                      className={classes.learnButton}
                      onClick={() => setValue(3)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.black}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                style={{
                  marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid container direction="column">
                  <Typography variant="h2" style={{ color: "black" }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      style={{ textDecoration: "none" }}
                      component={Link}
                      href="/contact"
                      variant="outlined"
                      className={classes.learnButton}
                      onClick={() => setValue(4)}
                    >
                      <span style={{ marginRight: 10 }}>Learn More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.black}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <LazyLoadComponent threshold={700}>
            <div className={classes.infoBackground} />
          </LazyLoadComponent>
        </Grid>
      </Grid>

      {/* {-----Information Block end} */}
      {/* {-----Call To Action Block Start} */}
      <Grid item>
        <LazyLoadComponent threshold={700}>
          <CallToAction setValue={setValue} />
        </LazyLoadComponent>
      </Grid>

      {/* {-----Call To Action Block end} */}
    </Grid>
  );
}
