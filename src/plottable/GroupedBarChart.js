import React, { Component } from 'react';
import Plottable from 'plottable';

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

class GroupedBarChart extends Component {
  canvas = null;

  draw() {
    const xScale = new Plottable.Scales.Category().domain(data.map(({ name }) => name));
    const yScale = new Plottable.Scales.Linear();

    const colorScale = new Plottable.Scales.InterpolatedColor();
    colorScale.range(['#FF0000', '#00FF00', '#0000FF']);

    const yAxis = new Plottable.Axes.Numeric(yScale, 'left');
    const xAxis = new Plottable.Axes.Category(xScale, 'bottom');

    const brand1Data = data.map(({ name, brand1 }) => ({ name, value: brand1 }));
    const brand2Data = data.map(({ name, brand2 }) => ({ name, value: brand2 }));
    const brand3Data = data.map(({ name, brand3 }) => ({ name, value: brand3 }));

    const plot = new Plottable.Plots.ClusteredBar()
      .addDataset(new Plottable.Dataset(brand1Data).metadata(0))
      .addDataset(new Plottable.Dataset(brand2Data).metadata(1))
      .addDataset(new Plottable.Dataset(brand3Data).metadata(2))
      .x(d => d.name, xScale)
      .y(d => d.value, yScale)
      .attr('fill', (d, i, dataset) => dataset.metadata(), colorScale)

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

export default GroupedBarChart;