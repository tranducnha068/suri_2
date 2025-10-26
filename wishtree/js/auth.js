document.getElementById('submit-btn').addEventListener('click', function () {
  const password = document.getElementById('password-input').value;
  if (password === '3010') {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('welcome-popup').style.display = 'flex'; // Hiện popup chào mừng

    document.getElementById('unlock-sound').play();
    const bgMusic = document.getElementById('bg-music');
    bgMusic.volume = 0.3;
    bgMusic.play();
  } else {
    alert('Sai mật mã! Vui lòng thử lại.');
  }
});

document.getElementById('close-welcome').addEventListener('click', function () {
  document.getElementById('welcome-popup').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
  document.getElementById('light-effect').style.display = 'block';
  document.body.style.overflow = 'auto';
  createWishTags();
});
