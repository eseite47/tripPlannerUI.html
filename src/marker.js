// const marker = document.createElement("div"); // Create a new, detached DIV
// marker.style.width = "32px";
// marker.style.height = "39px";
// marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const activity = document.createElement("div"); // Create a new, detached DIV
// activity.style.width = "32px";
// activity.style.height = "39px";
// activity.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// const hotel = document.createElement("div"); // Create a new, detached DIV
// hotel.style.width = "32px";
// hotel.style.height = "39px";
// hotel.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

// const restaurant = document.createElement("div"); // Create a new, detached DIV
// restaurant.style.width = "32px";
// restaurant.style.height = "39px";
// restaurant.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

const mapbox = require("mapbox-gl");

const iconURLs = {
  hotel: "http://i.imgur.com/WbMOfMl.png",
  restaurant: "http://i.imgur.com/D9574Cu.png",
  activity: "http://i.imgur.com/cqR6pUI.png"
};

const makeMarker = function(type, coordinates){
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url("+iconURLs[type]+")";
    return new mapbox.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports= makeMarker;
