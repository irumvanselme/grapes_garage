import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, FormControl, OutlinedInput, InputLabel } from '@material-ui/core';
const illustration = require('../../assets/images/reset-password.png');

const useStyles = makeStyles((theme) => ({
    content: {
        margin: '10% 0',
        [theme.breakpoints.down('sm')]: {
            overflow: 'none',
        },
    },
    grid: {
        flexGrow: 1,
    },
    subcontent: {
        marginTop: '8%',
        marginLeft: '3%'
    },
    formControl: {
        marginTop: '2%'
    },
    buttonGroup: {
        marginTop: '4%',
        marginLeft: '42%',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '1%',
        },
    },
    button: {
        padding: '8px 27px',
        [theme.breakpoints.down('sm')]: {
            padding: '6px 16px',

        },
    },
    image: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }
}));

export default function PasswordReset() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div className="container">
            <div className={classes.content}>
                <Grid container spacing={3} className={classes.grid}>
                    <Grid item lg={6} md={6} sm={12} xl={6} className={classes.image}>
                        <img src={illustration} alt="Forgot Password" style={{ height: '80%', width: '80%' }} />;
                        </Grid>
                    <Grid item lg={6} md={6} sm={12} xl={6}>
                        <div className="subcontent-heading">
                            <Typography color="inherit" style={{ fontSize: '20px' }}>Reset Password</Typography>
                            <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: 13 }}>New Password Registration</Typography>
                        </div>
                        <div className={classes.subcontent}>
                            <div className={classes.formControl}>
                                <FormControl variant="outlined" className="col-md-8">
                                    <InputLabel htmlFor="outlined-adornment-newPassword" style={{ fontSize: 14 }}>New Password</InputLabel>
                                    <OutlinedInput id="outlined-adornment-newPassword" type='password' value={values.newPassword} onChange={handleChange('newPassword')}
                                        labelWidth={95}
                                    />
                                </FormControl>
                            </div>
                            <div className={classes.formControl}>
                                <FormControl variant="outlined" className="col-md-8" >
                                    <InputLabel htmlFor="outlined-adornment-newPassword" style={{ fontSize: 14 }}>Confirm Password</InputLabel>
                                    <OutlinedInput id="outlined-adornment-confirmPassword" type='password' value={values.confirmPassword} onChange={handleChange('confirmPassword')}
                                        labelWidth={115}
                                    />
                                </FormControl>
                            </div>
                            <div className={classes.buttonGroup}>
                                <div>
                                    <Button variant="contained" size="large" color="primary" className={classes.button} >Change </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}