import React, { Component } from 'react';
import Plottable from 'plottable';

class StackedAreaChart extends Component {
  canvas = null;

  draw() {
    const { data } = this.props;

    const xScale = new Plottable.Scales.Category().domain(data.map(({ name }) => name));
    const yScale = new Plottable.Scales.Linear();

    const colorScale = new Plottable.Scales.InterpolatedColor();
    colorScale.range(['#606060', '#414141', '#1c1c1c']);

    const yAxis = new Plottable.Axes.Numeric(yScale, 'left');
    const xAxis = new Plottable.Axes.Category(xScale, 'bottom');

    const brand1Data = data.map(({ name, brand1 }) => ({ name, value: brand1 }))
    const brand2Data = data.map(({ name, brand2 }) => ({ name, value: brand2 }))
    const brand3Data = data.map(({ name, brand3 }) => ({ name, value: brand3 }))

    const plot = new Plottable.Plots.StackedArea()
      .addDataset(new Plottable.Dataset(brand1Data).metadata(2))
      .addDataset(new Plottable.Dataset(brand2Data).metadata(1))
      .addDataset(new Plottable.Dataset(brand3Data).metadata(0))
      .x(function(d) { return d.name; }, xScale)
      .y(function(d) { return d.value; }, yScale)
      .attr('fill', function(d, i, dataset) { return dataset.metadata(); }, colorScale)

    const table = new Plottable.Components.Table([
      [yAxis, plot],
      [null, xAxis]
    ]);

    table.renderTo(this.canvas);
  }

  componentDidMount() {
    this.draw();
  }

  render() {
    const { width, height } = this.props;

    return (
      <div style={ { width, height } }>
        <div ref={ ref => this.canvas = ref } />
      </div>
    );
  }
}

export default StackedAreaChart;