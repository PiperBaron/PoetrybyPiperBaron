function videoToggle() {
  var video = document.getElementById("bg_video");
  var btn = document.getElementById("video_button");

  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}