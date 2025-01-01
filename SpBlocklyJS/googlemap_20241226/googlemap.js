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
			if (type=="update_content") {
				mapMarkers[i][3].setContent(newContent);
			} else if (type=="update_headercontent") {
				mapMarkers[i][3].setHeaderContent(newContent);
			} else if (type === "update_latitude") {
				mapMarkers[i][4].lat = Number(newContent);
				mapMarkers[i][2].position = mapMarkers[i][4];					
			} else if (type === "update_longitude") {
				mapMarkers[i][4].lng = Number(newContent);
				mapMarkers[i][2].position = mapMarkers[i][4];					
			} else if (type === "update_position") {
				newContent = newContent.split(",");
				mapMarkers[i][4].lat = Number(newContent[0]);
				mapMarkers[i][4].lng = Number(newContent[1]);
				mapMarkers[i][2].position = mapMarkers[i][4];					
			} else if (type=="update_title") {
				mapMarkers[i][2].title = newContent;
			} else if (type=="update_zindex") {
				mapMarkers[i][2].zIndex = Number(newContent);
			} else if (type=="update_icon") {
				const flagImg = document.createElement("img");
				flagImg.src = newContent;
				mapMarkers[i][2].content= flagImg;
			} else if (type=="update_gmpDraggable") {
				mapMarkers[i][2].gmpDraggable = newContent;
			} else if (type=="update_gmpClickable") {
				mapMarkers[i][2].gmpClickable = newContent;
			} else if (type=="open_content") {
				mapMarkers[i][3].open(mapMarkers[i][1], mapMarkers[i][2]);
			} else if (type=="close_content") {
				mapMarkers[i][3].close();
			} else if (type=="clear") {
				mapMarkers[i][2].setMap(null);
				mapMarkers.splice(i, 1);
			}			
			break;
		}
	}
}

function getMarkerSetting(pID, newContent, property) {
	for (var i=0;i<mapMarkers.length;i++) {
		if ("point_"+pID==mapMarkers[i][0]) {
			console.log(JSON.stringify(mapMarkers[i][2].position));
			if (property=="latitude") {
				var position = mapMarkers[i][2].position;
				return position.lat;
			} else if (property=="longtitude") {
				var position = mapMarkers[i][2].position;
				return position.lng();
			} else if (property=="latLng") {
				var position = mapMarkers[i][2].position;
				return [position.lat(), position.lng()];
			}			
		}
	}
	return null;
}

function updateMapContent(pMapId, val, type) {
	if (type=="zoom") {
		pMapId.setZoom(Number(val));
	} else if (type === "clear") {
		for (var i=0;i<mapMarkers.length;i++) {
			if (pMapId==mapMarkers[i][1]) {
				mapMarkers[i][2].setMap(null);
				mapMarkers.splice(i, 1);
				i--;
			}
		}							
	} else if (type=="heading") {
		let povData = {
			heading: Number(val),
			pitch: pMapId.getPov().pitch
		};
		pMapId.setPov(povData);
	} else if (type === "pitch") {
		let povData = {
			heading: pMapId.getPov().heading,
			pitch: Number(val)
		};
		pMapId.setPov(povData);
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
