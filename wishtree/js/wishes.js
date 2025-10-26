const wishes = [
  { text: "Pi Cạp Cạp", video: "https://github.com/tranducnha068/suri_2/releases/download/media/pi.mp4", top: "27%", left: "32%" },
  { text: "Denjin", video: "https://github.com/tranducnha068/suri_2/releases/download/media/Denjin.mp4", top: "32%", left: "48%" },
  { text: "Tak", video: "https://github.com/tranducnha068/suri_2/releases/download/media/tak.mp4", top: "40%", left: "17%" },
  { text: "Ochirol iz here :3", video: "vhttps://github.com/tranducnha068/suri_2/releases/download/media/Ochirol.mp4", top: "36%", left: "60%" },
  { text: "Usagi Kuro", video: "https://github.com/tranducnha068/suri_2/releases/download/media/usagikuro.mp4", top: "50%", left: "35%" },
  { text: "Huy Bels", video: "https://github.com/tranducnha068/suri_2/releases/download/media/huybels.mp4", top: "50%", left: "20%" },
  { text: "NSND HuuDu", video: "https://github.com/tranducnha068/suri_2/releases/download/media/nsndhuudu.mp4", top: "42%", left: "40%" },
  { text: "Nochigo gâu gâu", video: "videos/travel.mp4", top: "39%", left: "69%" }
];

let clickedCount = 0;

function createWishTags() {
  const container = document.getElementById('main-content');

  wishes.forEach((wish) => {
    const img = document.createElement('img');
    img.src = 'img/the.png';
    img.className = 'wish-image';
    img.style.position = 'absolute';
    img.style.top = wish.top;
    img.style.left = wish.left;
    img.clicked = false;

    img.addEventListener('click', () => {
      document.getElementById('wish-text').innerText = wish.text;
      const videoEl = document.getElementById('wish-video');
      const bgMusic = document.getElementById('bg-music');

      if (wish.video) {
        videoEl.src = wish.video;
        videoEl.style.display = 'block';
        bgMusic.pause();
      } else {
        videoEl.style.display = 'none';
      }

      document.getElementById('wish-popup').style.display = 'block';

      if (!img.clicked) {
        img.clicked = true;
        clickedCount++;

        if (clickedCount === wishes.length) {
          // Hiện slime và popup chúc mừng
          document.getElementById('slime-container').style.display = 'flex';
          document.getElementById('final-popup').style.display = 'flex';

          // Gán sự kiện cho slime3 sau khi nó đã xuất hiện
          const slime3 = document.getElementById('slime3');
          if (slime3) {
            slime3.addEventListener('click', () => {
              const videoEl = document.getElementById('wish-video');
              const bgMusic = document.getElementById('bg-music');

              document.getElementById('wish-text').innerText = "🎁 Món quà cuối cùng dành cho Công Chúa Suri!";
              videoEl.src = 'https://github.com/tranducnha068/suri_2/releases/download/media/anhdaden.mp4';
              videoEl.style.display = 'block';
              bgMusic.pause();

              document.getElementById('wish-popup').style.display = 'block';
            });
          }
        }
      }
    });

    container.appendChild(img);
  });

  // Gán sự kiện đóng popup cuối cùng
  const closeFinalBtn = document.getElementById('close-final');
  if (closeFinalBtn) {
    closeFinalBtn.addEventListener('click', () => {
      document.getElementById('final-popup').style.display = 'none';
    });
  }
const slime2 = document.getElementById('slime2');
if (slime2) {
  slime2.addEventListener('click', () => {
    document.getElementById('team-popup').style.display = 'flex';
  });
}

const closeTeamBtn = document.getElementById('close-team');
if (closeTeamBtn) {
  closeTeamBtn.addEventListener('click', () => {
    document.getElementById('team-popup').style.display = 'none';
  });
}
const slime1 = document.getElementById('slime1');
if (slime1) {
  slime1.addEventListener('click', () => {
    const videoEl = document.getElementById('wish-video');
    const bgMusic = document.getElementById('bg-music');

    document.getElementById('wish-text').innerText = "[FMV-Suri Mukeki's Fan Arts] Bad Apple !!!";
    videoEl.src = 'https://github.com/tranducnha068/suri_2/releases/download/media/fmv.mp4'; 
    videoEl.style.display = 'block';
    bgMusic.pause();

    document.getElementById('wish-popup').style.display = 'block';
  });
}


}
