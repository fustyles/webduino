/*
ESP32-CAM Caution area (tfjs coco-ssd)
Author : ChungYi Fu (Kaohsiung, Taiwan)  2021-6-24 10:30
https://www.facebook.com/francefu

物件類別
https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts

http://192.168.xxx.xxx             //網頁首頁管理介面
http://192.168.xxx.xxx:81/stream   //取得串流影像       <img src="http://192.168.xxx.xxx:81/stream">
http://192.168.xxx.xxx/capture     //取得影像          <img src="http://192.168.xxx.xxx/capture">
http://192.168.xxx.xxx/status      //取得視訊參數值
http://192.168.xxx.xxx/wifi        //設定區域網路Wi-Fi帳號密碼  

自訂指令格式 :  
http://APIP/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9
http://STAIP/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9

預設AP端IP： 192.168.4.1

自訂指令格式 http://192.168.xxx.xxx/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9
http://192.168.xxx.xxx/control?ip                      //取得APIP, STAIP
http://192.168.xxx.xxx/control?mac                     //取得MAC位址
http://192.168.xxx.xxx/control?restart                 //重啟ESP32-CAM
http://192.168.xxx.xxx/control?digitalwrite=pin;value  //數位輸出
http://192.168.xxx.xxx/control?analogwrite=pin;value   //類比輸出
http://192.168.xxx.xxx/control?digitalread=pin         //數位讀取
http://192.168.xxx.xxx/control?analogread=pin          //類比讀取
http://192.168.xxx.xxx/control?touchread=pin           //觸碰讀取
http://192.168.xxx.xxx/control?flash=value             //內建閃光燈 value= 0~255
http://192.168.xxx.xxx/control?buzzer                  //蜂鳴器(IO2)鳴叫

官方指令格式 http://192.168.xxx.xxx/control?var=***&val=***
http://192.168.xxx.xxx/control?var=framesize&val=value    // value = 10->UXGA(1600x1200), 9->SXGA(1280x1024), 8->XGA(1024x768) ,7->SVGA(800x600), 6->VGA(640x480), 5 selected=selected->CIF(400x296), 4->QVGA(320x240), 3->HQVGA(240x176), 0->QQVGA(160x120)
http://192.168.xxx.xxx/control?var=quality&val=value      // value = 10 ~ 63
http://192.168.xxx.xxx/control?var=brightness&val=value   // value = -2 ~ 2
http://192.168.xxx.xxx/control?var=contrast&val=value     // value = -2 ~ 2
http://192.168.xxx.xxx/control?var=hmirror&val=value      // value = 0 or 1 
http://192.168.xxx.xxx/control?var=vflip&val=value        // value = 0 or 1 
http://192.168.xxx.xxx/control?var=flash&val=value        // value = 0 ~ 255 
      
查詢Client端IP：
查詢IP：http://192.168.4.1/?ip

音效下載
https://taira-komori.jpn.org/freesoundtw.html

線上音效剪輯 (將音效剪輯長度成0.2秒再使用)
https://mp3cut.net/tw/
*/

//AP 連線帳號密碼 (首頁網址 http://192.168.4.1)
const char* apssid = "Classroom01";          //不同台可設不同流水號區別
const char* appassword = "12345678";         //AP密碼至少要8個字元以上

String LineToken = "";  //傳送區域網路IP至Line通知(用不到可不填)

int Buzzer = 2;  //蜂鳴器腳位： IO2

#include <WiFi.h>
#include <HTTPClient.h>
HTTPClient http;
#include "esp_camera.h"          //視訊函式
#include "soc/soc.h"             //用於電源不穩不重開機 
#include "soc/rtc_cntl_reg.h"    //用於電源不穩不重開機

//https://github.com/espressif/arduino-esp32/blob/master/libraries/Preferences/src/Preferences.h
#include <Preferences.h>
Preferences preferences;

String wifi_ssid ="";
String wifi_password ="";

//官方函式庫
#include "esp_http_server.h"
#include "esp_camera.h"
#include "img_converters.h"

String Feedback="";   //自訂指令回傳客戶端訊息

