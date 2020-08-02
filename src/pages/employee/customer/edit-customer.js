import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, Typography, OutlinedInput, InputLabel, InputAdornment, FormControl } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    formContent: {
        padding: '4%',
    },
    buttonGroup: {
        padding: '12px 35px'
    },
    buttonRow: {
        marginTop: '100px'
    },
    vatar: {
        margin: '3% 4%',
        backgroundColor: '#f7f7f7',
        [theme.breakpoints.down('sm')]: {
            height: 400
        },
    },
    form: {
        margin: '2% 0%',
        backgroundColor: '#f7f7f7'
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100%',
    },
    bread: {
        marginTop: 51
    },
    formGroup: {
        marginLeft: '20px',
        [theme.breakpoints.down('sm')]: {
            marginTop: 10
        },
    },
    row: {
        marginTop: 22
    },
    contentHeading: {
        marginTop: '2%'
    },
    large: {
        color: 'fff',
        width: '3em',
        fontSize: '63px',
        height: '3em',
        position: 'absolute',
        backgroundColor: '#ffc107'
    },
    avatar: {
        margin: '22% 23%'
    }
}));

export default function EditCustomer() {
    const classes = useStyles();

    return (
        <div className="container">
            <div className={classes.contentHeading}>
                <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: 17 }}>
                    Customer Details
                    </Typography>
            </div>
            <div className={clsx(classes.content, "row")}>
                <div className={clsx(classes.form, "col-md-7 col-lg-7 col-sm-12")}>
                    <div className={classes.formContent}>
                        <div className={clsx(classes.row, "row")}>
                            <FormControl className={clsx(classes.formGroup, "col-md-5 col-lg-5 col-sm-6")} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" style={{ fontSize: 14 }}>Name</InputLabel>

                                <OutlinedInput

                                    defaultValue="Dushimimana Samuel"
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <InputAdornment position="end">

                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            <FormControl className={clsx(classes.formGroup, "col-md-5 col-lg-5 col-sm-6")} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" style={{ fontSize: 14 }}>Email</InputLabel>
                                <OutlinedInput
                                    defaultValue="dushimina.samuel@education.reb.rw"

                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <InputAdornment position="end">

                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                        </div>
                        <div className={clsx(classes.row, "row")}>
                            <FormControl className={clsx(classes.formGroup, "col-md-5 col-lg-5 col-sm-6")} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" style={{ fontSize: 14 }}>Phone</InputLabel>
                                <OutlinedInput
                                    defaultValue="0789345334"
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            <FormControl className={clsx(classes.formGroup, "col-md-5 col-lg-5 col-sm-6")} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" style={{ fontSize: 14 }}>Location</InputLabel>
                                <OutlinedInput
                                    defaultValue="Mukamira, Byangabo"
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <InputAdornment position="end">

                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                        </div>
                        <div className={clsx(classes.row, "row")}>
                            <FormControl className={clsx(classes.formGroup, "col-md-10 col-lg-10 col-sm-10")} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password" style={{ fontSize: 14 }}>More</InputLabel>
                                <OutlinedInput
                                    defaultValue="Software Engineer at Rwanda Coding Academy, Yiweeeee !!"
                                    id="outlined-adornment-password"
                                    endAdornment={
                                        <InputAdornment position="end">
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>

                        </div>
                        <div className={clsx(classes.row, "row")}>
                            <Button variant="contained" size="large" color="primary" className={clsx(classes.formGroup, classes.buttonGroup)} >
                                Save
        </Button>
                        </div>
                    </div>
                </div>
                <div className={clsx(classes.vatar, "col-md-4 col-lg-4 col-sm-12")}>
                    <div className={classes.avatar}>
                        <Avatar variant="square" className={classes.large} title="Dush Sam">
                            DS
                        </Avatar>
                    </div>
                </div>
            </div>
        </div>

    );
}