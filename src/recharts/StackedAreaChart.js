import React from 'react';
import { AreaChart, Area, Tooltip, XAxis, YAxis } from 'recharts';

const StackedAreaChart = ({ data, width, height }) => {
  return (
    <AreaChart
      width={ width }
      height={ height }
      data={ data }>
      <Tooltip />
      <XAxis dataKey="name" />
      <YAxis />
      <Area type="monotone" dataKey="brand1" stackId="1" stroke="none" fill="#606060" />
      <Area type="monotone" dataKey="brand2" stackId="1" stroke="none" fill="#414141" />
      <Area type="monotone" dataKey="brand3" stackId="1" stroke="none" fill="#1c1c1c" />
    </AreaChart>
  )
};

export default StackedAreaChart;