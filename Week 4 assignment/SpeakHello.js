
(function (window) {
	var SpeakHello = {};

 SpeakHello.speakWord = "Hello";


 SpeakHello.speak = function(name) {
  console.log(SpeakHello.speakWord + " " + name);
}

window.SpeakHello = SpeakHello;
})(window);
