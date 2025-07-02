const contactBtn = document.querySelector('.contact-btn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

contactBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Optional: close popup if clicked outside of it
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
