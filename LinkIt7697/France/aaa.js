const delay=(seconds)=>{return new Promise((resolve)=>{setTimeout(resolve,seconds*1000);});};const main=async()=>{

cocossd_video('block','1','1','1');  
cocossd_video('block','1','1','1'); 
async function recognitionFinish(){  
if ((cocossd_object_number('person')) > 0) {    console.log((cocossd_object('',0,'class')));    console.log((cocossd_object('',0,'middlex')));    console.log((cocossd_object('',0,'middley')));    var ajaxData_;$.ajax({       type: 'GET' ,       url: ('?'+String('flash')+'='+String('10')+';'+String('')+';'+String('')) ,       dataType: 'text',       timeout: 5000,       async: false,       success: function(data, textStatus) {        ajaxData_=data;      },    error: function (jqXHR, textStatus, errorThrown) {    console.log(jqXHR.statusText);}    });    await delay(1);  } else {    var ajaxData_;$.ajax({       type: 'GET' ,       url: ('?'+String('flash')+'='+String('0')+';'+String('')+';'+String('')) ,       dataType: 'text',       timeout: 5000,       async: false,       success: function(data, textStatus) {        ajaxData_=data;      },    error: function (jqXHR, textStatus, errorThrown) {    console.log(jqXHR.statusText);}    });  }}

};main();