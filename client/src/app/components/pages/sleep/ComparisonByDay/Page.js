import React from 'react';
import Title from 'react-title-component';
import DataBlock from '../../../blocks/index';
import ComparisonByDay from './ComparisonByDay';
import comparisonByDayCode from '!raw!./ComparisonByDay';

const ComparisonByDayPage = () => (
  <div>
    <Title render={(previousTitle) => `Comparison By Day - ${previousTitle}`} />
    <DataBlock
      code={comparisonByDayCode}
      title="Simple example"
    >
        <ComparisonByDay />
    </DataBlock>
  </div>
);

export default ComparisonByDayPage;
