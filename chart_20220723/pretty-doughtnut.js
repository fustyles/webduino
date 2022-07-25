var doughnutWidget = {
	chartname: {},
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
		if (doughnutWidget.chartname[value]) {
			canvas = $('<canvas>', { id: value, width: doughnutWidget.chartname[value].width, height: doughnutWidget.chartname[value].height, class: doughnutWidget.chartname[value].class});
		} else {
			canvas = $('<canvas>', { id: value, width: o.width, height: o.height});

			if (o.class) {
				canvas.addClass(o.class);
			}
		}

		if (doughnutWidget.chartname[value] && doughnutWidget.chartname[value].container) {
			doughnutWidget.chartname[value].container.append(canvas);
		} else {
			o.container.append(canvas);
		}
	},

	createChart: function(n) {
		var o = doughnutWidget.chartname[n];
		var range = o.data.max - o.data.min;
		var data1 = Math.round(100*(o.data.val-o.data.min)/range);
		o.data.val = Math.round(Math.pow(10, o.data.decimal)*o.data.val)/Math.pow(10, o.data.decimal);
		var data2 = 100 - data1;
		
		if (!$('#'+o.container).length) {
			var obj = document.createElement('div');
			obj.id = o.container;
			obj.style.position = "absolute";
			obj.style.left = o.left+'px';
			obj.style.top = o.top+'px';
			obj.style.width = o.width+'px';
			obj.style.height = o.height+'px';				
			document.body.appendChild(obj);
		}
		o.container = $('#'+o.container);
		
		if (!doughnutWidget.charts[n + 'Chart']) {
			// create canvas
			doughnutWidget.createCanvas(n, o.data);

			// create chart
			const myData = {
			  datasets: [{
				label: '1',
				data: [data1  , data2],
				backgroundColor: [
				  o.data.color,
				  '#F0F0F0'
				],
				hoverOffset: 4
			  }]
			};
			
			doughnutWidget.charts[n + 'Chart'] = new Chart($('#' + n).get(0).getContext('2d'), {
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
			if (o.link)
				var perc = $('<div id="'+n+'Value" style="font-size:'+o.data.valuesize+'px;"><a href="' + (o.data.link ? o.data.link : '#') + '>' + o.data.val + o.data.unit + '</a></div>');
			else
				var perc = $('<div id="'+n+'Value" style="font-size:'+o.data.valuesize+'px;">' + o.data.val + o.data.unit + '</div>');
				
			var label = $('<span id="' + n + 'Label" style="display: block;text-align: center;width: 100px;font-family: Helvetica;"></span>');
			label.append(perc);
			label.append('<div style="font-size:'+o.data.labelsize+'px;color:'+o.data.color+'">' + n + '</div>');

			$(o.container).append(label);

			// click handler
			if (o.click) {
				$('#' + n + 'Label .labelLink').click(o.data.click);
			}
		}

		doughnutWidget.positionLabel(n);
	},

	updateData: function(value, val) {
		var o = doughnutWidget.chartname[value].data;
		
		var range = o.max - o.min;
		var data1 = Math.round(100*(val-o.min)/range);
		val = Math.round(Math.pow(10, o.decimal)*val)/Math.pow(10, o.decimal);
		var data2 = 100 - data1;
			
		// update the charts
		doughnutWidget.charts[value + 'Chart'].data.datasets[0].data[0] = data1;
		doughnutWidget.charts[value + 'Chart'].data.datasets[0].data[1] = data2;
		doughnutWidget.charts[value + 'Chart'].update();

		var perc = $('#' + value + 'Value');
		if (o.link)
			perc.html('<a href="' + (o.link ? o.link : '#') + '>' + val + o.unit + '</a>');
		else
			perc.html(val + o.unit);

		doughnutWidget.positionLabel(value);
	}
}
