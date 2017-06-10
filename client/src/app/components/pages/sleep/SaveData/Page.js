import React from 'react';
import Title from 'react-title-component';
import SaveData from './SaveData';
import Paper from 'material-ui/Paper';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
};

const paperStyle = {
    height: '100%',
    width: '98%',
    marginLeft: '1%',
    marginRight: '1%',
    padding: 0,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

const SaveDataPage = () => (
  <div style={divStyle}>
      <Title render={(previousTitle) => `Save Data - ${previousTitle}`} />
      <Paper
          style={paperStyle}
          zDepth={0}
      >
          <SaveData />
      </Paper>
  </div>
);

export default SaveDataPage;
