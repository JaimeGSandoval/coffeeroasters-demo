document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    e.preventDefault();
    const panel = e.target.nextElementSibling;
    if (e.target.matches('[data-arrow]')) {
      panel.classList.toggle('show-option');
      e.target.classList.toggle('toggle-arrow');
    }
  });
});
