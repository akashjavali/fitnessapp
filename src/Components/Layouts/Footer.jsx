import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles, onSelect }) => {
  return (
    <div>
      <Paper>
        <Tabs onChange={onSelect} value={0} indicatorColor='primary' textColor='primary' centered>
          <Tab label='All' />
          {muscles.map(muscle => (
            <Tab label={muscle} />
          ))}
        </Tabs>
      </Paper>
    </div>
  );
};

export default Footer;
