import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Table from '../../../components/table/table';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    content: {
        marginTop: '3%'
    },
}));

export default function RepairCarsList() {
    const classes = useStyles();

    return (
        <div className="container">
            <div className={classes.content}>
                <div>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: 19 }}>Repair Cars</Typography>
                </div>
                <div className={clsx(classes.form, "col-md-12", "col-lg-12", "col-sm-12")}>
                    <Table />
                </div>
            </div>
        </div>
    );
}