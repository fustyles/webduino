/**
* wataerbubble
* @author fiona23 (fiona_fanmy@163.com)
*/

waterbubbleOptions = {};

var waterbubble = function(options) {

	var config = options;
	
	if (typeof waterbubbleOptions[config.id]==="undefined") {
		config.val = Math.round(Math.pow(10, config.decimal)*config.val)/Math.pow(10, config.decimal);
		waterbubbleOptions[config.id] = options;
	}
	else if (!config.hasOwnProperty('color')) {
		config.val = Math.round(Math.pow(10, waterbubbleOptions[config.id].decimal)*config.val)/Math.pow(10, waterbubbleOptions[config.id].decimal);
		waterbubbleOptions[config.id].val = config.val;
		config = waterbubbleOptions[config.id];
	}	
	
	if ($("#gamecanvas_"+config.id).length)
		$("#gamecanvas_"+config.id).remove();
	
	var canvas = document.createElement("canvas");
	
	canvas.id = "gamecanvas_"+config.id;
	canvas.style.left = config.left+"px";
	canvas.style.top = config.top+"px";
	canvas.style.position = "absolute";
	$(document.body).append(canvas);
		
	config.lineWidth = config.lineWidth ? config.lineWidth : config.radius/24;

	refresh(canvas, config);

		function refresh(canvas, config) {
			canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
			init(canvas, config)
		}

		function init(canvas, config){
			var radius = config.radius;
			var lineWidth = config.lineWidth;

			canvas.width = radius*2 + lineWidth;
			canvas.height = radius*2 + lineWidth;

			buildShape(canvas, config);
		}

		function buildShape(canvas, config) {

			var ctx = canvas.getContext('2d');

			var gap = config.lineWidth*2;
			//raidus of water
			var r = config.radius - gap;
			var val = config.val;
			var lineWidth = config.lineWidth

			var waterColor = config.waterColor;
			var textColor = config.textColor;
			var font = config.font;

			var wave = config.wave

			// //the center of circle
			var x = config.radius + lineWidth/2;
			var y = config.radius + lineWidth/2;

			ctx.beginPath();
			
			ctx.arc(x, y, config.radius, 0, Math.PI*2);
			ctx.lineWidth = lineWidth;
			ctx.strokeStyle = waterColor;
			ctx.stroke();
			//if config animation true
			if (config.animation) {
				animate(ctx, r, val/100, lineWidth, waterColor, x, y, wave)
			} else {
				fillWater(ctx, r, val/100, lineWidth, waterColor, x, y, wave);
			}
			
			//if (typeof config.val == 'string'){
				x = config.radius + lineWidth/2;
				y = config.radius*0.8 + lineWidth/2;
				drawText(ctx, textColor, font, config.radius, val, x, y, config.unit);
				
				
				x = config.radius + lineWidth/2;
				y = config.radius*1.2 + lineWidth/2;
				drawText(ctx, textColor, font, config.radius, config.name, x, y, '');
			//}

			return;
		}

		function fillWater(ctx, r, val, lineWidth, waterColor, x, y, wave) {
			ctx.beginPath();

			ctx.globalCompositeOperation = 'destination-over';

			//start co-ordinates
			var sy = r*2*(1 - val) + (y - r);
			var sx = x - Math.sqrt((r)*(r) - (y - sy)*(y - sy));
			//middle co-ordinates
			var mx = x;
			var my = sy;
			//end co-ordinates
			var ex = 2*mx - sx;
			var ey = sy;

			var extent; //extent

			if (val > 0.9 || val < 0.1 || !wave) {
				extent = sy
			} else{
				extent = sy - (mx -sx)/4
			}

			ctx.beginPath();
			
			ctx.moveTo(sx, sy)
			ctx.quadraticCurveTo((sx + mx)/2, extent, mx, my);
			ctx.quadraticCurveTo((mx + ex)/2, 2*sy - extent, ex, ey);

			var startAngle = -Math.asin((x - sy)/r)
			var endAngle = Math.PI - startAngle;

			ctx.arc(x, y, r, startAngle, endAngle, false)

			ctx.fillStyle = waterColor;
			ctx.fill()
		}

		function drawText(ctx, textColor, font, radius, val, x, y, unit) {
			ctx.globalCompositeOperation = 'source-over';

			var size = font ? font.replace( /\D+/g, '') : 0.4*radius;
			ctx.font = font ? font : 'bold ' + size + 'px Microsoft Yahei';

			val = val.length ? val : val + unit

			var sy = y + size/2;
			var sx = x - ctx.measureText(val).width/2

			ctx.fillStyle = textColor;
			ctx.fillText(val, sx, sy)
		}

		function animate(ctx, r, val, lineWidth, waterColor, x, y, wave) {
			var valnow = {
				value: 0
			};
			var requestAnimationFrame = window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (func) {
				setTimeout(func, 16);
			};
			var runing = false;
			var update = function () {
				if (valnow.value < val) {
					valnow.value += (val - valnow.value)/15
					runing = true;
				} else {
					runing = false;
				}
			}
			var step = function () {
				fillWater(ctx, r, valnow.value, lineWidth, waterColor, x, y, wave);
				update();
				if (runing) {
					requestAnimationFrame(step);
				}
			}
			step(ctx, r, valnow, lineWidth, waterColor, x, y, wave)
		}
}