//自訂指令參數值
String Command="";
String cmd="";
String P1="";
String P2="";
String P3="";
String P4="";
String P5="";
String P6="";
String P7="";
String P8="";
String P9="";

//自訂指令拆解狀態值
byte ReceiveState=0;
byte cmdState=1;
byte strState=1;
byte questionstate=0;
byte equalstate=0;
byte semicolonstate=0;

typedef struct {
        httpd_req_t *req;
        size_t len;
} jpg_chunking_t;

#define PART_BOUNDARY "123456789000000000000987654321"
static const char* _STREAM_CONTENT_TYPE = "multipart/x-mixed-replace;boundary=" PART_BOUNDARY;
static const char* _STREAM_BOUNDARY = "\r\n--" PART_BOUNDARY "\r\n";
static const char* _STREAM_PART = "Content-Type: image/jpeg\r\nContent-Length: %u\r\n\r\n";

httpd_handle_t stream_httpd = NULL;
httpd_handle_t camera_httpd = NULL;

//ESP32-CAM 安信可模組腳位設定
#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27

#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

void setup() {
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0);  //關閉電源不穩就重開機的設定
  
  Serial.begin(115200);
  Serial.setDebugOutput(true);  //開啟診斷輸出
  Serial.println();

  //視訊組態設定  https://github.com/espressif/esp32-camera/blob/master/driver/include/esp_camera.h
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG;
  

  //
  // WARNING!!! PSRAM IC required for UXGA resolution and high JPEG quality
  //            Ensure ESP32 Wrover Module or other board with PSRAM is selected
  //            Partial images will be transmitted if image exceeds buffer size
  //   
  // if PSRAM IC present, init with UXGA resolution and higher JPEG quality
  //                      for larger pre-allocated frame buffer.
  if(psramFound()){  //是否有PSRAM(Psuedo SRAM)記憶體IC
    config.frame_size = FRAMESIZE_UXGA;
    config.jpeg_quality = 10;
    config.fb_count = 2;
  } else {
    config.frame_size = FRAMESIZE_SVGA;
    config.jpeg_quality = 12;
    config.fb_count = 1;
  }

  //視訊初始化
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    ESP.restart();
  }

  //可自訂視訊框架預設大小(解析度大小)
  sensor_t * s = esp_camera_sensor_get();
  // initial sensors are flipped vertically and colors are a bit saturated
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1); // flip it back
    s->set_brightness(s, 1); // up the brightness just a bit
    s->set_saturation(s, -2); // lower the saturation
  }

  //drop down frame size for higher initial frame rate
  s->set_framesize(s, FRAMESIZE_QVGA);  //設定初始化影像解析度
  s->set_hmirror(s, 1);  //鏡像
  
  //閃光燈
  ledcAttachPin(4, 4);  
  ledcSetup(4, 5000, 8);    
  
  WiFi.mode(WIFI_AP_STA);

  Serial.println();
  //設定預設區域網路Wi-Fi帳號與密碼，或清除Wi-Fi設定
  //Preferences_write("wifi", "ssid", "");
  //Preferences_write("wifi", "password", "");
        
  wifi_ssid = Preferences_read("wifi", "ssid");
  wifi_password = Preferences_read("wifi", "password");

  if (wifi_ssid!="") {
    for (int i=0;i<2;i++) {
      WiFi.begin(wifi_ssid.c_str(), wifi_password.c_str());    //執行網路連線
    
      delay(1000);
      Serial.println("");
      Serial.print("Connecting to ");
      Serial.println(wifi_ssid);
      
      long int StartTime=millis();
      while (WiFi.status() != WL_CONNECTED) {
          delay(500);
          if ((StartTime+5000) < millis()) break;    //等待10秒連線
      } 
    
      if (WiFi.status() == WL_CONNECTED) {    //若連線成功
        WiFi.softAP((WiFi.localIP().toString()+"_"+(String)apssid).c_str(), appassword);   //設定SSID顯示客戶端IP         
        Serial.println("");
        Serial.println("STAIP address: ");
        Serial.println(WiFi.localIP());
        Serial.println("");
    
        for (int i=0;i<5;i++) {   //若連上WIFI設定閃光燈快速閃爍
          ledcWrite(4,10);
          delay(200);
          ledcWrite(4,0);
          delay(200);    
        }
    
        if (LineToken != "") 
          LineNotify_http_get(LineToken, WiFi.localIP().toString());
        break;
      }
    } 
  }

  if (WiFi.status() != WL_CONNECTED) {    //若連線失敗
    WiFi.softAP((WiFi.softAPIP().toString()+"_"+(String)apssid).c_str(), appassword);         

    for (int i=0;i<2;i++) {    //若連不上WIFI設定閃光燈慢速閃爍
      ledcWrite(4,10);
      delay(1000);
      ledcWrite(4,0);
      delay(1000);    
    }
  }  

  Serial.println();
  Serial.println("APIP address: ");
  Serial.println(WiFi.softAPIP()); 
  Serial.println();
  startCameraServer(); 

  //設定閃光燈為低電位
  pinMode(4, OUTPUT);
  digitalWrite(4, LOW);      
}

