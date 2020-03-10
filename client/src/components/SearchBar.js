import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
      borderColor: 'grey',
      borderRadius: 14,
      borderStyle: 'solid',
      borderWidth: 'thin'
    },
    flex: {
      display: 'flex',
      justifyContent: 'center',
      padding: 5,
    }
  }));

function SearchBar() {
    const classes = useStyles();
    return(
    <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end" className={classes.flex}>
            <Grid item>
                <SearchIcon />
            </Grid>
            <Grid item>
                <TextField id="input-with-icon-grid" label="Search for a book" />
            </Grid>
            <Grid item>
                <Button>Search</Button>
            </Grid>
        </Grid>
    </div>
    )
}

export default SearchBar;