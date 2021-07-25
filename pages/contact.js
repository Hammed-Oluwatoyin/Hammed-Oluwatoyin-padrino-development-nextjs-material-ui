import React, { useState } from "react";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import ButtonArrow from "../src/ui/ButtonArrow";
import Head from "next/head";

import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(/assets/background.jpg)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/mobileBackground.jpg")`,
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
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
      marginRight: 0,
    },
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
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },

  message: {
    border: `2px solid ${theme.palette.common.black}`,
    marginTop: "5em",
    borderRadius: 5,
  },

  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 65,
    width: 245,
    fontSize: "1.3rem",
    backgroundColor: theme.palette.common.lightPink,
    "&:hover": {
      color: "#ffffff",
      backgroundColor: theme.palette.common.black,
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: "", color: "" });

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img
        src="/assets/send.svg"
        alt="paper airplane"
        style={{ marginLeft: "1em" }}
      />
    </React.Fragment>
  );

  const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const pages = {
          "https://us-central1-material-ui-course": {
            data: "message was sent successfully",
          },
        };

        const data = pages[url];
        if (data) {
          resolve({ status: 200, data });
        } else {
          reject({ status: 404 });
        }
      }, 5000);
    });
  };

  const onConfirm = () => {
    setLoading(true);
    fakeRequest("https://us-central1-material-ui-course")
      .then((res) => {
        setLoading(false);

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message sent successfully",
          backgroundColor: "#4BB543",
        });
        setOpen(false);

        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        setAlert({
          open: "true",
          message: "Something went wrong, please try again",
          backgroundColor: "#FF3232",
        });
      });
  };

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Contact Us | Padrino Development</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bringing High Fidelity Technology to the West Africa | Contact Us"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="padrino.vercel.app/contact"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://padrino.vercel.app/contact.js"
        />
      </Head>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                style={{ color: theme.palette.common.black }}
              >
                We're waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.black,
                    fontSize: " 1rem",
                  }}
                >
                  <a
                    href="tel:09058817629"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (0905) 881 7629
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.black,
                    fontsize: "1rem",
                  }}
                >
                  <a
                    href="mailto:dauda.hammed132@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    dauda.hammed132@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              style={{ maxWidth: "20em" }}
              direction="column"
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  style={{ marginBottom: "0.5em" }}
                  label="Email"
                  id="email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  style={{ marginBottom: "0.5em" }}
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                id="message"
                multiline
                placeholder="Please tell us more about your projects"
                rows={10}
                value={message}
                className={classes.message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        fullScreen={matchesSM}
        onClose={() => {
          setOpen(false);
        }}
        style={{ zIndex: 1302 }}
        PaperProps={{
          style: {
            width: "50em",
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "8em"
              : "8em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "8em"
              : "8em",
          },
        }}
      >
        <DialogContent>
          <Grid item container direction="column" justify="center">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Email"
                id="email"
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                style={{ marginBottom: "0.5em" }}
                label="Phone"
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                fullWidth
                id="phone"
                value={phone}
                onChange={onChange}
              />
            </Grid>

            <Grid item style={{ width: matchesSM ? "100%" : "35em" }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                id="message"
                multiline
                rows={10}
                value={message}
                className={classes.message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              style={{ marginTop: "2em" }}
              alignItems="center"
              justify="center"
            >
              <Grid item>
                <Button
                  color="default"
                  className={classes.sendButton}
                  onClick={() => setOpen(false)}
                  style={{ marginBottom: "2rem" }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  variant="contained"
                  className={classes.sendButton}
                  onClick={() => onConfirm()}
                  style={{
                    marginBottom: "2em",
                    marginLeft: matchesMD ? 0 : "2em",
                  }}
                >
                  {loading ? <CircularProgress size={30} /> : buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: { backgroundColor: alert.backgroundColor, fontSize: "1.5em" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={5000}
      />

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        justify="center"
        lg={8}
        xl={9}
        alignItems="center"
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                Simple Software
                <br />
                Revolutionary Results.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="subtitle2"
                style={{ fontSize: "1.5rem" }}
              >
                Take advantage of 21st century
              </Typography>
              <Grid item>
                <Grid container justify={matchesMD ? "center" : undefined}>
                  <Button
                    style={{ textDecoration: "none" }}
                    variant="outlined"
                    component={Link}
                    href="/revolution"
                    className={classes.learnButton}
                    onClick={() => {
                      props.setValue(2);
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
            style={{ textDecoration: "none" }}
            component={Link}
            href="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              props.setValue(5);
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
