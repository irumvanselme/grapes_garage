
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ChevronRight, ChevronLeft, Menu } from '@material-ui/icons';
import { IconButton, Divider, Toolbar, AppBar, Drawer, Typography } from '@material-ui/core'
import Navbar from '../../components/navbar-sidebar/employee/navbar';
import Breadcrumb from '../../components/breadcrumb/breadcrumbs';
import Sidebar from '../../components/navbar-sidebar/employee/sidebar'
import Footer from '../../components/footer/footer';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    fontSize: 13,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },

  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundColor: 'blue',
    '&::-webkit-scrollbar': {
      width: '10px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      borderRadius: '10px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'blue',
      outline: '1px solid slategrey',
      borderRadius: '10px'
    }
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    backgroundColor: "#1e3799",
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'sticky',
    top: "0",
    zIndex: "1",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    marginTop: '7%',
    marginLeft: '7%',

  },
  appTitle: {
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    textDecoration: 'underline',
    textTransform: 'uppercase',
  }
}));


export default function EmployeeLayout(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="container-fluid">
      <div>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <Menu />
            </IconButton>
            <Navbar />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          // style={ids.drawerStyles}

          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,

            })
          }}
        >
          <div className={classes.toolbar}>
            <div className={classes.logContainer}>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.appTitle}>
                Korea Auto Rwanda
         </Typography></div>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRight style={{ color: 'white' }} /> : <ChevronLeft style={{ color: 'white' }} />}
            </IconButton>
          </div>
          <Divider />
          <Sidebar />
        </Drawer>
        <main className={classes.content}>
          <Breadcrumb />
          <div style={{ marginTop: 10 }}>
            <props.content />
          </div>
        </main>
      </div>
      <div style={{ marginTop: 30, marginLeft: '5%' }}>
        <Footer />
      </div>
    </div>
  );
}