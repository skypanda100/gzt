import React from 'react';
import Title from 'react-title-component';
import ComparisonBySumOfData from './ComparisonBySumOfData';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
};

const paperStyle01 = {
    height: '100%',
    width: '100%',
    marginLeft: '0%',
    marginRight: '0%',
    marginBottom: '0%',
    padding: 5,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

const ComparisonBySumPage = () => (
    <div style={divStyle}>
        <Title render={(previousTitle) => `Comparison By Sum - ${previousTitle}`} />
        <h2>Comparison by sum</h2>
        <br/>
        <Divider/>
        <br/>
        <Paper
            style={paperStyle01}
            zDepth={0}
        >
            <ComparisonBySumOfData />
        </Paper>
    </div>
);

export default ComparisonBySumPage;
