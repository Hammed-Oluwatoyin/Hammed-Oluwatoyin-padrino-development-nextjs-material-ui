import React from "react";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import Head from "next/head";
import documentsAnimation from "../public/animations/documentsAnimation/data";
import scaleAnimation from "../public/animations/scaleAnimation/data";
import automationAnimation from "../public/animations/automationAnimation/data";
import uxAnimation from "../public/animations/uxAnimation/data";
import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uXOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software Development and Design - Free Estimate
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          content="Bringing High Fidelity Technology to the West Africa | Custom Software Development"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="padrino.vercel.app/customsoftware"
        />
        <link
          rel="canonical"
          key="canonical"
          href="padrino.vercel.app/customsoftware"
        />
      </Head>
      {/* Custom Software Block start*/}

      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src="/assets/backArrow.svg" alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Whether we re replacing old software or inventing new solutions,
              Arc Development is here to help your bussiness tackle technology
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficieny
            </Typography>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Our custom solutions are designed fromg round up with your need,
              wants, and goals at the core. This collaborative process produces
              finely tuned software that is much more effective at improving
              your workflow and reducing costs than generalized options
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              We create exactly what you want, exactly how you want it
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/mobileapps"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="Forward to IOS/Android App Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      {/* Custom Software Block End*/}
      {/* Save Tme, Energy, Money Block Start*/}
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4"> Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4"> Save Time</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopwatch.svg" alt="stopwatch" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4"> Save Money</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="cash" />
          </Grid>
        </Grid>
      </Grid>

      {/* Save Tme, Energy, Money Block End*/}
      {/* Digital Doccuments and Data Block Start*/}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : "inherit"} variant="h4">
                {" "}
                Digital Documents & Data
              </Typography>
              <Typography
                align={matchesSM ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                align={matchesSM ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                align={matchesSM ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : "right"} variant="h4">
                Scale
              </Typography>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Digital Documents and Data Block End*/}
      {/* Root-Cause Analysis Block Start*/}
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "20em", marginBottom: "20em" }}
        className={classes.rowContainer}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src="/assets/root.svg"
              alt="tree with roots extending out"
              height={matchesSM ? "215em" : "450em"}
              width={matchesSM ? "215em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Many problems are merely symptoms of larger , inderlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Root-Cause Analysis Block End*/}
      {/* Automation and UX Design Block Start*/}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
        style={{ marginBottom: "10em" }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
          style={{ marginBottom: matchesMD ? "15em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : "inherit"} variant="h4">
                {" "}
                Automation
              </Typography>
              <Typography
                align={matchesSM ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                Why waste time when you don’t have to?
              </Typography>
              <Typography
                align={matchesSM ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                align={matchesSM ? "center" : "inherit"}
                variant="body1"
                paragraph
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <Lottie
              options={uXOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : "right"} variant="h4">
                User Experience Design
              </Typography>
              <Typography
                align={matchesSM ? "center" : "right"}
                variant="body1"
                paragraph
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Automation and UX Design Block End*/}
      {/* Call to Action  Block Start*/}
      <CallToAction setValue={props.setValue} />

      {/* Call to Action  Block End*/}
    </Grid>
  );
}
