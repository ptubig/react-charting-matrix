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

  brand1Data = new Plottable.Dataset([]).metadata(0);
  brand2Data = new Plottable.Dataset([]).metadata(1);
  brand3Data = new Plottable.Dataset([]).metadata(2);

  componentWillReceiveProps({ data }) {
    this._updateData(data);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    const { data } = this.props;
    this._updateData(data);
    this.draw(data);
  }

  _updateData(data) {
    this.brand1Data.data(data.map(({ name, brand1 }) => ({ name, value: brand1 })));
    this.brand2Data.data(data.map(({ name, brand2 }) => ({ name, value: brand2 })));
    this.brand3Data.data(data.map(({ name, brand3 }) => ({ name, value: brand3 })));
  }

  draw() {
    const { isVertical = true } = this.props;

    const xScale = new Plottable.Scales.Category().domain(data.map(({ name }) => name));
    const yScale = new Plottable.Scales.Linear();

    const colorScale = new Plottable.Scales.InterpolatedColor();
    colorScale.range(['#FF0000', '#00FF00', '#0000FF']);

    const yAxis = new Plottable.Axes.Numeric(yScale, isVertical ? 'left' : 'bottom');
    const xAxis = new Plottable.Axes.Category(xScale, isVertical ? 'bottom' : 'left');

    const plot = new Plottable.Plots.ClusteredBar(isVertical ? 'vertical' : 'horizontal')
      .addDataset(this.brand1Data)
      .addDataset(this.brand2Data)
      .addDataset(this.brand3Data)
      .attr('fill', (d, i, dataset) => dataset.metadata(), colorScale)
      .animated(true);

      if (isVertical) {
        plot
          .x(d => d.name, xScale)
          .y(d => d.value, yScale)
      } else {
        plot
          .y(d => d.name, xScale)
          .x(d => d.value, yScale)
      }


    const table = new Plottable.Components.Table([
      [isVertical ? yAxis : xAxis, plot],
      [null, isVertical ? xAxis : yAxis]
    ]);

    table.renderTo(this.canvas);
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