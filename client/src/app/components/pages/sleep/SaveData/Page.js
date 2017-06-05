import React from 'react';
import Title from 'react-title-component';
import DataBlock from '../../../blocks/index';
import SaveData from './SaveData';
import SaveDataCode from '!raw!./SaveData';

var divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
const SaveDataPage = () => (
  <div style={divStyle}>
      <Title render={(previousTitle) => `Save Data - ${previousTitle}`} />
      <DataBlock
          code={SaveDataCode}
          title="SaveData"
      >
          <SaveData />
      </DataBlock>
  </div>
);

export default SaveDataPage;
