var linechartOptions = {};
var stackedLine = {};

var linechart = function(config) {
	
	if (typeof linechartOptions[config.id]==="undefined") {
		linechartOptions[config.id] = config;
		
		if ($("#gamecanvas_"+config.id).length)
			$("#gamecanvas_"+config.id).remove();
		
		var canvas = document.createElement("canvas");
		canvas.id = "gamecanvas_"+config.id;
		canvas.style.left = config.left+"px";
		canvas.style.top = config.top+"px";
		canvas.style.position = "absolute";
		$(document.body).append(canvas);
		var ctx = canvas.getContext('2d');
			
		stackedLine[config.id] = new Chart(ctx, config);
		stackedLine[config.id].canvas.parentNode.style.height = config.height+"px";
		stackedLine[config.id].canvas.parentNode.style.width = config.width+"px";
		stackedLine[config.id].resize();
	}
	else if (config.hasOwnProperty("clear")) {
		stackedLine[config.id].config.data.labels = [];
		for (var i =0;i<stackedLine[config.id].config.data.datasets.length;i++) {
			stackedLine[config.id].config.data.datasets[i].data = [];
		}
		stackedLine[config.id].update();
	}
	else {
		if (stackedLine[config.id].config.data.labels.length==linechartOptions[config.id].count) {
			stackedLine[config.id].config.data.labels.splice(0, 1);
			for (var i =0;i<stackedLine[config.id].config.data.datasets.length;i++) {
				stackedLine[config.id].config.data.datasets[i].data.splice(0, 1);
			}
		}
		
		stackedLine[config.id].config.data.labels.push(config.data[0]);
		for (var i =0;i<stackedLine[config.id].config.data.datasets.length;i++) {
			stackedLine[config.id].config.data.datasets[i].data.push(config.data[i+1]);
		}
		stackedLine[config.id].update();
	}
}
