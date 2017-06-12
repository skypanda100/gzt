import React from 'react';
import Title from 'react-title-component';
import ComparisonByMonthOfLine from './ComparisonByMonthOfLine';
import ComparisonByMonthOfTemperature from './ComparisonByMonthOfTemperature';
import ComparisonByMonthOfBar from './ComparisonByMonthOfBar';
import ComparisonByMonthOfPie from './ComparisonByMonthOfPie';
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

const ComparisonByMonthPage = () => (
    <div style={divStyle}>
        <Title render={(previousTitle) => `Comparison By Month - ${previousTitle}`} />
        <h2>Comparison by month</h2>
        <br/>
        <Divider/>
        <br/>
        <Paper
            style={paperStyle01}
            zDepth={1}
        >
            <ComparisonByMonthOfTemperature />
        </Paper>
        <Paper
            style={paperStyle01}
            zDepth={1}
        >
            <ComparisonByMonthOfBar />
        </Paper>
        <Paper
            style={paperStyle01}
            zDepth={1}
        >
            <ComparisonByMonthOfPie />
        </Paper>
        <Paper
            style={paperStyle02}
            zDepth={1}
        >
            <ComparisonByMonthOfLine />
        </Paper>
    </div>
);

export default ComparisonByMonthPage;
