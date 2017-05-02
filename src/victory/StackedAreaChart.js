import React from 'react';
import { VictoryArea, VictoryChart, VictoryStack, VictoryAxis, VictoryTheme } from 'victory';

const data = [
  { name: '01/01', brand1: 40, brand2: 24, brand3: 24 },
  { name: '01/02', brand1: 30, brand2: 13, brand3: 22 },
  { name: '01/03', brand1: 20, brand2: 98, brand3: 22 },
  { name: '01/04', brand1: 27, brand2: 39, brand3: 20 },
  { name: '01/05', brand1: 18, brand2: 48, brand3: 21 },
  { name: '01/06', brand1: 23, brand2: 38, brand3: 25 },
  { name: '01/07', brand1: 23, brand2: 43, brand3: 21 },
];

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

const brand1Data = data.map(({ name, brand1 }) => ({ name, brand1 }));
const brand2Data = data.map(({ name, brand2 }) => ({ name, brand2 }));
const brand3Data = data.map(({ name, brand3 }) => ({ name, brand3 }));

const StackedAreaChart = () => {
  return (
    <div style={ { width: '600px', height: '400px' } }>
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