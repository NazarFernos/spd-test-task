import React, { FC } from 'react';

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Search from './SearchPanel';

const useStyles = makeStyles({
  header: {
    position: 'static',
    padding: '20px',
    fontSize: '27px',
    color: 'white',
    background: "#7fbc81",
    fontFamily: 'sans-serif'
  },
  search: {
    padding: '0 10px',
    background: 'white',
    borderRadius: '15px'
  },
});

type HeaderPropsType = {
  search: (searchText: string) => void;
};

const Header: FC<HeaderPropsType> = ({ search }): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Box mb={3}>We can help with lots of things. Browse or search for what you need.</Box>
      <div className={classes.search}>
        <Search search={search} />
      </div>
    </div>
  );
};

export default Header;
