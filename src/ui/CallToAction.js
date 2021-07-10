import React from "react";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
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

  background: {
    backgroundImage: `url("/assets/background.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackround.jpg")`,
      backgroundAttachmnet: "inherit",
    },
  },

  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.lightPink,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
}));

export default function CallToAction(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const { setValue } = props;
  return (
    <Grid
      container
      direction={matchesSM ? "column" : "row"}
      className={classes.background}
      justify={matchesSM ? "center" : "space-between"}
      alignItems="center"
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of 21st century
            </Typography>
            <Grid item>
              <Grid container justify={matchesSM ? "center" : undefined}>
                <Button
                  variant="outlined"
                  component={Link}
                  href="/revolution"
                  className={classes.learnButton}
                  onClick={() => {
                    setValue(2);
                  }}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.black}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          component={Link}
          href="/estimate"
          variant="contained"
          className={classes.estimateButton}
          onClick={() => {
            setValue(5);
          }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
