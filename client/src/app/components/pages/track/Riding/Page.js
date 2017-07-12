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
    width: '100%'
};

const RidingPage = () => (
  <div style={divStyle}>
      <Title render={(previousTitle) => `Riding - ${previousTitle}`} />
      <div
          style={paperStyle}
      >
          <Riding />
      </div>
  </div>
);

export default RidingPage;