void loop() {

}

int transferAngle(int angle, String side) {     
  if (angle > 180)
     angle = 180;
  else if (angle < 0)
    angle = 0;
  if (side="right")
    angle = 180 - angle;     
  return angle*6300/180+1700;
}

static size_t jpg_encode_stream(void * arg, size_t index, const void* data, size_t len){
    jpg_chunking_t *j = (jpg_chunking_t *)arg;
    if(!index){
        j->len = 0;
    }
    if(httpd_resp_send_chunk(j->req, (const char *)data, len) != ESP_OK){
        return 0;
    }
    j->len += len;
    return len;
}

static const char PROGMEM index_html[] = R"rawliteral(
  <!doctype html>
  <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>ESP32-CAM Caution Area</title>  
      </head>
      <body>
      請將WiFi改連接對外網路後再點選按鈕，設定隱私權和安全性允許不安全的內容。<br>
      <font size="4" color="red">chrome:\/\/settings/content/siteDetails?site=https:\/\/fustyles.github.io</font><br>
      <button onclick="location.href='/wifi';">設定Wi-Fi</button>
      <button onclick="location.href='http'+':\/\/fustyles.github.io/webduino/CautionArea/ESP32-CAM_CautionArea_HorizontalLine.html?'+document.location.origin;">水平警示區</button>
      <button onclick="location.href='http'+':\/\/fustyles.github.io/webduino/CautionArea/ESP32-CAM_CautionArea_VerticalLine.html?'+document.location.origin;">垂直警示區</button>
      <button onclick="location.href='http'+':\/\/fustyles.github.io/webduino/CautionArea/ESP32-CAM_CautionArea_Rect.html?'+document.location.origin;">框選警示區</button>
      </body>
  </html>        
)rawliteral";

//網頁首頁   http://192.168.xxx.xxx
static esp_err_t index_handler(httpd_req_t *req){
  httpd_resp_set_type(req, "text/html");  //設定回傳資料格式
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");  //允許跨網域讀取
  return httpd_resp_send(req, (const char *)index_html, strlen(index_html));
}

static const char index_wifi_html[] PROGMEM = R"rawliteral(
  <!doctype html>
  <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <title>ESP32-CAM Caution Area</title>  
      </head>
      <body>
      WIFI SSID: <input type="text" id="ssid"><br>
      WIFI  PWD: <input type="text" id="pwd"><br>
      <input type="button" value="設定" onclick="location.href='/control?resetwifi='+document.getElementById('ssid').value+';'+document.getElementById('pwd').value;">
      </body>
  </html>        
)rawliteral";

static esp_err_t index_wifi_handler(httpd_req_t *req) {
  httpd_resp_set_type(req, "text/html");
  httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
  httpd_resp_send(req, (const char *)index_wifi_html, strlen(index_wifi_html));
  return ESP_OK;
}

