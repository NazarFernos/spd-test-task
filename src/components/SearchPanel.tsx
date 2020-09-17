import React, { FC, useEffect, useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  searchIcon: {
    fill: 'darkGray',
  },
  searchBar: {
    flexGrow: 1,
  },
  searchText: {
    fontFamily: 'sans-serif', 
    color: "#7fbc81"
  },
  underline: {
    '&::after': {
      border: '1px solid #7fbc81'
    }
  }
}));

type SearchPanelPropsType = {
  search: (text: string) => void;
};

const SearchPanel: FC<SearchPanelPropsType> = ({ search }) => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState<string>('');

  useEffect((): void => {
    search(searchText);
    // eslint-disable-next-line
  }, [searchText]);

  return (
    <div className={classes.margin}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <SearchIcon className={classes.searchIcon} />
        </Grid>
        <Grid item className={classes.searchBar}>
          <TextField
            className={classes.searchText}
            size="small"
            id="input-with-icon-grid"
            label="What do you need help with?"
            InputLabelProps={{style: {color: '#B0B0B0'}}}
            InputProps={{ classes: {underline: classes.underline} }}
            fullWidth
            onChange={(event): void => setSearchText(event.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchPanel;
