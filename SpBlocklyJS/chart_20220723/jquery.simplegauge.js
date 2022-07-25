/**
 * simple analog and digital gauge plugin for jQuery to build dashboards
 * @version    1.1.0
 * @release    2021-09-05
 * @repository https://github.com/peterthoeny/jquery.simplegauge
 * @author     Peter Thoeny, https://twiki.org/ & https://github.com/peterthoeny
 * @copyright  2021 Peter Thoeny, https://github.com/peterthoeny
 * @license    MIT, https://opensource.org/licenses/mit-license
 */

var simpleGaugeOptions = {};

var simpleGauge = function(options) {
	
	if (typeof simpleGaugeOptions[options.id]==="undefined") {
		options.value = Math.round(Math.pow(10, options.decimal)*options.value)/Math.pow(10, options.decimal);
		simpleGaugeOptions[options.id] = options;	
	}
	else if (!options.hasOwnProperty('template')) {
		options.value = Math.round(Math.pow(10, simpleGaugeOptions[options.id].decimal)*options.value)/Math.pow(10, simpleGaugeOptions[options.id].decimal);
		simpleGaugeOptions[options.id].value = options.value;
		options = simpleGaugeOptions[options.id];
	}
	
	draw();

	function draw() {
		if ($("#gamediv_"+options.id).length)
			$("#gamediv_"+options.id).remove();
		
		var div = document.createElement("div");
		div.id = "gamediv_"+options.id;
		div.width = options.width;
		div.height = options.height;
		div.style.width = options.width+"px";
		div.style.height = options.height+"px";		
		div.style.left = options.left+"px";
		div.style.top = options.top+"px";
		div.style.position = "absolute";
		$(document.body).append(div);
		$element = $(div);
		
		$element.html(options.template);
		$container = $element.find('.simpleGauge_container');
		$gauge     = $element.find('.simpleGauge');
		$bars      = $element.find('.simpleGauge_bars');
		$labels    = $element.find('.simpleGauge_labels');
		$ticks     = $element.find('.simpleGauge_ticks');
		$pointers  = $element.find('.simpleGauge_pointers');
		$digital   = $element.find('.simpleGauge_digital');
		$title     = $element.find('.simpleGauge_title');
		setContainer();
		setTitle();
		if(options.type.match(/\banalog\b/)) {
			createAnalogBars();
			createAnalogLabels();
			createAnalogTicks();
			createAnalogPointer();
		}
		setValue(options.value); // set digital and/or analog value
		
	}

	function setContainer() {
		let eWidth = $element.width();
		let eHeight = $element.height();
		let cWidth = options.width;
		let cHeight = options.height;
		if(typeof cWidth === 'string') {
			let m = cWidth.match(/([+\-0-9\.]+)(%?)/) || [ eWidth ];
			cWidth = m[2] ? eWidth * Number(m[1]) / 100 : Number(m[1]);
		}
		if(typeof cHeight === 'string') {
			let m = cHeight.match(/([+\-0-9\.]+)(%?)/) || [ eHeight ]
			cHeight = m[2] ? eHeight * Number(m[1]) / 100 : Number(m[1]);
		}
		if(!cWidth && !cHeight) {
			cWidth = Math.min(eWidth, eHeight);
			cHeight = cWidth;
		} else if(!cWidth) {
			cWidth = eWidth;
		} else if(!cHeight) {
			cHeight = eHeight;
		}
			
		$container.css({
			marginLeft: (eWidth - cWidth) / 2,
			marginTop:  (eHeight - cHeight) / 2,
			width:      cWidth,
			height:     cHeight,
			overflow:   'hidden'
		});
		if(options.container) {
			if(options.container.style) {
				let style = options.container.style;
				let css = styleToCss(style, options.container.style);
				$gauge.css(css);
			}
			let scale = options.container.scale;
			if(scale) {
				let css = {
					width: scale + '%',
					height: scale + '%'
				};
				$gauge.css(css);
			}
		}
		options.gaugeWidth = $gauge.innerWidth();
		options.gaugeHeight = $gauge.innerHeight();
	}

	function setTitle() {
		if(options.title && options.title.text) {
			$title.html('<span>' + options.title.text + '</span>');
			let style = options.title.style;
			let css = styleToCss(style, options.title.style);
			if(css.top) {
				$title.css({ top: css.top });
				delete css.top;
			}
			$title.find('> span').css(css);
		}
	}

	function getAngleFromValue(value) {
		return (((value - options.min) / (options.max - options.min) * (options.analog.maxAngle - options.analog.minAngle)) + options.analog.minAngle);
	}

	function getPointFromAngle(w, h, angle) {
		angle = (angle - 90) * Math.PI / 180;
		return [
			(Math.cos(angle) * w / 2),
			(Math.sin(angle) * h / 2)
		];
	}
/*
	function getPointFromAngleUNUSED(w, h, angle) {
		w = w / 2;
		h = h / 2;
		angle = (angle + 0.01 + 360 * 2 - 90) % 360;
		let a = angle * Math.PI / 180;
		let tan = Math.tan(a);
		let div = Math.pow(h * h + w * w * tan * tan, 0.5); // √h2+w2(tan𝜃)2
		let x = w * h / div;
		let y = w * h * tan / div;
		if(angle > 90 && angle < 270) {
			return [ -x, -y ];
		} else {
			return [ x, y ];
		}
	}
*/
	function getBarColor(value) {
		let color = '#666';
		options.bars.colors.forEach(function(set) {
			if(Number(set[0]) <= value) {
			   color = set[1];
			}
		});
		return color;
	}

	function createAnalogBars() {
		$bars.html('');
		$bars.css({
			marginLeft: options.gaugeWidth / 2,
			marginTop: options.gaugeHeight / 2
		});
		let maxIdx = options.bars.colors.length - 1;
		options.bars.colors.forEach((colorArr, idx) => {
			let value = Number(colorArr[0]);
			let color  = colorArr[1];
			let scale1 = Number(colorArr[2] || options.bars.scale1);
			let scale2 = Number(colorArr[3] || options.bars.scale2);
			let startAngle = getAngleFromValue(value);
			let endVal = idx + 1 > maxIdx ? options.max : options.bars.colors[idx + 1][0];
			let endAngle = getAngleFromValue(endVal);
			let width1  = options.gaugeWidth * scale1 / 100;
			let width2 = options.gaugeWidth * scale2 / 100;
			let width = (width2 + width1) / 2;
			let height1 = options.gaugeHeight * scale1 / 100;
			let height2 = options.gaugeHeight * scale2 / 100;
			let height = (height2 + height1) / 2;
			let strokeWidth = Math.abs(height2 - height1);
			let radius = (width + height) / 2;
			let startCoord = getPointFromAngle(width, height, startAngle);
			let endCoord   = getPointFromAngle(width, height, endAngle);
			let d = 'M ' + startCoord
				  + ' A ' + width / 2 + ' ' + height / 2
				  + ' 0 ' + (Math.abs(endAngle - startAngle) > 180 ? 1 : 0) + ' 1 ' + endCoord;
			appendSVG($bars, 'path', {
				class:  'simpleGauge_bar',
				style:  options.bars.style,
				d:      d,
				stroke: color,
				'stroke-width': strokeWidth,
				fill:   'none'
			});
		});
	}

	function createAnalogLabels() {
		$labels.css({
			marginLeft: options.gaugeWidth / 2,
			marginTop: options.gaugeHeight / 2
		});
		let step = (options.max - options.min) / options.labels.count;
		let width = options.gaugeWidth * options.labels.scale / 100;
		let height = options.gaugeHeight * options.labels.scale / 100;
		let labelTemplate = options.labels.text;
		if(typeof labelTemplate != 'string') {
			labelTemplate = options.labels.text;
		}
		for(let val = options.min; val <= options.max; val += step) {
			let angle = getAngleFromValue(val);
			let coord = getPointFromAngle(width, height, angle);
			let labelVal = val;
			let html = labelTemplate.replace(/\{value(?:\.(\d+))?\}/g, function(m, c1) {
				if(c1) {
					let factor = 10 ** parseInt(c1);
					labelVal = Math.round(labelVal * factor) / factor;
				}
				return labelVal.toString();
			});
			let $label = $('<div>').addClass('simpleGauge_label').html(html);
			$labels.append($label);
			let css = styleToCss(options.labels.style, {
				left: coord[0] - $label.width() / 2,
				top: coord[1] - $label.height() / 2
			});
			$label.css(css);
		}
	}

	function createAnalogTicks() {
		$ticks.css({
			marginLeft: options.gaugeWidth / 2,
			marginTop: options.gaugeHeight / 2
		});
		if(options.ticks.count) {
			let step = (options.max - options.min) / options.ticks.count;
			let width1 = options.gaugeWidth * options.ticks.scale1 / 100;
			let width2 = options.gaugeWidth * options.ticks.scale2 / 100;
			let width = (width2 + width1) / 2;
			let height1 = options.gaugeHeight * options.ticks.scale1 / 100;
			let height2 = options.gaugeHeight * options.ticks.scale2 / 100;
			let height = (height2 + height1) / 2;
			let tickHeight = Math.abs(height2 - height1);
			for(let val = options.min; val <= options.max; val += step) {
				let angle = getAngleFromValue(val);
				let coord = getPointFromAngle(width, height, angle);
				let $tick = $('<div>').addClass('simpleGauge_tick');
				$ticks.append($tick);
				let css = styleToCss(options.ticks.style, {
					transform: 'rotate(' + angle + 'deg)',
					height: tickHeight,
					left: coord[0] - $tick.width() / 2,
					top: coord[1] - tickHeight / 2
				});
				if(css.color) {
				   css.backgroundColor = css.color;
				}
				$tick.css(css);
			}
		}
		if(options.ticks.count && options.subTicks.count) {
			let step = (options.max - options.min)
					 / (options.ticks.count * options.subTicks.count);
			let width1 = options.gaugeWidth * options.subTicks.scale1 / 100;
			let width2 = options.gaugeWidth * options.subTicks.scale2 / 100;
			let width = (width2 + width1) / 2;
			let height1 = options.gaugeHeight * options.subTicks.scale1 / 100;
			let height2 = options.gaugeHeight * options.subTicks.scale2 / 100;
			let height = (height2 + height1) / 2;
			let tickHeight = Math.abs(height2 - height1);
			for(let val = options.min; val <= options.max; val += step) {
				let angle = getAngleFromValue(val);
				let coord = getPointFromAngle(width, height, angle);
				let $tick = $('<div>').addClass('simpleGauge_tick');
				$ticks.append($tick);
				let css = styleToCss(options.subTicks.style, {
					transform: 'rotate(' + angle + 'deg)',
					height: tickHeight,
					left: coord[0] - $tick.width() / 2,
					top: coord[1] - tickHeight / 2
				});
				if(css.color) {
				   css.backgroundColor = css.color;
				}
				$tick.css(css);
			}
		}
	}

	function createAnalogPointer() {
		let css = styleToCss(options.pointer.style, options.pointer.style);
		$pointers.css({
			marginLeft: options.gaugeWidth / 2,
			marginTop: options.gaugeHeight / 2
		});
		appendSVG($pointers, 'polyline', {
			class:          'simpleGauge_pointer',
			points:         options.pointer.shape,
			fill:           css.color,
			stroke:         css['border-color'] || css.borderColor || css.color,
			'stroke-width': css['border-width'] || css.borderWidth || 0
		});
		$pointers.find('.simpleGauge_pointer').css(css);
	}

	function appendSVG($elem, type, attributes) {
		let path = document.createElementNS('http://www.w3.org/2000/svg', type);
		$.each(attributes, function (name, value) {
			if (name&&value)
				path.setAttribute(name, value);
		});
		$elem.append(path);
	}

	function getValue() {
		let value = options.value;
		debugLog('getValue(): ' + value);
		return value;
	}

	function setValue(value) {
		options.value = Number(value);
		if(options.type.match(/\bdigital\b/)) {
			setDigital();
		}
		if(options.type.match(/\banalog\b/)) {
			setAnalog();
		}
		return null;
	}

	function setDigital() {
		if(options.digital && options.digital.text) {
			let html = options.digital.text;
			if(typeof html != 'string') {
				html = options.digital.text;
			}
			let value = options.value;
			html = html.replace(/\{value(?:\.(\d+))?\}/g, function(m, c1) {
				if(c1) {
					let factor = 10 ** parseInt(c1);
					value = Math.round(value * factor) / factor;
				}
				return value.toString();
			});
			$digital.html('<span>' + html + '</span>');
			let style = options.digital.style;
			let css = styleToCss(style, options.digital.style);
			if(css.top) {
				$digital.css({ top: css.top });
				delete css.top;
			}
			if(css.color && css.color === 'auto') {
				css.color = getBarColor(value);
			}
			$digital.find('> span').css(css);
		}
	}

	function setAnalog() {
		let angle = getAngleFromValue(options.value);
		let size = Math.min(options.gaugeWidth, options.gaugeHeight);
		let scale = size / 100 * options.pointer.scale / 100 / 2;
		let css = {
			transform: 'scale(' + scale + ') rotate(' + (angle + 180) + 'deg)',
		};
		$pointers.find('.simpleGauge_pointer').css(css);
	}

	function mergeDeep(target, source) {
		function _isObject(item) {
			return (item && typeof item === 'object' && !Array.isArray(item));
		}
		let output = Object.assign({}, target);
		if (_isObject(target) && _isObject(source)) {
			Object.keys(source).forEach(key => {
				if (_isObject(source[key])) {
					if (!(key in target)) {
						Object.assign(output, { [key]: source[key] });
					} else {
						output[key] = mergeDeep(target[key], source[key]);
					}
				} else if(source[key] != undefined) {
					Object.assign(output, { [key]: source[key] });
				}
			});
		}
		return output;
	}

	function styleToCss(style, defaults) {
		let css = JSON.parse(JSON.stringify(defaults));
		if(typeof style === 'string') {
			style.split(/\s*;\s*/).filter(Boolean).forEach(function(txt) {
				let keyVal = txt.split(/\s*:\s*/);
				if(keyVal.length === 2) {
					css[keyVal[0]] = keyVal[1];
				}
			});
		} else if(typeof style === 'object') {
			Object.keys(style).forEach(function(key) {
				css[key] = style[key];
			});
		}
		return css;
	}

};