import React from 'react';
import Rickshaw from 'rickshaw';
import moment from 'moment';

import './styles.css';

const data = [
  { name: moment('2017-01-01', 'YYYY-MM-DD').valueOf(), brand1: 40, brand2: 24, brand3: 24 },
  { name: moment('2017-01-02', 'YYYY-MM-DD').valueOf(), brand1: 30, brand2: 13, brand3: 22 },
  { name: moment('2017-01-03', 'YYYY-MM-DD').valueOf(), brand1: 20, brand2: 98, brand3: 22 },
  { name: moment('2017-01-04', 'YYYY-MM-DD').valueOf(), brand1: 27, brand2: 39, brand3: 20 },
  { name: moment('2017-01-05', 'YYYY-MM-DD').valueOf(), brand1: 18, brand2: 48, brand3: 21 },
  { name: moment('2017-01-06', 'YYYY-MM-DD').valueOf(), brand1: 23, brand2: 38, brand3: 25 },
  { name: moment('2017-01-07', 'YYYY-MM-DD').valueOf(), brand1: 23, brand2: 43, brand3: 21 },
];

// This is the typical way how Rickshaw likes to structure its data
const json = [
  {
    color: '#1c1c1c',
    data: data.map(({ name, brand1 }) => ({ x: name, y: brand1 }))
  },
  {
    color: '#414141',
    data: data.map(({ name, brand2 }) => ({ x: name, y: brand2 }))
  },
  {
    color: '#606060',
    data: data.map(({ name, brand3 }) => ({ x: name, y: brand3 }))
  },
];

class StackedAreaChart extends React.Component {
  xAxis = null;
  yAxis = null;
  charts = null;

  componentDidMount() {
    this.draw();
  }

  draw() {
    const graph = new Rickshaw.Graph({
      element: this.charts,
      width: 600,
      height: 400,
      renderer: 'area',
      stroke: false,
      series: json,
    });

    new Rickshaw.Graph.Axis.X({
      element: this.xAxis,
      graph: graph,
      tickFormat: d => moment(d).format('MM/DD'),
    });

    new Rickshaw.Graph.Axis.Y({
      element: this.yAxis,
      graph: graph,
    });

    graph.render();
  }

  render() {
    return (
      <div className="container stackedAreaChart">
        <div className="yAxis" ref={ ref => this.yAxis = ref }></div>
        <div className="chart" ref={ ref => this.charts = ref }></div>
        <div className="xAxis" ref={ ref => this.xAxis = ref }></div>
      </div>
    );
  }
}

export default StackedAreaChart;