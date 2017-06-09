import React from 'react';
import Title from 'react-title-component';
import DataBlock from '../../../blocks/index';
import ComparisonByDayOfLine from './ComparisonByDayOfLine';
import ComparisonByDayOfLineCode from '!raw!./ComparisonByDayOfLine';
import ComparisonByDayOfTemperature from './ComparisonByDayOfTemperature';
import ComparisonByDayOfTemperatureCode from '!raw!./ComparisonByDayOfTemperature';
import ComparisonByDayOfBar from './ComparisonByDayOfBar';
import ComparisonByDayOfBarCode from '!raw!./ComparisonByDayOfBar';
import ComparisonByDayOfPie from './ComparisonByDayOfPie';
import ComparisonByDayOfPieCode from '!raw!./ComparisonByDayOfPie';
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
    marginBottom: '1%',
    padding: 20,
    textAlign: 'left',
    display: 'inline-block',
    verticalAlign:'top',
};

const ComparisonByDayPage = () => (
    <div style={divStyle}>
        <Title render={(previousTitle) => `Comparison By Day - ${previousTitle}`} />
        <Paper
            style={paperStyle}
            zDepth={1}
        >
            <ComparisonByDayOfLine />
        </Paper>
        <Paper
            style={paperStyle}
            zDepth={1}
        >
            <ComparisonByDayOfTemperature />
        </Paper>
        <Paper
            style={paperStyle}
            zDepth={1}
        >
            <ComparisonByDayOfBar />
        </Paper>
        <Paper
            style={paperStyle}
            zDepth={1}
        >
            <ComparisonByDayOfPie />
        </Paper>
    </div>
);

export default ComparisonByDayPage;
