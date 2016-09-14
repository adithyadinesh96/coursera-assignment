
(function (window) {
var SpeakGoodBye = {};

 SpeakGoodBye.speakWord = "Good Bye";


 SpeakGoodBye.speak = function (name) {
  console.log(SpeakGoodBye.speakWord + " " + name);
}
window.SpeakGoodBye = SpeakGoodBye;

})(window);

