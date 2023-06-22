var platform = new H.service.Platform({
    apikey: 'ACM8qMJo8So95NDVvq39Uu8SIns7b7LmwEnMa9GInSI'
  });
var defaultLayers = platform.createDefaultLayers();

var mapContainer = document.getElementById('photo');

// Step 2: initialize a map
var map = new H.Map(mapContainer, defaultLayers.vector.normal.map, {
  // initial center and zoom level of the map
  zoom: 16,
  // Champs-Elysees
  center: {lat: 48.869145, lng: 2.314298},
  pixelRatio: window.devicePixelRatio|| 1
});
// procurar um jeito de redimensionar o mapa para caber na div "photo"
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

// Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Step 4: Create the default UI
var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');
