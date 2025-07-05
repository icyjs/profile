// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Music toggle
const audio = document.getElementById('background-audio');
const toggleBtn = document.getElementById('toggle-music');
toggleBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    toggleBtn.textContent = '🔇';
  } else {
    audio.pause();
    toggleBtn.textContent = '🎵';
  }
});

// Preloader fade out
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = 0;
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
});

// Profile pic tilt effect
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  const pic = document.querySelector('.profile-pic');
  if (pic) {
    pic.style.transform = `translate(-50%, -50%) rotateY(${x}deg) rotateX(${y}deg)`;
  }
});
// Randomize hearts positions and delays
document.querySelectorAll('.heart').forEach(heart => {
  const left = Math.random() * 100; // percentage
  const delay = Math.random() * 10; // seconds

  heart.style.left = `${left}vw`;
  heart.style.animationDelay = `${delay}s`;
});


// Snow/heart toggle
const snow = document.querySelectorAll('.snowflake, .heart');
document.getElementById('toggle-snow').addEventListener('click', () => {
  snow.forEach(el => {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  });
});

// 💫 Profile Switch Logic (A <--> K)
let currentProfile = 'A'; // Start as your profile
const background = document.getElementById('background');
const profileToggle = document.getElementById('profile-toggle');
const profilePic = document.getElementById('profile-pic');
const yourIcons = document.getElementById('your-icons');
const khushiMessage = document.getElementById('khushi-message');
const profileTitle = document.querySelector('.profile-title');

profileToggle.addEventListener('click', () => {
  if (currentProfile === 'A') {
    // Switch to Khushi
    profilePic.src = 'Screenshot 2025-07-05 005718-modified.png';
    yourIcons.style.display = 'none';
    khushiMessage.style.display = 'block';
    profileToggle.textContent = '💫A';
    profileTitle.textContent = 'Her profile :3';
    background.style.backgroundImage = "url('360_F_240976956_Hk6eFjDAVynRei9dTcndF3DX8LreXo6f.jpg')";
    currentProfile = 'K';
  } else {
    // Switch back to Alif
    profilePic.src = 'Screenshot 2025-07-02 175224-modified.png';
    yourIcons.style.display = 'flex';
    khushiMessage.style.display = 'none';
    profileToggle.textContent = '💫K';
    profileTitle.textContent = 'My profile :3';
    background.style.backgroundImage = "url('images (34).jpg')";
    currentProfile = 'A';
  }
});
