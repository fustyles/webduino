var doughnutWidget = {
	charts: {},

	prettyNumber: function(n) {
		// pretty count
		return (n + '').replace(/./g, function(c, i, a) {
			return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
		});
	},

	positionLabel: function(value) {
		var container = {
			top: $('#' + value).offset().top,
			left: $('#' + value).offset().left,
			height: $('#' + value).height(),
			width: $('#' + value).width()
		}

		var label = {
			height: $('#' + value + 'Label').height(),
			width: $('#' + value + 'Label').width()
		}

		// find position
		var position = {
			top: container.top + container.height / 2 - (label.height / 2),
			left: container.left + container.width / 2 - (label.width / 2)
		}

		$('#' + value + 'Label').offset(position);
	},

	createCanvas: function(value, o) {
		var canvas;
		if (doughnutWidget.options) {
			canvas = $('<canvas>', { id: value, width: doughnutWidget.options.width, height: doughnutWidget.options.height, class: doughnutWidget.options.class});
		} else {
			canvas = $('<canvas>', { id: value, width: o.width, height: o.height});

			if (o.class) {
				canvas.addClass(o.class);
			}
		}

		if (doughnutWidget.options && doughnutWidget.options.container) {
			doughnutWidget.options.container.append(canvas);
		} else {
			o.container.append(canvas);
		}
	},

	render: function(o) {
		for (var value in o) {
			var range = o[value].max - o[value].min;
			var data1 = Math.round(100*(o[value].val-o[value].min)/range);
			o[value].val = Math.round(Math.pow(10, o[value].decimal)*o[value].val)/Math.pow(10, o[value].decimal);
			var data2 = 100 - data1;
				
			if (!doughnutWidget.charts[value + 'Chart']) {
				// create canvas
				doughnutWidget.createCanvas(value, o[value]);

				// create chart
				const myData = {
				  datasets: [{
					label: '1',
					data: [data1  , data2],
					backgroundColor: [
					  o[value].color,
					  '#F0F0F0'
					],
					hoverOffset: 4
				  }]
				};
				
				doughnutWidget.charts[value + 'Chart'] = new Chart($('#' + value).get(0).getContext('2d'), {
					type: 'doughnut',
					data: myData,
					options: {
					  plugins: {
						tooltip: {
						  enabled: false
						},
					  }
					}
				});

				// create the labels
				if (o[value].link)
					var perc = $('<div id="'+value+'Value" style="font-size:'+o[value].valuesize+'px;"><a href="' + (o[value].link ? o[value].link : '#') + '>' + o[value].val + o[value].unit + '</a></div>');
				else
					var perc = $('<div id="'+value+'Value" style="font-size:'+o[value].valuesize+'px;">' + o[value].val + o[value].unit + '</div>');
					
				var label = $('<span id="' + value + 'Label" style="display: block;text-align: center;width: 100px;font-family: Helvetica;"></span>');
				label.append(perc);
				label.append('<div style="font-size:'+o[value].labelsize+'px;color:'+o[value].color+'">' + value + '</div>');

				$( (doughnutWidget.options && doughnutWidget.options.container ? doughnutWidget.options.container : o[value].container) ).append(label);

				// click handler
				if (o[value].click) {
					$('#' + value + 'Label .labelLink').click(o[value].click);
				}
			} else {
				// update the charts
				doughnutWidget.charts[value + 'Chart'].data.datasets[0].data[0] = data1;
				doughnutWidget.charts[value + 'Chart'].data.datasets[0].data[1] = data2;
				doughnutWidget.charts[value + 'Chart'].update();

				var perc = $('#' + value + 'Value');
				if (o[value].link)
					perc.html('<a href="' + (o[value].link ? o[value].link : '#') + '>' + o[value].val + o[value].unit + '</a>');
				else
					perc.html(o[value].val + o[value].unit);
			}

			doughnutWidget.positionLabel(value);
		}
	}
}