import React from 'react';
import Title from 'react-title-component';
import Riding from './Riding';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
};

const paperStyle = {
    height: '100%',
    width: '100%',
    marginLeft: '0%',
    marginRight: '0%',
    padding: 0,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

const RidingPage = () => (
  <div style={divStyle}>
      <Title render={(previousTitle) => `Riding - ${previousTitle}`} />
      <Paper
          style={paperStyle}
          zDepth={0}
      >
          <Riding />
      </Paper>
  </div>
);

export default RidingPage;
