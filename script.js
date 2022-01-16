const video = document.getElementById('video');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function toggleVideoStatus() {
  if(video.paused) {
    video.play();
  }
  else {
    video.pause();
  }
}

function updatePlayIcon() {
  if(video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-1x"></i>';
  }
  else {
    play.innerHTML = '<i class="fa fa-pause fa-1x"></i>';
  }
  toggleVideoStatus();
}

function videoStop() {
  video.currentTime = 0;
  video.pause();
}

function updateProgress() {
  progress.value = video.currentTime / video.duration * 100;

  let minutes = Math.floor(video.currentTime / 60);
  if(minutes < 10) {
    minutes = '0' + String(minutes);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if(seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setVideoProgress() {
  video.currentTime = Number(progress.value * video.duration / 100);
}

video.addEventListener('click', toggleVideoStatus);
playButton.addEventListener('click', updatePlayIcon);
stopButton.addEventListener('click', videoStop);

video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', setVideoProgress);


// video.currentTime
// video.duration
// video.paused

// video.pause()
// video.play()
// toggleVideoStatus()