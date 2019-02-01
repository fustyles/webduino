var myFirstExtension = function () {};
 
myFirstExtension.prototype.getInfo = function () {
    return {
        id: 'esp8266',
        name: 'ESP8266',
 
        blocks: [
            {
                opcode: 'esp8266_system',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'system',
                    defaultMessage: 'ESP8266 SYSTEM URL[URL] Command[REQUEST]',
                    description: 'My First Extension'
                }),
		arguments: {
                    URL: {
                        type: 'string'
                    },			
                    REQUEST: {
                        type: 'string'
                    }
                },
            }
        ],
 
        translation_map: {
            zh: {
                'extensionName': 'ESP8266',
                'system': 'ESP8266 系統指令 網址[URL] 指令[REQUEST]'
            }
        },
    };
};
 
myFirstExtension.prototype.esp8266_system = function (args) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', args.URL + '?' + args.REQUEST);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var arr = JSON.parse(this.responseText);
        var out = [];
        for(var i = 0; i < arr.length; i++) {
          out.push(arr["data"]);
        }
        console.log(out);
      }
    };	
};
 
Scratch.extensions.register(new myFirstExtension());
