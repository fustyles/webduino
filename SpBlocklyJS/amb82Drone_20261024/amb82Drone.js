// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';

	var Amb82Drone_variable = {"roll":1500,"pitch":1500,"yaw":1500,"throttle":1600,"roll_calibration":0,"pitch_calibration":0,"yaw_calibration":0,"throttle_calibration":0,"constantheight_calibration":0,"takeoff":1800,"land":1500,"degree":100};

	function Amb82Drone_initial(roll,pitch,yaw,throttle) {
	  Amb82Drone_variable["roll"] = Math.floor(roll);
	  Amb82Drone_variable["pitch"] = Math.floor(pitch);
	  Amb82Drone_variable["yaw"] = Math.floor(yaw);
	  Amb82Drone_variable["throttle"] = Math.floor(throttle);
	};

	function Amb82Drone_calibration(roll_calibration,pitch_calibration,yaw_calibration,throttle_calibration) {
	  Amb82Drone_variable["roll_calibration"] = Math.floor(roll_calibration);
	  Amb82Drone_variable["pitch_calibration"] = Math.floor(pitch_calibration);
	  Amb82Drone_variable["yaw_calibration"] = Math.floor(yaw_calibration);
	  Amb82Drone_variable["throttle_calibration"] = Math.floor(throttle_calibration);
	};

	function Amb82Drone_basic(func) {
	  if (func =="unlock")
		return "0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xd0,0x07,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xe4";
	  else if (func =="lock")
		return "0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xe8,0x03,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xd8"
	  else if (func =="takeoff")
		return Amb82Drone_command(Amb82Drone_variable["roll"], Amb82Drone_variable["pitch"], Amb82Drone_variable["yaw"], Amb82Drone_variable["takeoff"]);
	  else if (func =="land")
		return Amb82Drone_command(Amb82Drone_variable["roll"], Amb82Drone_variable["pitch"], Amb82Drone_variable["yaw"], Amb82Drone_variable["land"]);
	  else	
		return "";
	};

	function Amb82Drone_move(func) {
	  var degree = Amb82Drone_variable["degree"];
	  if (func =="forward")
		return Amb82Drone_command(Amb82Drone_variable["roll"], Amb82Drone_variable["pitch"]+degree, Amb82Drone_variable["yaw"], Amb82Drone_variable["throttle"]);
	  else if (func =="backward")
		return Amb82Drone_command(Amb82Drone_variable["roll"], Amb82Drone_variable["pitch"]-degree, Amb82Drone_variable["yaw"], Amb82Drone_variable["throttle"]);
	  else if (func =="left")
		return Amb82Drone_command(Amb82Drone_variable["roll"]-degree, Amb82Drone_variable["pitch"], Amb82Drone_variable["yaw"], Amb82Drone_variable["throttle"]);
	  else if (func =="right")
		return Amb82Drone_command(Amb82Drone_variable["roll"]+degree, Amb82Drone_variable["pitch"], Amb82Drone_variable["yaw"], Amb82Drone_variable["throttle"]);
	  else if (func =="up")
		return 	Amb82Drone_command(Amb82Drone_variable["roll"], Amb82Drone_variable["pitch"], Amb82Drone_variable["yaw"], Amb82Drone_variable["throttle"]+degree);
	  else if (func =="down")
		return 	Amb82Drone_command(Amb82Drone_variable["roll"], Amb82Drone_variable["pitch"], Amb82Drone_variable["yaw"], Amb82Drone_variable["throttle"]-degree);
	  else if (func =="turnright")
		return 	Amb82Drone_command(Amb82Drone_variable["roll"], Amb82Drone_variable["pitch"], Amb82Drone_variable["yaw"]+degree, Amb82Drone_variable["throttle"]);	
	  else if (func =="turnleft")
		return 	Amb82Drone_command(Amb82Drone_variable["roll"], Amb82Drone_variable["pitch"], Amb82Drone_variable["yaw"]-degree, Amb82Drone_variable["throttle"]);		
	  else if (func =="stop")
		return 	Amb82Drone_command(Amb82Drone_variable["roll"], Amb82Drone_variable["pitch"], Amb82Drone_variable["yaw"], Amb82Drone_variable["throttle"]);
	  else	
		return "";
	};

	function Amb82Drone_distance(func) {
	  if (func =="forward"||func =="backward")
		return Math.floor(1500/Amb82Drone_variable["pitch"]);
	  else if (func =="left"||func =="right")
		return Math.floor(1500/Amb82Drone_variable["roll"]);
	  else if (func =="up"||func =="down")
		return Math.floor(1000/Amb82Drone_variable["throttle"]);
	  else	
	  	return 0;
	};

	function Amb82Drone_set(func, val) {
	  val =  Math.floor(val);
	  if (func=="roll")
		Amb82Drone_variable["roll"] = val;
	  else if (func=="pitch")
		Amb82Drone_variable["pitch"] = val;
	  else if (func=="yaw")
		Amb82Drone_variable["yaw"] = val;
	  else if (func=="throttle")		
		Amb82Drone_variable["throttle"] = val;
	  else if (func=="takeoff")
		Amb82Drone_variable["takeoff"] = val;
	  else if (func=="land")
		Amb82Drone_variable["land"] = val;
	  else if (func=="degree")		
		Amb82Drone_variable["degree"] = val;
	  else if (func=="roll_calibration")		
		Amb82Drone_variable["roll_calibration"] = val;
	  else if (func=="roll_calibration")
		Amb82Drone_variable["roll_calibration"] = val;
	  else if (func=="yaw_calibration")
		Amb82Drone_variable["yaw_calibration"] = val;
	  else if (func=="throttle_calibration")		
		Amb82Drone_variable["throttle_calibration"] = val;
	};
	
	function Amb82Drone_get(func) {
	  if (func=="roll")
		return Amb82Drone_variable["roll"];
	  else if (func=="pitch")
		return Amb82Drone_variable["pitch"];
	  else if (func=="yaw")
		return Amb82Drone_variable["yaw"];
	  else if (func=="throttle")		
		return Amb82Drone_variable["throttle"];
	  else if (func=="takeoff")
		return Amb82Drone_variable["takeoff"];
	  else if (func=="land")
		return Amb82Drone_variable["land"];
	  else if (func=="degree")		
		return Amb82Drone_variable["degree"];
	  else if (func=="roll_calibration")		
		return Amb82Drone_variable["roll_calibration"];
	  else if (func=="roll_calibration")
		return Amb82Drone_variable["roll_calibration"];
	  else if (func=="yaw_calibration")
		return Amb82Drone_variable["yaw_calibration"];
	  else if (func=="throttle_calibration")		
		return Amb82Drone_variable["throttle_calibration"];
	};
	
	function Amb82Drone_throttle(throttle) {
	  return Amb82Drone_command(Amb82Drone_variable["roll"], Amb82Drone_variable["pitch"], Amb82Drone_variable["yaw"], throttle);
	};	

	function Amb82Drone_command(value_roll, value_pitch, value_yaw, value_throttle) {

	  value_roll += Amb82Drone_variable["roll_calibration"];
	  value_pitch += Amb82Drone_variable["pitch_calibration"];
	  value_yaw += Amb82Drone_variable["yaw_calibration"];
	  value_throttle += Amb82Drone_variable["throttle_calibration"];

	  var roll0=value_roll%256;
	  roll0="0x"+(roll0.toString(16).length==2?"":"0")+roll0.toString(16);
	  var roll1=Math.floor(value_roll/256);
	  roll1="0x"+(roll1.toString(16).length==2?"":"0")+roll1.toString(16);

	  var pitch0=value_pitch%256;
	  pitch0="0x"+(pitch0.toString(16).length==2?"":"0")+pitch0.toString(16);
	  var pitch1=Math.floor(value_pitch/256);
	  pitch1="0x"+(pitch1.toString(16).length==2?"":"0")+pitch1.toString(16);

	  var yaw0=value_yaw%256;
	  yaw0="0x"+(yaw0.toString(16).length==2?"":"0")+yaw0.toString(16);
	  var yaw1=Math.floor(value_yaw/256);
	  yaw1="0x"+(yaw1.toString(16).length==2?"":"0")+yaw1.toString(16);

	  var throttle0=value_throttle%256;
	  throttle0="0x"+(throttle0.toString(16).length==2?"":"0")+throttle0.toString(16);
	  var throttle1=Math.floor(value_throttle/256);
	  throttle1="0x"+(throttle1.toString(16).length==2?"":"0")+throttle1.toString(16);

	  var crc = 0x10^0xC8^roll0^roll1^pitch0^pitch1^yaw0^yaw1^throttle0^throttle1^0xDC^0x05^0xDC^0x05^0xDC^0x05^0xDC^0x05;
	  crc = "0x"+(crc.toString(16).length==2?"":"0")+crc.toString(16);

	  return "0x24,0x4d,0x3c,0x10,0xc8,"+roll0+","+roll1+","+pitch0+","+pitch1+","+yaw0+","+yaw1+","+throttle0+","+throttle1+",0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,"+crc;
	}	
	
	window.Amb82Drone_initial = Amb82Drone_initial;
	window.Amb82Drone_calibration = Amb82Drone_calibration;
	window.Amb82Drone_basic = Amb82Drone_basic;
	window.Amb82Drone_move = Amb82Drone_move;
	window.Amb82Drone_distance = Amb82Drone_distance;
	window.Amb82Drone_set = Amb82Drone_set;
	window.Amb82Drone_command = Amb82Drone_command;
	window.Amb82Drone_get = Amb82Drone_get;
	window.Amb82Drone_throttle = Amb82Drone_throttle;
}(window, window.document));
