/*

	Rzye Tello

	Scratch Ext 1.0.0.1

	http://www.ryzerobotics.com

	4/7/2018
*/

var res = "";
var cmd_response = ' ';

var osdData = {};

var http = require('http');
var fs = require('fs');
var url = require('url');


var PORT = 8889;
//var HOST = '192.168.1.199';
var HOST = '192.168.10.1';

var PORT2 = 8890;
var HOST2 = '0.0.0.0';

var localPort = 50602;
var cmd_send_cnt = 1;
var res_receive_cnt = 5;
// var PORT2 = 41235;
// var HOST2 = '127.0.0.1';

var blockCmd = ['emergency','rc','stop']   // 阻塞指令
var notBlockCmd = ['reset_all']            // 非阻塞，遇到直接执行下一个指令

var dgram = require('dgram');
const client = dgram.createSocket('udp4');
client.bind(localPort);
const server = dgram.createSocket('udp4');

// 維護一個命令組
var order = []
// 若正在執行等待cmd，則鎖住
let lock = false

let send_ack_flag = 0

let sendMethod = function (cmd) 
{
  var message = Buffer.from(cmd);
  console.log(HOST + '  send:', cmd);
  
  for (var i=1;i<6;i++)
  {
	var message_combine = 'Re0' + cmd_send_cnt + '0' + i +' '+ message
	
	client.send(message_combine, 0, message_combine.length, PORT, HOST, function (err, bytes) 
	{
		if (err) 
		{
			console.log('Connection failed', err)
			throw err;
		}
	});
   }
  cmd_send_cnt = cmd_send_cnt + 1
  if(cmd_send_cnt == 10)cmd_send_cnt = 1
}

let carryCMD = function () 
{
	lock = true
	if (order.length) 
	{
		let cmd = order[0]
		cmd = decodeURI(cmd);
		//console.log(HOST + '  carryCMD: %s\n',cmd);
		sendMethod(cmd)
	} else {
		//console.log(HOST + '  carryCMD: no_command\n');
		lock = false
	}
}

let sendCmd = function (cmd) 
{
	cmd = decodeURI(cmd);
	if (cmd == 'favicon.ico') {
		return
	}
	if (cmd == 'response') {
		return
	}	
	if (notBlockCmd.indexOf(cmd) >= 0) 
	{
		return
	}
	if (blockCmd.indexOf(cmd) >= 0) 
	{
		sendMethod(cmd);
		order = [];
		return false ;
	}

	order.push(cmd);
	!lock && carryCMD(); // 每次第一次觸發sendCmd的時候， 觸發執行。之所以這麼做，是因為所有的carrycmd都是在接收到回复時被觸發的，但必須有第一個主動發送來產生第一次的回复觸發
};

client.on('message', function (msg, info) {
	var response_sof = msg.toString().slice(0,2);
	cmd_response = ' ';
	if (response_sof == 'Re')
	{
		var res_receive_cnt_tmp = msg.toString().slice(3,4)
		if (res_receive_cnt_tmp != res_receive_cnt)
		{
			console.log('Data received from server : ' + msg.toString().slice(7));
			console.log('');
			res = msg.toString().slice(7);
			cmd_response = msg.toString().slice(7);			
			//console.log('[lhp_debug]command of ack %s\n',order[0]);
			if(order[0] != 'command' && order[0] != 'mon')
			{	
				let k = 'response';
				osdData[k] = cmd_response;
				send_ack_flag = 1;
			}
			if (order.length) 
			{
				order = order.splice(1)
			}
			carryCMD()			
		}
		res_receive_cnt = res_receive_cnt_tmp;
		return	
	}
	else {
			console.log('Data received from server : ' + msg.toString());
			console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);
			console.log('');
			res = msg.toString();
			cmd_response = msg.toString()
			let k = 'response';
			osdData[k] = cmd_response;
			if(cmd_response != 'ok')
			{
				send_ack_flag = 2;
				if (order.length) 
				{
					order = order.splice(1)
				}
				carryCMD()	
			}
			else 
			{
				send_ack_flag = 3;
			}
			return
	}	
});

// 監聽本機server
let listenState = function () 
{
	server.on('message', (msg, rinfo) => 
	{ 	
		msg = msg.toString().trim();
		let fieldList = msg.split(';');
		fieldList.forEach(function (field){let [key, value] = field.split(':');osdData[key] = value;})
	});

	server.on('listening', () => {const address = server.address();console.log(`server listening ${address.address}:${address.port}`);});

	server.bind(PORT2, HOST2);
};

console.log('---------------------------------------');
console.log('Tello Ext running at http://127.0.0.1:8001/');
console.log('---------------------------------------');

http.createServer(function (request, response) 
{
	response.setHeader("Access-Control-Allow-Origin", "*");
	
	let url_params = request.url.split('/');
	if (url_params.length < 3) return;
	let command = url_params[2];
	command = decodeURI(command);
	//console.log('command = ', command)
	
	HOST = url_params[1].toString();
	//console.log('HOST = ', HOST)
	
	if(command=='poll') {
		let rst = '';
		for(let k in osdData) {
			rst += `${k} ${osdData[k]}\n`;
		}
		response.end(rst);
	}
	else if (command == 'reset')
	{
		order = [];
		lock = false
		response.end('reset');
	}
	else if (command=='command') {
		order = [];
		lock = false;
		
		// 發送command到tello
		let msgCommand = Buffer.from('command');

		client.send(msgCommand, 0, msgCommand.length, PORT, HOST, (err) => {
		  if(err) {
			console.log('Connection failed', err)
			throw err;
		  }
		});
	}	
	else if(command=='takeoff') {
		sendCmd('command');
		sendCmd('mon');
		sendCmd('takeoff');
	} 
	else {
		let cmd = url_params.slice(2).join(' ');
		//console.log('[lhp_debug]request.url.split:  %s\n', cmd);
		sendCmd(cmd);
	}
	if(send_ack_flag == 1 || send_ack_flag == 3)
	{	
		let k = 'response'
		osdData[k] = ' '
		send_ack_flag = 0;
	}
	
	if (command == 'response')
	{
		if (res!="ok")
			response.end(res);
		else
			response.end('');
	}
	else
		response.end('Hello Tello');
}).listen(8001);

process.on('SIGINT', function (){
	order = [];
	client.close()
	server.close()
	console.log('Goodbye !');
	process.exit();
})
listenState();
