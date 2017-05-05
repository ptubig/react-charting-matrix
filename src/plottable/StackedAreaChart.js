import React, { Component } from 'react';
import Plottable from 'plottable';

class StackedAreaChart extends Component {
  canvas = null;

  brand1Data = new Plottable.Dataset([]).metadata(2);
  brand2Data = new Plottable.Dataset([]).metadata(1);
  brand3Data = new Plottable.Dataset([]).metadata(0);

  _updateDataSet(data) {
    this.brand1Data.data(data.map(({ name, brand1 }) => ({ name, value: brand1 })));
    this.brand2Data.data(data.map(({ name, brand2 }) => ({ name, value: brand2 })));
    this.brand3Data.data(data.map(({ name, brand3 }) => ({ name, value: brand3 })));
  }

  componentWillReceiveProps({ data }) {
    this._updateDataSet(data);
  }

  shouldComponentUpdate() {
    return false;
  }

  draw(data) {
    const xScale = new Plottable.Scales.Category().domain(data.map(({ name }) => name));
    const yScale = new Plottable.Scales.Linear();

    const colorScale = new Plottable.Scales.InterpolatedColor();
    colorScale.range(['#606060', '#414141', '#1c1c1c']);

    const yAxis = new Plottable.Axes.Numeric(yScale, 'left');
    const xAxis = new Plottable.Axes.Category(xScale, 'bottom');


    const plot = new Plottable.Plots.StackedArea()
      .addDataset(this.brand1Data)
      .addDataset(this.brand2Data)
      .addDataset(this.brand3Data)
      .x(function(d) { return d.name; }, xScale)
      .y(function(d) { return d.value; }, yScale)
      .attr('fill', function(d, i, dataset) { return dataset.metadata(); }, colorScale)
      .animated(true);

    const chart = new Plottable.Components.Table([
      [yAxis, plot],
      [null, xAxis]
    ]);

    chart.renderTo(this.canvas);
  }

  componentDidMount() {
    const { data } = this.props;
    this._updateDataSet(data);

    this.draw(data);
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