
// Map Canada

let mapCanada = L.map('map-canada', {
  center: [43.644093889606204, -79.39419607330183],
  zoom: 13
});

let markerCanada = L.marker([43.644093889606204, -79.39419607330183]).addTo(mapCanada);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGlnaXRhbGFsaWVuIiwiYSI6ImNremJoYTlmcDA5bzIycG5yZWY5eGU1d3cifQ.VSplTAHAbePi1Iuum1I9mw'
}).addTo(mapCanada);


// Map Australia

let mapAustralia = L.map('map-australia', {
  center: [-30.329305852325568, 149.7886046795078],
  zoom: 13
});

let markerAustralia = L.marker([-30.329305852325568, 149.7886046795078]).addTo(mapAustralia);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGlnaXRhbGFsaWVuIiwiYSI6ImNremJoYTlmcDA5bzIycG5yZWY5eGU1d3cifQ.VSplTAHAbePi1Iuum1I9mw'
}).addTo(mapAustralia);



// Map UK

let mapUK = L.map('map-uk', {
  center: [51.73281481080796, -3.862071422773846],
  zoom: 13
});

let markerUK = L.marker([51.73281481080796, -3.862071422773846]).addTo(mapUK);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGlnaXRhbGFsaWVuIiwiYSI6ImNremJoYTlmcDA5bzIycG5yZWY5eGU1d3cifQ.VSplTAHAbePi1Iuum1I9mw'
}).addTo(mapUK);










