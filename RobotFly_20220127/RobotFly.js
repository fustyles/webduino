// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

	'use strict';

	var robotfly_variable = {"roll":1500,"pitch":1500,"yaw":1500,"throttle":1600,"roll_calibration":0,"pitch_calibration":0,"yaw_calibration":0,"throttle_calibration":0,"constantheight_calibration":0,"takeoff":1800,"land":1500,"degree":100};

	function robotfly_initial(roll,pitch,yaw,throttle) {
	  robotfly_variable["roll"] = Math.floor(roll);
	  robotfly_variable["pitch"] = Math.floor(pitch);
	  robotfly_variable["yaw"] = Math.floor(yaw);
	  robotfly_variable["throttle"] = Math.floor(throttle);
	};

	function robotfly_calibration(roll_calibration,pitch_calibration,yaw_calibration,throttle_calibration) {
	  robotfly_variable["roll_calibration"] = Math.floor(roll_calibration);
	  robotfly_variable["pitch_calibration"] = Math.floor(pitch_calibration);
	  robotfly_variable["yaw_calibration"] = Math.floor(yaw_calibration);
	  robotfly_variable["throttle_calibration"] = Math.floor(throttle_calibration);
	};

	function robotfly_basic(func) {
	  if (func =="unlock")
		return "0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xd0,0x07,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xe4";
	  else if (func =="lock")
		return "0x24,0x4d,0x3c,0x10,0xc8,0xdc,0x05,0xdc,0x05,0xe8,0x03,0xe8,0x03,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xdc,0x05,0xd8"
	  else if (func =="takeoff")
		return robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["takeoff"]);
	  else if (func =="land")
		return robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["land"]);
	  else	
		return "";
	};

	function robotfly_move(func) {
	  var degree = robotfly_variable["degree"];
	  if (func =="forward")
		return robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"]+degree, robotfly_variable["yaw"], robotfly_variable["throttle"]);
	  else if (func =="backward")
		return robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"]-degree, robotfly_variable["yaw"], robotfly_variable["throttle"]);
	  else if (func =="left")
		return robotfly_command(robotfly_variable["roll"]-degree, robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["throttle"]);
	  else if (func =="right")
		return robotfly_command(robotfly_variable["roll"]+degree, robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["throttle"]);
	  else if (func =="up")
		return 	robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["throttle"]+degree);
	  else if (func =="down")
		return 	robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["throttle"]-degree);
	  else if (func =="turnright")
		return 	robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"]+degree, robotfly_variable["throttle"]);	
	  else if (func =="turnleft")
		return 	robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"]-degree, robotfly_variable["throttle"]);		
	  else if (func =="stop")
		return 	robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], robotfly_variable["throttle"]);
	  else	
		return "";
	};

	function robotfly_distance(func) {
	  if (func =="forward"||func =="backward")
		return Math.floor(1500/robotfly_variable["pitch"]);
	  else if (func =="left"||func =="right")
		return Math.floor(1500/robotfly_variable["roll"]);
	  else if (func =="up"||func =="down")
		return Math.floor(1000/robotfly_variable["throttle"]);
	  else	
	  	return 0;
	};

	function robotfly_set(func, val) {
	  val =  Math.floor(val);
	  if (func=="roll")
		robotfly_variable["roll"] = val;
	  else if (func=="pitch")
		robotfly_variable["pitch"] = val;
	  else if (func=="yaw")
		robotfly_variable["yaw"] = val;
	  else if (func=="throttle")		
		robotfly_variable["throttle"] = val;
	  else if (func=="takeoff")
		robotfly_variable["takeoff"] = val;
	  else if (func=="land")
		robotfly_variable["land"] = val;
	  else if (func=="degree")		
		robotfly_variable["degree"] = val;
	  else if (func=="roll_calibration")		
		robotfly_variable["roll_calibration"] = val;
	  else if (func=="roll_calibration")
		robotfly_variable["roll_calibration"] = val;
	  else if (func=="yaw_calibration")
		robotfly_variable["yaw_calibration"] = val;
	  else if (func=="throttle_calibration")		
		robotfly_variable["throttle_calibration"] = val;
	};
	
	function robotfly_get(func) {
	  if (func=="roll")
		return robotfly_variable["roll"];
	  else if (func=="pitch")
		return robotfly_variable["pitch"];
	  else if (func=="yaw")
		return robotfly_variable["yaw"];
	  else if (func=="throttle")		
		return robotfly_variable["throttle"];
	  else if (func=="takeoff")
		return robotfly_variable["takeoff"];
	  else if (func=="land")
		return robotfly_variable["land"];
	  else if (func=="degree")		
		return robotfly_variable["degree"];
	  else if (func=="roll_calibration")		
		return robotfly_variable["roll_calibration"];
	  else if (func=="roll_calibration")
		return robotfly_variable["roll_calibration"];
	  else if (func=="yaw_calibration")
		return robotfly_variable["yaw_calibration"];
	  else if (func=="throttle_calibration")		
		return robotfly_variable["throttle_calibration"];
	};
	
	function robotfly_throttle(throttle) {
	  return robotfly_command(robotfly_variable["roll"], robotfly_variable["pitch"], robotfly_variable["yaw"], throttle);
	};	

	function robotfly_command(value_roll, value_pitch, value_yaw, value_throttle) {

	  value_roll += robotfly_variable["roll_calibration"];
	  value_pitch += robotfly_variable["pitch_calibration"];
	  value_yaw += robotfly_variable["yaw_calibration"];
	  value_throttle += robotfly_variable["throttle_calibration"];

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
	
	window.robotfly_initial = robotfly_initial;
	window.robotfly_calibration = robotfly_calibration;
	window.robotfly_basic = robotfly_basic;
	window.robotfly_move = robotfly_move;
	window.robotfly_distance = robotfly_distance;
	window.robotfly_set = robotfly_set;
	window.robotfly_command = robotfly_command;
	window.robotfly_get = robotfly_get;
	window.robotfly_throttle = robotfly_throttle;
}(window, window.document));
