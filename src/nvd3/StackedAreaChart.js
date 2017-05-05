import React from 'react';
import d3 from 'd3';
import nv from 'nvd3';
import moment from 'moment';

import './styles.css';

class StackedAreaChart extends React.Component {
  chart = null;

  componentWillReceiveProps({ data }) {
    this.draw(this._getData(data));
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const { data } = this.props;

    this.draw(this._getData(data));
  }

  _getData(data) {
    const d = data.map(({ name, ...rest }) => ({ name: moment(name, 'MM-DD').valueOf(), ...rest }) );

    return [
      {
        key: 'Brand 1',
        values: d.map(({ name, brand1 }) => [name, brand1])
      },
      {
        key: 'Brand 2',
        values: d.map(({ name, brand2 }) => [name, brand2])
      },
      {
        key: 'Brand 3',
        values: d.map(({ name, brand3 }) => [name, brand3])
      },
    ];
  }

  draw(data) {
    nv.addGraph(() => {
      const chart = nv.models.stackedAreaChart()
        .margin({ right: 100 })
        .x(d => d[0])
        .y(d => d[1])
        .showControls(false)
        .showLegend(false)
        .duration(1000)
        .color(d => {
          switch (d.key) {
            case 'Brand 3':
              return '#606060';
            case 'Brand 2':
              return '#414141';
            case 'Brand 1':
              return '#1c1c1c';
            default:
              return '#ff0000';
          }
        });

      chart.xAxis
        .tickFormat(d => moment(d).format('MM/DD'));

      d3.select(this.chart)
        .datum(data)
        .call(chart);

      return chart;
    });
  }

  render() {
    const { width, height } = this.props;

    return (
      <div style={ { width, height } }>
        <svg ref={ ref => this.chart = ref } />
      </div>
    );
  }
};

export default StackedAreaChart;
