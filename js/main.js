/* Mandal Mahajan – Main JavaScript */

function initApp() {
  initLoader();
  initTheme();
  initNavigation();
  initScrollTop();
  initScrollAnimations();
  initForms();
  initCounters();
}

document.addEventListener('componentsReady', initApp);

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 250);
  });

  setTimeout(() => loader.classList.add('hidden'), 1400);
}

function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('mm-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const setIcon = name => {
    if (toggle) toggle.innerHTML = typeof icon === 'function' ? icon(name) : '';
  };

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    setIcon('sun');
  }

  toggle?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      setIcon('moon');
      localStorage.setItem('mm-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setIcon('sun');
      localStorage.setItem('mm-theme', 'dark');
    }
  });
}

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 20);
  });

  hamburger?.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    navMenu?.classList.toggle('active', isActive);
    hamburger.setAttribute('aria-expanded', String(isActive));
  });

  navMenu?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');
      hamburger?.setAttribute('aria-expanded', 'false');
    });
  });
}

function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

function initForms() {
  document.getElementById('newsletterForm')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Thank you for subscribing to our newsletter!');
    e.target.reset();
  });

  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Message sent successfully! We will get back to you soon.');
    e.target.reset();
  });

  document.getElementById('volunteerForm')?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Volunteer registration submitted! Welcome to the team.');
    e.target.reset();
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animateCounter = el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    const update = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(c => observer.observe(c));
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.setAttribute('role', 'alert');
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#3a2f20',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    zIndex: '10000',
    fontWeight: '600',
    animation: 'fadeInUp 0.3s ease'
  });

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
