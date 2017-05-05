import React, { Component } from 'react';

import StackedAreaChart from './recharts/StackedAreaChart';
import GroupedBarChart from './recharts/GroupedBarChart';
import VictoryStackedAreaChart from './victory/StackedAreaChart';
import VictoryGroupedBarChart from './victory/GroupedBarChart';
import PlottableStackedAreaChart from './plottable/StackedAreaChart';
import PlottableGroupedBarChart from './plottable/GroupedBarChart';

// Somehow the order of these two matter (or matter for the nvd3 component). It needs to be ordered this way for nvd3
// component to render
import RickshawStackedAreaChart from './rickshaw/StackedAreaChart';
import RickshawGroupedBarChart from './rickshaw/GroupedBarChart';
import Nvd3StackedAreaChart from './nvd3/StackedAreaChart';
import Nvd3GroupedBarChart from './nvd3/GroupedBarChart';

import './App.css';

const stackedAreaChartData1 = [
  { name: '01/01', brand1: 40, brand2: 24, brand3: 24 },
  { name: '01/02', brand1: 30, brand2: 13, brand3: 22 },
  { name: '01/03', brand1: 20, brand2: 98, brand3: 22 },
  { name: '01/04', brand1: 27, brand2: 39, brand3: 20 },
  { name: '01/05', brand1: 18, brand2: 48, brand3: 21 },
  { name: '01/06', brand1: 23, brand2: 38, brand3: 25 },
  { name: '01/07', brand1: 34, brand2: 43, brand3: 21 },
];

const stackedAreaChartData2 = [
  { name: '01/01', brand1: 5, brand2: 30, brand3: 52 },
  { name: '01/02', brand1: 45, brand2: 34, brand3: 1 },
  { name: '01/03', brand1: 95, brand2: 66, brand3: 69 },
  { name: '01/04', brand1: 63, brand2: 31, brand3: 71 },
  { name: '01/05', brand1: 68, brand2: 81, brand3: 66 },
  { name: '01/06', brand1: 83, brand2: 64, brand3: 92 },
  { name: '01/07', brand1: 24, brand2: 47, brand3: 100 },
];

const groupedBarChartData1 = [
  { name: 'BBC America', brand1: 66, brand2: 55, brand3: 16 },
  { name: 'A&E Network', brand1: 69, brand2: 35, brand3: 25 },
  { name: 'History Channel', brand1: 95, brand2: 12, brand3: 28 },
  { name: 'Freeform', brand1: 21, brand2: 19, brand3: 2 },
  { name: 'E! Entertainment', brand1: 28, brand2: 85, brand3: 16 },
  { name: 'BET', brand1: 54, brand2: 5, brand3: 90 },
  { name: 'Lifetime Network', brand1: 58, brand2: 31, brand3: 15 },
  { name: 'Cooking Channel', brand1: 30, brand2: 77, brand3: 29 },
];

const groupedBarChartData2 = [
  { name: 'BBC America', brand1: 34, brand2: 86, brand3: 77 },
  { name: 'A&E Network', brand1: 36, brand2: 94, brand3: 47 },
  { name: 'History Channel', brand1: 88, brand2: 37, brand3: 28 },
  { name: 'Freeform', brand1: 100, brand2: 52, brand3: 13 },
  { name: 'E! Entertainment', brand1: 28, brand2: 85, brand3: 16 },
  { name: 'BET', brand1: 94, brand2: 47, brand3: 87 },
  { name: 'Lifetime Network', brand1: 30, brand2: 33, brand3: 48 },
  { name: 'Cooking Channel', brand1: 23, brand2: 34, brand3: 22 },
];

const WIDTH = 600;
const HEIGHT = 400;

class App extends Component {
  constructor() {
    super();

    this.state = {
      stackedAreaChartData: stackedAreaChartData1,
      groupedBarChartData: groupedBarChartData1,
    };
  }

  toggle() {
    this.setState({
      stackedAreaChartData: this.state.stackedAreaChartData === stackedAreaChartData1 ?
        stackedAreaChartData2 :
        stackedAreaChartData1,
      groupedBarChartData: this.state.groupedBarChartData === groupedBarChartData1 ?
        groupedBarChartData2 :
        groupedBarChartData1
    });
  }

  render() {
    const { stackedAreaChartData, groupedBarChartData } = this.state;

    return (
      <div className="App">
        <button className="toggleButton" onClick={ () => this.toggle() }>Toggle</button>
        <div className="chart">
          <h1>Recharts</h1>
          <div className="section">
            <StackedAreaChart
              data={ stackedAreaChartData }
              width={ WIDTH }
              height={ HEIGHT }
            />
            <GroupedBarChart
              data={ groupedBarChartData }
              width={ WIDTH }
              height={ HEIGHT }
            />
            <GroupedBarChart
              data={ groupedBarChartData }
              isVertical={ false }
              width={ WIDTH }
              height={ HEIGHT }
            />
          </div>
        </div>
        <div className="chart">
          <h1>Victory</h1>
          <div className="section">
            <VictoryStackedAreaChart
              data={ stackedAreaChartData }
              width={ WIDTH }
              height={ HEIGHT }
            />
            <VictoryGroupedBarChart
              data={ groupedBarChartData }
              width={ WIDTH }
              height={ HEIGHT }
            />
            <VictoryGroupedBarChart
              data={ groupedBarChartData }
              width={ WIDTH }
              height={ HEIGHT }
              isVertical={ false }
            />
          </div>
        </div>
        <div className="chart">
          <h1>Plottable</h1>
          <div className="section">
            <PlottableStackedAreaChart
              data={ stackedAreaChartData }
              width={ WIDTH }
              height={ HEIGHT }
            />
            <PlottableGroupedBarChart
              data={ groupedBarChartData }
              width={ WIDTH }
              height={ HEIGHT }
            />
            <PlottableGroupedBarChart
              data={ groupedBarChartData }
              width={ WIDTH }
              height={ HEIGHT }
              isVertical={ false }
            />
          </div>
        </div>
        <div className="chart">
          <h1>nvd3</h1>
          <div className="section">
            <Nvd3StackedAreaChart
              data={ stackedAreaChartData }
              width={ WIDTH }
              height={ HEIGHT }
            />
            <Nvd3GroupedBarChart
              width={ WIDTH }
              height={ HEIGHT }
            />
            <Nvd3GroupedBarChart
              width={ WIDTH }
              height={ HEIGHT }
              isVertical={ false }
            />
          </div>
        </div>
        <div className="chart">
          <h1>Rickshaw</h1>
          <div className="section">
            <RickshawStackedAreaChart
              width={ WIDTH }
              height={ HEIGHT }
            />
            <RickshawGroupedBarChart
              width={ WIDTH }
              height={ HEIGHT }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
