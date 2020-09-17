import React, { FC } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  tabsPanel: {
    overflowY: 'auto',
  }
});

interface TabsPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const IconTabsPanel: FC<TabsPanelProps> = (props): JSX.Element => {
  const { children, value, index, ...otherProps } = props;
  const classes = useStyles();

  return (
    <div className={classes.tabsPanel}{...otherProps}>
      {value === index && (
        <Box p={1}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default IconTabsPanel;