//影像截圖
static esp_err_t capture_handler(httpd_req_t *req){
    camera_fb_t * fb = NULL;
    esp_err_t res = ESP_OK;

    fb = esp_camera_fb_get();
    if (!fb) {
        Serial.println("Camera capture failed");
        httpd_resp_send_500(req);
        return ESP_FAIL;
    }

    httpd_resp_set_type(req, "image/jpeg");
    httpd_resp_set_hdr(req, "Content-Disposition", "inline; filename=capture.jpg");
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");

    size_t fb_len = 0;
    if(fb->format == PIXFORMAT_JPEG){
        fb_len = fb->len;
        res = httpd_resp_send(req, (const char *)fb->buf, fb->len);
    } else {
        jpg_chunking_t jchunk = {req, 0};
        res = frame2jpg_cb(fb, 80, jpg_encode_stream, &jchunk)?ESP_OK:ESP_FAIL;
        httpd_resp_send_chunk(req, NULL, 0);
        fb_len = jchunk.len;
    }
    esp_camera_fb_return(fb);
    return res;
}

//影像串流
static esp_err_t stream_handler(httpd_req_t *req){
    camera_fb_t * fb = NULL;
    esp_err_t res = ESP_OK;
    size_t _jpg_buf_len = 0;
    uint8_t * _jpg_buf = NULL;
    char * part_buf[64];

    res = httpd_resp_set_type(req, _STREAM_CONTENT_TYPE);
    if(res != ESP_OK){
        return res;
    }

    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");

    while(true){
        fb = esp_camera_fb_get();
        if (!fb) {
            Serial.println("Camera capture failed");
            res = ESP_FAIL;
        } else {
          if(fb->format != PIXFORMAT_JPEG){
              bool jpeg_converted = frame2jpg(fb, 80, &_jpg_buf, &_jpg_buf_len);
              esp_camera_fb_return(fb);
              fb = NULL;
              if(!jpeg_converted){
                  Serial.println("JPEG compression failed");
                  res = ESP_FAIL;
              }
          } else {
              _jpg_buf_len = fb->len;
              _jpg_buf = fb->buf;
          }
        }

        if(res == ESP_OK){
            res = httpd_resp_send_chunk(req, (const char *)_jpg_buf, _jpg_buf_len);
        }
        if(res == ESP_OK){
            res = httpd_resp_send_chunk(req, _STREAM_BOUNDARY, strlen(_STREAM_BOUNDARY));
        }
        if(res == ESP_OK){
            size_t hlen = snprintf((char *)part_buf, 64, _STREAM_PART, _jpg_buf_len);
            res = httpd_resp_send_chunk(req, (const char *)part_buf, hlen);
        }                
        if(fb){
            esp_camera_fb_return(fb);
            fb = NULL;
            _jpg_buf = NULL;
        } else if(_jpg_buf){
            free(_jpg_buf);
            _jpg_buf = NULL;
        }
        if(res != ESP_OK){
            break;
        }
    }

    return res;
}

