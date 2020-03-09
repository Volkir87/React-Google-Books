import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BookOutlined from '@material-ui/icons/BookOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  icon: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
      marginLeft: theme.spacing(4),
  }
}));


function NavBar() {
    const classes = useStyles();

    return(
    <div className={classes.root}>
      <AppBar position="static" style={{ 'flex-direction': 'row' }}>
        <Toolbar>
          <BookOutlined className={classes.icon}/>
          <Typography variant="h6" className={classes.title}>
            React Google Books
          </Typography>
          <Button color="inherit" className={classes.menuButton}>Search</Button>
          <Button color="inherit" className={classes.menuButton}>Saved</Button>
        </Toolbar>
      </AppBar>
    </div>
    );
}

export default NavBar;