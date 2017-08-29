import React from 'react';
import Title from 'react-title-component';
import Feature from '../../Feature';
import FullWidthSection from '../../../FullWidthSection';
import ComparisonByMonthOfLine from './ComparisonByMonthOfLine';
import ComparisonByMonthOfTemperature from './ComparisonByMonthOfTemperature';
import ComparisonByMonthOfBar from './ComparisonByMonthOfBar';
import ComparisonByMonthOfPie from './ComparisonByMonthOfPie';
import Divider from 'material-ui/Divider';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
};

const ComparisonByMonthPage = () => (
    <div style={divStyle}>
        <Title render={(previousTitle) => `Comparison By Month - ${previousTitle}`} />
        <h2>Comparison by month</h2>
        <br/>
        <Divider/>
        <br/>
        <FullWidthSection useContent={true} base={0}>
            <Feature
                firstChild={true}
                w={"32%"}
            >
                <ComparisonByMonthOfTemperature />
            </Feature>
            <Feature
                w={"32%"}
            >
                <ComparisonByMonthOfBar />
            </Feature>
            <Feature
                w={"32%"}
            >
                <ComparisonByMonthOfPie />
            </Feature>
            <Feature
                lastChild={true}
                w={"97%"}
            >
                <ComparisonByMonthOfLine />
            </Feature>
        </FullWidthSection>
    </div>
);

export default ComparisonByMonthPage;
