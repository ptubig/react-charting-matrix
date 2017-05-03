import React from 'react';
import d3 from 'd3';
import nv from 'nvd3';
import moment from 'moment';

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

const json = [
  {
    key: 'Brand 1',
    values: data.map(({ name, brand1 }) => [name, brand1])
  },
  {
    key: 'Brand 2',
    values: data.map(({ name, brand2 }) => [name, brand2])
  },
  {
    key: 'Brand 3',
    values: data.map(({ name, brand3 }) => [name, brand3])
  },
];

class GroupedBarChart extends React.Component {
  chart = null;

  componentShouldUpdate() {
    return false;
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    nv.addGraph(() => {
      const chart = nv.models.multiBarChart()
        .margin({ right: 100 })
        .x(d => d[0])
        .y(d => d[1])
        .showControls(false)
        .showLegend(false)
        .duration(1000)
        .color(d => {
          switch (d.key) {
            case 'Brand 3':
              return '#0000FF';
            case 'Brand 2':
              return '#00FF00';
            case 'Brand 1':
              return '#FF0000';
          }
        });

      // chart.xAxis
      //   .tickFormat(d => moment(d).format('MM/DD'));

      d3.select(this.chart)
        .datum(json)
        .call(chart);

      return chart;
    });
  }

  render() {
    return (
      <div style={ { width: 600, height: 400 } }>
        <svg ref={ ref => this.chart = ref } />
      </div>
    );
  }
};

export default GroupedBarChart;
