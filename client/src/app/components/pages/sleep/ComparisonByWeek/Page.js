import React from 'react';
import Title from 'react-title-component';
import Feature from '../../Feature';
import FullWidthSection from '../../../FullWidthSection';
import ComparisonByWeekOfLine from './ComparisonByWeekOfLine';
import ComparisonByWeekOfTemperature from './ComparisonByWeekOfTemperature';
import ComparisonByWeekOfBar from './ComparisonByWeekOfBar';
import ComparisonByWeekOfPie from './ComparisonByWeekOfPie';
import Divider from 'material-ui/Divider';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
};

const ComparisonByWeekPage = () => (
    <div style={divStyle}>
        <Title render={(previousTitle) => `Comparison By Week - ${previousTitle}`} />
        <h2>Comparison by week</h2>
        <br/>
        <Divider/>
        <br/>
        <FullWidthSection useContent={true} base={0}>
            <Feature
                firstChild={true}
                w={"32%"}
            >
                <ComparisonByWeekOfTemperature />
            </Feature>
            <Feature
                w={"32%"}
            >
                <ComparisonByWeekOfBar />
            </Feature>
            <Feature
                w={"32%"}
            >
                <ComparisonByWeekOfPie />
            </Feature>
            <Feature
                lastChild={true}
                w={"97%"}
            >
                <ComparisonByWeekOfLine />
            </Feature>
        </FullWidthSection>
    </div>
);

export default ComparisonByWeekPage;
