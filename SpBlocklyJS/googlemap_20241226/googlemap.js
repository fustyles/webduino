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

	mapMarkers.push(["point_"+pID, pMapId, marker, infoWindow, markerData.position]);
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

function updateMarkerContent(pID, newContent, type) {
	for (var i=0;i<mapMarkers.length;i++) {
		if ("point_"+pID==mapMarkers[i][0]) {
			if (type=="content") {
				mapMarkers[i][3].setContent(newContent);
			} 
			else if (type === "latitude") {
				mapMarkers[i][4].lat = Number(newContent);
				mapMarkers[i][2].position = mapMarkers[i][4];					
			} 
			else if (type === "longitude") {
				mapMarkers[i][4].lng = Number(newContent);
				mapMarkers[i][2].position = mapMarkers[i][4];					
			}
			else if (type === "position") {
				newContent = newContent.split(",");
				mapMarkers[i][4].lat = Number(newContent[0]);
				mapMarkers[i][4].lng = Number(newContent[1]);
				mapMarkers[i][2].position = mapMarkers[i][4];					
			}				
			else if (type=="title") {
				mapMarkers[i][2].title = newContent;
			}
			else if (type=="zindex") {
				mapMarkers[i][2].zIndex = Number(newContent);
			}				
			else if (type=="icon") {
				const flagImg = document.createElement("img");
				flagImg.src = newContent;
				mapMarkers[i][2].content= flagImg;
			} 			
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

function closeMarkerContent(pID) {
	for (var i=0;i<mapMarkers.length;i++) {
		if ("point_"+pID==mapMarkers[i][0]) {
			mapMarkers[i][3].close();
			break;
		}
	}
}

function centerMap(pMapId, lat, lng) {
	const newCenter = new google.maps.LatLng(Number(lat), Number(lng));
	pMapId.setCenter(newCenter);	
}

function zoomMap(pMapId, zoom) {
	pMapId.setZoom(Number(zoom));	
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
