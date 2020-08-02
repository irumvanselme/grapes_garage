import React, { Component } from "react";
import { Button, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../index.css";

const styles = (theme) => ({
  button: {
    margin: "30px 0px 10px",
    borderRadius: "50px",
  },
  link1: {
    color: "white",
    textDecoration: "none",
  },
});

export class NotFound extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div class="not-found">
        <div class="main">Oops !</div>
        <h1>404-NOT FOUND PAGE</h1>
        <div class="message-1">
          <span class="qm">"</span>
          <span class="text">
            The page you are looking for might have been removed,had it’s name
            changed or is temporarily unavailable
          </span>
          <span class="qm">"</span>
        </div>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            <span class="go-to-login">
              <Link className={classes.link1} to="/login">
                GO TO LOGIN PAGE
              </Link>
            </span>
          </Button>
        </div>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
