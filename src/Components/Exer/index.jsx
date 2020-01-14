import React, { Fragment } from 'react';
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: 'auto'
  }
};

const Exer = ({ exercises }) => {
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => (
            <Fragment>
              <Typography variant='h6' style={{ textTransform: 'capitalize' }}>
                {group}{' '}
              </Typography>
              <List component='nav' aria-label='secondary mailbox folders'>
                {exercises.map(({ title }) => (
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ))}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant='h2'>Welcome</Typography>
          <Typography variant='body1' style={{ marginTop: 20 }}>
            Please select the exercise from the list on the left.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exer;
