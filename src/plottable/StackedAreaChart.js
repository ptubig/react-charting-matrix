import React, { Component } from 'react';
import d3 from 'd3'
import Plottable from 'plottable';

const data = [
  { name: '01/01', brand1: 40, brand2: 24, brand3: 24 },
  { name: '01/02', brand1: 30, brand2: 13, brand3: 22 },
  { name: '01/03', brand1: 20, brand2: 98, brand3: 22 },
  { name: '01/04', brand1: 27, brand2: 39, brand3: 20 },
  { name: '01/05', brand1: 18, brand2: 48, brand3: 21 },
  { name: '01/06', brand1: 23, brand2: 38, brand3: 25 },
  { name: '01/07', brand1: 23, brand2: 43, brand3: 21 },
];

class StackedAreaChart extends Component {
  canvas = null;

  draw() {
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

    this.canvas = d3.select(this.canvas);

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
    return (
      <div style={ { width: 600, height: 400 } }>
        <div ref={ ref => this.canvas = ref } />
      </div>
    );
  }
}

export default StackedAreaChart;