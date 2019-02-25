// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

  const BitCharA = "0111110010100101001001111";
  const BitCharB = "1111110101101011010101010";
  const BitCharC = "0111010001100011000110001";
  const BitCharD = "1111110001100011000101110";
  const BitCharE = "1111110101101011010110101";
  const BitCharF = "1111110100101001010010100";
  const BitCharG = "0111010001101011010110111";
  const BitCharH = "1111100100001000010011111";
  const BitCharI = "1000110001111111000110001";
  const BitCharJ = "1001110001111111000010000";
  const BitCharK = "1111100010001000101010001";
  const BitCharL = "1111100001000010000100001";
  const BitCharM = "1111101000001000100011111";
  const BitCharN = "1111101000001000001011111";
  const BitCharO = "0111010001100011000101110";
  const BitCharP = "1111110010100101001001100";
  const BitCharQ = "0111010001101011001001101";
  const BitCharR = "1111110100101001010001011";
  const BitCharS = "0100110101101011010110010";
  const BitCharT = "1000010000111111000010000";
  const BitCharU = "1111000001000010000111110";
  const BitCharV = "1110000010000010001011100";
  const BitCharW = "1111000001111100000111110";
  const BitCharX = "1000101010001000101010001";
  const BitCharY = "1000001000001110100010000";   
  const BitCharZ = "1000110011101011100110001";
  const BitChara = "0000000110010010011000001";
  const BitCharb = "0000011111001010001000000";
  const BitCharc = "0000000110010010100100000";
  const BitChard = "0000000010001011111100000";
  const BitChare = "0000000110010110010100000";
  const BitCharf = "0000000100111111010000000";
  const BitCharg = "0000000101010110011000000";
  const BitCharh = "0000011111001000001100000";
  const BitChari = "0000000000101110000000000";
  const BitCharj = "0000000001101110000000000";
  const BitChark = "0000011111000100010100000";
  const BitCharl = "0000000000111110000000000";
  const BitCharm = "0011100100000110010000011";
  const BitCharn = "0000000111001000001100000";
  const BitCharo = "0000000010001010001000000";
  const BitCharp = "0000001111010100010000000";
  const BitCharq = "0000000100010100111100000";
  const BitCharr = "0000000111000100010000000";
  const BitChars = "0000001001101011001000000";
  const BitChart = "0000000100011110010100000";
  const BitCharu = "0000000110000010011000001";
  const BitCharv = "0000000110000010011000000";
  const BitCharw = "0011000001001100000100110";
  const BitCharx = "0000000101000100010100000";
  const BitChary = "0000000101000100010000000";   
  const BitCharz = "0000101011011010100000000";
  const BitChar0 = "0000011111100011111100000";
  const BitChar1 = "0000001001111110000100000";
  const BitChar2 = "0000010111101011110100000";
  const BitChar3 = "0000010101101011111100000";
  const BitChar4 = "0000011100001001111100000";
  const BitChar5 = "0000011101101011011100000";
  const BitChar6 = "0000011111101011011100000";
  const BitChar7 = "0000011000100001111100000";
  const BitChar8 = "0000011111101011111100000";
  const BitChar9 = "0000011101101011111100000";  
  const BitComma = "0000000001000100000000000";
  const BitPeriod = "0000000001000000000000000";
  const BitQuestionmark = "0100010000100111010001000";
  const BitExclamationmark  = "0000000000111010000000000";   
  const BitSemicolon = "0000000001010100000000000";
  const BitColon = "0000000000010100000000000";
  const BitParenthesesleft = "0000001110100010000000000";
  const BitParenthesesright = "0000000000100010111000000";
  const BitSquarebracketsleft = "0000011111100010000000000";
  const BitSquarebracketsright = "0000000000100011111100000";
  const BitCurlybracketsleft = "0000000100111111000100000";
  const BitCurlybracketsright = "0000010001111110010000000";
  const BitQuotationmarkssingle = "0000000000110000010000000";
  const BitQuotationmarksdouble = "1100000100110000010000000";
  const BitHyphen = "0000000100001000010000000";
  const BitHeart = "0110010010010011001001100";
  const BitHeartfill = "0110011110011111111001100";  
  const BitArrowup = "0010001000111110100000100";
  const BitArrowdown = "0010000010111110001000100";
  const BitArrowleft = "0010001110101010010000100";
  const BitArrowright = "0010000100101010111000100";
  const BitArrowleftup = "1111011000101001001000001";
  const BitArrowleftdown = "0111100011001010100110000";
  const BitArrowrightup = "0000110010101001100011110";
  const BitArrowrightdown = "1000001001001010001101111";
  const BitArrowupfill = "0000100111111110011100001";
  const BitArrowdownfill = "1000011100111111110010000";
  const BitArrowleftfill = "0010000100011100111011111";
  const BitArrowrightfill = "1111101110011100010000100";  
  const BitNoexist = "0000000000000000000000000";
  
  var BitLed = new Array("","","","","","","","","","","","","","","","","","","","","","","","","");
  var BitMatrixLedcolor = "#ff0000";
  var BitMatrixLedbackcolor = "#000000";
  var BitMatrixLedmarqueeinitial = "",BitMatrixLedmarqueecode = "",BitMatrixLedmarqueecodeonce = "",BitMatrixLedmarqueecolorcode = "",BitMatrixLedmarqueecolorcodeonce = "";  
  var BitMatrixLedmarqueetime = 500;
  var BitMatrixLedmarqueereverse = 1;
  var BitMatrixLedshowstate = 1;
  var BitMatrixLedurl = "";
  var BitMarqueetimeid;
  var BitMarqueeactive;

  function BitMatrixLed_host(input_host_) {
    BitMatrixLedurl = input_host_;
  }

  function BitMatrixLed_color(input_color_) {
    BitMatrixLedcolor = input_color_;
  }
  
  function BitMatrixLed_showstate(input_showstate_) {
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
    window.clearInterval(BitMarqueetimeid);
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
    BitMarqueeactive=1;
    BitMarqueetimeid = window.setInterval("BitMatrixLed_marquee_play()",BitMatrixLedmarqueetime);
  }  
  
  function BitMatrixLed_marquee_once(input_marquee_) {
    input_marquee_=input_marquee_.toString();
    window.clearInterval(BitMarqueetimeid);
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
    BitMarqueeactive=2;
    BitMarqueetimeid = window.setInterval("BitMatrixLed_marquee_once_play()",BitMatrixLedmarqueetime);
  }    
  
  function BitMatrixLed_marquee_times(input_marquee_,input_times_) {
    input_marquee_=input_marquee_.toString();
    window.clearInterval(BitMarqueetimeid);
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
    BitMarqueeactive=2;
    BitMarqueetimeid = window.setInterval("BitMatrixLed_marquee_once_play()",BitMatrixLedmarqueetime);
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
      window.clearInterval(BitMarqueetimeid);
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
      window.clearInterval(BitMarqueetimeid);
      BitMatrixLed_clear();
    }
  }  
  
  function BitMatrixLed_marquee_degree(direction,degree) {
    window.clearInterval(BitMarqueetimeid);
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
    window.clearInterval(BitMarqueetimeid);
    if (input_marquee_.length==175)
    {
      BitMatrixLed_matrix_codetocolor(input_marquee_);
      return;
    }
    else if ((input_marquee_.length%35==0)&&(input_marquee_.length>175))
      BitMatrixLedmarqueecolorcode = input_marquee_;
    BitMatrixLedmarqueeinitial=BitMatrixLedmarqueecolorcode;
    BitMarqueeactive=3;
    BitMarqueetimeid = window.setInterval("BitMatrixLed_marquee_color_play()",BitMatrixLedmarqueetime);
  }  
  
  function BitMatrixLed_marquee_color_once(input_marquee_) {
    input_marquee_=input_marquee_.toString();
    BitMatrixLedmarqueeinitial=input_marquee_;
    window.clearInterval(BitMarqueetimeid);
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
    BitMarqueeactive=4;
    BitMarqueetimeid = window.setInterval("BitMatrixLed_marquee_color_once_play()",BitMatrixLedmarqueetime);
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
      window.clearInterval(BitMarqueetimeid);
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
      window.clearInterval(BitMarqueetimeid);
      BitMatrixLed_clear();
    }
  } 
  
  function BitMatrixLed_marquee_color_degree(direction,degree) {
    window.clearInterval(BitMarqueetimeid);
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
    window.clearInterval(BitMarqueetimeid);  
  } 
  
  function BitMatrixLed_marquee_resume() {
    window.clearInterval(BitMarqueetimeid);
    if (BitMarqueeactive==1)
      BitMarqueetimeid = window.setInterval("BitMatrixLed_marquee_play()",BitMatrixLedmarqueetime);
    else if (BitMarqueeactive==2)
      BitMarqueetimeid = window.setInterval("BitMatrixLed_marquee_once_play()",BitMatrixLedmarqueetime);
    else if (BitMarqueeactive==3)
      BitMarqueetimeid= window.setInterval("BitMatrixLed_marquee_color_play()",BitMatrixLedmarqueetime);
    else if (BitMarqueeactive==4)
      BitMarqueetimeid = window.setInterval("BitMatrixLed_marquee_color_once_play()",BitMatrixLedmarqueetime);
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
      BitLed[i]=BitMatrixLedbackcolor;
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_on(input_x_,input_y_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        BitLed[i]=BitMatrixLedcolor;
      else
      {
        if (BitLed[i]=="")
          BitLed[i]=BitMatrixLedbackcolor;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_color_on(input_x_,input_y_,input_color_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        BitLed[i]=input_color_;
      else
      {
        if (BitLed[i]=="")
          BitLed[i]=BitMatrixLedbackcolor;
      }
    }
    BitMatrixLed_show();
  }  
  
  function BitMatrixLed_off(input_x_,input_y_) {
    for (var i=0;i<25;i++)
    {
      if (i==(input_x_*5+input_y_))
        BitLed[i]=BitMatrixLedbackcolor;
      else
      {
        if (BitLed[i]=="")
          BitLed[i]=BitMatrixLedbackcolor;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_reverse(input_x_,input_y_) {
    if ((BitLed[input_x_*5+input_y_]=="")||(BitLed[input_x_*5+input_y_]==BitMatrixLedbackcolor))
      BitLed[input_x_*5+input_y_]=BitMatrixLedcolor;
    else
      BitLed[input_x_*5+input_y_]=BitMatrixLedbackcolor;
    BitMatrixLed_show();
  }

  function BitMatrixLed_state(input_x_,input_y_) {
    if ((BitLed[input_x_*5+input_y_]=="")||(BitLed[input_x_*5+input_y_]==BitMatrixLedbackcolor))
      return 0;
    else
      return 1;
  }
  
  function BitMatrixLed_matrix(input_value_) {
    input_value_=input_value_.toString();
    for (var i=0;i<25;i++)
    {
      if (input_value_.substr(i,1)=="1")
        BitLed[i]=BitMatrixLedcolor;
      else
        BitLed[i]=BitMatrixLedbackcolor;
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_matrix_codetocolor(code) {
    for (var i=0;i<25;i++)
      BitLed[i]=code.substr(i*7,7);
    
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_matrix_color(color) {
    for (var i=0;i<25;i++)
      BitLed[i]=color[i];
    
    BitMatrixLed_show();
  }  
  
  function BitMatrixLed_conversion(input_char_) {
    if (input_char_=="A")           return BitCharA;
    else if (input_char_=="B")      return BitCharB;  
    else if (input_char_=="C")      return BitCharC; 
    else if (input_char_=="D")      return BitCharD;  
    else if (input_char_=="E")      return BitCharE;   
    else if (input_char_=="F")      return BitCharF;  
    else if (input_char_=="G")      return BitCharG;   
    else if (input_char_=="H")      return BitCharH;  
    else if (input_char_=="I")      return BitCharI;   
    else if (input_char_=="J")      return BitCharJ;  
    else if (input_char_=="K")      return BitCharK;   
    else if (input_char_=="L")      return BitCharL;  
    else if (input_char_=="M")      return BitCharM;  
    else if (input_char_=="N")      return BitCharN;  
    else if (input_char_=="O")      return BitCharO;  
    else if (input_char_=="P")      return BitCharP;  
    else if (input_char_=="Q")      return BitCharQ; 
    else if (input_char_=="R")      return BitCharR;  
    else if (input_char_=="S")      return BitCharS;
    else if (input_char_=="T")      return BitCharT;  
    else if (input_char_=="U")      return BitCharU;  
    else if (input_char_=="V")      return BitCharV;  
    else if (input_char_=="W")      return BitCharW;  
    else if (input_char_=="X")      return BitCharX;  
    else if (input_char_=="Y")      return BitCharY; 
    else if (input_char_=="Z")      return BitCharZ; 
    else if (input_char_=="a")      return BitChara;
    else if (input_char_=="b")      return BitCharb;  
    else if (input_char_=="c")      return BitCharc; 
    else if (input_char_=="d")      return BitChard;  
    else if (input_char_=="e")      return BitChare;   
    else if (input_char_=="f")      return BitCharf;  
    else if (input_char_=="g")      return BitCharg;   
    else if (input_char_=="h")      return BitCharh;  
    else if (input_char_=="i")      return BitChari;   
    else if (input_char_=="j")      return BitCharj;  
    else if (input_char_=="k")      return BitChark;   
    else if (input_char_=="l")      return BitCharl;  
    else if (input_char_=="m")      return BitCharm;  
    else if (input_char_=="n")      return BitCharn;  
    else if (input_char_=="o")      return BitCharo;  
    else if (input_char_=="p")      return BitCharp;  
    else if (input_char_=="q")      return BitCharq; 
    else if (input_char_=="r")      return BitCharr;  
    else if (input_char_=="s")      return BitChars;
    else if (input_char_=="t")      return BitChart;  
    else if (input_char_=="u")      return BitCharu;  
    else if (input_char_=="v")      return BitCharv;  
    else if (input_char_=="w")      return BitCharw;  
    else if (input_char_=="x")      return BitCharx;  
    else if (input_char_=="y")      return BitChary; 
    else if (input_char_=="z")      return BitCharz;     
    else if (input_char_=="0")      return BitChar0; 
    else if (input_char_=="1")      return BitChar1;   
    else if (input_char_=="2")      return BitChar2; 
    else if (input_char_=="3")      return BitChar3;       
    else if (input_char_=="4")      return BitChar4; 
    else if (input_char_=="5")      return BitChar5;       
    else if (input_char_=="6")      return BitChar6; 
    else if (input_char_=="7")      return BitChar7;       
    else if (input_char_=="8")      return BitChar8; 
    else if (input_char_=="9")      return BitChar9;     
    else if (input_char_==",")      return BitComma;
    else if (input_char_==".")      return BitPeriod;  
    else if (input_char_=="?")      return BitQuestionmark;      
    else if (input_char_=="!")      return BitExclamationmark;  
    else if (input_char_==";")      return BitSemicolon;  
    else if (input_char_==":")      return BitColon;  
    else if (input_char_=="(")      return BitParenthesesleft; 
    else if (input_char_==")")      return BitParenthesesright;  
    else if (input_char_=="[")      return BitSquarebracketsleft;
    else if (input_char_=="]")      return BitSquarebracketsright;  
    else if (input_char_=="{")      return BitCurlybracketsleft;      
    else if (input_char_=="}")      return BitCurlybracketsright; 
    else if (input_char_=="'")      return BitQuotationmarkssingle;     
    else if (input_char_=="\"")     return BitQuotationmarksdouble;   
    else if (input_char_=="♡")      return BitHeart;
    else if (input_char_=="♥")      return BitHeartfill;    
    else if (input_char_=="↑")      return BitArrowup;
    else if (input_char_=="↓")      return BitArrowdown;
    else if (input_char_=="←")      return BitArrowleft;
    else if (input_char_=="→")      return BitArrowright;   
    else if (input_char_=="↖")      return BitArrowleftup;
    else if (input_char_=="↙")      return BitArrowleftdown;
    else if (input_char_=="↗")      return BitArrowrightup;
    else if (input_char_=="↘")      return BitArrowrightdown;  
    else if (input_char_=="▲")      return BitArrowupfill;
    else if (input_char_=="▼")      return BitArrowdownfill;
    else if (input_char_=="◄")      return BitArrowleftfill;
    else if (input_char_=="►")      return BitArrowrightfill;    
    else      return BitNoexist;
  }
  
  function BitMatrixLed_linechart(value1,value2,value3,value4,value5){
    var input_value=[value1,value2,value3,value4,value5];
    var k=0;
    for (var i=0;i<=4;i++)
    {    
      for (var j=0;j<=4;j++)
      {
        if (j==(5-input_value[i]))
          BitLed[k]=BitMatrixLedcolor;
        else
          BitLed[k]=BitMatrixLedbackcolor;
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
          BitLed[k]=BitMatrixLedcolor;
        else
          BitLed[k]=BitMatrixLedbackcolor;
        k++;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_clockwise(){
    var Tmp = new Array(25);
    var n;
    for (n=0;n<25;n++)
    {
      Tmp[n]=BitLed[n];
    }
    n=0;
    for (var i=4;i>=0;i--)
    {    
      for (var j=0;j<=4;j++)
      {
        BitLed[n]=Tmp[i+5*j];
        n++;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_counterclockwise(){
    var Tmp = new Array(25);
    var n;
    for (n=0;n<25;n++)
    {
      Tmp[n]=BitLed[n];
    }
    n=0;
    for (var i=0;i<=4;i++)
    {    
      for (var j=4;j>=0;j--)
      {
        BitLed[n]=Tmp[i+5*j];
        n++;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_verticalflip(){
    var Tmp = new Array(25);
    var n;
    for (n=0;n<25;n++)
    {
      Tmp[n]=BitLed[n];
    }
    n=0;
    for (var i=0;i<=4;i++)
    {    
      for (var j=4;j>=0;j--)
      {
        BitLed[n]=Tmp[j+5*i];
        n++;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_horizontalflip(){
    var Tmp = new Array(25);
    var n;
    for (n=0;n<25;n++)
    {
      Tmp[n]=BitLed[n];
    }
    n=0;
    for (var i=4;i>=0;i--)
    {    
      for (var j=0;j<=4;j++)
      {
        BitLed[n]=Tmp[j+i*5];
        n++;
      }
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_invert(){
    for (var i=0;i<25;i++)
    {
      if ((BitLed[i]=="")||(BitLed[i]==BitMatrixLedbackcolor))
        BitLed[i]=BitMatrixLedcolor;
      else
        BitLed[i]=BitMatrixLedbackcolor;
    }
    BitMatrixLed_show();
  }
  
  function BitMatrixLed_getcolor(input_x_,input_y_) {
    return BitLed[input_x_*5+input_y_];
  } 
  
  function BitMatrixLed_backcolor(input_color_) {
    BitMatrixLedbackcolor=input_color_;
  }  
 
  function BitMatrixLed_show() {
    if (BitMatrixLedshowstate==1)
      var ledcolor = BitLed[20].replace(/\#/ig, "")+ BitLed[21].replace(/\#/ig, "")+ BitLed[22].replace(/\#/ig, "")+ BitLed[23].replace(/\#/ig, "")+ BitLed[24].replace(/\#/ig, "")
                  + BitLed[15].replace(/\#/ig, "")+ BitLed[16].replace(/\#/ig, "")+ BitLed[17].replace(/\#/ig, "")+ BitLed[18].replace(/\#/ig, "")+ BitLed[19].replace(/\#/ig, "")
                  + BitLed[10].replace(/\#/ig, "")+ BitLed[11].replace(/\#/ig, "")+ BitLed[12].replace(/\#/ig, "")+ BitLed[13].replace(/\#/ig, "")+ BitLed[14].replace(/\#/ig, "")
                  + BitLed[5].replace(/\#/ig, "")+ BitLed[6].replace(/\#/ig, "")+ BitLed[7].replace(/\#/ig, "")+ BitLed[8].replace(/\#/ig, "")+ BitLed[9].replace(/\#/ig, "")
                  + BitLed[0].replace(/\#/ig, "")+ BitLed[1].replace(/\#/ig, "")+ BitLed[2].replace(/\#/ig, "")+ BitLed[3].replace(/\#/ig, "")+ BitLed[4].replace(/\#/ig, "");
    else
      var ledcolor = BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")
                  + BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")
                  + BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")
                  + BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")
                  + BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "")+BitMatrixLedbackcolor.replace(/\#/ig, "");           
 
    if (!document.getElementById("BitIframe")) {	
      var ifrm = document.createElement("iframe");	
      ifrm.id="BitIframe";	
      ifrm.style.width = "0px";	
      ifrm.style.height = "0px";	
      ifrm.style.poition = "absolute";	
      ifrm.style.display = "none";	
      document.body.appendChild(ifrm);
    }
    document.getElementById("BitIframe").src = BitMatrixLedurl+command;
  }

var BitMatrixLed_Response=[];
var BitMatrixLed_getstate = false;

function BitMatrixLed_sendCommand(cmd,p1,p2,p3,p4,p5,p6,p7,p8,p9) {
  BitMatrixLed_Response=[];
  var data = $.ajax({
      "type": "POST",
      "dataType": "json",
      "url": BitMatrixLedurl+"?"+cmd+"="+p1+";"+p2+";"+p3+";"+p4+";"+p5+";"+p6+";"+p7+";"+p8+";"+p9,
      success: function(json)
      {
        json = eval(json);
        //console.log(json);
        BitMatrixLed_getstate = true;
        for (var i=0;i<json.length;i++) {
          BitMatrixLed_Response.push(json[i]["data"]+"");
        }
        BitMatrixLed_getstate = false;
      },
      error: function(jqXHR, textStatus, errorThrown)
      {
        //console.log(errorThrown);
      }
   });
}

function BitMatrixLed_getResponse() {
 if (BitMatrixLed_getstate == false) {
   var res = BitMatrixLed_Response;
   BitMatrixLed_Response=[];
   return res;
  }
  else
    return [];
}

function BitMatrixLed_clearData() {
 BitMatrixLed_Response=[];
}
