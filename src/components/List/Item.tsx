import React, { FC } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { Task } from '../../types/Task';


const useStyles = makeStyles(() =>
  createStyles({
    minutes: {
      color: '#B0B0B0'
    },
    item: {
      height: '55px',
    },
    cart: {
      fill: '#B0B0B0',
    },
    text: {
      fontSize:'1.0em',
      //fontFamily: 'sansSerif',
    },
    arrow: {
      fill: 'gray'
    }
  })
);

interface ItemProps {
  item: Task;
}

const Item: FC<ItemProps> = ({ item }): JSX.Element => {
  const classes = useStyles();

  return (
    <ListItem className={classes.item}>
      <ListItemIcon>
        <ShoppingCartIcon className={classes.cart} />
      </ListItemIcon>
      {<ListItemText classes={{primary:classes.text}} primary={item.title} />}
      <div className={classes.minutes}>
        {`${item.minutes} min.`}
      </div>
      <ListItemSecondaryAction>
          <ArrowForwardIosIcon className={classes.arrow} fontSize="small"/>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Item;
