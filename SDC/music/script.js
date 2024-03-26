document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const songSelect = document.getElementById('songSelect');
  
    playBtn.addEventListener('click', function() {
      audio.play();
    });
  
    pauseBtn.addEventListener('click', function() {
      audio.pause();
    });
  
    songSelect.addEventListener('change', function() {
      const selectedSong = songSelect.value;
      audio.src = selectedSong;
      audio.play();
    });
  });
  