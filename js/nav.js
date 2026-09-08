// Shared navigation for every page in the site.
// Add a new page by adding one entry here — every page picks it up automatically.

const SITE_NAME = 'Lateral Line Lab';

const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'hair-cell-death-recovery.html', label: 'Hair Cell Death & Recovery' },
  { href: 'mitochondrial-dynamics.html', label: 'Mitochondrial Dynamics' },
  { href: 'mitochondrial-membrane-potential.html', label: 'Membrane Potential' },
  { href: 'mitochondrial-morphology.html', label: 'Morphology' },
];

function renderNav() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const current = window.location.pathname.split('/').pop() || 'index.html';

  const linksHtml = NAV_LINKS.map((link) => {
    const isActive = link.href === current;
    return `<a href="${link.href}" class="nav-link${isActive ? ' active' : ''}">${link.label}</a>`;
  }).join('');

  header.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-brand">${SITE_NAME}</a>
      <nav class="nav-links" aria-label="Site sections">${linksHtml}</nav>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderNav);
