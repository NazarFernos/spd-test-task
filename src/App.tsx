import React, { FC } from 'react';

import Grid from '@material-ui/core/Grid';
import Main from './components/Main';

const App: FC = (): JSX.Element => {
  return (
    <Grid container justify="center">
      <Grid item lg={10} xs={12}>
        <Main />
      </Grid>
    </Grid>
  );
};
export default App;
