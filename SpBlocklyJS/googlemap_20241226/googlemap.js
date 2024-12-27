'use strict';

let mapMarkers = [];

function addMapPoint(pID, pMapId, pLat, pLng, pTitle, pContent) {
	let markerData = {
	  position: { lat: pLat, lng: pLng },
	  title: pTitle,
	};
	let marker = new google.maps.marker.AdvancedMarkerElement({
	  position: markerData.position,
	  map: pMapId,
	  title: markerData.title,
	});
	let infoWindow = new google.maps.InfoWindow({
	  content: pContent,
	});

	marker.addListener('click', () => {
	  infoWindow.open(pMap, marker);
	});

	mapMarkers.push([pID, pMapId, marker]);
}

function clearMapPoint(pID) {
	for (var i=0;i<mapMarkers.length;i++) {
		if ("point_"+pID==mapMarkers[i][0]) {
			mapMarkers[i][2].setMap(null);
		}
	}
}

function clearMap(pMap) {
	for (var i=0;i<mapMarkers.length;i++) {
		if (pMap==mapMarkers[i][1]) {
			mapMarkers[i][2].setMap(null);
		}
	}
}
