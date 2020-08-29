"use strict"
var map;let theMarker = 'null',myLocation;

window.onload = function(){
	initializer();
	map.on('click',onmapclick);
}
function initializer(){
	// initialize Leaflet
	map = L.map('map').setView({lon: 32.54700064661847, lat: 0.3350024208544684},12);//: 0.3350024208544684,32.54700064661847

	// add the OpenStreetMap tiles
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
	}).addTo(map);

	// show the scale bar on the lower left corner
	L.control.scale().addTo(map);

	//L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);
	
}
function onmapclick(){
	if(window.navigator){
		window.navigator.geolocation.getCurrentPosition((position)=>{
			console.log(position.coords.latitude,position.coords.longitude);
		
			// show a marker on the map
			if(theMarker == 'null' || theMarker == 'undefined'){//check if there exists any marker
				theMarker = L.marker({lon: position.coords.longitude,lat: position.coords.latitude}).bindPopup("You're Likely To Be Here!").addTo(map);
			}else{//remove any existing markers
				map.removeLayer(theMarker);
			}
				theMarker = 'undefined';
		});
	}else{
		window.alert("Geolocation is not supported by the device platform");
	}
	
	//L.marker();
}