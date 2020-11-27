import React from 'react';
import clsx from 'clsx';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { makeStyles, useTheme } from '@material-ui/core';
import Footer2 from '../components/Footer2/Footer2';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function BaseLayout(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [openSidebar, setOpenSidebar] = React.useState(false);
  
  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <>
    <Nav
      sidebarClasses={classes}
      theme={theme}
      handleSidebarOpen={handleSidebarOpen}
      handleSidebarClose={handleSidebarClose}
      openSidebar={openSidebar}
    />
      <main
        className={clsx({
          [classes.contentShift]: openSidebar
        })}
      >
      {props.children}
      </main>
    {/* <Footer/> */}
    <Footer2/>
    </>
  )
}
