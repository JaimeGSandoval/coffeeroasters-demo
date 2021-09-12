document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('[data-option]')) {
      e.target.classList.add('active');
    }

    if (
      e.target.matches('[data-option-title]') ||
      e.target.matches('[data-option-description]')
    ) {
      e.target.parentElement.classList.add('active');
    }
  });
});
