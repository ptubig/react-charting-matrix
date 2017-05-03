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

const stackedAreaChartData = [
  { name: '01/01', brand1: 40, brand2: 24, brand3: 24 },
  { name: '01/02', brand1: 30, brand2: 13, brand3: 22 },
  { name: '01/03', brand1: 20, brand2: 98, brand3: 22 },
  { name: '01/04', brand1: 27, brand2: 39, brand3: 20 },
  { name: '01/05', brand1: 18, brand2: 48, brand3: 21 },
  { name: '01/06', brand1: 23, brand2: 38, brand3: 25 },
  { name: '01/07', brand1: 34, brand2: 43, brand3: 21 },
];

const WIDTH = 600;
const HEIGHT = 400;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="chart">
          <h1>Recharts</h1>
          <div className="section">
            <StackedAreaChart
              data={ stackedAreaChartData }
              width={ WIDTH }
              height={ HEIGHT }
            />
            <GroupedBarChart
              width={ WIDTH }
              height={ HEIGHT }
            />
            <GroupedBarChart
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
              width={ WIDTH }
              height={ HEIGHT }
            />
            <VictoryGroupedBarChart
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
              width={ WIDTH }
              height={ HEIGHT }
            />
            <PlottableGroupedBarChart
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
