'use strict';

let mapMarkers = [];

function addMapPoint(pMap, pLat, pLng, pTitle, pContent) {
  let markerData = {
	  position: { lat: pLat, lng: pLng },
	  title: pTitle,
	};
	let marker = new google.maps.marker.AdvancedMarkerElement({
	  position: markerData.position,
	  map: pMap,
	  title: markerData.title,
	});
	let infoWindow = new google.maps.InfoWindow({
	  content: pContent,
	});

	marker.addListener('click', () => {
	  infoWindow.open(pMap, marker);
	});

	mapMarkers.push([pMap, marker]);
}