//指令參數控制
static esp_err_t cmd_handler(httpd_req_t *req){
    char*  buf;    //存取網址後帶的參數字串
    size_t buf_len;
    char variable[128] = {0,};  //存取參數var值
    char value[128] = {0,};     //存取參數val值
    String myCmd = "";

    buf_len = httpd_req_get_url_query_len(req) + 1;
    if (buf_len > 1) {
        buf = (char*)malloc(buf_len);
        if(!buf){
            httpd_resp_send_500(req);
            return ESP_FAIL;
        }
        if (httpd_req_get_url_query_str(req, buf, buf_len) == ESP_OK) {
          if (httpd_query_key_value(buf, "var", variable, sizeof(variable)) == ESP_OK &&
            httpd_query_key_value(buf, "val", value, sizeof(value)) == ESP_OK) {
          } 
          else {
            myCmd = String(buf);   //如果非官方格式不含var, val，則為自訂指令格式
          }
        }
        free(buf);
    } else {
        httpd_resp_send_404(req);
        return ESP_FAIL;
    }

    Feedback="";Command="";cmd="";P1="";P2="";P3="";P4="";P5="";P6="";P7="";P8="";P9="";
    ReceiveState=0,cmdState=1,strState=1,questionstate=0,equalstate=0,semicolonstate=0;     
    if (myCmd.length()>0) {
      myCmd = "?"+myCmd;  //網址後帶的參數字串轉換成自訂指令格式
      for (int i=0;i<myCmd.length();i++) {
        getCommand(char(myCmd.charAt(i)));  //拆解自訂指令參數字串
      }
    }

    if (cmd.length()>0) {
      Serial.println("");
      //Serial.println("Command: "+Command);
      Serial.println("cmd= "+cmd+" ,P1= "+P1+" ,P2= "+P2+" ,P3= "+P3+" ,P4= "+P4+" ,P5= "+P5+" ,P6= "+P6+" ,P7= "+P7+" ,P8= "+P8+" ,P9= "+P9);
      Serial.println(""); 

      //自訂指令區塊  http://192.168.xxx.xxx/control?cmd=P1;P2;P3;P4;P5;P6;P7;P8;P9
      if (cmd=="your cmd") {
        // You can do anything
        // Feedback="<font color=\"red\">Hello World</font>";   //可為一般文字或HTML語法
      }
      else if (cmd=="ip") {  //查詢APIP, STAIP
        Feedback="AP IP: "+WiFi.softAPIP().toString();    
        Feedback+="<br>";
        Feedback+="STA IP: "+WiFi.localIP().toString();
      }  
      else if (cmd=="mac") {  //查詢MAC位址
        Feedback="STA MAC: "+WiFi.macAddress();
      }  
      else if (cmd=="restart") {  //重設WIFI連線
        ESP.restart();
      }  
      else if (cmd=="digitalwrite") {
        ledcDetachPin(P1.toInt());
        pinMode(P1.toInt(), OUTPUT);
        digitalWrite(P1.toInt(), P2.toInt());
      }   
      else if (cmd=="digitalread") {
        Feedback=String(digitalRead(P1.toInt()));
      }
      else if (cmd=="analogwrite") {   
        if (P1=="4") {
          ledcAttachPin(4, 4);  
          ledcSetup(4, 5000, 8);
          ledcWrite(4,P2.toInt());     
        }
        else {
          ledcAttachPin(P1.toInt(), 9);
          ledcSetup(9, 5000, 8);
          ledcWrite(9,P2.toInt());
        }
      }       
      else if (cmd=="analogread") {
        Feedback=String(analogRead(P1.toInt()));
      }
      else if (cmd=="touchread") {
        Feedback=String(touchRead(P1.toInt()));
      }   
      else if (cmd=="flash") {  //控制內建閃光燈
        ledcAttachPin(4, 4);  
        ledcSetup(4, 5000, 8);   
        int val = P1.toInt();
        ledcWrite(4,val);  
      }
      else if (cmd=="buzzer") { 
        pinMode(Buzzer,OUTPUT);
        tone(Buzzer, 262, 100);
      }
      else if (cmd=="resetwifi") {
        Preferences_write("wifi", "ssid", P1.c_str());
        Preferences_write("wifi", "password", P2.c_str());

        for (int i=0;i<2;i++) {
          WiFi.begin(P1.c_str(), P2.c_str());
          Serial.print("Connecting to ");
          Serial.println(P1);
          long int StartTime=millis();
          while (WiFi.status() != WL_CONNECTED) {
              delay(500);
              if ((StartTime+5000) < millis()) break;
          } 
          Serial.println("");
          Serial.println("STAIP: "+WiFi.localIP().toString());
          Feedback="STAIP: "+WiFi.localIP().toString();
  
          if (WiFi.status() == WL_CONNECTED) {
            WiFi.softAP((WiFi.localIP().toString()+"_"+P1).c_str(), P2.c_str());
            for (int i=0;i<2;i++) {    //若連不上WIFI設定閃光燈慢速閃爍
              ledcWrite(4,10);
              delay(300);
              ledcWrite(4,0);
              delay(300);    
            }
            LineNotify_http_get(LineToken, WiFi.localIP().toString());
            break;
          }
        }
      } 
      else if (cmd=="clearwifi") {  //清除閃存中Wi-Fi資料  
        Preferences_write("wifi", "ssid", "");
        Preferences_write("wifi", "password", "");
      }                      
      else {
        Feedback="Command is not defined";
      }

      if (cmd=="resetwifi") {
        httpd_resp_set_type(req, "text/html");  //設定回傳資料格式
        httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");  //允許跨網域讀取
        if (WiFi.status() == WL_CONNECTED)
          return httpd_resp_send(req, (const char *)index_html, strlen(index_html));
        else
          return httpd_resp_send(req, (const char *)index_wifi_html, strlen(index_wifi_html)); 
      } else {
        const char *resp = Feedback.c_str();
        httpd_resp_set_type(req, "text/html");  //設定回傳資料格式
        httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");  //允許跨網域讀取
        return httpd_resp_send(req, resp, strlen(resp));
      }
    } 
    else {
      //官方指令區塊，也可在此自訂指令  http://192.168.xxx.xxx/control?var=xxx&val=xxx
      int val = atoi(value);
      sensor_t * s = esp_camera_sensor_get();
      int res = 0;

      if(!strcmp(variable, "framesize")) {
        if(s->pixformat == PIXFORMAT_JPEG) 
          res = s->set_framesize(s, (framesize_t)val);
      }
      else if(!strcmp(variable, "quality")) res = s->set_quality(s, val);
      else if(!strcmp(variable, "contrast")) res = s->set_contrast(s, val);
      else if(!strcmp(variable, "brightness")) res = s->set_brightness(s, val);
      else if(!strcmp(variable, "hmirror")) res = s->set_hmirror(s, val);
      else if(!strcmp(variable, "vflip")) res = s->set_vflip(s, val);
      else if(!strcmp(variable, "flash")) {  //自訂閃光燈指令
        ledcAttachPin(4, 4);  
        ledcSetup(4, 5000, 8);        
        ledcWrite(4,val);
      } 
      else {
          res = -1;
      }
  
      if(res){
          return httpd_resp_send_500(req);
      }

      if (buf) {
        Feedback = String(buf);
        const char *resp = Feedback.c_str();
        httpd_resp_set_type(req, "text/html");
        httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
        return httpd_resp_send(req, resp, strlen(resp));  //回傳參數字串
      }
      else {
        httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
        return httpd_resp_send(req, NULL, 0);
      }
    }
}

