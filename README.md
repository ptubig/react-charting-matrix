# React Charting Matrix
 
## Matrix
 
| | Recharts | Victory | Plottable | NVD3 | Rickshaw 
| --- | --- | --- | --- | --- | --- 
| URL | http://recharts.org/#/en-US/ | http://formidable.com/open-source/victory/ | http://plottablejs.org/ | http://nvd3.org/ | http://code.shutterstock.com/rickshaw/
| React-Style Components | **YES**
| Stacked Area Chart    
| Bar Chart (Horizontal)
| Bar Chart (Vertical)
| Customization
| Events
| Animation
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

# Notes
 
* I had to eject and remove `case-sensitive-paths-webpack-plugin` package because Plottable was failing. It was failing 
due to [src/utils/addD3SelectionMulti.ts](https://github.com/palantir/plottable/blob/develop/src/utils/addD3SelectionMulti.ts). 
Not too sure though what was specifically the culprit?
* I had to use d3 version < 4 because both NVD3 and Rickshaw is dependent on version < 4.
 