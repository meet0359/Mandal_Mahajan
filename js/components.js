/* Shri Mandal Mahajan Panjrapole – Shared Components */

/* -------------------------------------------------------------------------
   Inline SVG icon sprite. Injected once at the top of <body>; pages and the
   components below reference icons with:  <svg class="icon"><use href="#mm-NAME"></use></svg>
   Line icons inherit the surrounding text colour via currentColor.
---------------------------------------------------------------------------- */
const ICON_PATHS = {
  cow: '<path d="M4 4.5c1.9 0 2.9 1.3 3.2 2.9"/><path d="M20 4.5c-1.9 0-2.9 1.3-3.2 2.9"/><path d="M6.6 7.4C4.7 7.1 3 8.2 3 10.1c0 1.6 1.2 2.7 2.8 2.8"/><path d="M17.4 7.4c1.9-.3 3.6.8 3.6 2.7 0 1.6-1.2 2.7-2.8 2.8"/><path d="M6 7.5h12V11a6 6 0 0 1-12 0z"/><circle cx="9.4" cy="10.4" r=".6" fill="currentColor" stroke="none"/><circle cx="14.6" cy="10.4" r=".6" fill="currentColor" stroke="none"/><path d="M9.2 14.4c.9.7 1.9.8 2.8.8s1.9-.1 2.8-.8"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.49 4.04 3 5.5l7 7Z"/>',
  handHeart: '<path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6"/><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>',
  sprout: '<path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  microscope: '<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>',
  cross: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  award: '<path d="m15.4 12.9 1.5 8.5a.5.5 0 0 1-.8.5l-3.6-2.7a1 1 0 0 0-1.2 0l-3.6 2.7a.5.5 0 0 1-.8-.5l1.5-8.5"/><circle cx="12" cy="8" r="6"/>',
  certificate: '<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/>',
  cap: '<path d="M21.4 10.9a1 1 0 0 0 0-1.8L12.8 5.2a2 2 0 0 0-1.6 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  video: '<path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2"/>',
  barChart: '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M16 2v4"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  recycle: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  syringe: '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  alert: '<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  megaphone: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
  gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/>',
  arrowUp: '<line x1="12" x2="12" y1="19" y2="5"/><polyline points="5 12 12 5 19 12"/>',
  arrowRight: '<line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/><line x1="17.5" x2="17.5" y1="6.5" y2="6.5"/>',
  youtube: '<path d="M2.5 17a24.1 24.1 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>',
  whatsapp: '<path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.4-2-1-.8.8a4 4 0 0 1-2-2l.8-.8-1-2z"/>',
  scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
  home: '<path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/><path d="M9 21v-6h6v6"/>',
  cowLogo: '<path d="M5 9C2.8 7 2.2 4 3.5 2.5 4.8 3.8 5.5 6 5.6 8.4"/><path d="M19 9c2.2-2 2.8-5 1.5-6.5C19.2 3.8 18.5 6 18.4 8.4"/><path d="M5.6 8.8C4 8.2 2.5 9 2.3 10.6c1.2.5 2.5.4 3.5-.3"/><path d="M18.4 8.8c1.6-.6 3.1.2 3.3 1.8-1.2.5-2.5.4-3.5-.3"/><path d="M6 8.5h12v3.2a6 6 0 0 1-12 0z"/><circle cx="9.4" cy="10.6" r=".55" fill="currentColor" stroke="none"/><circle cx="14.6" cy="10.6" r=".55" fill="currentColor" stroke="none"/><path d="M9 14.4c.9.7 1.9.8 3 .8s2.1-.1 3-.8"/><path d="M10.8 13.3h2.4"/>',
};

function renderIconSprite() {
  const symbols = Object.entries(ICON_PATHS).map(([name, body]) =>
    `<symbol id="mm-${name}" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</g></symbol>`
  ).join('');
  return `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${symbols}</svg>`;
}

function icon(name, cls) {
  return `<svg class="icon${cls ? ' ' + cls : ''}" aria-hidden="true"><use href="#mm-${name}"></use></svg>`;
}

const NAV_ITEMS = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'animals.html', label: 'Our Animals' },
  { href: 'donation.html', label: 'Donate' },
  { href: 'volunteers.html', label: 'Volunteer' },
  { href: 'monitoring.html', label: 'Care & Health' },
  { href: 'research.html', label: 'Research' },
  { href: 'gallery.html', label: 'Gallery' },
  { href: 'contact.html', label: 'Contact' }
];

