function doGet(e) {
  var token = ((!e.parameter.token)?"":e.parameter.token);
  var type = ((!e.parameter.type)?"":e.parameter.type);  
  var text = ((!e.parameter.text)?"":e.parameter.text);
  var packageId = ((!e.parameter.packageId)?"":e.parameter.packageId);
  var stickerId = ((!e.parameter.stickerId)?"":e.parameter.stickerId);
  var originalContentUrl = ((!e.parameter.originalContentUrl)?"":e.parameter.originalContentUrl);
  var previewImageUrl = ((!e.parameter.previewImageUrl)?"":e.parameter.previewImageUrl);
  
  text = text.replace(/\<br\>/g,"\n").replace(/\<br\/\>/g,"\n").replace(/\<br \/\>/g,"\n").replace(/\<BR\>/g,"\n").replace(/\<BR\/\>/g,"\n").replace(/\<BR \/\>/g,"\n");
  type = type.replace(/\%27/g,"\'").replace(/\%22/g,"\"");  
  text = text.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  packageId = packageId.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  stickerId = stickerId.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  originalContentUrl = originalContentUrl.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  previewImageUrl = previewImageUrl.replace(/\%27/g,"\'").replace(/\%22/g,"\"");
  
  //console.log("token="+token);
  //console.log("type="+type);
  //console.log("text="+text);
  //console.log("packageId="+packageId);
  //console.log("stickerId="+stickerId);
  //console.log("originalContentUrl="+originalContentUrl);
  //console.log("previewImageUrl="+previewImageUrl);
  
  var url = 'https://notify-api.line.me/api/notify';
  
  UrlFetchApp.fetch(url, {
    'headers': {
      'Authorization': 'Bearer ' + token,
    },
    'method': 'post',
    'payload': {
        'message':text + ' ',
        'imageThumbnail':previewImageUrl,
        'imageFullsize':originalContentUrl,
        'stickerPackageId':packageId,
        'stickerId':stickerId
    }
  });

  var result = {
    Return: "OK"
  };
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JAVASCRIPT);
}
