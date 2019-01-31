var myFirstExtension = function () {};
 
myFirstExtension.prototype.getInfo = function () {
    return {
        id: 'esp8266',
        name: 'ESP8266',
 
        blocks: [
            {
                opcode: 'esp8266esystem',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'system',
                    defaultMessage: 'ESP8266 SYSTEM [CMD]',
                    description: ''
                }),
		arguments: {
		CMD: {
			type: 'string'
		}
                },
            }
        ],
 
        translation_map: {
            zh: {
                'extensionName': 'ESP8266',
                'executesystem': 'ESP8266 系種指令 [CMD]'
            }
        },
    };
};
 
myFirstExtension.prototype.esp8266system = function (args) {
    var xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'https://192.168.201.16?' + args.CMD);
	xhttp.send();
};
 
Scratch.extensions.register(new myFirstExtension());
