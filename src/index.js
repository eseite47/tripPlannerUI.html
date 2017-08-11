//document.getElementById("map").innerText = "Hello from JS";


const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1IjoiYXByZXNzNCIsImEiOiJjajY4M2ZjdmIwYzB4MzNwbDJmbnFndDN3In0.hNBXlDz4RQ1lcc2Q-_GyqQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);

new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
