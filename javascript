// Point this to your JSON file on GitHub
var spec = "map_spec.json";

vegaEmbed('#vis', spec)
  .then(function(result) {
    console.log("Map successfully loaded!");
  })
  .catch(function(error) {
    console.error("Something went wrong:", error);
  })
  