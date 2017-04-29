import React from 'react';
import { VictoryArea, VictoryChart, VictoryStack, VictoryAxis, VictoryTheme } from 'victory';

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];

const StackedAreaChart = () => {
  return (
    <div style={ { width: '600px', height: '400px' } }>
      <VictoryChart
        animate={ { duration: 0, easing: "cubic" } }
      >
        <VictoryAxis
          tickValues={ [1, 2, 3, 4] }
          tickFormat={ ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'] }
        />
        <VictoryAxis
          dependentAxis
          tickFormat={ x => x }
        />
        <VictoryStack>
          <VictoryArea
            x="quarter"
            y="earnings"
            data={ data2012 }
          />
          <VictoryArea
            x="quarter"
            y="earnings"
            data={ data2013 }
          />
          <VictoryArea
            x="quarter"
            y="earnings"
            data={ data2014 }
          />
          <VictoryArea
            x="quarter"
            y="earnings"
            data={ data2015 }
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
};

export default StackedAreaChart;