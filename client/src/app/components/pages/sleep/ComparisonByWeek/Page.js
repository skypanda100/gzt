import React from 'react';
import Title from 'react-title-component';
import ComparisonByWeekOfLine from './ComparisonByWeekOfLine';
import ComparisonByWeekOfTemperature from './ComparisonByWeekOfTemperature';
import ComparisonByWeekOfBar from './ComparisonByWeekOfBar';
import ComparisonByWeekOfPie from './ComparisonByWeekOfPie';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
};

const paperStyle01 = {
    height: '100%',
    width: '33.3%',
    marginLeft: '0%',
    marginRight: '0%',
    marginBottom: '1%',
    padding: 5,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

const paperStyle02 = {
    height: '100%',
    width: '100%',
    marginLeft: '0%',
    marginRight: '0%',
    marginBottom: '1%',
    padding: 5,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

const ComparisonByWeekPage = () => (
    <div style={divStyle}>
        <Title render={(previousTitle) => `Comparison By Week - ${previousTitle}`} />
        <h2>Comparison by week</h2>
        <br/>
        <Divider/>
        <br/>
        <Paper
            style={paperStyle01}
            zDepth={1}
        >
            <ComparisonByWeekOfTemperature />
        </Paper>
        <Paper
            style={paperStyle01}
            zDepth={1}
        >
            <ComparisonByWeekOfBar />
        </Paper>
        <Paper
            style={paperStyle01}
            zDepth={1}
        >
            <ComparisonByWeekOfPie />
        </Paper>
        <Paper
            style={paperStyle02}
            zDepth={1}
        >
            <ComparisonByWeekOfLine />
        </Paper>
    </div>
);

export default ComparisonByWeekPage;
