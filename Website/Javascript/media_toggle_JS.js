window.addEventListener('load', initMedia);

function initMedia() {
    var video = document.getElementById("bg_video");
    var myAudio = document.getElementById("audio");
    var audio_button = document.getElementById("audio_button");
    video.pause();
    audio_button.addEventListener('click', play_pause, false);
}

function play_pause() {
    console.log('Click!');
    var video = document.getElementById("bg_video");
    var myAudio = document.getElementById("audio");
    var audio_button = document.getElementById("audio_button");
    
    if (myAudio.paused) {
        myAudio.play();
        myAudio.loop = true;
    } else {
        myAudio.pause();
    }
    
    if (video.paused) {
        video.play();
        video.loop = true;
    } else {
        video.pause();
    }
}