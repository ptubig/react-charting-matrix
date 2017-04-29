import React, { Component } from 'react';
import d3 from 'd3'
import Plottable from 'plottable';

class StackedAreaChart extends Component {
  canvas = null;

  draw() {
    var xScale = new Plottable.Scales.Category();
    var yScale = new Plottable.Scales.Linear();
    var colorScale = new Plottable.Scales.InterpolatedColor();
    colorScale.range(['#BDCEF0', '#5279C7']);

    var yAxis = new Plottable.Axes.Numeric(yScale, 'left');
    var xAxis = new Plottable.Axes.Category(xScale, 'bottom');

    var primaryData = [{ x: 1, y: 1 }, { x: 2, y: 3 }, { x: 3, y: 2 },
      { x: 4, y: 4 }, { x: 5, y: 3 }, { x: 6, y: 5 }];
    var secondaryData = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 2 },
      { x: 4, y: 1 }, { x: 5, y: 2 }, { x: 6, y: 1 }];

    var plot = new Plottable.Plots.StackedArea()
      .addDataset(new Plottable.Dataset(primaryData).metadata(5))
      .addDataset(new Plottable.Dataset(secondaryData).metadata(3))
      .x(function(d) { return d.x; }, xScale)
      .y(function(d) { return d.y; }, yScale)
      .attr('fill', function(d, i, dataset) { return dataset.metadata(); }, colorScale)

    this.canvas = d3.select(this.canvas);


    var table = new Plottable.Components.Table([
      [yAxis, plot],
      [null, xAxis]
    ]);

    table.renderTo(this.canvas);
  }

  componentDidMount() {
    this.draw();
  }

  render() {
    return (
      <div style={ { width: 600, height: 400 } }>
        <div ref={ ref => this.canvas = ref } />
      </div>
    );
  }
}

export default StackedAreaChart;