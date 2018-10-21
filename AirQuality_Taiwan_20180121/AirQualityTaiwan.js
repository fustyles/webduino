// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  var PM_data="";
  
  function pmgov_link(input_url_,input_format_) 
  {
    if (input_format_=="JSON")
      getJSON(input_url_);
    else if (input_format_=="XML")
      getXML(input_url_);   
  }
    
  function getXML(target)  
  {
    if (window.XMLHttpRequest)
      var xmlHttp = new XMLHttpRequest();
    else
      var xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    
    xmlHttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {    
        var x = this.responseXML.getElementsByTagName("Data");
        PM_data = "";
        for (var i = 0; i <x.length; i++) 
        { 
          PM_data += "SiteName,";
          if (x[i].getElementsByTagName("SiteName")[0].childNodes.length==1)
            PM_data += x[i].getElementsByTagName("SiteName")[0].childNodes[0].nodeValue;
          PM_data += ",County,";          
          if (x[i].getElementsByTagName("County")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("County")[0].childNodes[0].nodeValue;
          PM_data += ",AQI,";
          if (x[i].getElementsByTagName("AQI")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("AQI")[0].childNodes[0].nodeValue;
          PM_data += ",Pollutant,";
          if (x[i].getElementsByTagName("Pollutant")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("Pollutant")[0].childNodes[0].nodeValue;
          PM_data += ",Status,";
          if (x[i].getElementsByTagName("Status")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue;            
          PM_data += ",SO2 (ppb),";
          if (x[i].getElementsByTagName("SO2")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("SO2")[0].childNodes[0].nodeValue;
          PM_data += ",CO (ppm),";
          if (x[i].getElementsByTagName("CO")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("CO")[0].childNodes[0].nodeValue;
          PM_data += ",CO_8hr (ppm),";
          if (x[i].getElementsByTagName("CO_8hr")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("CO_8hr")[0].childNodes[0].nodeValue;          
          PM_data += ",O3 (ppb),";
          if (x[i].getElementsByTagName("O3")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("O3")[0].childNodes[0].nodeValue;
          PM_data += ",O3_8hr (ppb),";
          if (x[i].getElementsByTagName("O3_8hr")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("O3_8hr")[0].childNodes[0].nodeValue;
          PM_data += ",PM10 (μg/m3),";
          if (x[i].getElementsByTagName("PM10")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("PM10")[0].childNodes[0].nodeValue;          
          PM_data += ",PM2.5 (μg/m3),";
          if (x[i].getElementsByTagName("PM2.5")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("PM2.5")[0].childNodes[0].nodeValue;          
          PM_data += ",NO2 (ppb),";
          if (x[i].getElementsByTagName("NO2")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("NO2")[0].childNodes[0].nodeValue;  
          PM_data += ",NOx (ppb),";
          if (x[i].getElementsByTagName("NOx")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("NOx")[0].childNodes[0].nodeValue;          
          PM_data += ",NO (ppb),";
          if (x[i].getElementsByTagName("NO")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("NO")[0].childNodes[0].nodeValue;          
          PM_data += ",WindDirec (degrees),";
          if (x[i].getElementsByTagName("WindDirec")[0].childNodes.length==1)
            PM_data += x[i].getElementsByTagName("WindDirec")[0].childNodes[0].nodeValue;
          PM_data += ",WindSpeed (m/sec),";
          if (x[i].getElementsByTagName("WindSpeed")[0].childNodes.length==1)
            PM_data += x[i].getElementsByTagName("WindSpeed")[0].childNodes[0].nodeValue; 
          PM_data += ",PublishTime,";
          if (x[i].getElementsByTagName("PublishTime")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("PublishTime")[0].childNodes[0].nodeValue;          
          PM_data += ",PM2.5_AVG (μg/m3),";
          if (x[i].getElementsByTagName("PM2.5_AVG")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("PM2.5_AVG")[0].childNodes[0].nodeValue; 
          PM_data += ",PM10_AVG (μg/m3),";
          if (x[i].getElementsByTagName("PM10_AVG")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("PM10_AVG")[0].childNodes[0].nodeValue;  
          PM_data += ",Latitude,";
          if (x[i].getElementsByTagName("Latitude")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("Latitude")[0].childNodes[0].nodeValue;   
          PM_data += ",Longitude,";
          if (x[i].getElementsByTagName("Longitude")[0].childNodes.length==1)                      
            PM_data += x[i].getElementsByTagName("Longitude")[0].childNodes[0].nodeValue;   
          PM_data += ";"; 
        }
      }
    };
    xmlHttp.open("GET", target, true);
    xmlHttp.send(); 
  }
  
  function getJSON(target)
  {
    var data = $.ajax({
        type: "get",
        dataType: "jsonp",
        url: target,
        success: function(json)
        {
          //console.log(json.result.records);
          PM_data = "";
          json = eval(json.result.records);
          for (var i in json) 
          {
            PM_data += "SiteName,";
            PM_data += json[i]["SiteName"];            
            PM_data += ",County,";
            PM_data += json[i]["County"];
            PM_data += ",AQI,";
            PM_data += json[i]["AQI"];
            PM_data += ",Pollutant,";
            PM_data += json[i]["Pollutant"];   
            PM_data += ",Status,";
            PM_data += json[i]["Status"];            
            PM_data += ",SO2 (ppb),";
            PM_data += json[i]["SO2"];            
            PM_data += ",CO (ppm),";
            PM_data += json[i]["CO"];
            PM_data += ",CO_8hr (ppm),";
            PM_data += json[i]["CO_8hr"];            
            PM_data += ",O3 (ppb),";
            PM_data += json[i]["O3"];
            PM_data += ",O3_8hr (ppb),";
            PM_data += json[i]["O3_8hr"];            
            PM_data += ",PM10 (μg/m3),";
            PM_data += json[i]["PM10"];
            PM_data += ",PM2.5 (μg/m3),";
            PM_data += json[i]["PM2.5"];            
            PM_data += ",NO2 (ppb),";
            PM_data += json[i]["NO2"];
            PM_data += ",NOx (ppb),";
            PM_data += json[i]["NOx"];
            PM_data += ",NO (ppb),";
            PM_data += json[i]["NO"];            
            PM_data += ",WindSpeed (m/sec),";
            PM_data += json[i]["WindSpeed"];
            PM_data += ",WindDirec (degrees),";
            PM_data += json[i]["WindDirec"];
            PM_data += ",PublishTime,";
            PM_data += json[i]["PublishTime"];
            PM_data += ",PM2.5_AVG (μg/m3),";
            PM_data += json[i]["PM2.5_AVG"];  
            PM_data += ",PM10_AVG (μg/m3),";
            PM_data += json[i]["PM10_AVG"];
            PM_data += ",Latitude,";
            PM_data += json[i]["Latitude"];  
            PM_data += ",Longitude,";
            PM_data += json[i]["Longitude"];
            PM_data += ";";
          }
        },
        error: function(exception)
        {
          console.log('fail');
        }
     });
  }

  function pmgov_get(input_site,input_type) 
  {
    if (PM_data!="")
    {
      var x = PM_data.split(";");
      var s = input_site.split("-");

      for (var i = 0; i <(x.length-1); i++) 
        if ((x[i].indexOf(s[0])!=-1)&&(x[i].indexOf(s[1])!=-1)) {
          var value = x[i].split(",");
          
          if (input_type=="SiteName")
            return value[1];
          else if (input_type=="County")
            return value[3];
          else if (input_type=="AQI")
            return value[5];
          else if (input_type=="Pollutant")
            return value[7];
          else if (input_type=="Status")
            return value[9];
          else if (input_type=="SO2")
            return value[11];
          else if (input_type=="CO")
            return value[13];
          else if (input_type=="CO_8hr")
            return value[15];
          else if (input_type=="O3")
            return value[17];
          else if (input_type=="O3_8hr")
            return value[19];
          else if (input_type=="PM10")
            return value[21];
          else if (input_type=="PM2.5")
            return value[23];
          else if (input_type=="NO2")
            return value[25];
          else if (input_type=="NOx")
            return value[27];
          else if (input_type=="NO")
            return value[29];
          else if (input_type=="WindSpeed")
            return value[31];
          else if (input_type=="WindDirec")
            return value[33];
          else if (input_type=="PublishTime")
            return value[35];
          else if (input_type=="PM2.5_AVG")
            return value[37];
          else if (input_type=="PM10_AVG")
            return value[39];
          else if (input_type=="Latitude")
            return value[41];
          else if (input_type=="Longitude")
            return value[43];       
          else
            return "undefined";
        }
    }
    else
       return "";
  } 
    
  window.pmgov_link = pmgov_link;
  window.pmgov_get = pmgov_get;
  window.getXML = getXML;
  window.getJSON = getJSON;
  
}(window, window.document));
