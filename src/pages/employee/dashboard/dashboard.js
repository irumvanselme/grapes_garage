import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, Divider, Grid, Typography, CardContent, CardMedia, } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from '../../../components/table/table';
import { Line, Polar } from "react-chartjs-2";
import { AccessTime } from '@material-ui/icons';
import { faUserFriends, faTasks, faGavel, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 100,
  },
  cardStats: {
    fontSize: 30,
    color: 'white',
    padding: '22px'
  },
  cardIcon: {
    color: 'white',
    fontSize: '28px',
    marginTop: '9px',
    marginLeft: '-14%'
  },
  cardContentDescIcon: {
    margin: '0px 8px',
    fontSize: '13px'
  },
  chart: {
    backgroundColor: 'whitesmoke',
  },
  table: {
    minWidth: 650,
  },

  bottomNav: {
    top: 'auto',
    bottom: 0
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];


export default function DashBoard() {
  const classes = useStyles();

  const cards = [
    { name: 'Clients', description: 'Total Clients', background: '#ffc107', icon: faUserFriends, data: 23 },
    { name: 'Tasks', description: 'Completed', background: '#27a243', icon: faTasks, data: 3 },
    { name: 'Workers', description: 'Total Workers', background: '#dc3545', icon: faGavel, data: 30 },
    { name: 'Income', description: 'Monthly Updated', background: '#6610f2', icon: faDollarSign, data: '$ 123' }];

  return (
    <div className="container">
      <Grid container spacing={3} className={classes.root}>
        {
          cards.map(card =>
            <Grid item lg={3} md={3} sm={5} xs={6} xl={5}>

              <Card key={card.name}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                    style={{ backgroundColor: card.background }}
                  >
                    <Grid container spacing={3} >
                      <Grid item lg={9} md={9} sm={6} xl={6}>
                        <Typography gutterBottom variant="h5" component="h2" className={classes.cardStats}>
                          {card.data}
                        </Typography>
                      </Grid>
                      <Grid item lg={3} md={3} sm={6} xl={6}>
                        <FontAwesomeIcon icon={card.icon} className={classes.cardIcon} />
                      </Grid>
                    </Grid>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: 19 }}>
                      {card.name}
                    </Typography>
                    <Divider light />
                    <Typography variant="body2" color="textSecondary" component="p" style={{ fontSize: 13 }}>
                      {card.description}
                      <AccessTime className={classes.cardContentDescIcon} />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        }

      </Grid>
      <div style={{ marginTop: '4%' }}>
        <Grid container spacing={3} className={classes.root}>
          <Grid item lg={6} md={6} sm={6} xl={6} xs={12} className={classes.chart}>
            <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: 19 }}>
              Tasks Analysis
                    </Typography>
            <Line data={data} />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xl={6} xs={12} className={classes.chart}>
            <Typography gutterBottom variant="h5" component="h2" style={{ fontSize: 19 }}>
              Payments Overview
                    </Typography>
            <Polar data={data} />
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: '5%' }}>
        <Table />
      </div>
    </div>
  );
}