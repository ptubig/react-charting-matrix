import React from 'react';
import Rickshaw from 'rickshaw';

import './styles.css';

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

const networks = data.map(d => d.name);

const json = [
  {
    color: '#FF0000',
    data: data.map(({ name, brand1 }) => ({ x: networks.indexOf(name), y: brand1 }))
  },
  {
    color: '#00FF00',
    data: data.map(({ name, brand2 }) => ({ x: networks.indexOf(name), y: brand2 }))
  },
  {
    color: '#0000FF',
    data: data.map(({ name, brand3 }) => ({ x: networks.indexOf(name), y: brand3 }))
  },
];

class GroupedBarChart extends React.Component {
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
      renderer: 'bar',
      stroke: false,
      stack: false,
      series: json,
    });

    new Rickshaw.Graph.Axis.X({
      element: this.xAxis,
      graph: graph,
      tickFormat: d => networks[d],
    });

    new Rickshaw.Graph.Axis.Y({
      element: this.yAxis,
      graph: graph,
    });

    graph.render();
  }

  render() {
    return (
      <div className="container">
        <div className="yAxis" ref={ ref => this.yAxis = ref }></div>
        <div className="chart" ref={ ref => this.charts = ref }></div>
        <div className="xAxis" ref={ ref => this.xAxis = ref }></div>
      </div>
    );
  }
}

export default GroupedBarChart;