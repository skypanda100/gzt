import React from 'react';
import Title from 'react-title-component';
import SaveData from './SaveData';
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
    padding: 0,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

const SaveDataPage = () => (
  <div style={divStyle}>
      <Title render={(previousTitle) => `Save Data - ${previousTitle}`} />
      <h2>Save sleep data into DataBase</h2>
      <br/>
      <Divider/>
      <br/>
      <Paper
          style={paperStyle}
          zDepth={0}
      >
          <SaveData />
      </Paper>
  </div>
);

export default SaveDataPage;
