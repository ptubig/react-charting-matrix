# React Charting Matrix
 
## Matrix
 
| | Recharts | Victory | Plottable | NVD3 | Rickshaw 
| --- | --- | --- | --- | --- | --- 
| URL | http://recharts.org/#/en-US/ | http://formidable.com/open-source/victory/ | http://plottablejs.org/ | http://nvd3.org/ | http://code.shutterstock.com/rickshaw/
| React-Style Components | [x] | [x] | [ ] | [ ] | [ ] 
| Stacked Area Chart | [x] | [x] | [ ] | [ ] | [ ]
| Bar Chart (Horizontal)
| Bar Chart (Vertical)
| Customization
| Events
| Animation | [x] | [x] | [ ] | [x] | [ ]
| Documentation

### Recharts

I really like Recharts. It uses simple React components to represent various pieces of a chart (Axes, Grid, Line, Tooltip, etc.) 
and stack them in an on how it will be rendered.

I love how customization is through passing a function or a React element into a specific prop for a given component.

```
<Bar type="monotone" dataKey="u" fill="#8884d8" shape={ <TriangleBar /> } />
```

Animation are represented as props for a given React Chart component (ie. `animationBegin`, `animationDuration`, 
`animationEasing`, etc.)


### Victory

I also like Victory. It also uses simple React components, but it is built more modularized which means that set up may
take longer, but it'll be easier to extend.

### Plottable

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

### NVD3

It advertises that "this project is an attempt to build re-usable charts and chart components for d3.js, wihtout 
taking away the power that d3.js gives you. It mixes use of nvd3 and d3. NVD3 looks like a thin wrapper around d3 
features, where it defines certain charts. But a lot of times is using d3, and the documentation is mostly diving into 
the source code.

But some of the "D3" components such as axis, has been dumbed down in NVD3 so you are not able to customize it easily 
with D3. And you may need to customize via CSS such as hiding the tick lines for a given axis

This requires to add a static .css file.

### Rickshaw

Very similar to NVD3, which heavily uses D3, but more stripped down. It promotes that "Rickshaw makes every effort to
provide hep for common problems without obscuring anything underneath it", and it seems to be the case. There aren't
really any docs other than follow the source code. The prerequisites is to know D3 intimately.

I do prefer this so far to NVD3 because NVD3 has alot of configurations to "turn off" features, while Rickshaw doesn't
build any features into its charts. You will need to opt-in into it.

This requires to add a static .css file.

# Notes
 
* I had to eject and remove `case-sensitive-paths-webpack-plugin` package because Plottable was failing. It was failing 
due to [src/utils/addD3SelectionMulti.ts](https://github.com/palantir/plottable/blob/develop/src/utils/addD3SelectionMulti.ts). 
Not too sure though what was specifically the culprit?
* I had to use d3 version < 4 because both NVD3 and Rickshaw is dependent on version < 4.
 