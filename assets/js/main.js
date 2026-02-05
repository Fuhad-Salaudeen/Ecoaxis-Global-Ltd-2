const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  const setExpanded = () => {
    const isOpen = navLinks.classList.contains('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  };

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    setExpanded();
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      setExpanded();
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      navLinks.classList.remove('open');
      setExpanded();
    }
  });

  setExpanded();
}

const contactForm = document.querySelector('#contact-form');
const statusMessage = document.querySelector('#status-message');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const requiredFields = contactForm.querySelectorAll('[required]');
    const hasEmpty = Array.from(requiredFields).some((field) => !field.value.trim());

    if (hasEmpty) {
      event.preventDefault();
      if (statusMessage) {
        statusMessage.textContent = 'Please complete all required fields before submitting.';
      }
      return;
    }

    if (statusMessage) {
      statusMessage.textContent = 'Submitting your inquiry...';
    }
  });
}
