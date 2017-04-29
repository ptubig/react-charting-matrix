# React Charting Matrix
 
## Matrix
 
| | Recharts | Victory | Plottable | NVD3 | Rickshaw 
| --- | --- | --- | --- | --- | --- 
| URL | http://recharts.org/#/en-US/ | http://formidable.com/open-source/victory/ | http://plottablejs.org/ | http://nvd3.org/ | http://code.shutterstock.com/rickshaw/
| React-Style Components
| Stacked Area Chart    
| Bar Chart (Horizontal)
| Bar Chart (Vertical)
| Axes Customization
| Animation
| Documentation

# Notes
 
* I had to eject and remove `case-sensitive-paths-webpack-plugin` package because Plottable was failing. It was failing 
due to [src/utils/addD3SelectionMulti.ts](https://github.com/palantir/plottable/blob/develop/src/utils/addD3SelectionMulti.ts). 
Not too sure though what was specifically the culprit?
* I had to use d3 version < 4 because both NVD3 and Rickshaw is dependent on version < 4.
 