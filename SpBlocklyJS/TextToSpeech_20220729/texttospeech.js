var voices = window.speechSynthesis.getVoices();
if (voices.length==0) {
  var myVoices = setInterval(
      function() {
        var voices = window.speechSynthesis.getVoices();
        if (voices.length>0) clearInterval(myVoices);
      }
  , 1000);
}
