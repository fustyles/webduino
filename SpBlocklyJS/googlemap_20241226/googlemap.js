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
	  infoWindow.open(pMapId, marker);
	});

	mapMarkers.push(["point_"+pID, pMapId, marker, infoWindow]);
}

function clearMarker(pID) {
	for (var i=0;i<mapMarkers.length;i++) {
		if ("point_"+pID==mapMarkers[i][0]) {
			mapMarkers[i][2].setMap(null);
			mapMarkers.splice(i, 1);
			break;
		}
	}
}

function updateMarkerContent(pID, newContent) {
	for (var i=0;i<mapMarkers.length;i++) {
		if ("point_"+pID==mapMarkers[i][0]) {
			mapMarkers[i][3].setContent(newContent);
			mapMarkers[i][3].open(mapMarkers[i][1], mapMarkers[i][2]);
			break;
		}
	}
}

function openMarkerContent(pID) {
	for (var i=0;i<mapMarkers.length;i++) {
		if ("point_"+pID==mapMarkers[i][0]) {
			mapMarkers[i][3].open(mapMarkers[i][1], mapMarkers[i][2]);
			break;
		}
	}
}

function clearMap(pMapId) {
	for (var i=0;i<mapMarkers.length;i++) {
		if (pMapId==mapMarkers[i][1]) {
			mapMarkers[i][2].setMap(null);
			mapMarkers.splice(i, 1);
			i--;
		}
	}
}
