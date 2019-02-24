// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

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
  var BitMatrixLedcolor = "#ff0000";
  var BitMatrixLedbackcolor = "#000000";
  var BitMatrixLedmarqueeinitial = "",BitMatrixLedmarqueecode = "",BitMatrixLedmarqueecodeonce = "",BitMatrixLedmarqueecolorcode = "",BitMatrixLedmarqueecolorcodeonce = "";  
  var BitMatrixLedmarqueetime = 500;
  var BitMatrixLedmarqueereverse = 1;
  var BitMatrixLedshowstate = 1;
  var BitMatrixLedurl = "";
  var marqueetimeid;
  var marqueeactive;
  var objBitMatrixLed;

  function BitMatrixLed_host(input_host_) {
    BitMatrixLedurl = input_host_;
  }

  function BitMatrixLed_color(input_color_) {
    BitMatrixLedcolor = input_color_;
  }
  
  function BitMatrixLed_showstate(obj,input_showstate_) {
    objBitMatrixLed=obj;
    BitMatrixLedshowstate = input_showstate_;
  }   
  
  function BitMatrixLed_indentcode(input_indentcode_) {
    var indentcode = input_indentcode_;
    while (indentcode.search(/0000000000/)!=-1)
      indentcode = indentcode.replace(/0000000000/g,"00000"); 
    return indentcode;
  } 
  
  function BitMatrixLed_marquee(input_marquee_) {
    input_marquee_=input_marquee_.toString();
    BitMatrixLedmarqueecodeonce = "";
    window.clearInterval(marqueetimeid);
    if ((input_marquee_.length==25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      BitMatrixLed_matrix(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%5==0)&&(input_marquee_.length>25)&&(input_marquee_.search(/[^0-1]/)==-1))
      BitMatrixLedmarqueecode = input_marquee_;  
    else if (input_marquee_.length==1)
    {
      BitMatrixLed_matrix(BitMatrixLed_conversion(input_marquee_));
      return;
    }
    else if (input_marquee_.length>1)
    {
      BitMatrixLedmarqueecode="";
      for (var i=0;i<input_marquee_.length;i++)
      {
        if (i==(input_marquee_.length-1))
          BitMatrixLedmarqueecode = BitMatrixLedmarqueecode + BitMatrixLed_conversion(input_marquee_.substr(i,1));
        else
          BitMatrixLedmarqueecode = BitMatrixLedmarqueecode + BitMatrixLed_conversion(input_marquee_.substr(i,1)) + "00000";
      }
    }
    BitMatrixLedmarqueeinitial=BitMatrixLedmarqueecode;
    marqueeactive=1;
    marqueetimeid = window.setInterval("BitMatrixLed_marquee_play()",BitMatrixLedmarqueetime);
  }  
  
  function BitMatrixLed_marquee_once(input_marquee_) {
    input_marquee_=input_marquee_.toString();
    window.clearInterval(marqueetimeid);
    if ((input_marquee_.length==25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      BitMatrixLed_matrix(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%5==0)&&(input_marquee_.length>25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      BitMatrixLedmarqueecode = input_marquee_;
      BitMatrixLedmarqueecodeonce = input_marquee_;
    }
    else if (input_marquee_.length==1)
    {
      BitMatrixLed_matrix(BitMatrixLed_conversion(input_marquee_));
      return;
    }
    else if (input_marquee_.length>1)
    {
      BitMatrixLedmarqueecode="";
      for (var i=0;i<input_marquee_.length;i++)
      {
        if (i==(input_marquee_.length-1))
          BitMatrixLedmarqueecode = BitMatrixLedmarqueecode+BitMatrixLed_conversion(input_marquee_.substr(i,1));
        else
          BitMatrixLedmarqueecode = BitMatrixLedmarqueecode+BitMatrixLed_conversion(input_marquee_.substr(i,1)) + "00000";
      }
      BitMatrixLedmarqueecode = BitMatrixLedmarqueecode;
      BitMatrixLedmarqueecodeonce = BitMatrixLedmarqueecode;
    }
    BitMatrixLedmarqueeinitial=BitMatrixLedmarqueecode;
    marqueeactive=2;
    marqueetimeid = window.setInterval("BitMatrixLed_marquee_once_play()",BitMatrixLedmarqueetime);
  }    
  
  function BitMatrixLed_marquee_times(input_marquee_,input_times_) {
    input_marquee_=input_marquee_.toString();
    window.clearInterval(marqueetimeid);
    if ((input_marquee_.length==25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      BitMatrixLed_matrix(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%5==0)&&(input_marquee_.length>25)&&(input_marquee_.search(/[^0-1]/)==-1))
    {
      BitMatrixLedmarqueecode = input_marquee_;
      BitMatrixLedmarqueecodeonce = input_marquee_;
    }
    else if (input_marquee_.length==1)
    {
      BitMatrixLed_matrix(BitMatrixLed_conversion(input_marquee_));
      return;
    }
    else if (input_marquee_.length>1)
    {
      BitMatrixLedmarqueecode="";
      for (var i=0;i<input_marquee_.length;i++)
      {
        if (i==(input_marquee_.length-1))
          BitMatrixLedmarqueecode = BitMatrixLedmarqueecode+BitMatrixLed_conversion(input_marquee_.substr(i,1));
        else
          BitMatrixLedmarqueecode = BitMatrixLedmarqueecode+BitMatrixLed_conversion(input_marquee_.substr(i,1)) + "00000";
      }
      BitMatrixLedmarqueecode = BitMatrixLedmarqueecode;
      BitMatrixLedmarqueecodeonce = BitMatrixLedmarqueecode;
    }
    var s = BitMatrixLedmarqueecode;
    if (input_times_>1) {
      for (var j=1;j<input_times_;j++)
      {
        BitMatrixLedmarqueecode += s;
        BitMatrixLedmarqueecodeonce += s;
      }
    } 
    BitMatrixLedmarqueeinitial=BitMatrixLedmarqueecode;
    marqueeactive=2;
    marqueetimeid = window.setInterval("BitMatrixLed_marquee_once_play()",BitMatrixLedmarqueetime);
  }  
  
  function BitMatrixLed_marquee_play() {
    if (BitMatrixLedmarqueecode.length>25)
    {
      if (BitMatrixLedmarqueereverse==1)
      {
        BitMatrixLed_matrix(BitMatrixLedmarqueecode.substr(0,25));
        BitMatrixLedmarqueecode = BitMatrixLedmarqueecode.substr(5,BitMatrixLedmarqueecode.length-5)+BitMatrixLedmarqueecode.substr(0,5);
      }
      else if (BitMatrixLedmarqueereverse==2)
      {
        BitMatrixLed_matrix(BitMatrixLedmarqueecode.substr(BitMatrixLedmarqueecode.length-25,25));
        BitMatrixLedmarqueecode = BitMatrixLedmarqueecode.substr(BitMatrixLedmarqueecode.length-5,5)+BitMatrixLedmarqueecode.substr(0,BitMatrixLedmarqueecode.length-5);
      }
    }
    else
    {
      window.clearInterval(marqueetimeid);
      BitMatrixLed_clear();
    }
  } 
  
  function BitMatrixLed_marquee_once_play() {
    if (BitMatrixLedmarqueecode.length>=25)
    {
      if (BitMatrixLedmarqueereverse==1)
      {
        BitMatrixLed_matrix(BitMatrixLedmarqueecode.substr(0,25));
        BitMatrixLedmarqueecodeonce = BitMatrixLedmarqueecodeonce.substr(5,BitMatrixLedmarqueecodeonce.length-5)+BitMatrixLedmarqueecodeonce.substr(0,5);
        BitMatrixLedmarqueecode = BitMatrixLedmarqueecode.substr(5,BitMatrixLedmarqueecode.length-5);
      }
      else if (BitMatrixLedmarqueereverse==2)
      {
        BitMatrixLed_matrix(BitMatrixLedmarqueecode.substr(BitMatrixLedmarqueecode.length-25,25));
        BitMatrixLedmarqueecodeonce = BitMatrixLedmarqueecodeonce.substr(BitMatrixLedmarqueecodeonce.length-5,5)+BitMatrixLedmarqueecodeonce.substr(0,BitMatrixLedmarqueecodeonce.length-5);
        BitMatrixLedmarqueecode = BitMatrixLedmarqueecode.substr(0,BitMatrixLedmarqueecode.length-5);
      }
    }
    else 
    {
      window.clearInterval(marqueetimeid);
      BitMatrixLed_clear();
    }
  }  
  
  function BitMatrixLed_marquee_degree(direction,degree) {
    window.clearInterval(marqueetimeid);
    if (BitMatrixLedmarqueecode.length<BitMatrixLedmarqueecodeonce.length) BitMatrixLedmarqueecode=BitMatrixLedmarqueecodeonce;
    if (BitMatrixLedmarqueecode.length>25)
    {
      if (direction==1)
      {
        for (var i=1;i<=degree;i++)
          BitMatrixLedmarqueecode = BitMatrixLedmarqueecode.substr(5,BitMatrixLedmarqueecode.length-5)+BitMatrixLedmarqueecode.substr(0,5);
      }
      else if (direction==2)
      {
        for (var i=1;i<=degree;i++)
          BitMatrixLedmarqueecode = BitMatrixLedmarqueecode.substr(BitMatrixLedmarqueecode.length-5,5)+BitMatrixLedmarqueecode.substr(0,BitMatrixLedmarqueecode.length-5);
      }
      BitMatrixLed_matrix(BitMatrixLedmarqueecode.substr(0,25));
    }
  }   
  
  function BitMatrixLed_marquee_color(input_marquee_) {
    input_marquee_=input_marquee_.toString();
    BitMatrixLedmarqueecolorcodeonce = "";
    window.clearInterval(marqueetimeid);
    if (input_marquee_.length==175)
    {
      BitMatrixLed_matrix_codetocolor(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%35==0)&&(input_marquee_.length>175))
      BitMatrixLedmarqueecolorcode = input_marquee_;
    BitMatrixLedmarqueeinitial=BitMatrixLedmarqueecolorcode;
    marqueeactive=3;
    marqueetimeid = window.setInterval("BitMatrixLed_marquee_color_play()",BitMatrixLedmarqueetime);
  }  
  
  function BitMatrixLed_marquee_color_once(input_marquee_) {
    input_marquee_=input_marquee_.toString();
    BitMatrixLedmarqueeinitial=input_marquee_;
    window.clearInterval(marqueetimeid);
    if (input_marquee_.length==175)
    {
      BitMatrixLed_matrix_codetocolor(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%35==0)&&(input_marquee_.length>175))
    {
      BitMatrixLedmarqueecolorcode = input_marquee_;
      BitMatrixLedmarqueecolorcodeonce = input_marquee_;
    }
    BitMatrixLedmarqueeinitial=BitMatrixLedmarqueecolorcode;
    marqueeactive=4;
    marqueetimeid = window.setInterval("BitMatrixLed_marquee_color_once_play()",BitMatrixLedmarqueetime);
  }    
  
  function BitMatrixLed_marquee_color_play() {
    if (BitMatrixLedmarqueecolorcode.length>175)
    {
      if (BitMatrixLedmarqueereverse==1)
      {
        BitMatrixLed_matrix_codetocolor(BitMatrixLedmarqueecolorcode.substr(0,175));
        BitMatrixLedmarqueecolorcode = BitMatrixLedmarqueecolorcode.substr(35,BitMatrixLedmarqueecolorcode.length-35)+BitMatrixLedmarqueecolorcode.substr(0,35);
      }
      else if (BitMatrixLedmarqueereverse==2)
      {
        BitMatrixLed_matrix_codetocolor(BitMatrixLedmarqueecolorcode.substr(BitMatrixLedmarqueecolorcode.length-175,175));
        BitMatrixLedmarqueecolorcode = BitMatrixLedmarqueecolorcode.substr(BitMatrixLedmarqueecolorcode.length-35,35)+BitMatrixLedmarqueecolorcode.substr(0,BitMatrixLedmarqueecolorcode.length-35);
      }
    }
    else
    {
      window.clearInterval(marqueetimeid);
      BitMatrixLed_clear();
    }
  } 
  
  function BitMatrixLed_marquee_color_once_play() {
    if (BitMatrixLedmarqueecolorcode.length>=175)
    {
      if (BitMatrixLedmarqueereverse==1)
      {
        BitMatrixLed_matrix_codetocolor(BitMatrixLedmarqueecolorcode.substr(0,175));
        BitMatrixLedmarqueecolorcodeonce = BitMatrixLedmarqueecolorcodeonce.substr(35,BitMatrixLedmarqueecolorcodeonce.length-35)+BitMatrixLedmarqueecolorcodeonce.substr(0,35);
        BitMatrixLedmarqueecolorcode = BitMatrixLedmarqueecolorcode.substr(35,BitMatrixLedmarqueecolorcode.length-35);
      }
      else if (BitMatrixLedmarqueereverse==2)
      {
        BitMatrixLed_matrix_codetocolor(BitMatrixLedmarqueecolorcode.substr(BitMatrixLedmarqueecolorcode.length-175,175));
        BitMatrixLedmarqueecolorcodeonce = BitMatrixLedmarqueecolorcodeonce.substr(BitMatrixLedmarqueecolorcodeonce.length-35,35)+BitMatrixLedmarqueecolorcodeonce.substr(0,BitMatrixLedmarqueecolorcodeonce.length-35);
        BitMatrixLedmarqueecolorcode = BitMatrixLedmarqueecolorcode.substr(0,BitMatrixLedmarqueecolorcode.length-35);
      }
    }
    else
    {
      window.clearInterval(marqueetimeid);
      BitMatrixLed_clear();
    }
  } 
  
  function BitMatrixLed_marquee_color_degree(direction,degree) {
    window.clearInterval(marqueetimeid);
    if (BitMatrixLedmarqueecolorcode.length<BitMatrixLedmarqueecolorcodeonce.length) BitMatrixLedmarqueecolorcode=BitMatrixLedmarqueecolorcodeonce;
    if (BitMatrixLedmarqueecolorcode.length>175)
    {
      if (direction==1)
      {
        for (var i=1;i<=degree;i++)
          BitMatrixLedmarqueecolorcode = BitMatrixLedmarqueecolorcode.substr(35,BitMatrixLedmarqueecolorcode.length-35)+BitMatrixLedmarqueecolorcode.substr(0,35);
      }
      else if (direction==2)
      {
        for (var i=1;i<=degree;i++)
          BitMatrixLedmarqueecolorcode = BitMatrixLedmarqueecolorcode.substr(BitMatrixLedmarqueecolorcode.length-35,35)+BitMatrixLedmarqueecolorcode.substr(0,BitMatrixLedmarqueecolorcode.length-35);
      }
      BitMatrixLed_matrix_codetocolor(BitMatrixLedmarqueecolorcode.substr(0,175));
    }
  }  
  
  function BitMatrixLed_marquee_time(input_time_) {
    BitMatrixLedmarqueetime = input_time_;
  } 
  
  function BitMatrixLed_marquee_stop() {
    window.clearInterval(marqueetimeid);  
  } 
  
  function BitMatrixLed_marquee_resume() {
    window.clearInterval(marqueetimeid);
    if (marqueeactive==1)
      marqueetimeid = window.setInterval("BitMatrixLed_marquee_play()",BitMatrixLedmarqueetime);
    else if (marqueeactive==2)
      marqueetimeid = window.setInterval("BitMatrixLed_marquee_once_play()",BitMatrixLedmarqueetime);
    else if (marqueeactive==3)
      marqueetimeid= window.setInterval("BitMatrixLed_marquee_color_play()",BitMatrixLedmarqueetime);
    else if (marqueeactive==4)
      marqueetimeid = window.setInterval("BitMatrixLed_marquee_color_once_play()",BitMatrixLedmarqueetime);
  } 
  
  function BitMatrixLed_marquee_reverse() {
    BitMatrixLedmarqueecode = BitMatrixLedmarqueeinitial;
    BitMatrixLedmarqueecodeonce = BitMatrixLedmarqueeinitial;
    BitMatrixLedmarqueecolorcode = BitMatrixLedmarqueeinitial;
    BitMatrixLedmarqueecolorcodeonce = BitMatrixLedmarqueeinitial;
    if (BitMatrixLedmarqueereverse==1)
      BitMatrixLedmarqueereverse=2;
    else if (BitMatrixLedmarqueereverse==2)
      BitMatrixLedmarqueereverse=1;
  }   
  
  function BitMatrixLed_char(input_char_) {
    input_char_=input_char_.toString();
    if (input_char_.length==1)
    {
      BitMatrixLed_matrix(BitMatrixLed_conversion(input_char_));
    }
  }  
  
  function BitMatrixLed_texttocode(input_text_) {
    input_text_=input_text_.toString();
    if (input_text_.length>0)
    {
      var textcode="";
      for (var i=0;i<input_text_.length;i++)
      {
        if (i==(input_text_.length-1))
            textcode = textcode + BitMatrixLed_conversion(input_text_.substr(i,1));
        else
            textcode = textcode + BitMatrixLed_conversion(input_text_.substr(i,1)) + "00000";
      }
      return textcode;
    }
    else
      return "";
  }  
  
  function BitMatrixLed_code(input_code_) {
    input_code_=input_code_.toString();
    if (input_code_.length==25)
      BitMatrixLed_matrix(input_code_);
  }    
  
  function BitMatrixLed_sample(input_sample_) {
    BitMatrixLed_matrix(BitMatrixLed_conversion(input_sample_));
  }  
  
  function BitMatrixLed_clear() {
    for (var i=0;i<25;i++)
    {
      L[i]=BitMatrixLedbackcolor;
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_on(input_x_,input_y_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        L[i]=BitMatrixLedcolor;
      else
      {
        if (L[i]=="")
          L[i]=BitMatrixLedbackcolor;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_color_on(input_x_,input_y_,input_color_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        L[i]=input_color_;
      else
      {
        if (L[i]=="")
          L[i]=BitMatrixLedbackcolor;
      }
    }
    BitMatrixLed_show();
  }  
  
  function BitMatrixLed_off(input_x_,input_y_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        L[i]=BitMatrixLedbackcolor;
      else
      {
        if (L[i]=="")
          L[i]=BitMatrixLedbackcolor;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_reverse(input_x_,input_y_) {
    if ((L[input_x_*5+input_y_]=="")||(L[input_x_*5+input_y_]==BitMatrixLedbackcolor))
      L[input_x_*5+input_y_]=BitMatrixLedcolor;
    else
      L[input_x_*5+input_y_]=BitMatrixLedbackcolor;
    BitMatrixLed_show();
  }

  function BitMatrixLed_state(input_x_,input_y_) {
    if ((L[input_x_*5+input_y_]=="")||(L[input_x_*5+input_y_]==BitMatrixLedbackcolor))
      return 0;
    else
      return 1;
  }
  
  function BitMatrixLed_matrix(input_value_) {
    input_value_=input_value_.toString();
    for (var i=0;i<25;i++)
    {
      if (input_value_.substr(i,1)=="1")
        L[i]=BitMatrixLedcolor;
      else
        L[i]=BitMatrixLedbackcolor;
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_matrix_codetocolor(code) {
    for (var i=0;i<25;i++)
      L[i]=code.substr(i*7,7);
    
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_matrix_color(color) {
    for (var i=0;i<25;i++)
      L[i]=color[i];
    
    BitMatrixLed_show();
  }  
  
  function BitMatrixLed_conversion(input_char_) {
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
  
  function BitMatrixLed_linechart(value1,value2,value3,value4,value5){
    var input_value=[value1,value2,value3,value4,value5];
    var k=0;
    for (var i=0;i<=4;i++)
    {    
      for (var j=0;j<=4;j++)
      {
        if (j==(5-input_value[i]))
          L[k]=BitMatrixLedcolor;
        else
          L[k]=BitMatrixLedbackcolor;
        k++;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_barchart(value1,value2,value3,value4,value5){
    var input_value=[value1,value2,value3,value4,value5];
    var k=0;
    for (var i=0;i<=4;i++)
    {    
      for (var j=0;j<=4;j++)
      {
        if (j>=(5-input_value[i]))
          L[k]=BitMatrixLedcolor;
        else
          L[k]=BitMatrixLedbackcolor;
        k++;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_clockwise(){
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
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_counterclockwise(){
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
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_verticalflip(){
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
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_horizontalflip(){
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
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_invert(){
    for (var i=0;i<25;i++)
    {
      if ((L[i]=="")||(L[i]==BitMatrixLedbackcolor))
        L[i]=BitMatrixLedcolor;
      else
        L[i]=BitMatrixLedbackcolor;
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_getcolor(input_x_,input_y_) {
    return L[input_x_*5+input_y_];
  } 
  
  function BitMatrixLed_backcolor(input_color_) {
    BitMatrixLedbackcolor=input_color_;
  }  
 
  function BitMatrixLed_show() {
    if (BitMatrixLedshowstate==1)
      var ledcolor =L[20].replace(/\#/ig, "")+L[21].replace(/\#/ig, "")+L[22].replace(/\#/ig, "")+L[23].replace(/\#/ig, "")+L[24].replace(/\#/ig, "")
                  + L[15].replace(/\#/ig, "")+L[16].replace(/\#/ig, "")+L[17].replace(/\#/ig, "")+L[18].replace(/\#/ig, "")+L[19].replace(/\#/ig, "")
                  + L[10].replace(/\#/ig, "")+L[11].replace(/\#/ig, "")+L[12].replace(/\#/ig, "")+L[13].replace(/\#/ig, "")+L[14].replace(/\#/ig, "")
                  + L[5].replace(/\#/ig, "")+L[6].replace(/\#/ig, "")+L[7].replace(/\#/ig, "")+L[8].replace(/\#/ig, "")+L[9].replace(/\#/ig, "")
                  + L[0].replace(/\#/ig, "")+L[1].replace(/\#/ig, "")+L[2].replace(/\#/ig, "")+L[3].replace(/\#/ig, "")+L[4].replace(/\#/ig, "");
    else
      var ledcolor =BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")
                  + BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")
                  + BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")
                  + BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")
                  + BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "");           
 
	if (!document.getElementById("BitIframe")) {
	  var ifrm = document.createElement("iframe");
	  ifrm.setAttribute("src", BitMatrixLedurl+"?matrixled="+ledcolor+";stop");
	  ifrm.style.width = "0px";
	  ifrm.style.height = "0px";
	  ifrm.style.display = "none";
	  document.body.appendChild(ifrm);
    }
	else
      document.getElementsByID("BitIframe").src = BitMatrixLedurl+"?matrixled="+ledcolor+";stop";
  }
