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

function getMarker(pID) {
	for (var i=0;i<mapMarkers.length;i++) {
		if ("point_"+pID==mapMarkers[i][0]) {
			return mapMarkers[i][2];
		}
	}
	return null;
}

function updateMarkerContent(pID, newContent, type) {
	for (var i=0;i<mapMarkers.length;i++) {
		if ("point_"+pID==mapMarkers[i][0]) {
			if (type=="content") {
				mapMarkers[i][3].setContent(newContent);
			}
			else if (type=="headercontent") {
				mapMarkers[i][3].setHeaderContent(newContent);
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
			else if (type=="gmpDraggable") {
				mapMarkers[i][2].gmpDraggable = newContent;
			}
			else if (type=="gmpClickable") {
				mapMarkers[i][2].gmpClickable = newContent;
			}
			else if (type=="openContent") {
				mapMarkers[i][3].open(mapMarkers[i][1], mapMarkers[i][2]);
			}
			else if (type=="closeContent") {
				mapMarkers[i][3].close();
			}
			else if (type=="clear") {
				mapMarkers[i][2].setMap(null);
				mapMarkers.splice(i, 1);
			}			
			break;
		}
	}
}

function updateMapContent(pMapId, val, type) {
	if (type=="zoomMap") {
		pMapId.setZoom(Number(val));
	}
	else if (type=="headingMap") {
		let povData = {
			heading: Number(val),
			pitch: pMapId.getPov().pitch
		};
		pMapId.setPov(povData);
	}				
	else if (type === "pitchMap") {
		let povData = {
			heading: pMapId.getPov().heading,
			pitch: Number(val)
		};
		pMapId.setPov(povData);					
	} 
	else if (type === "clearMap") {
		for (var i=0;i<mapMarkers.length;i++) {
			if (pMapId==mapMarkers[i][1]) {
				mapMarkers[i][2].setMap(null);
				mapMarkers.splice(i, 1);
				i--;
			}
		}					
	}
}

function centerMap(pMapId, lat, lng) {
	const newCenter = new google.maps.LatLng(Number(lat), Number(lng));
	pMapId.setCenter(newCenter);	
}

function positionMap(pMapId, lat, lng) {
	const newCenter = new google.maps.LatLng(Number(lat), Number(lng));
	pMapId.setPosition(newCenter);	
}
