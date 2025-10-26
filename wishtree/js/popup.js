document.getElementById('close-popup').addEventListener('click', () => {
  document.getElementById('wish-popup').style.display = 'none';
  const videoEl = document.getElementById('wish-video');
  const bgMusic = document.getElementById('bg-music');

  videoEl.pause();
  videoEl.src = '';
  bgMusic.play();
});