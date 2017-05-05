import React from 'react';
import { VictoryTooltip, VictoryArea, VictoryChart, VictoryStack, VictoryAxis } from 'victory';

/*
// Expected structure
const brand1Data = [
  { name: '01/01', brand1: 40 },
  { name: '01/02', brand1: 30 },
  { name: '01/03', brand1: 20 },
  { name: '01/04', brand1: 27 },
  { name: '01/05', brand1: 18 },
  { name: '01/06', brand1: 23 },
  { name: '01/07', brand1: 23 },
];
*/

const StackedAreaChart = ({ data, width, height }) => {
  const brand1Data = data.map(({ name, brand1 }) => ({ name, value: brand1 }));
  const brand2Data = data.map(({ name, brand2 }) => ({ name, value: brand2 }));
  const brand3Data = data.map(({ name, brand3 }) => ({ name, value: brand3 }));

  return (
    <div style={ { width: `${width}px`, height: `${height}px` } }>
      <VictoryChart
        animate={ {
          duration: 2000,
          easing: 'cubic',
          onLoad: { duration: 1000 },
          onEnter: { duration: 500, before: () => ({ y: 0 }) }
        } }
      >
        <VictoryAxis
          tickValues={ data.map(({ name }) => name) }
          tickFormat={ data.map(({ name }) => name) }
        />
        <VictoryAxis
          dependentAxis
          tickFormat={ x => x }
        />
        <VictoryStack>
          <VictoryArea
            x="name"
            y="value"
            data={ brand1Data }
          />
          <VictoryArea
            x="name"
            y="value"
            data={ brand2Data }
          />
          <VictoryArea
            x="name"
            y="value"
            data={ brand3Data }
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
};

export default StackedAreaChart;