import React from 'react';
import d3 from 'd3';
import nv from 'nvd3';

class StackedAreaChart extends React.Component {
  chart = null;

  componentDidMount() {
    this.draw();
  }

  draw() {
    d3.json('http://nvd3.org/examples/stackedAreaData.json', data => {
      nv.addGraph(() => {
        var chart = nv.models.stackedAreaChart()
          .margin({right: 100})
          .x(function (d) {
            return d[0]
          })
          .y(function (d) {
            return d[1]
          })
          .showControls(false)
          .duration(1000)


        chart.xAxis
          .tickFormat(function (d) {
            return d3.time.format('%x')(new Date(d))
          });

        chart.yAxis
          .tickFormat(d3.format(',.2f'));

        d3.select(this.chart)
          .datum(data)
          .call(chart);

        // nv.utils.windowresize(chart.update);

        return chart;
      });
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

export default StackedAreaChart;
