document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('[data-option]')) {
      if (
        e.target.nextElementSibling &&
        e.target.nextElementSibling.classList.contains('active')
      ) {
        e.target.nextElementSibling.classList.remove('active');
      }

      if (
        e.target.previousElementSibling &&
        e.target.previousElementSibling.classList.contains('active')
      ) {
        e.target.previousElementSibling.classList.remove('active');
      }

      e.target.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      e.target.matches('[data-option-title]') ||
      e.target.matches('[data-option-description]')
    ) {
      if (
        e.target.parentElement.nextElementSibling &&
        e.target.parentElement.nextElementSibling.classList.contains('active')
      ) {
        e.target.parentElement.nextElementSibling.classList.remove('active');
      }

      if (
        e.target.parentElement.previousElementSibling &&
        e.target.parentElement.previousElementSibling.classList.contains(
          'active'
        )
      ) {
        e.target.parentElement.previousElementSibling.classList.remove(
          'active'
        );
      }

      e.target.parentElement.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('[data-option-first]')) {
      if (
        e.target.nextElementSibling.nextElementSibling.classList.contains(
          'active'
        )
      ) {
        e.target.nextElementSibling.nextElementSibling.classList.remove(
          'active'
        );
      }

      e.target.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('[data-option-last]')) {
      if (
        e.target.previousElementSibling.previousElementSibling.classList.contains(
          'active'
        )
      ) {
        e.target.previousElementSibling.previousElementSibling.classList.remove(
          'active'
        );
      }

      e.target.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      e.target.matches('[data-option-title-first]') ||
      e.target.matches('[data-option-description-first]')
    ) {
      if (
        e.target.parentElement.nextElementSibling.nextElementSibling.classList.contains(
          'active'
        )
      ) {
        e.target.parentElement.nextElementSibling.nextElementSibling.classList.remove(
          'active'
        );
      }
      e.target.parentElement.classList.add('active');
    }

    if (
      e.target.matches('[data-option-title-last]') ||
      e.target.matches('[data-option-description-last]')
    ) {
      if (
        e.target.parentElement.previousElementSibling.previousElementSibling.classList.contains(
          'active'
        )
      ) {
        e.target.parentElement.previousElementSibling.previousElementSibling.classList.remove(
          'active'
        );
      }
      e.target.parentElement.classList.add('active');
    }
  });
});
