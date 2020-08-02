import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Copyright } from '@material-ui/icons';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontSize: '18px',

  },
  background: {
    backgroundColor: '#f7f7f7',
    color: 'black'
  },
  footerText: {
    fontSize: '12px',
    marginLeft: '1em',
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, "col-lg-12", "col-md-12", "col-sm-12")}>
      <AppBar position="static" className={classes.background}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            K M S <span className={classes.footerText}>  <Copyright style={{ verticalAlign: 'sub', fontSize: '14px' }} /> GRAPES 2020</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}