const body = document.querySelector('body');
const toggleBtn = document.querySelector('.toggle');

// Theme Toggle
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});
