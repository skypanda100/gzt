import React from 'react';
import Title from 'react-title-component';
import History from './History';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
};

const paperStyle = {
    height: '100%',
    width: '100%'
};

const HistoryPage = () => (
  <div style={divStyle}>
      <Title render={(previousTitle) => `Serial - ${previousTitle}`} />
      <div
          style={paperStyle}
      >
          <History />
      </div>
  </div>
);

export default HistoryPage;
