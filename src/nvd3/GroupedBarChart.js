import React from 'react';
import d3 from 'd3';
import nv from 'nvd3';
import './styles.css';

class GroupedBarChart extends React.Component {
  chart = null;

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps({ data }) {
    this.draw(data);
  }

  componentDidMount() {
    const { data } = this.props;

    this.draw(data);
  }

  draw(data) {
    const { isVertical = true } = this.props;

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

    nv.addGraph(() => {
      const chart = isVertical ? nv.models.multiBarChart() : nv.models.multiBarHorizontalChart();

      chart.margin({ right: 100 })
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
            default:
              return '#ff0000';
          }
        });

      d3.select(this.chart)
        .datum(json)
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

export default GroupedBarChart;
