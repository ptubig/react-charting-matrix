import React from 'react';
import { VictoryChart, VictoryAxis, VictoryGroup, VictoryBar, VictoryTooltip } from 'victory'

const GroupedBarChart = ({ width, height, data, isVertical = true }) => {
  const brand1Data = data.map(({ name, brand1 }) => ({ name, value: brand1 }));
  const brand2Data = data.map(({ name, brand2 }) => ({ name, value: brand2 }));
  const brand3Data = data.map(({ name, brand3 }) => ({ name, value: brand3 }));

  return (
    <div>
      <VictoryChart
        width={ width }
        height={ height }
        animate={ { duration: 1000, easing: "cubic" } }
      >
        {
          isVertical ? [
            <VictoryAxis
              tickValues={ data.map(({ name }) => name) }
              tickFormat={ data.map(({ name }) => name) }
            />,
            <VictoryAxis
              dependentAxis
            />
          ] : [
            <VictoryAxis
              tickValues={ [20, 40, 60, 80] }
              tickFormat={ [20, 40, 60, 80] }
            />,
            <VictoryAxis
              dependentAxis
              tickValues={ data.map(({ name }) => name).reverse() }
              tickFormat={ data.map(({ name }) => name).reverse() }
            />,
          ]
        }

        <VictoryGroup offset={ 10 } horizontal={ !isVertical }>
          <VictoryBar
            x="name"
            y="value"
            data={ brand1Data }
            color="#FF0000"
          />
          <VictoryBar
            x="name"
            y="value"
            data={ brand2Data }
            color="#00FF00"
          />
          <VictoryBar
            x="name"
            y="value"
            data={ brand3Data }
            color="#0000FF"
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
};

export default GroupedBarChart;