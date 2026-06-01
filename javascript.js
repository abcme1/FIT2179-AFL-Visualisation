// Paths look directly into the adjacent subfolders from the root directory.

var vg_1 = "chloropleth-1.vg.json"; 
var vg_2 = "lollipop-2.vg.json";
var vg_3 = "kicks-handballs-3.vg.json";
var vg_4 = "scatter_plot-4.vg.json";
var vg_5 = "attendance_line_chart-5.vg.json";
var vg_6 = "wafflechart-6.vg.json";
var vg_7 = "connectscatter-7.vg.json"; 
var vg_8 = "histogram-8.vg.json"; 
var vg_9 = "stackedareachart-9.vg.json";
var vg_10 = "radial-10.vg.json";

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
