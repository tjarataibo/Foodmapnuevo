var map;
var infowindow;
  
// CurrentPosition = ubicación 
navigator.geolocation.getCurrentPosition(initMap);
  
function initMap(position) {
  // latitud y longitud de geolocalización
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  // Obtener latitud y longitud de Santiago
  var santiago = {lat,
    lng};
  // Predeterminado
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat,
      lng},
    zoom: 13
  });
    
  infowindow = new google.maps.InfoWindow();
  // Variable de PlaceService 
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    // Rango de lugar, hasta dónde muestra restaurantes
    location: santiago,
    radius: 1000,
    // Búsqueda de restaurant
    type: ['restaurant']
  }, callback);
  
  
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]); 
        console.log(results);
        // info(results[i]);
      }
    }
  }
  
  // Para añadir marcador
  function createMarker(place) {
    var local = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
  
    // Click del marcador
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
        
      infowindow.open(map, this);
    });
  }
}


// Obtención de nombre de lugar, ubicación e ícono
// Create the search box and link it to the UI element.
var input = document.getElementById('pac-input');
var searchBox = new google.maps.places.SearchBox(input);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// Bias the SearchBox results towards current map's viewport.
map.addListener('bounds_changed', function() {
  searchBox.setBounds(map.getBounds());
});

var markers = [];
// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
searchBox.addListener('places_changed', function() {
  var places = searchBox.getPlaces();

  if (places.length === 0) {
    return;
  }

  // Clear out the old markers.
  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];

  // For each place, get the icon, name and location.
  var bounds = new google.maps.LatLngBounds();
  places.forEach(function(place) {
    if (!place.geometry) {
      console.log('Returned place contains no geometry');
      return;
    }
    var icon = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    // Create a marker for each place.
    markers.push(new google.maps.Marker({
      map: map,
      icon: icon,
      title: place.name,
      position: place.geometry.location
    }));

    if (place.geometry.viewport) {
      // Only geocodes have viewport.
      bounds.union(place.geometry.viewport);
    } else {
      bounds.extend(place.geometry.location);
    }
  });
  map.fitBounds(bounds);
});

var marker = new google.maps.Marker({
  map: map,
  position: place.geometry.location,
  // fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
  title: place.name,
  icon: photos[0].getUrl({'maxWidth': 35,
    'maxHeight': 35})
});

// Detalles del lugar 
service = new google.maps.places.PlacesService(map);
service.getDetails(request, callback);

var request = {
  placeId: 'ChIJUR74fWpvYpYR2oNLRG3CzWA', // Id de Región Metropolitana.  Santiago de Chile = ChIJL68lBEHFYpYRMQkPQDzVdYQ
  fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
};
  
service = new google.maps.places.PlacesService(map);
service.getDetails(request, callback);
  
function callback(place, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    createMarker(place);
  }
}