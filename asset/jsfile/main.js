window.addEventListener('scroll', () => {
  const heroText = document.querySelector('.hero-text');
  const scrollTop = window.scrollY;

  if (scrollTop < 10) {
    heroText.classList.add('show');
  } else {
    heroText.classList.remove('show');
  }
});
