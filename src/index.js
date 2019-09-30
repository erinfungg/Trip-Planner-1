const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiZXJpbmZ1bmdnIiwiYSI6ImNrMTZsZTZ5ZDE3MGYza28zNnhydDhxamsifQ.sDFYVsdiHORzmKWByNoq_g";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

let marker = buildMarker("hotel", [-74.009151, 40.705086]).addTo(map); // or [-87.6354, 41.8885]
// console.log(marker);
//marker.addTo(map);

// let marker = document.createElement("div");
// marker.style.width = "32px";
// marker.style.height = "39px";
// marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// console.log(new mapboxgl.Marker(marker)
//   .setLngLat([-74.009, 40.705]))
//   .addTo(map));


