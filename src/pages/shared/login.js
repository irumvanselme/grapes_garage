import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  withStyles,
  Toolbar,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import Arrow from "../../assets/images/arrow.svg";
import Logo from "../../assets/images/logo.jpg";

import "../../index.css";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  btn: {
    fontWeight: "600",
    margin: "0px 30px",
    borderRadius: "40px",
    padding: "5px 40px",
  },
  arrow: {
    margin: "100px auto 50px",
    display: "block",
  },
  welcome: {
    fontWeight: "900",
    paddingLeft: "130px",
    fontFamily: "Poppins",
  },
  welcome1: {
    fontWeight: "600",
    paddingLeft: "130px",
    paddingTop: "20px",
    fontFamily: "Poppins",
  },
  paper: {
    padding: "10px 40px",
    width: "80%",
    margin: "40px auto",
  },
  logo: {
    width: "120px",
    height: "120px",
    display: "block",
    margin: "10px auto",
  },
  input: {
    width: "100%",
    margin: "15px auto",
    [`& fieldset`]: {
      borderRadius: 40,
    },
  },
  form: {
    textAlign: "center",
  },
  dnForm: {
    margin: "30px 0px 20px",
  },
  formHeader: {
    textAlign: "center",
  },
  links: {
    color: "gray",
  },
});

export class Login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div class="login-page">
        <Toolbar>
          <Typography variant="h6" className={classes.root}>
            <div class="name-1">
              <div class="line"></div>
              <div>
                <h3>KOREAN MOTO GARAGE</h3>
              </div>
            </div>
          </Typography>
          <div class="nonity">
            <Button color="primary" className={classes.btn} variant="contained">
              Sign in
            </Button>
            <Button color="primary" className={classes.btn} variant="contained">
              Contact us
            </Button>
          </div>
        </Toolbar>
        <Grid container>
          <Grid item xs={12} lg={6} sm={12} md={12}>
            <Paper className={classes.paper} elevation={0}>
              <img src={Logo} className={classes.logo} alt="Nshimiye-logo" />
              <Typography color="primary" className={classes.formHeader}>
                <h2>Welcome to korea-moto garage</h2>
                <h3>Fill this form to start with us</h3>
              </Typography>
              <form className={classes.form}>
                <TextField
                  size="small"
                  borderRadius="50%"
                  className={classes.input}
                  label="Plenty number or email"
                  variant="outlined"
                />
                <TextField
                  htmlFor="filled-adornment-password"
                  size="small"
                  borderRadius="50%"
                  className={classes.input}
                  label="Password"
                  type="password"
                  variant="outlined"
                />
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                >
                  Sign in
                </Button>
                <Grid container className={(classes.root, classes.dnForm)}>
                  <Grid item xs={6}>
                    <Checkbox color="primary" />
                    <Link className={classes.links}>Remember Me</Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link className={classes.links}>Forgot Password</Link>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid class="nonity" item xs={6} lg={6} sm={0} md={0}>
            <div>
              <img className={classes.arrow} src={Arrow} alt="Nshimiye-arrow" />
              <Typography variant="h6" className={classes.welcome}>
                Welcome to Korea-moto System
              </Typography>
              <Typography variant="h6" className={classes.welcome1}>
                To gain access to start using <br />
                this system you have to login first
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
