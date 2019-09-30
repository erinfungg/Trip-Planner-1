const mapboxgl = require("mapbox-gl");

// function setMarker (category) {
//   const activityMarker = 'http://i.imgur.com/WbMOfMl.png';
//   const hotelMarker = 'http://i.imgur.com/D9574Cu.png';
//   const restMarker = 'http://i.imgur.com/cqR6pUI.png';

//   if(category === 'activty') {
//     return activityMarker;
//   }
//   else if(category === 'hotel') {
//     return hotelMarker;
//   }
//   else if (category === 'restaurant') {
//     return restMarker;
//   }
//   else {
//     return 'http://i.imgur.com/WbMOfMl.png'
//   }
// }

// function buildMarker(category, coordinates) {
//   let marker = document.createElement("div");
//   marker.style.width = "32px";
//   marker.style.height = "39px";
//   marker.style.backgroundImage = setMarker(category);
//   return new mapboxgl.Marker(marker)
//     .setLngLat(coordinates)
//     .addTo(map);
// }




const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

function buildMarker(type, coords) {
  let marker;

  if(type === 'activty') {
    marker = iconURLs.activities;
  }
  else if(type === 'hotel') {
    marker = iconURLs.hotels;
  }
  else if (type === 'restaurant') {
    marker = iconURLs.restaurants;
  }
  else {
    marker = 'http://i.imgur.com/WbMOfMl.png'
  }
  console.log(marker);

  markerEl = document.createElement("div");
  markerEl.style.width = "32px";
  markerEl.style.height = "39px";
  markerEl.style.backgroundImage = marker;

  console.log("marker is running");

  newMarker = new mapboxgl.Marker(markerEl)
    .setLngLat(coords)

  return newMarker;

}

module.exports = buildMarker;

