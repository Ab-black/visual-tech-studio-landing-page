const nav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#primary-menu');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]'), document.querySelector('#home')].filter(Boolean);
const revealItems = [...document.querySelectorAll('.reveal')];
const year = document.querySelector('#year');
const interactiveButtons = [...document.querySelectorAll('.btn, .nav-cta')];

function setScrolledNav() {
  nav?.classList.toggle('scrolled', window.scrollY > 24);
}

function setMenuAccessibility(isOpen = false) {
  if (!navMenu) return;
  navMenu.inert = window.innerWidth <= 780 && !isOpen;
}

function closeMenu() {
  menuToggle?.classList.remove('open');
  navMenu?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation menu');
  document.body.classList.remove('menu-open');
  setMenuAccessibility(false);
}

function toggleMenu() {
  const isOpen = navMenu?.classList.toggle('open');
  menuToggle?.classList.toggle('open', isOpen);
  menuToggle?.setAttribute('aria-expanded', String(Boolean(isOpen)));
  menuToggle?.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  document.body.classList.toggle('menu-open', Boolean(isOpen));
  setMenuAccessibility(Boolean(isOpen));
}

setMenuAccessibility(false);
setScrolledNav();
window.addEventListener('scroll', setScrolledNav, { passive: true });

menuToggle?.addEventListener('click', toggleMenu);
navLinks.forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => {
  if (window.innerWidth > 780) closeMenu();
  else setMenuAccessibility(navMenu?.classList.contains('open'));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

if (year) year.textContent = new Date().getFullYear();

interactiveButtons.forEach((button) => {
  button.addEventListener('pointerdown', () => button.classList.add('is-pressed'));
  button.addEventListener('pointerup', () => button.classList.remove('is-pressed'));
  button.addEventListener('pointercancel', () => button.classList.remove('is-pressed'));
  button.addEventListener('pointerleave', () => button.classList.remove('is-pressed'));
});

requestAnimationFrame(() => {
  document.querySelectorAll('.hero .reveal').forEach((item) => item.classList.add('visible'));
});
