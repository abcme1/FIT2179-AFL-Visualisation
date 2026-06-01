// Paths look directly into the adjacent subfolders from the root directory.

var vg_1 = "chloropleth map 1/chloropleth.vg.json"; 
var vg_2 = "lollipop graph 2/lollipop.vg.json";
var vg_3 = "stacked bar 3/kicks vs handballs.vg.json";
var vg_4 = "scatter plot 4/scatter_plot.vg.json";
var vg_5 = "line chart 5/attendance_line_chart.vg.json";
var vg_6 = "waffle graph 6/wafflechart.vg.json";
var vg_7 = "connect scatter 7/connectscatter.vg.json"; 
var vg_8 = "histogram map 8/histogram.vg.json"; 
var vg_9 = "stacked area chart 9/stacked area chart.vg.json";
var vg_10 = "radial graph 10/radial.vg.json";

vegaEmbed("#chloropleth_chart", vg_1).catch(console.error);
vegaEmbed("#afl_goals_chart", vg_2).catch(console.error);
vegaEmbed("#stacked_bar_chart", vg_3).catch(console.error);
vegaEmbed("#scatter_plot_chart", vg_4).catch(console.error);
vegaEmbed("#attendance_line_chart", vg_5).catch(console.error);
vegaEmbed("#waffle_chart", vg_6).catch(console.error);
vegaEmbed("#connected_scatter_chart", vg_7).catch(console.error);
vegaEmbed("#histogram_chart", vg_8).catch(console.error);
vegaEmbed("#stacked_area_chart", vg_9).catch(console.error);
vegaEmbed("#radial_chart", vg_10).catch(console.error);