import React, { FC } from 'react';

import List from '@material-ui/core/List';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import ItemComponent from './Item';

import { Task } from '../../types/Task';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    noResults: {
      textAlign: 'center',
    },
  })
);

type TaskListPropsType = {
  tasks: Task[];
};

const TaskList: FC<TaskListPropsType> = (item): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.demo}>
      <List dense>
        {item.tasks && item.tasks.length ? (
          item.tasks.map((task) => (
            <div key={task.title}>
              <ItemComponent item={task} />
              <Divider />
            </div>
          ))
        ) : (
          <div className={classes.noResults}>There are no tasks found</div>
        )}
      </List>
    </div>
  );
};

export default TaskList;