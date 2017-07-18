import React from 'react';
import Title from 'react-title-component';
import Screensaver from './Screensaver';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
};

const paperStyle = {
    height: '100%',
    width: '100%',
    // textAlign: 'center'
};

const RealTimePage = () => (
  <div style={divStyle}>
      <Title render={(previousTitle) => `Screensaver - ${previousTitle}`} />
      <div
          style={paperStyle}
      >
          <Screensaver />
      </div>
  </div>
);

export default RealTimePage;
