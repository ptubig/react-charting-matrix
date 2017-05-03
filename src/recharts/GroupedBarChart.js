import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

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

const GroupedBarChart = () => {
  return (
    <BarChart width={ 600 } height={ 400 } data={ data }>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="brand1" fill="#FF0000" />
      <Bar dataKey="brand2" fill="#00FF00" />
      <Bar dataKey="brand3" fill="#0000FF" />
    </BarChart>
  );
};

export default GroupedBarChart;