let mymap = L.map('mapid').fitWorld();//32.600970,0.317044

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoiYW5kYW1haGVucnkiLCJhIjoiY2tlNWdtbjBrMTJ6NjJ6bzR4anExYmQyYiJ9.flTkhaTWTkKqOFHkkzREbA'
}).addTo(mymap);

function onLocationError(e) {
	alert(e.message);
}
mymap.locate({setView: true, maxZoom: 13});

mymap.on('locationerror', onLocationError);


function mapUpdator(){
	//console.log('kakola');
	let located = mymap.locate()._lastCenter;
	console.log(located);
	L.marker(located).addTo(mymap);
	//console.log(locate.lat,locate.lng);
	
}

window.onload = function (){
	let map_updator = setInterval(mapUpdator,3000);	
}

