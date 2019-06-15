// Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

  function knn_classifier_open() {
    if (document.getElementById("train"))
    {
      document.getElementById("train").innerHTML = "";
      document.getElementById("probability").innerHTML = "";
    }
    else
    {
      var div = document.createElement('div');
      div.id = "train";
      div.style.position = 'absolute';
      div.style.display = 'none';
      document.body.appendChild(div);
      
      var div1 = document.createElement('div');
      div1.id = "probability";
      div1.style.position = 'absolute';    
      div1.style.display = 'none';
      document.body.appendChild(div1);      
    }
  }
  
  function knn_classifier_proportion(input_property){
    if (input_property=="train")
      return Number(document.getElementById("train").innerHTML);
    else if (input_property=="probability")
      return Number(document.getElementById("probability").innerHTML);
  }