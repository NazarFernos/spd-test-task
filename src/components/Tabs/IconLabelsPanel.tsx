import React, { FC, useState } from 'react';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import HouseIcon from '@material-ui/icons/House';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import WorkIcon from '@material-ui/icons/Work';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

import TabsPanel from './IconTabsPanel';
import TaskList from '../List/TaskList';
import { TasksPack } from '../../types/Task';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  tab: {
    fontSize: '0.65rem',
    minWidth: '16.66%',
    textTransform: 'none',
  },
  customTabRoot: {
    color: "#7fbc81",
  }
});

type TabsProps = {
  data: TasksPack
};

const IconLabelsPanel: FC<TabsProps> = (items): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs value={value}
        classes={{
          root: classes.customTabRoot,
        }}
        onChange={handleChange}
        variant="scrollable"
        TabIndicatorProps={{style: {background:'#7fbc81'}}}
      >
        <Tab className={classes.tab} icon={<HouseIcon />} label="Income" />
        <Tab className={classes.tab} icon={<ShoppingCartIcon />} label="Expenses" />
        <Tab className={classes.tab} icon={<NotificationsActiveIcon />} label="Savings" />
        <Tab className={classes.tab} icon={<WorkIcon />} label="Debt" />
        <Tab className={classes.tab} icon={<AssistantPhotoIcon />} label="Goals" />
        <Tab className={classes.tab} icon={<VerifiedUserIcon />} label="Emergency" />
      </Tabs>
      <TabsPanel value={value} index={0}>
        <TaskList tasks={items.data.income} />
      </TabsPanel>
      <TabsPanel value={value} index={1}>
        <TaskList tasks={items.data.expenses} />
      </TabsPanel>
      <TabsPanel value={value} index={2}>
        <TaskList tasks={items.data.savings} />
      </TabsPanel>
      <TabsPanel value={value} index={3}>
        <TaskList tasks={items.data.debt} />
      </TabsPanel>
      <TabsPanel value={value} index={4}>
        <TaskList tasks={items.data.goals} />
      </TabsPanel>
      <TabsPanel value={value} index={5}>
        <TaskList tasks={items.data.emergency} />
      </TabsPanel>
    </Paper>
  );
};

export default IconLabelsPanel;
