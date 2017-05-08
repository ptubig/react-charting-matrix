# React Charting Matrix

Note: Still work ongoing

## Matrix
 
| (as of 05/05/2017) | [Recharts](http://recharts.org/#/en-US/) | [Victory](http://formidable.com/open-source/victory/) | [Plottable](http://plottablejs.org/) | [NVD3](http://nvd3.org/) | [Rickshaw](http://code.shutterstock.com/rickshaw/) 
| --- | --- | --- | --- | --- | --- 
| Github Stars | 5453 | 4198 | 2081 | 5942  | 6015 
| React-Style Components | **X** | **X** |  |  |  
| Stacked Area Chart | **X** | **X** | **X**  | **X**  | **X** 
| Grouped Bar Chart | **X** | **X** | **X** | **X** | **X**
| Horizontal Bar Chart | **X** | **X** | **X** | **X**
| Customization
| Events
| Animation | **X** | **X** |  | **X**
| Transition |  | **X** |  | **X**
| Package Size | 8.32M | 9.50M | 12.25M | 5.66M | 1.55M 
| Documentation | **X** | **X** | **X** |
| Isomorphic | **X** | **X**

## Criteria

* **React-Style Components** - Determine if a library is composed of React components. ie. `<Line Chart />`
* **Specialized Chart** (ie. Stacked Area Chart) - Specific charts that I need
* **Customization** - How easily is it to customize a chart. How easily is it to change colors, axes, labels
* **Events** - How easily to capture and handle events
* **Animation** - Does the library support animation
* **Transition** - Does the library add transitions when data changes (ie. `onEnter` and `onExit` functionality)
* **Package Size** - Based off of the [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) NPM package
* **Documentation** - Provides a clear, comprehensive documentation
* **Isomorphic** - Determines if charts can be rendered on the server side. It tests by running a server and serve up 
`ReactDOMServer.renderToString(<ReactComponent />)`. Determine if the bundling doesn't give us errors.

## Libraries

### Recharts

A nicely featured React-style charting library that handles various charting constraints such as label collisions and
tooltips.

It doesn't do transitions. The issue can be found [here](https://github.com/recharts/recharts/issues/287). When a new
dataset is put in there, it re-draws.

### Victory

Victory is a React-style charting library that not as fully featured as Recharts. However it does provide transitions
very nicely.

### Plottable

Plottable tries to abstract out the complexity of d3 by creating a lot of class-based components (ie. Axes, Plots) 
and put it together to form a Group and can define the final layout through a Table.

Plottable uses an array of arrays to represent its layout:

```
const table = new Plottable.Components.Table([
  [yAxis, plot],
  [null, xAxis]
]);
```

where `yAxis`, `plot`, and `xAxis` are different types of an Plottable instance that makes up the layout.

There is an issue when using `Plottable.Scales.Category` to have the graph start at "0".

This requires to add a static .css file.

**Isomorphic:** When trying to run Plottable isomorphic, it gives us a `window` undefined error. So the library is
dependent on the client-side window object

### NVD3

It advertises that "this project is an attempt to build re-usable charts and chart components for d3.js, wihtout 
taking away the power that d3.js gives you. It mixes use of nvd3 and d3. NVD3 looks like a thin wrapper around d3 
features, where it defines certain charts. But a lot of times is using d3, and the documentation is mostly diving into 
the source code.

But some of the "D3" components such as axis, has been dumbed down in NVD3 so you are not able to customize it easily 
with D3. And you may need to customize via CSS such as hiding the tick lines for a given axis

This requires to add a static .css file.

**Isomorphic:** NVD3 doesn't work because D3 fails 

### Rickshaw

Very similar to NVD3, which heavily uses D3, but more stripped down. It promotes that "Rickshaw makes every effort to
provide hep for common problems without obscuring anything underneath it", and it seems to be the case. There aren't
really any docs other than follow the source code. The prerequisites is to know D3 intimately.

The dataset that Rickshaw expects is structured as:

```
const json = [
  {
    color: '#FF0000',
    data: [{ x: <number>, y: <number> }, ...]
  },
  ...
];
```

If you have x represented as a string, you will need to figure out a way to represent it as a number (ie. create a map).

Rickshaw doesn't include a horizontal stacked bar chart because "Rickshaw is aimed at graphing time series data (with 
time on the x-axis), so you are correct that there's no support for horizontal stacked bars." It was noted [here](https://github.com/shutterstock/rickshaw/issues/350).

This requires to add a static .css file.

# Notes
 
* I had to eject and remove `case-sensitive-paths-webpack-plugin` package because Plottable was failing. It was failing 
due to [src/utils/addD3SelectionMulti.ts](https://github.com/palantir/plottable/blob/develop/src/utils/addD3SelectionMulti.ts). 
Not too sure though what was specifically the culprit?
* I had to use d3 version < 4 because both NVD3 and Rickshaw is dependent on version < 4.
 