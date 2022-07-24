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
	else {
		if (stackedLine[config.id].config.data.labels.length==linechartOptions[config.id].count) {
			stackedLine[config.id].config.data.labels.splice(0, 1);
			stackedLine[config.id].config.data.datasets[0].data.splice(0, 1);
			stackedLine[config.id].config.data.datasets[1].data.splice(0, 1);
		}
		
		stackedLine[config.id].config.data.labels.push(config.data[0]);
		stackedLine[config.id].config.data.datasets[0].data.push(config.data[1]);
		stackedLine[config.id].config.data.datasets[1].data.push(config.data[2]);
		stackedLine[config.id].update();
	}
}