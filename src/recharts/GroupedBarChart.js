import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const GroupedBarChart = ({ width, height, data, isVertical =  true }) => {
  return (
    <BarChart
      width={ width }
      height={ height }
      data={ data }
      layout={ isVertical ? 'horizontal' : 'vertical' }
    >

      {
        isVertical ? [
          <XAxis type="category" dataKey="name" />,
          <YAxis />
        ] : [
          <XAxis />,
          <YAxis type="category" dataKey="name" />
        ]
      }
      <Bar dataKey="brand1" fill="#FF0000" />
      <Bar dataKey="brand2" fill="#00FF00" />
      <Bar dataKey="brand3" fill="#0000FF" />
    </BarChart>
  );
};

export default GroupedBarChart;