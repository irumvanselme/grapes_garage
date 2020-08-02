import React from 'react';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import { Breadcrumbs, Chip, Grid, Typography } from '@material-ui/core';
import { Home, ExpandMore } from '@material-ui/icons';

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(2),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});


export default function Breadcrumb() {
    const classes = useStyles();
    return (
        <div className="container">
            <Grid container spacing={3} className={classes.container}>
                <Grid item lg={8} md={8} sm={6} xs={6}>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: 19 }}> Dashboard</Typography>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={6}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Home"
                            icon={<Home fontSize="small" />} />
                        <StyledBreadcrumb component="a" href="#" label="Catalog" />
                        <StyledBreadcrumb
                            label="Accessories"
                            deleteIcon={<ExpandMore />}
                        />
                    </Breadcrumbs>
                </Grid>
            </Grid>
        </div>

    );
}