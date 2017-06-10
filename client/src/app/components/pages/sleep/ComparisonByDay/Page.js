import React from 'react';
import Title from 'react-title-component';
import ComparisonByDayOfLine from './ComparisonByDayOfLine';
import ComparisonByDayOfTemperature from './ComparisonByDayOfTemperature';
import ComparisonByDayOfBar from './ComparisonByDayOfBar';
import ComparisonByDayOfPie from './ComparisonByDayOfPie';
import Paper from 'material-ui/Paper';

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

const ComparisonByDayPage = () => (
    <div style={divStyle}>
        <Title render={(previousTitle) => `Comparison By Day - ${previousTitle}`} />
        <Paper
            style={paperStyle01}
            zDepth={1}
        >
            <ComparisonByDayOfTemperature />
        </Paper>
        <Paper
            style={paperStyle01}
            zDepth={1}
        >
            <ComparisonByDayOfBar />
        </Paper>
        <Paper
            style={paperStyle01}
            zDepth={1}
        >
            <ComparisonByDayOfPie />
        </Paper>
        <Paper
            style={paperStyle02}
            zDepth={1}
        >
            <ComparisonByDayOfLine />
        </Paper>
    </div>
);

export default ComparisonByDayPage;
