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

const ComparisonByDayPage = () => (
  <div>
      <Title render={(previousTitle) => `Comparison By Day - ${previousTitle}`} />
      <DataBlock
          code={ComparisonByDayOfLineCode}
          title="Line"
      >
          <ComparisonByDayOfLine />
      </DataBlock>
      <DataBlock
          code={ComparisonByDayOfTemperatureCode}
          title="Temperature"
      >
          <ComparisonByDayOfTemperature />
      </DataBlock>
      <DataBlock
          code={ComparisonByDayOfBarCode}
          title="Bar"
      >
          <ComparisonByDayOfBar />
      </DataBlock>
      <DataBlock
          code={ComparisonByDayOfPieCode}
          title="Pie"
      >
          <ComparisonByDayOfPie />
      </DataBlock>
  </div>
);

export default ComparisonByDayPage;
