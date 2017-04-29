import React from 'react';
import Rickshaw from 'rickshaw';

class StackedAreaChart extends React.Component {
  charts = null;

  componentDidMount() {
    this.draw();
  }

  draw() {
    var graph = new Rickshaw.Graph( {
      element: this.charts,
      width: 235,
      height: 85,
      renderer: 'area',
      stroke: true,
      series: [ {
        data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
        color: '#9cc1e0'
      }, {
        data: [ { x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 } ],
        color: '#cae2f7'
      } ]
    } );

    graph.render();
  }

  render() {
    return (
      <div ref={ ref => this.charts = ref }></div>
    );
  }
}

export default StackedAreaChart;