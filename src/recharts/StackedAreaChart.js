import React from 'react';
import { AreaChart, Area, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const metadata = {
  brand1: '#8884d8',
  brand2: '#82ca9d',
  brand3: '#ffc658'
};

const data = [
  { name: '01/01', brand1: 40, brand2: 24, brand3: 24 },
  { name: '01/02', brand1: 30, brand2: 13, brand3: 22 },
  { name: '01/03', brand1: 20, brand2: 98, brand3: 22 },
  { name: '01/04', brand1: 27, brand2: 39, brand3: 20 },
  { name: '01/05', brand1: 18, brand2: 48, brand3: 21 },
  { name: '01/06', brand1: 23, brand2: 38, brand3: 25 },
  { name: '01/07', brand1: 34, brand2: 43, brand3: 21 },
];

const WIDTH = 600;
const HEIGHT = 400;

const StackedAreaChart = () => {
  return (
    <AreaChart
      width={ WIDTH }
      height={ HEIGHT }
      data={ data }>
      <Tooltip />
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid />
      <Area type="monotone" dataKey="brand1" stackId="1" stroke="#8884d8" fill="#8884d8" />
      <Area type="monotone" dataKey="brand2" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
      <Area type="monotone" dataKey="brand3" stackId="1" stroke="#ffc658" fill="#ffc658" />
    </AreaChart>
  )
};

export default StackedAreaChart;