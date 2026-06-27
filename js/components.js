/* Mandal Mahajan – Shared Components */

const NAV_ITEMS = [
  { href: 'index.html', label: 'Home' },
  { href: 'animals.html', label: 'Animals' },
  { href: 'volunteers.html', label: 'Volunteers' },
  { href: 'about.html', label: 'About' },
  { href: 'donation.html', label: 'Donation' },
  { href: 'monitoring.html', label: 'Monitoring' },
  { href: 'research.html', label: 'Research' },
  { href: 'gallery.html', label: 'Gallery' },
  { href: 'contact.html', label: 'Contact' }
];

function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  return page === '' ? 'index.html' : page;
}

function renderNavbar() {
  const current = getCurrentPage();
  const navLinks = NAV_ITEMS.map(item =>
    `<li><a href="${item.href}" class="nav-link${current === item.href ? ' active' : ''}">${item.label}</a></li>`
  ).join('');

  return `
    <nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">
      <div class="nav-container">
        <a href="index.html" class="logo" aria-label="Mandal Mahajan Home">
          <span class="logo-icon" aria-hidden="true">🐄</span>
          <span>Mandal Mahajan</span>
        </a>
        <ul class="nav-menu" id="navMenu">${navLinks}</ul>
        <div class="nav-actions">
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">🌙</button>
          <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>`;
}

function renderFooter() {
  const quickLinks = NAV_ITEMS.map(item =>
    `<li><a href="${item.href}">${item.label}</a></li>`
  ).join('');

  return `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="logo">
              <span class="logo-icon" aria-hidden="true">🐄</span>
              <span>Mandal Mahajan</span>
            </a>
            <p>Dedicated to cattle management, animal welfare, rescue, and research. Compassionate care for every life we protect.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul class="footer-links">${quickLinks}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul class="footer-links">
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><a href="mailto:info@mandalMahajan.org">info@mandalMahajan.org</a></li>
              <li>Village Gaushala Road, Maharashtra</li>
            </ul>
          </div>
          <div>
            <h4>Newsletter</h4>
            <p style="font-size:0.9rem;opacity:0.8;margin-bottom:1rem;">Stay updated on rescues, events, and impact stories.</p>
            <form class="newsletter-form" id="newsletterForm" aria-label="Newsletter subscription">
              <input type="email" placeholder="Your email" required aria-label="Email address">
              <button type="submit" class="btn btn-primary btn-sm">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Mandal Mahajan. All rights reserved.</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">f</a>
            <a href="#" class="social-link" aria-label="Instagram">📷</a>
            <a href="#" class="social-link" aria-label="Twitter">𝕏</a>
            <a href="#" class="social-link" aria-label="YouTube">▶</a>
          </div>
        </div>
      </div>
    </footer>`;
}

function renderLoader() {
  return `
    <div class="loader" id="loader" role="status" aria-label="Loading">
      <div class="loader-logo">Mandal Mahajan</div>
      <div class="loader-spinner" aria-hidden="true"></div>
    </div>`;
}

function injectComponents() {
  document.body.insertAdjacentHTML('afterbegin', renderNavbar());
  document.body.insertAdjacentHTML('afterbegin', renderLoader());
  document.body.insertAdjacentHTML('beforeend', renderFooter());
  document.body.insertAdjacentHTML('beforeend',
    '<button class="scroll-top" id="scrollTop" aria-label="Scroll to top">↑</button>'
  );
  document.dispatchEvent(new CustomEvent('componentsReady'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectComponents);
} else {
  injectComponents();
}
