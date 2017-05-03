import React from 'react';
import { VictoryChart, VictoryAxis, VictoryGroup, VictoryBar } from 'victory'

const data = [
  { name: 'BBC America', brand1: 66, brand2: 55, brand3: 16 },
  { name: 'A&E Network', brand1: 69, brand2: 35, brand3: 25 },
  { name: 'History Channel', brand1: 95, brand2: 12, brand3: 28 },
  { name: 'Freeform', brand1: 21, brand2: 19, brand3: 2 },
  { name: 'E! Entertainment', brand1: 28, brand2: 85, brand3: 16 },
  { name: 'BET', brand1: 54, brand2: 5, brand3: 90 },
  { name: 'Lifetime Network', brand1: 58, brand2: 31, brand3: 15 },
  { name: 'Cooking Channel', brand1: 30, brand2: 77, brand3: 29 },
];

const brand1Data = data.map(({ name, brand1 }) => ({ name, brand1 }));
const brand2Data = data.map(({ name, brand2 }) => ({ name, brand2 }));
const brand3Data = data.map(({ name, brand3 }) => ({ name, brand3 }));

const GroupedBarChart = ({ width, height }) => {
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
        <VictoryGroup offset={ 10 }>
          <VictoryBar
            x="name"
            y="brand1"
            data={ brand1Data }
            color="#FF0000"
          />
          <VictoryBar
            x="name"
            y="brand2"
            data={ brand2Data }
            color="#00FF00"
          />
          <VictoryBar
            x="name"
            y="brand3"
            data={ brand3Data }
            color="#0000FF"
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default GroupedBarChart;