void tone(int pin, int frequency, int duration) {
  ledcSetup(9, 2000, 8);
  ledcAttachPin(pin, 9);
  ledcWriteTone(9, frequency);
  delay(duration);
  ledcWriteTone(9, 0);
}

//顯示視訊參數狀態(須回傳json格式載入初始設定)
static esp_err_t status_handler(httpd_req_t *req){
    static char json_response[1024];

    sensor_t * s = esp_camera_sensor_get();
    char * p = json_response;
    *p++ = '{';
    p+=sprintf(p, "\"flash\":%d,", 0);
    p+=sprintf(p, "\"framesize\":%u,", s->status.framesize);
    p+=sprintf(p, "\"quality\":%u,", s->status.quality);
    p+=sprintf(p, "\"brightness\":%d,", s->status.brightness);
    p+=sprintf(p, "\"contrast\":%d,", s->status.contrast);
    p+=sprintf(p, "\"hmirror\":%u", s->status.hmirror); 
    *p++ = '}';
    *p++ = 0;
    httpd_resp_set_type(req, "application/json");
    httpd_resp_set_hdr(req, "Access-Control-Allow-Origin", "*");
    return httpd_resp_send(req, json_response, strlen(json_response));
}

//自訂網址路徑要執行的函式
void startCameraServer(){
  httpd_config_t config = HTTPD_DEFAULT_CONFIG();  //可在HTTPD_DEFAULT_CONFIG()中設定Server Port 

  //http://192.168.xxx.xxx/
  httpd_uri_t index_uri = {
      .uri       = "/",
      .method    = HTTP_GET,
      .handler   = index_handler,
      .user_ctx  = NULL
  };

  //http://192.168.xxx.xxx/status
  httpd_uri_t status_uri = {
      .uri       = "/status",
      .method    = HTTP_GET,
      .handler   = status_handler,
      .user_ctx  = NULL
  };

  //http://192.168.xxx.xxx/control
  httpd_uri_t cmd_uri = {
      .uri       = "/control",
      .method    = HTTP_GET,
      .handler   = cmd_handler,
      .user_ctx  = NULL
  }; 

  //http://192.168.xxx.xxx/capture
  httpd_uri_t capture_uri = {
      .uri       = "/capture",
      .method    = HTTP_GET,
      .handler   = capture_handler,
      .user_ctx  = NULL
  };

  //http://192.168.xxx.xxx:81/stream
  httpd_uri_t stream_uri = {
      .uri       = "/stream",
      .method    = HTTP_GET,
      .handler   = stream_handler,
      .user_ctx  = NULL
  };
  httpd_uri_t wifi_uri = {
    .uri       = "/wifi",
    .method    = HTTP_GET,
    .handler   = index_wifi_handler,
    .user_ctx  = NULL
  };   
  
  Serial.printf("Starting web server on port: '%d'\n", config.server_port);  //Server Port
  if (httpd_start(&camera_httpd, &config) == ESP_OK) {
      //註冊自訂網址路徑對應執行的函式
      httpd_register_uri_handler(camera_httpd, &index_uri);
      httpd_register_uri_handler(camera_httpd, &cmd_uri);
      httpd_register_uri_handler(camera_httpd, &status_uri);
      httpd_register_uri_handler(camera_httpd, &capture_uri);
      httpd_register_uri_handler(camera_httpd, &wifi_uri);      
  }
  
  config.server_port += 1;  //Stream Port
  config.ctrl_port += 1;    //UDP Port
  Serial.printf("Starting stream server on port: '%d'\n", config.server_port);
  if (httpd_start(&stream_httpd, &config) == ESP_OK) {
      httpd_register_uri_handler(stream_httpd, &stream_uri);
  }
}

