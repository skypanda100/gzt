import React from 'react';
import Title from 'react-title-component';
import Feature from '../../Feature';
import FullWidthSection from '../../../FullWidthSection';
import ComparisonByDayOfLine from './ComparisonByDayOfLine';
import ComparisonByDayOfTemperature from './ComparisonByDayOfTemperature';
import ComparisonByDayOfBar from './ComparisonByDayOfBar';
import ComparisonByDayOfPie from './ComparisonByDayOfPie';
import Divider from 'material-ui/Divider';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
};

const ComparisonByDayPage = () => (
    <div style={divStyle}>
        <Title render={(previousTitle) => `Comparison By Day - ${previousTitle}`} />
        <h2>Comparison by day</h2>
        <br/>
        <Divider/>
        <br/>
        <FullWidthSection useContent={true} base={0}>
            <Feature
                firstChild={true}
                w={"32%"}
            >
                <ComparisonByDayOfTemperature />
            </Feature>
            <Feature
                w={"32%"}
            >
                <ComparisonByDayOfBar />
            </Feature>
            <Feature
                w={"32%"}
            >
                <ComparisonByDayOfPie />
            </Feature>
            <Feature
                lastChild={true}
                w={"97%"}
            >
                <ComparisonByDayOfLine />
            </Feature>
        </FullWidthSection>
    </div>
);

export default ComparisonByDayPage;
