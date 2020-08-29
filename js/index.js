"use strict"
var map;
window.onload = function(){
	initializer();
	map.on('click',onmapclick);
}
function initializer(){
	// initialize Leaflet
	map = L.map('map').setView({lon: 32.54700064661847, lat: 0.3350024208544684}, 2);//: 0.3350024208544684,32.54700064661847

	// add the OpenStreetMap tiles
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
	}).addTo(map);

	// show the scale bar on the lower left corner
	L.control.scale().addTo(map);

	// show a marker on the map
	//L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);
}
function onmapclick(e){
	//console.log(e);
	var clicked = e.latlng;
	L.marker();
	console.log(e.latlng);
	console.log(e.latlng.lat,e.latlng.lng);
	
	//L.marker();
}