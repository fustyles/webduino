Blockly.Blocks['pmgov_link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.PM_LINK_SHOW)
        .appendField(new Blockly.FieldDropdown([
          ["JSON","JSON"],    
          ["XML","XML"]
        ]), "value_format_");          
    this.appendValueInput("value_url_")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};

Blockly.Blocks['pmgov_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.PM_GET_SHOW)
        .appendField(new Blockly.FieldDropdown([
          ["基隆市-基隆","基隆市-基隆"],
          ["新北市-汐止","新北市-汐止"],
          ["新北市-萬里","新北市-萬里"],
          ["新北市-新店","新北市-新店"],
          ["新北市-土城","新北市-土城"],
          ["新北市-板橋","新北市-板橋"],
          ["新北市-新莊","新北市-新莊"],
          ["新北市-菜寮","新北市-菜寮"],
          ["新北市-林口","新北市-林口"],
          ["新北市-淡水","新北市-淡水"],
          ["新北市-永和","新北市-永和"],  
          ["新北市-三重","新北市-三重"],
          ["新北市-富貴角","新北市-富貴角"],
          ["臺北市-士林","臺北市-士林"],
          ["臺北市-中山","臺北市-中山"],
          ["臺北市-萬華","臺北市-萬華"],
          ["臺北市-古亭","臺北市-古亭"],
          ["臺北市-松山","臺北市-松山"],
          ["臺北市-大同","臺北市-大同"],
          ["臺北市-陽明","臺北市-陽明"],  
          ["桃園市-桃園","桃園市-桃園"],
          ["桃園市-大園","桃園市-大園"],
          ["桃園市-觀音","桃園市-觀音"],
          ["桃園市-平鎮","桃園市-平鎮"],
          ["桃園市-龍潭","桃園市-龍潭"],
          ["桃園市-中壢","桃園市-中壢"],
          ["新竹縣-湖口","新竹縣-湖口"],
          ["新竹縣-竹東","新竹縣-竹東"],
          ["新竹市-新竹","新竹市-新竹"],
          ["苗栗縣-頭份","苗栗縣-頭份"],
          ["苗栗縣-苗栗","苗栗縣-苗栗"],
          ["苗栗縣-三義","苗栗縣-三義"],
          ["臺中市-豐原","臺中市-豐原"],
          ["臺中市-沙鹿","臺中市-沙鹿"],
          ["臺中市-大里","臺中市-大里"],
          ["臺中市-忠明","臺中市-忠明"],
          ["臺中市-西屯","臺中市-西屯"],
          ["彰化縣-彰化","彰化縣-彰化"],
          ["彰化縣-線西","彰化縣-線西"],
          ["彰化縣-二林","彰化縣-二林"],
          ["南投縣-南投","南投縣-南投"],
          ["南投縣-竹山","南投縣-竹山"], 
          ["南投縣-埔里","南投縣-埔里"],  
          ["雲林縣-斗六","雲林縣-斗六"],
          ["雲林縣-崙背","雲林縣-崙背"],
          ["雲林縣-臺西","雲林縣-臺西"],
          ["雲林縣-麥寮","雲林縣-麥寮"],
          ["嘉義縣-新港","嘉義縣-新港"],
          ["嘉義縣-朴子","嘉義縣-朴子"],
          ["嘉義市-嘉義","嘉義市-嘉義"],
          ["臺南市-新營","臺南市-新營"],
          ["臺南市-善化","臺南市-善化"],
          ["臺南市-安南","臺南市-安南"],
          ["臺南市-臺南","臺南市-臺南"],
          ["高雄市-美濃","高雄市-美濃"],
          ["高雄市-橋頭","高雄市-橋頭"],
          ["高雄市-仁武","高雄市-仁武"],
          ["高雄市-鳳山","高雄市-鳳山"],
          ["高雄市-大寮","高雄市-大寮"],
          ["高雄市-林園","高雄市-林園"],
          ["高雄市-楠梓","高雄市-楠梓"],
          ["高雄市-左營","高雄市-左營"],
          ["高雄市-前金","高雄市-前金"],
          ["高雄市-前鎮","高雄市-前鎮"],
          ["高雄市-小港","高雄市-小港"],
          ["高雄市-復興","高雄市-復興"],  
          ["屏東縣-屏東","屏東縣-屏東"],
          ["屏東縣-潮州","屏東縣-潮州"],
          ["屏東縣-恆春","屏東縣-恆春"],
          ["臺東縣-臺東","臺東縣-臺東"],
          ["臺東縣-關山","臺東縣-關山"],  
          ["花蓮縣-花蓮","花蓮縣-花蓮"],
          ["宜蘭縣-宜蘭","宜蘭縣-宜蘭"],
          ["宜蘭縣-冬山","宜蘭縣-冬山"],
          ["連江縣-馬祖","連江縣-馬祖"],
          ["金門縣-金門","金門縣-金門"],
          ["澎湖縣-馬公","澎湖縣-馬公"]
        ]), "value_site")
          .appendField(new Blockly.FieldDropdown([
          ["SiteName","SiteName"], 
          ["County","County"],       
          ["PublishTime","PublishTime"], 
          ["AQI","AQI"],       
          ["Status","Status"],
          ["Pollutant","Pollutant"],
          ["PM10 (μg/m3)","PM10"], 
          ["PM10_AVG (μg/m3)","PM10_AVG"], 
          ["PM2.5 (μg/m3)","PM2.5"], 
          ["PM2.5_AVG (μg/m3)","PM2.5_AVG"], 
          ["CO (ppm)","CO"], 
          ["CO_8hr (ppm)","CO_8hr"], 
          ["NO (ppb)","NO"], 
          ["NO2 (ppb)","NO2"], 
          ["NOx (ppb)","NOx"], 
          ["O3 (ppb)","O3"], 
          ["O3_8hr (ppb)","O3_8hr"], 
          ["SO2 (ppb)","SO2"], 
          ["WindDirec (degrees)","WindDirec"], 
          ["WindSpeed (m/sec)","WindSpeed"],
          ["Latitude","Latitude"], 
          ["Longitude","Longitude"]
        ]), "value_type");
    this.setOutput(true, null);  
    this.setColour(300);
    this.setTooltip("");
    this.setHelpUrl("");
  }  
};