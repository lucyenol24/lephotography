var location = [
	{
		"name": "Kirkland WA",
		"lat": 47.6769,
		"lng": -122.2060,
		"zoom": 18
	}];

var map;

function initMap() {
	map = new google.maps.Map($('#map')[0], {
		center: {lat: 47.6205, lng: -122.3493},
		zoom: 8
	});

	createMarkers();
}

function createMarkers() {
	$.each(locations, function (index, value) {
		var marker = new google.maps.Marker({
        	position: { lat: value.lat, lng: value.lng }});
		
		marker.setMap(map);

		var infoWindow = new google.maps.InfoWindow({
        	content: value.name });
	
		marker.addListener( 'click', function( ) {
        	infoWindow.open( map, marker );
        });
	});
}

$('#location').on('change', changeCenter);

function changeCenter() {
	var place = $(this).val();
	var location = $.grep(locations, function (n, i) {
		return n.name == place;
	})[0];

	if(location) {
		map.setCenter({lat: location.lat, lng: location.lng});
		map.setZoom(location.zoom);	
	}
	
}