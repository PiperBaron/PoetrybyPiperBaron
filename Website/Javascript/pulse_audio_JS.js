function aud_play_pause() {
  var myAudio = document.getElementById("audio");
  if (myAudio.paused) {
    myAudio.play();
    myAudio.loop = true;
  } else {
    myAudio.pause();
  }
}