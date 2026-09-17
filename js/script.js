const nav = document.querySelector('.site-nav');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#primary-menu');
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];
const revealItems = [...document.querySelectorAll('.reveal')];
const year = document.querySelector('#year');

function setScrolledNav() {
  nav?.classList.toggle('scrolled', window.scrollY > 24);
}

function closeMenu() {
  menuToggle?.classList.remove('open');
  navMenu?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Open navigation menu');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  const isOpen = navMenu?.classList.toggle('open');
  menuToggle?.classList.toggle('open', isOpen);
  menuToggle?.setAttribute('aria-expanded', String(Boolean(isOpen)));
  menuToggle?.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  document.body.classList.toggle('menu-open', Boolean(isOpen));
}

setScrolledNav();
window.addEventListener('scroll', setScrolledNav, { passive: true });

menuToggle?.addEventListener('click', toggleMenu);
navLinks.forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('resize', () => {
  if (window.innerWidth > 780) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

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
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

if (year) year.textContent = new Date().getFullYear();

// Keep the first viewport animated even when it starts above the observer threshold.
requestAnimationFrame(() => {
  document.querySelectorAll('.hero .reveal').forEach((item) => item.classList.add('visible'));
});
