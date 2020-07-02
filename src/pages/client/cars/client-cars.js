import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomPaginationActionsTable from '../../../components/table/table';

const useStyles = makeStyles((theme) => ({
    contentHeading: {
        margin: '3% 8%',
        borderBottom: '1px solid black',
    },
    table: {
        width: '50%',
        margin: '1% 8%'

    },
}));

export default function ClientCars() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.content}>
                <div className={classes.contentHeading}>
                    <Typography color="inherit" style={{ fontSize: '20px' }}>
                        MY CARS
                    </Typography>
                </div>
                <div className={classes.table}>
                    <CustomPaginationActionsTable />
                </div>
            </div>
        </div>

    );
}