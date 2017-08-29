import React from 'react';
import Title from 'react-title-component';
import ComparisonBySumOfGgData from './ComparisonBySumOfGgData';
import ComparisonBySumOfZdtData from './ComparisonBySumOfZdtData';
import Divider from 'material-ui/Divider';
import Feature from '../../Feature';
import FullWidthSection from '../../../FullWidthSection';

const divStyle = {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
};

const ComparisonBySumPage = () => (
    <div style={divStyle}>
        <Title render={(previousTitle) => `Comparison By Sum - ${previousTitle}`} />
        <h2>Comparison by sum</h2>
        <br/>
        <Divider/>
        <br/>
        <FullWidthSection useContent={true} base={0}>
            <Feature
                firstChild={true}
                w={"48%"}
            >
                <ComparisonBySumOfGgData />
            </Feature>
            <Feature
                lastChild={true}
                w={"48%"}
            >
                <ComparisonBySumOfZdtData />
            </Feature>
        </FullWidthSection>
    </div>
);

export default ComparisonBySumPage;
