import React from 'react';
import { VictoryArea, VictoryChart, VictoryStack, VictoryAxis } from 'victory';

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
  const brand1Data = data.map(({ name, brand1 }) => ({ name, brand1 }));
  const brand2Data = data.map(({ name, brand2 }) => ({ name, brand2 }));
  const brand3Data = data.map(({ name, brand3 }) => ({ name, brand3 }));

  return (
    <div style={ { width: `${width}px`, height: `${height}px` } }>
      <VictoryChart
        animate={ { duration: 0, easing: "cubic" } }
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
            y="brand1"
            data={ brand1Data }
          />
          <VictoryArea
            x="name"
            y="brand2"
            data={ brand2Data }
          />
          <VictoryArea
            x="name"
            y="brand3"
            data={ brand3Data }
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
};

export default StackedAreaChart;