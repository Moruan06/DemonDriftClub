const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeSlider = document.getElementById('volume');

playPauseBtn.addEventListener('click', function (){
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = '⏸'; // pause
    } else {
      audio.pause();
      playPauseBtn.textContent = '▶'; // play
    }
  });

  volumeSlider.addEventListener('input', function () {
    audio.volume = volumeSlider.value;
  });