function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  return page === '' ? 'index.html' : page;
}

function renderLogo() {
  return `
    <a href="index.html" class="logo" aria-label="Shri Mandal Mahajan Panjrapole — Home">
      <span class="logo-icon" aria-hidden="true"><img src="images/logo.png" alt="" width="48" height="48"></span>
      <span class="logo-text">
        <span class="logo-name">Mandal Mahajan</span>
        <span class="logo-sub">Panjrapole · Gaushala</span>
      </span>
    </a>`;
}

function renderNavbar() {
  const current = getCurrentPage();
  const navLinks = NAV_ITEMS.map(item =>
    `<li><a href="${item.href}" class="nav-link${current === item.href ? ' active' : ''}">${item.label}</a></li>`
  ).join('');

  return `
    <nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">
      <div class="nav-container">
        ${renderLogo()}
        <ul class="nav-menu" id="navMenu">${navLinks}</ul>
        <div class="nav-actions">
          <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">${icon('moon')}</button>
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
            ${renderLogo()}
            <p>A traditional panjrapole caring for abandoned, old, sick and injured cattle in the spirit of jivdaya — reverence for all life. Registered with the Animal Welfare Board of India.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul class="footer-links">${quickLinks}</ul>
          </div>
          <div>
            <h4>Visit Us</h4>
            <ul class="footer-links footer-contact">
              <li>${icon('pin')}<span><strong>Gaushala:</strong> Mandal, Taluka Viramgam,<br>Dist. Ahmedabad, Gujarat 382130</span></li>
              <li>${icon('home')}<span><strong>Office:</strong> 209–210, Nalanda Enclave,<br>Opp. Sudama Resort, Ellisbridge, Ahmedabad 380006</span></li>
              <!-- Email sourced from public directories — please confirm -->
              <li>${icon('phone')}<span><a href="tel:+919875082882" style="color:inherit;">+91 98750 82882</a></span></li>
              <li>${icon('mail')}<span><a href="mailto:mandalmahajanpanjarapole@gmail.com" style="color:inherit;">mandalmahajanpanjarapole@gmail.com</a></span></li>
            </ul>
          </div>
          <div>
            <h4>Stay in Touch</h4>
            <p style="font-size:0.9rem;opacity:0.8;margin-bottom:1rem;">Get occasional updates on rescues, gaushala life and seva opportunities.</p>
            <form class="newsletter-form" id="newsletterForm" aria-label="Newsletter subscription">
              <input type="email" placeholder="Your email" required aria-label="Email address">
              <button type="submit" class="btn btn-primary btn-sm">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Shri Mandal Mahajan Panjrapole. Established in seva of cattle.</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">${icon('facebook')}</a>
            <a href="#" class="social-link" aria-label="Instagram">${icon('instagram')}</a>
            <a href="#" class="social-link" aria-label="YouTube">${icon('youtube')}</a>
            <a href="#" class="social-link" aria-label="WhatsApp">${icon('whatsapp')}</a>
          </div>
        </div>
      </div>
    </footer>`;
}

function renderLoader() {
  return `
    <div class="loader" id="loader" role="status" aria-label="Loading">
      <div class="loader-inner">
        <span class="loader-badge" aria-hidden="true"><img src="images/logo.png" alt="" width="104" height="104"></span>
        <div class="loader-logo">Mandal Mahajan Panjrapole</div>
        <div class="loader-tagline">Gaushala · Mandal, Gujarat</div>
        <div class="loader-spinner" aria-hidden="true"></div>
      </div>
    </div>`;
}

function injectComponents() {
  document.body.insertAdjacentHTML('afterbegin', renderNavbar());
  document.body.insertAdjacentHTML('afterbegin', renderLoader());
  document.body.insertAdjacentHTML('afterbegin', renderIconSprite());
  document.body.insertAdjacentHTML('beforeend', renderFooter());
  document.body.insertAdjacentHTML('beforeend',
    `<button class="scroll-top" id="scrollTop" aria-label="Scroll to top">${icon('arrowUp')}</button>`
  );
  document.dispatchEvent(new CustomEvent('componentsReady'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectComponents);
} else {
  injectComponents();
}
