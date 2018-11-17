// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

+(function (window, document) {

  'use strict';
  
  const charA = "0111110010100101001001111";
  const charB = "1111110101101011010101010";
  const charC = "0111010001100011000110001";
  const charD = "1111110001100011000101110";
  const charE = "1111110101101011010110101";
  const charF = "1111110100101001010010100";
  const charG = "0111010001101011010110111";
  const charH = "1111100100001000010011111";
  const charI = "1000110001111111000110001";
  const charJ = "1001110001111111000010000";
  const charK = "1111100010001000101010001";
  const charL = "1111100001000010000100001";
  const charM = "1111101000001000100011111";
  const charN = "1111101000001000001011111";
  const charO = "0111010001100011000101110";
  const charP = "1111110010100101001001100";
  const charQ = "0111010001101011001001101";
  const charR = "1111110100101001010001011";
  const charS = "0100110101101011010110010";
  const charT = "1000010000111111000010000";
  const charU = "1111000001000010000111110";
  const charV = "1110000010000010001011100";
  const charW = "1111000001111100000111110";
  const charX = "1000101010001000101010001";
  const charY = "1000001000001110100010000";   
  const charZ = "1000110011101011100110001";
  const chara = "0000000110010010011000001";
  const charb = "0000011111001010001000000";
  const charc = "0000000110010010100100000";
  const chard = "0000000010001011111100000";
  const chare = "0000000110010110010100000";
  const charf = "0000000100111111010000000";
  const charg = "0000000101010110011000000";
  const charh = "0000011111001000001100000";
  const chari = "0000000000101110000000000";
  const charj = "0000000001101110000000000";
  const chark = "0000011111000100010100000";
  const charl = "0000000000111110000000000";
  const charm = "0011100100000110010000011";
  const charn = "0000000111001000001100000";
  const charo = "0000000010001010001000000";
  const charp = "0000001111010100010000000";
  const charq = "0000000100010100111100000";
  const charr = "0000000111000100010000000";
  const chars = "0000001001101011001000000";
  const chart = "0000000100011110010100000";
  const charu = "0000000110000010011000001";
  const charv = "0000000110000010011000000";
  const charw = "0011000001001100000100110";
  const charx = "0000000101000100010100000";
  const chary = "0000000101000100010000000";   
  const charz = "0000101011011010100000000";
  const char0 = "0000011111100011111100000";
  const char1 = "0000001001111110000100000";
  const char2 = "0000010111101011110100000";
  const char3 = "0000010101101011111100000";
  const char4 = "0000011100001001111100000";
  const char5 = "0000011101101011011100000";
  const char6 = "0000011111101011011100000";
  const char7 = "0000011000100001111100000";
  const char8 = "0000011111101011111100000";
  const char9 = "0000011101101011111100000";  
  const comma = "0000000001000100000000000";
  const period = "0000000001000000000000000";
  const questionmark = "0100010000100111010001000";
  const exclamationmark  = "0000000000111010000000000";   
  const semicolon = "0000000001010100000000000";
  const colon = "0000000000010100000000000";
  const parenthesesleft = "0000001110100010000000000";
  const parenthesesright = "0000000000100010111000000";
  const squarebracketsleft = "0000011111100010000000000";
  const squarebracketsright = "0000000000100011111100000";
  const curlybracketsleft = "0000000100111111000100000";
  const curlybracketsright = "0000010001111110010000000";
  const Quotationmarkssingle = "0000000000110000010000000";
  const Quotationmarksdouble = "1100000100110000010000000";
  const hyphen = "0000000100001000010000000";
  const heart = "0110010010010011001001100";
  const heartfill = "0110011110011111111001100";  
  const arrowup = "0010001000111110100000100";
  const arrowdown = "0010000010111110001000100";
  const arrowleft = "0010001110101010010000100";
  const arrowright = "0010000100101010111000100";
  const arrowleftup = "1111011000101001001000001";
  const arrowleftdown = "0111100011001010100110000";
  const arrowrightup = "0000110010101001100011110";
  const arrowrightdown = "1000001001001010001101111";
  const arrowupfill = "0000100111111110011100001";
  const arrowdownfill = "1000011100111111110010000";
  const arrowleftfill = "0010000100011100111011111";
  const arrowrightfill = "1111101110011100010000100";  
  const noexist = "0000000000000000000000000";
  
  var L = new Array("","","","","","","","","","","","","","","","","","","","","","","","","");
  var MatrixLedcolor = "#ff0000";
  var MatrixLedbackcolor = "#ffffff";
  var MatrixLedwidth = 250;
  var MatrixLedheight = 250;
  var MatrixLedmarqueeinitial = "",MatrixLedmarqueecode = "",MatrixLedmarqueecodeonce = "",MatrixLedmarqueecolorcode = "",MatrixLedmarqueecolorcodeonce = "";  
  var MatrixLedmarqueetime = 500;
  var MatrixLedmarqueereverse = 1;
  var MatrixLedshowstate = 1;
  var marqueetimeid;
  var marqueeactive;

  function MatrixLed_color(input_color_) {
    MatrixLedcolor = input_color_;
  }
  
    function MatrixLed_width(input_width_) {
    MatrixLedwidth = input_width_;
  }
  
  function MatrixLed_height(input_height_) {
    MatrixLedheight = input_height_;
  } 
  
  function MatrixLed_showstate(input_showstate_) {
    MatrixLedshowstate = input_showstate_;
  }   
  
  function MatrixLed_indentcode(input_indentcode_) {
    var indentcode = input_indentcode_;
    while (indentcode.search(/0000000000/)!=-1)
      indentcode = indentcode.replace(/0000000000/g,"00000"); 
    return indentcode;
  } 
  
  function MatrixLed_marquee(input_marquee_) {
    input_marquee_=input_marquee_.toString();
    MatrixLedmarqueecodeonce = "";
    window.clearInterval(marqueetimeid);
    if ((input_marquee_.length==25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      MatrixLed_matrix(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%5==0)&&(input_marquee_.length>25)&&(input_marquee_.search(/[^0-1]/)==-1))
      MatrixLedmarqueecode = input_marquee_;  
    else if (input_marquee_.length==1)
    {
      MatrixLed_matrix(MatrixLed_conversion(input_marquee_));
      return;
    }
    else if (input_marquee_.length>1)
    {
      MatrixLedmarqueecode="";
      for (var i=0;i<input_marquee_.length;i++)
      {
        if (i==(input_marquee_.length-1))
          MatrixLedmarqueecode = MatrixLedmarqueecode + MatrixLed_conversion(input_marquee_.substr(i,1));
        else
          MatrixLedmarqueecode = MatrixLedmarqueecode + MatrixLed_conversion(input_marquee_.substr(i,1)) + "00000";
      }
    }
    MatrixLedmarqueeinitial=MatrixLedmarqueecode;
    marqueeactive=1;
    marqueetimeid = window.setInterval("MatrixLed_marquee_play()",MatrixLedmarqueetime);
  }  
  
  function MatrixLed_marquee_once(input_marquee_) {
    input_marquee_=input_marquee_.toString();
    window.clearInterval(marqueetimeid);
    if ((input_marquee_.length==25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      MatrixLed_matrix(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%5==0)&&(input_marquee_.length>25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      MatrixLedmarqueecode = input_marquee_;
      MatrixLedmarqueecodeonce = input_marquee_;
    }
    else if (input_marquee_.length==1)
    {
      MatrixLed_matrix(MatrixLed_conversion(input_marquee_));
      return;
    }
    else if (input_marquee_.length>1)
    {
      MatrixLedmarqueecode="";
      for (var i=0;i<input_marquee_.length;i++)
      {
        if (i==(input_marquee_.length-1))
          MatrixLedmarqueecode = MatrixLedmarqueecode+MatrixLed_conversion(input_marquee_.substr(i,1));
        else
          MatrixLedmarqueecode = MatrixLedmarqueecode+MatrixLed_conversion(input_marquee_.substr(i,1)) + "00000";
      }
      MatrixLedmarqueecode = MatrixLedmarqueecode;
      MatrixLedmarqueecodeonce = MatrixLedmarqueecode;
    }
    MatrixLedmarqueeinitial=MatrixLedmarqueecode;
    marqueeactive=2;
    marqueetimeid = window.setInterval("MatrixLed_marquee_once_play()",MatrixLedmarqueetime);
  }    
  
  function MatrixLed_marquee_times(input_marquee_,input_times_) {
    input_marquee_=input_marquee_.toString();
    window.clearInterval(marqueetimeid);
    if ((input_marquee_.length==25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      MatrixLed_matrix(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%5==0)&&(input_marquee_.length>25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      MatrixLedmarqueecode = input_marquee_;
      MatrixLedmarqueecodeonce = input_marquee_;
    }
    else if (input_marquee_.length==1)
    {
      MatrixLed_matrix(MatrixLed_conversion(input_marquee_));
      return;
    }
    else if (input_marquee_.length>1)
    {
      MatrixLedmarqueecode="";
      for (var i=0;i<input_marquee_.length;i++)
      {
        if (i==(input_marquee_.length-1))
          MatrixLedmarqueecode = MatrixLedmarqueecode+MatrixLed_conversion(input_marquee_.substr(i,1));
        else
          MatrixLedmarqueecode = MatrixLedmarqueecode+MatrixLed_conversion(input_marquee_.substr(i,1)) + "00000";
      }
      MatrixLedmarqueecode = MatrixLedmarqueecode;
      MatrixLedmarqueecodeonce = MatrixLedmarqueecode;
    }
    var s = MatrixLedmarqueecode;
    if (input_times_>1) {
      for (var j=1;j<input_times_;j++)
      {
        MatrixLedmarqueecode += s;
        MatrixLedmarqueecodeonce += s;
      }
    } 
    MatrixLedmarqueeinitial=MatrixLedmarqueecode;
    marqueeactive=2;
    marqueetimeid = window.setInterval("MatrixLed_marquee_once_play()",MatrixLedmarqueetime);
  } 
  
  function MatrixLed_marquee_play() {
    if (MatrixLedmarqueecode.length>25)
    {
      if (MatrixLedmarqueereverse==1)
      {
        MatrixLed_matrix(MatrixLedmarqueecode.substr(0,25));
        MatrixLedmarqueecode = MatrixLedmarqueecode.substr(5,MatrixLedmarqueecode.length-5)+MatrixLedmarqueecode.substr(0,5);
      }
      else if (MatrixLedmarqueereverse==2)
      {
        MatrixLed_matrix(MatrixLedmarqueecode.substr(MatrixLedmarqueecode.length-25,25));
        MatrixLedmarqueecode = MatrixLedmarqueecode.substr(MatrixLedmarqueecode.length-5,5)+MatrixLedmarqueecode.substr(0,MatrixLedmarqueecode.length-5);
      }
    }
    else
    {
      window.clearInterval(marqueetimeid);
      MatrixLed_clear();
    }
  } 
  
  function MatrixLed_marquee_once_play() {
    if (MatrixLedmarqueecode.length>=25)
    {
      if (MatrixLedmarqueereverse==1)
      {
        MatrixLed_matrix(MatrixLedmarqueecode.substr(0,25));
        MatrixLedmarqueecodeonce = MatrixLedmarqueecodeonce.substr(5,MatrixLedmarqueecodeonce.length-5)+MatrixLedmarqueecodeonce.substr(0,5);
        MatrixLedmarqueecode = MatrixLedmarqueecode.substr(5,MatrixLedmarqueecode.length-5);
      }
      else if (MatrixLedmarqueereverse==2)
      {
        MatrixLed_matrix(MatrixLedmarqueecode.substr(MatrixLedmarqueecode.length-25,25));
        MatrixLedmarqueecodeonce = MatrixLedmarqueecodeonce.substr(MatrixLedmarqueecodeonce.length-5,5)+MatrixLedmarqueecodeonce.substr(0,MatrixLedmarqueecodeonce.length-5);
        MatrixLedmarqueecode = MatrixLedmarqueecode.substr(0,MatrixLedmarqueecode.length-5);
      }
    }
    else
    {
      window.clearInterval(marqueetimeid);
      MatrixLed_clear();
    }
  } 
  
  function MatrixLed_marquee_degree(direction,degree) {
    window.clearInterval(marqueetimeid);
    if (MatrixLedmarqueecode.length<MatrixLedmarqueecodeonce.length) MatrixLedmarqueecode=MatrixLedmarqueecodeonce;
    if (MatrixLedmarqueecode.length>25)
    {
      if (direction==1)
      {
        for (var i=1;i<=degree;i++)
          MatrixLedmarqueecode = MatrixLedmarqueecode.substr(5,MatrixLedmarqueecode.length-5)+MatrixLedmarqueecode.substr(0,5);
      }
      else if (direction==2)
      {
        for (var i=1;i<=degree;i++)
          MatrixLedmarqueecode = MatrixLedmarqueecode.substr(MatrixLedmarqueecode.length-5,5)+MatrixLedmarqueecode.substr(0,MatrixLedmarqueecode.length-5);
      }
      MatrixLed_matrix(MatrixLedmarqueecode.substr(0,25));
    }
  }   
  
  function MatrixLed_marquee_color(input_marquee_) {
    input_marquee_=input_marquee_.toString();
    MatrixLedmarqueecolorcodeonce = "";
    window.clearInterval(marqueetimeid);
    if (input_marquee_.length==175)
    {
      MatrixLed_matrix_codetocolor(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%35==0)&&(input_marquee_.length>175))
      MatrixLedmarqueecolorcode = input_marquee_;
    MatrixLedmarqueeinitial=MatrixLedmarqueecolorcode;
    marqueeactive=3;
    marqueetimeid = window.setInterval("MatrixLed_marquee_color_play()",MatrixLedmarqueetime);
  }  
  
  function MatrixLed_marquee_color_once(input_marquee_) {
    input_marquee_=input_marquee_.toString();
    MatrixLedmarqueeinitial=input_marquee_;
    window.clearInterval(marqueetimeid);
    if (input_marquee_.length==175)
    {
      MatrixLed_matrix_codetocolor(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%35==0)&&(input_marquee_.length>175))
    {
      MatrixLedmarqueecolorcode = input_marquee_;
      MatrixLedmarqueecolorcodeonce = input_marquee_;
    }
    MatrixLedmarqueeinitial=MatrixLedmarqueecolorcode;
    marqueeactive=4;
    marqueetimeid = window.setInterval("MatrixLed_marquee_color_once_play()",MatrixLedmarqueetime);
  }    
  
  function MatrixLed_marquee_color_play() {
    if (MatrixLedmarqueecolorcode.length>175)
    {
      if (MatrixLedmarqueereverse==1)
      {
        MatrixLed_matrix_codetocolor(MatrixLedmarqueecolorcode.substr(0,175));
        MatrixLedmarqueecolorcode = MatrixLedmarqueecolorcode.substr(35,MatrixLedmarqueecolorcode.length-35)+MatrixLedmarqueecolorcode.substr(0,35);
      }
      else if (MatrixLedmarqueereverse==2)
      {
        MatrixLed_matrix_codetocolor(MatrixLedmarqueecolorcode.substr(MatrixLedmarqueecolorcode.length-175,175));
        MatrixLedmarqueecolorcode = MatrixLedmarqueecolorcode.substr(MatrixLedmarqueecolorcode.length-35,35)+MatrixLedmarqueecolorcode.substr(0,MatrixLedmarqueecolorcode.length-35);
      }
    }
    else
    {
      window.clearInterval(marqueetimeid);
      MatrixLed_clear();
    }
  } 
  
  function MatrixLed_marquee_color_once_play() {
    if (MatrixLedmarqueecolorcode.length>=175)
    {
      if (MatrixLedmarqueereverse==1)
      {
        MatrixLed_matrix_codetocolor(MatrixLedmarqueecolorcode.substr(0,175));
        MatrixLedmarqueecolorcodeonce = MatrixLedmarqueecolorcodeonce.substr(35,MatrixLedmarqueecolorcodeonce.length-35)+MatrixLedmarqueecolorcodeonce.substr(0,35);
        MatrixLedmarqueecolorcode = MatrixLedmarqueecolorcode.substr(35,MatrixLedmarqueecolorcode.length-35);
      }
      else if (MatrixLedmarqueereverse==2)
      {
        MatrixLed_matrix_codetocolor(MatrixLedmarqueecolorcode.substr(MatrixLedmarqueecolorcode.length-175,175));
        MatrixLedmarqueecolorcodeonce = MatrixLedmarqueecolorcodeonce.substr(MatrixLedmarqueecolorcodeonce.length-35,35)+MatrixLedmarqueecolorcodeonce.substr(0,MatrixLedmarqueecolorcodeonce.length-35);
        MatrixLedmarqueecolorcode = MatrixLedmarqueecolorcode.substr(0,MatrixLedmarqueecolorcode.length-35);
      }
    }
    else
    {
      window.clearInterval(marqueetimeid);
      MatrixLed_clear();
    }
  } 
  
  function MatrixLed_marquee_color_degree(direction,degree) {
    window.clearInterval(marqueetimeid);
    if (MatrixLedmarqueecolorcode.length<MatrixLedmarqueecolorcodeonce.length) MatrixLedmarqueecolorcode=MatrixLedmarqueecolorcodeonce;
    if (MatrixLedmarqueecolorcode.length>175)
    {
      if (direction==1)
      {
        for (var i=1;i<=degree;i++)
          MatrixLedmarqueecolorcode = MatrixLedmarqueecolorcode.substr(35,MatrixLedmarqueecolorcode.length-35)+MatrixLedmarqueecolorcode.substr(0,35);
      }
      else if (direction==2)
      {
        for (var i=1;i<=degree;i++)
          MatrixLedmarqueecolorcode = MatrixLedmarqueecolorcode.substr(MatrixLedmarqueecolorcode.length-35,35)+MatrixLedmarqueecolorcode.substr(0,MatrixLedmarqueecolorcode.length-35);
      }
      MatrixLed_matrix_codetocolor(MatrixLedmarqueecolorcode.substr(0,175));
    }
  }  
  
  function MatrixLed_marquee_time(input_time_) {
    MatrixLedmarqueetime = input_time_;
  } 
  
  function MatrixLed_marquee_stop() {
    window.clearInterval(marqueetimeid);  
  } 
  
  function MatrixLed_marquee_resume() {
    window.clearInterval(marqueetimeid);
    if (marqueeactive==1)
      marqueetimeid = window.setInterval("MatrixLed_marquee_play()",MatrixLedmarqueetime);
    else if (marqueeactive==2)
      marqueetimeid = window.setInterval("MatrixLed_marquee_once_play()",MatrixLedmarqueetime);
    else if (marqueeactive==3)
      marqueetimeid= window.setInterval("MatrixLed_marquee_color_play()",MatrixLedmarqueetime);
    else if (marqueeactive==4)
      marqueetimeid = window.setInterval("MatrixLed_marquee_color_once_play()",MatrixLedmarqueetime);
  } 
  
  function MatrixLed_marquee_reverse() {
    MatrixLedmarqueecode = MatrixLedmarqueeinitial;
    MatrixLedmarqueecodeonce = MatrixLedmarqueeinitial;
    MatrixLedmarqueecolorcode = MatrixLedmarqueeinitial;
    MatrixLedmarqueecolorcodeonce = MatrixLedmarqueeinitial;
    if (MatrixLedmarqueereverse==1)
      MatrixLedmarqueereverse=2;
    else if (MatrixLedmarqueereverse==2)
      MatrixLedmarqueereverse=1;
  }   
  
  function MatrixLed_char(input_char_) {
    input_char_=input_char_.toString();
    if (input_char_.length==1)
    {
      MatrixLed_matrix(MatrixLed_conversion(input_char_));
    }
  }  
  
  function MatrixLed_texttocode(input_text_) {
    input_text_=input_text_.toString();
    if (input_text_.length>0)
    {
      var textcode="";
      for (var i=0;i<input_text_.length;i++)
      {
        if (i==(input_text_.length-1))
            textcode = textcode + MatrixLed_conversion(input_text_.substr(i,1));
        else
            textcode = textcode + MatrixLed_conversion(input_text_.substr(i,1)) + "00000";
      }
      return textcode;
    }
    else
      return "";
  }  
  
  function MatrixLed_code(input_code_) {
    input_code_=input_code_.toString();
    if (input_code_.length==25)
      MatrixLed_matrix(input_code_);
  }    
  
  function MatrixLed_sample(input_sample_) {
    MatrixLed_matrix(MatrixLed_conversion(input_sample_));
  }  
  
  function MatrixLed_clear() {
    for (var i=0;i<25;i++)
    {
      L[i]=MatrixLedbackcolor;
    }
    MatrixLed_show();
  }
  
  function MatrixLed_on(input_x_,input_y_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        L[i]=MatrixLedcolor;
      else
      {
        if (L[i]=="")
          L[i]=MatrixLedbackcolor;
      }
    }
    MatrixLed_show();
  }
  
  function MatrixLed_color_on(input_x_,input_y_,input_color_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        L[i]=input_color_;
      else
      {
        if (L[i]=="")
          L[i]=MatrixLedbackcolor;
      }
    }
    MatrixLed_show();
  }  
  
  function MatrixLed_off(input_x_,input_y_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        L[i]=MatrixLedbackcolor;
      else
      {
        if (L[i]=="")
          L[i]=MatrixLedbackcolor;
      }
    }
    MatrixLed_show();
  }
  
  function MatrixLed_reverse(input_x_,input_y_) {
    if ((L[input_x_*5+input_y_]=="")||(L[input_x_*5+input_y_]==MatrixLedbackcolor))
      L[input_x_*5+input_y_]=MatrixLedcolor;
    else
      L[input_x_*5+input_y_]=MatrixLedbackcolor;
    MatrixLed_show();
  }

  function MatrixLed_state(input_x_,input_y_) {
    if ((L[input_x_*5+input_y_]=="")||(L[input_x_*5+input_y_]==MatrixLedbackcolor))
      return 0;
    else
      return 1;
  }
  
  function MatrixLed_matrix(input_value_) {
    input_value_=input_value_.toString();
    for (var i=0;i<25;i++)
    {
      if (input_value_.substr(i,1)=="1")
        L[i]=MatrixLedcolor;
      else
        L[i]=MatrixLedbackcolor;
    }
    MatrixLed_show();
  }
  
  function MatrixLed_matrix_codetocolor(code) {
    for (var i=0;i<25;i++)
      L[i]=code.substr(i*7,7);
    
    MatrixLed_show();
  }
  
  function MatrixLed_matrix_color(color) {
    for (var i=0;i<25;i++)
      L[i]=color[i];
    
    MatrixLed_show();
  }  
  
  function MatrixLed_conversion(input_char_) {
    if (input_char_=="A")      return charA;
    else if (input_char_=="B")      return charB;  
    else if (input_char_=="C")      return charC; 
    else if (input_char_=="D")      return charD;  
    else if (input_char_=="E")      return charE;   
    else if (input_char_=="F")      return charF;  
    else if (input_char_=="G")      return charG;   
    else if (input_char_=="H")      return charH;  
    else if (input_char_=="I")      return charI;   
    else if (input_char_=="J")      return charJ;  
    else if (input_char_=="K")      return charK;   
    else if (input_char_=="L")      return charL;  
    else if (input_char_=="M")      return charM;  
    else if (input_char_=="N")      return charN;  
    else if (input_char_=="O")      return charO;  
    else if (input_char_=="P")      return charP;  
    else if (input_char_=="Q")      return charQ; 
    else if (input_char_=="R")      return charR;  
    else if (input_char_=="S")      return charS;
    else if (input_char_=="T")      return charT;  
    else if (input_char_=="U")      return charU;  
    else if (input_char_=="V")      return charV;  
    else if (input_char_=="W")      return charW;  
    else if (input_char_=="X")      return charX;  
    else if (input_char_=="Y")      return charY; 
    else if (input_char_=="Z")      return charZ; 
    else if (input_char_=="a")      return chara;
    else if (input_char_=="b")      return charb;  
    else if (input_char_=="c")      return charc; 
    else if (input_char_=="d")      return chard;  
    else if (input_char_=="e")      return chare;   
    else if (input_char_=="f")      return charf;  
    else if (input_char_=="g")      return charg;   
    else if (input_char_=="h")      return charh;  
    else if (input_char_=="i")      return chari;   
    else if (input_char_=="j")      return charj;  
    else if (input_char_=="k")      return chark;   
    else if (input_char_=="l")      return charl;  
    else if (input_char_=="m")      return charm;  
    else if (input_char_=="n")      return charn;  
    else if (input_char_=="o")      return charo;  
    else if (input_char_=="p")      return charp;  
    else if (input_char_=="q")      return charq; 
    else if (input_char_=="r")      return charr;  
    else if (input_char_=="s")      return chars;
    else if (input_char_=="t")      return chart;  
    else if (input_char_=="u")      return charu;  
    else if (input_char_=="v")      return charv;  
    else if (input_char_=="w")      return charw;  
    else if (input_char_=="x")      return charx;  
    else if (input_char_=="y")      return chary; 
    else if (input_char_=="z")      return charz;     
    else if (input_char_=="0")      return char0; 
    else if (input_char_=="1")      return char1;   
    else if (input_char_=="2")      return char2; 
    else if (input_char_=="3")      return char3;       
    else if (input_char_=="4")      return char4; 
    else if (input_char_=="5")      return char5;       
    else if (input_char_=="6")      return char6; 
    else if (input_char_=="7")      return char7;       
    else if (input_char_=="8")      return char8; 
    else if (input_char_=="9")      return char9;     
    else if (input_char_==",")        return comma;
    else if (input_char_==".")      return period;  
    else if (input_char_=="?")      return questionmark;      
    else if (input_char_=="!")      return exclamationmark;  
    else if (input_char_==";")      return semicolon;  
    else if (input_char_==":")      return colon;  
    else if (input_char_=="(")      return parenthesesleft; 
    else if (input_char_==")")      return parenthesesright;  
    else if (input_char_=="[")      return squarebracketsleft;
    else if (input_char_=="]")      return squarebracketsright;  
    else if (input_char_=="{")      return curlybracketsleft;      
    else if (input_char_=="}")      return curlybracketsright; 
    else if (input_char_=="'")      return Quotationmarkssingle;     
    else if (input_char_=="\"")      return Quotationmarksdouble;   
    else if (input_char_=="♡")      return heart;
    else if (input_char_=="♥")      return heartfill;    
    else if (input_char_=="↑")      return arrowup;
    else if (input_char_=="↓")      return arrowdown;
    else if (input_char_=="←")      return arrowleft;
    else if (input_char_=="→")      return arrowright;   
    else if (input_char_=="↖")      return arrowleftup;
    else if (input_char_=="↙")      return arrowleftdown;
    else if (input_char_=="↗")      return arrowrightup;
    else if (input_char_=="↘")      return arrowrightdown;  
    else if (input_char_=="▲")      return arrowupfill;
    else if (input_char_=="▼")      return arrowdownfill;
    else if (input_char_=="◄")      return arrowleftfill;
    else if (input_char_=="►")      return arrowrightfill;    
    else      return noexist;
  }
  
  function MatrixLed_linechart(value1,value2,value3,value4,value5){
    var input_value=[value1,value2,value3,value4,value5];
    var k=0;
    for (var i=0;i<=4;i++)
    {    
      for (var j=0;j<=4;j++)
      {
        if (j==(5-input_value[i]))
          L[k]=MatrixLedcolor;
        else
          L[k]=MatrixLedbackcolor;
        k++;
      }
    }
    MatrixLed_show();
  }
  
  function MatrixLed_barchart(value1,value2,value3,value4,value5){
    var input_value=[value1,value2,value3,value4,value5];
    var k=0;
    for (var i=0;i<=4;i++)
    {    
      for (var j=0;j<=4;j++)
      {
        if (j>=(5-input_value[i]))
          L[k]=MatrixLedcolor;
        else
          L[k]=MatrixLedbackcolor;
        k++;
      }
    }
    MatrixLed_show();
  }
  
  function Matrixled_clockwise(){
    var Tmp = new Array("","","","","","","","","","","","","","","","","","","","","","","","","");
    var n;
    for (n=0;n<25;n++)
    {
      Tmp[n]=L[n];
    }
    n=0;
    for (var i=4;i>=0;i--)
    {    
      for (var j=0;j<=4;j++)
      {
        L[n]=Tmp[i+5*j];
        n++;
      }
    }
    MatrixLed_show();
  }
  
  function Matrixled_counterclockwise(){
    var Tmp = new Array("","","","","","","","","","","","","","","","","","","","","","","","","");
    var n;
    for (n=0;n<25;n++)
    {
      Tmp[n]=L[n];
    }
    n=0;
    for (var i=0;i<=4;i++)
    {    
      for (var j=4;j>=0;j--)
      {
        L[n]=Tmp[i+5*j];
        n++;
      }
    }
    MatrixLed_show();
  }
  
  function Matrixled_verticalflip(){
    var Tmp = new Array("","","","","","","","","","","","","","","","","","","","","","","","","");
    var n;
    for (n=0;n<25;n++)
    {
      Tmp[n]=L[n];
    }
    n=0;
    for (var i=0;i<=4;i++)
    {    
      for (var j=4;j>=0;j--)
      {
        L[n]=Tmp[j+5*i];
        n++;
      }
    }
    MatrixLed_show();
  }
  
  function Matrixled_horizontalflip(){
    var Tmp = new Array("","","","","","","","","","","","","","","","","","","","","","","","","");
    var n;
    for (n=0;n<25;n++)
    {
      Tmp[n]=L[n];
    }
    n=0;
    for (var i=4;i>=0;i--)
    {    
      for (var j=0;j<=4;j++)
      {
        L[n]=Tmp[j+i*5];
        n++;
      }
    }
    MatrixLed_show();
  }
  
  function Matrixled_invert(){
    for (var i=0;i<25;i++)
    {
      if ((L[i]=="")||(L[i]==MatrixLedbackcolor))
        L[i]=MatrixLedcolor;
      else
        L[i]=MatrixLedbackcolor;
    }
    MatrixLed_show();
  }
  
  function MatrixLed_getcolor(input_x_,input_y_) {
    return L[input_x_*5+input_y_];
  } 
  
  function MatrixLed_backcolor(input_color_) {
    MatrixLedbackcolor=input_color_;
  }  
 
  function MatrixLed_show() {
    if (MatrixLedshowstate==1)
      var ledtable ="<table style='width:"+MatrixLedwidth+"px;height:"+MatrixLedheight+"px;border:white;'>"
                  + "<tr><td bgcolor='"+L[0]+"'></td><td bgcolor='"+L[5]+"'></td><td bgcolor='"+L[10]+"'></td><td bgcolor='"+L[15]+"'></td><td bgcolor='"+L[20]+"'></td></tr>"
                  + "<tr><td bgcolor='"+L[1]+"'></td><td bgcolor='"+L[6]+"'></td><td bgcolor='"+L[11]+"'></td><td bgcolor='"+L[16]+"'></td><td bgcolor='"+L[21]+"'></td></tr>"
                  + "<tr><td bgcolor='"+L[2]+"'></td><td bgcolor='"+L[7]+"'></td><td bgcolor='"+L[12]+"'></td><td bgcolor='"+L[17]+"'></td><td bgcolor='"+L[22]+"'></td></tr>"
                  + "<tr><td bgcolor='"+L[3]+"'></td><td bgcolor='"+L[8]+"'></td><td bgcolor='"+L[13]+"'></td><td bgcolor='"+L[18]+"'></td><td bgcolor='"+L[23]+"'></td></tr>"
                  + "<tr><td bgcolor='"+L[4]+"'></td><td bgcolor='"+L[9]+"'></td><td bgcolor='"+L[14]+"'></td><td bgcolor='"+L[19]+"'></td><td bgcolor='"+L[24]+"'></td></tr>"
                  + "</table>";
    else
      var ledtable ="<table style='width:"+MatrixLedwidth+"px;height:"+MatrixLedheight+"px;border:white;'>"
                  + "<tr><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td></tr>"
                  + "<tr><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td></tr>"
                  + "<tr><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td></tr>"
                  + "<tr><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td></tr>"
                  + "<tr><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td><td bgcolor='"+MatrixLedbackcolor+"'></td></tr>"
                  + "</table>";
    
    if (document.getElementById("fustyles_matrixled"))
    {
          document.getElementById("fustyles_matrixled").innerHTML = ledtable;
    }
    else
    {
        var div = document.createElement('div');
        div.id = "fustyles_matrixled";   
        div.innerHTML = ledtable;
        document.body.appendChild(div);
    }    
  }
  
  window.MatrixLed_clear = MatrixLed_clear;
  window.MatrixLed_matrix = MatrixLed_matrix;
  window.MatrixLed_matrix_color = MatrixLed_matrix_color;
  window.MatrixLed_show = MatrixLed_show;
  window.MatrixLed_on = MatrixLed_on;
  window.MatrixLed_color_on = MatrixLed_color_on;
  window.MatrixLed_off = MatrixLed_off;
  window.MatrixLed_reverse = MatrixLed_reverse;
  window.MatrixLed_state = MatrixLed_state;
  window.MatrixLed_color = MatrixLed_color;
  window.MatrixLed_width = MatrixLed_width;
  window.MatrixLed_height = MatrixLed_height;
  window.MatrixLed_sample = MatrixLed_sample;
  window.MatrixLed_code = MatrixLed_code;
  window.MatrixLed_marquee = MatrixLed_marquee;
  window.MatrixLed_marquee_play = MatrixLed_marquee_play;
  window.MatrixLed_marquee_once = MatrixLed_marquee_once;
  window.MatrixLed_marquee_once_play = MatrixLed_marquee_once_play;
  window.MatrixLed_marquee_color = MatrixLed_marquee_color;
  window.MatrixLed_marquee_color_play = MatrixLed_marquee_color_play;
  window.MatrixLed_marquee_color_once = MatrixLed_marquee_color_once;
  window.MatrixLed_marquee_color_once_play = MatrixLed_marquee_color_once_play; 
  window.MatrixLed_matrix_codetocolor = MatrixLed_matrix_codetocolor;
  window.MatrixLed_marquee_degree = MatrixLed_marquee_degree;
  window.MatrixLed_marquee_color_degree = MatrixLed_marquee_color_degree;
  window.MatrixLed_marquee_stop = MatrixLed_marquee_stop;
  window.MatrixLed_marquee_resume = MatrixLed_marquee_resume;
  window.MatrixLed_marquee_reverse = MatrixLed_marquee_reverse;
  window.MatrixLed_marquee_time = MatrixLed_marquee_time;
  window.MatrixLed_char = MatrixLed_char;
  window.MatrixLed_conversion = MatrixLed_conversion;
  window.MatrixLed_texttocode = MatrixLed_texttocode;
  window.MatrixLed_showstate = MatrixLed_showstate;
  window.MatrixLed_indentcode = MatrixLed_indentcode;
  window.MatrixLed_linechart = MatrixLed_linechart;
  window.MatrixLed_barchart = MatrixLed_barchart;
  window.Matrixled_clockwise = Matrixled_clockwise;
  window.Matrixled_counterclockwise = Matrixled_counterclockwise;
  window.Matrixled_verticalflip = Matrixled_verticalflip;
  window.Matrixled_horizontalflip = Matrixled_horizontalflip;
  window.Matrixled_invert = Matrixled_invert;
  window.MatrixLed_getcolor = MatrixLed_getcolor;
  window.MatrixLed_backcolor = MatrixLed_backcolor;
  window.MatrixLed_marquee_times = MatrixLed_marquee_times;
  
}(window, window.document));
