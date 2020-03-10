import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, ListItemText, Link, useTheme, Typography } from '@material-ui/core';
import useStyles from './styles';

export default (props) => {

  const items = useSelector(state => state.items);
  // const dispatch = useDispatch();
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <List className={classes.root}>
      {items.map(item => <ListItem key={item._id} secondary="Machine" >
        <Link href={`/pages/${item.slug}`} >
          <Typography>{item.name}</Typography>
        </Link>
      </ListItem>)}
    </List>
  );
}

// withStyles(styles, {withTheme: true }