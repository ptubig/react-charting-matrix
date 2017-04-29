import React, { Component } from 'react';

import StackedAreaChart from './recharts/StackedAreaChart';
import VictoryStackedAreaChart from './victory/StackedAreaChart';

import PlottableStackedAreaChart from './plottable/StackedAreaChart';

// Somehow the order of these two matter (or matter for the nvd3 component). It needs to be ordered this way for nvd3
// component to render
import RickshawPlottableStackedAreaChart from './rickshaw/StackedAreaChart';
import Nvd3PlottableStackedAreaChart from './nvd3/StackedAreaChart';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Recharts</h1>
          <StackedAreaChart />
        </div>
        <div>
          <h1>Victory</h1>
          <VictoryStackedAreaChart />
        </div>
        <div>
          <h1>Plottable</h1>
          <PlottableStackedAreaChart />
        </div>
        <div>
          <h1>nvd3</h1>
          <Nvd3PlottableStackedAreaChart />
        </div>
        <div>
          <h1>Rickshaw</h1>
          <RickshawPlottableStackedAreaChart />
        </div>
      </div>
    );
  }
}

export default App;