//自訂指令拆解參數字串置入變數
void getCommand(char c)
{
  if (c=='?') ReceiveState=1;
  if ((c==' ')||(c=='\r')||(c=='\n')) ReceiveState=0;
  
  if (ReceiveState==1)
  {
    Command=Command+String(c);
    
    if (c=='=') cmdState=0;
    if (c==';') strState++;
  
    if ((cmdState==1)&&((c!='?')||(questionstate==1))) cmd=cmd+String(c);
    if ((cmdState==0)&&(strState==1)&&((c!='=')||(equalstate==1))) P1=P1+String(c);
    if ((cmdState==0)&&(strState==2)&&(c!=';')) P2=P2+String(c);
    if ((cmdState==0)&&(strState==3)&&(c!=';')) P3=P3+String(c);
    if ((cmdState==0)&&(strState==4)&&(c!=';')) P4=P4+String(c);
    if ((cmdState==0)&&(strState==5)&&(c!=';')) P5=P5+String(c);
    if ((cmdState==0)&&(strState==6)&&(c!=';')) P6=P6+String(c);
    if ((cmdState==0)&&(strState==7)&&(c!=';')) P7=P7+String(c);
    if ((cmdState==0)&&(strState==8)&&(c!=';')) P8=P8+String(c);
    if ((cmdState==0)&&(strState>=9)&&((c!=';')||(semicolonstate==1))) P9=P9+String(c);
    
    if (c=='?') questionstate=1;
    if (c=='=') equalstate=1;
    if ((strState>=9)&&(c==';')) semicolonstate=1;
  }
}

void Preferences_write(const char * name, const char* key, const char* value) {
  preferences.clear();
  preferences.begin(name, false);
  Serial.printf("Put %s = %s\n", key, value);
  preferences.putString(key, value);
  preferences.end();
}

String Preferences_read(const char * name, const char* key) {
  preferences.begin(name, false);
  String myData = preferences.getString(key, "");
  Serial.printf("Get %s = %s\n", key, myData);
  preferences.end();
  return myData;
}

String LineNotify_http_get(String token, String message) {
  message.replace("%","%25");  
  message.replace(" ","%20");
  message.replace("&","%20");
  message.replace("#","%20");
  //message.replace("\'","%27");
  message.replace("\"","%22");
  message.replace("\n","%0D%0A");
  
  http.begin("http://linenotify.com/notify.php?token="+token+"&message="+message);
  int httpCode = http.GET();
  /*
  if(httpCode > 0) {
      if(httpCode == 200) 
        Serial.println(http.getString());
  } else 
      Serial.println("Connection Error!");
  */
}
