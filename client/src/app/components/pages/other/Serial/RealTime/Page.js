import React from 'react';
import Title from 'react-title-component';
import RealTime from './RealTime';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
};

const paperStyle = {
    height: '100%',
    width: '100%'
};

const RealTimePage = () => (
  <div style={divStyle}>
      <Title render={(previousTitle) => `Serial - ${previousTitle}`} />
      <div
          style={paperStyle}
      >
          <RealTime />
      </div>
  </div>
);

export default RealTimePage;
