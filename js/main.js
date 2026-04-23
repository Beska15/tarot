// ============================================================
// HENSKA — JS COMPARTIDO
// ============================================================

// ── NAV ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === path) link.classList.add('active');
  });

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// ── WHATSAPP ─────────────────────────────────────────────────
function buildWALink(data, sessionTitle) {
  const num = data.whatsapp;
  const msg = encodeURIComponent(
    `Hola Bes! Me interesa la ${sessionTitle}. ¿Podés contarme más?`
  );
  return `https://wa.me/${num}?text=${msg}`;
}

function buildWALinkGeneral(data, msg) {
  const num = data.whatsapp;
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

// ── WA ICON SVG ───────────────────────────────────────────────
const WA_SVG = `<svg class="wa-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.535 5.858L.057 23.447a.5.5 0 0 0 .638.608l5.757-1.51A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.895 0-3.668-.525-5.176-1.434l-.371-.22-3.818 1.001.997-3.723-.242-.384A9.958 9.958 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
</svg>`;

// ── RENDER CARD ───────────────────────────────────────────────
function renderCard(session, data, stripeClass = '') {
  const priceArs = typeof session.priceArs === 'number'
    ? `$${session.priceArs.toLocaleString('es-AR')} Ars`
    : session.priceArs;
  const priceUsd = session.priceUsd
    ? `<div class="price-usd">— $${session.priceUsd} USD</div>`
    : session.consultarZona
      ? `<div class="price-consult">Consultar zona y horario</div>`
      : '';
  
  const badge = session.badge
    ? `<div class="card-badge ${session.badge === 'Más elegido' ? 'green' : ''}">${session.badge}</div>`
    : '';

  const features = session.features
    .map(f => `<li>${f}</li>`)
    .join('');

  const waLink = buildWALink(data, session.title);
  const btnClass = stripeClass === 'terra' ? 'btn-primary' : stripeClass === 'dark' ? '' : 'btn-wa';

  return `
    <div class="card reveal" data-session-id="${session.id}">
      ${badge}
      <div class="card-stripe ${stripeClass}"></div>
      <div class="card-body">
        <span class="card-icon">${session.icon}</span>
        <div class="card-title">${session.title}</div>
        <div class="card-subtitle">${session.subtitle}</div>
        <div class="card-desc">${session.description}</div>
        <ul class="card-features">${features}</ul>
      </div>
      <div class="card-footer">
        <div class="price-block">
          <div class="price-ars">${priceArs}</div>
          ${priceUsd}
        </div>
        <a href="${waLink}" target="_blank" rel="noopener" 
           class="btn btn-sm ${stripeClass === 'dark' ? 'btn-outline' : 'btn-wa'}">
          ${WA_SVG} Reservar
        </a>
      </div>
    </div>
  `;
}

// ── RENDER TESTIMONIO ─────────────────────────────────────────
function renderTestimonio(t) {
  const initials = t.nombre.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return `
    <div class="testimonio-card reveal">
      <div class="testimonio-text">${t.texto}</div>
      <div class="testimonio-footer">
        <div class="testimonio-avatar">${initials}</div>
        <div>
          <div class="testimonio-nombre">${t.nombre}</div>
          <div class="testimonio-servicio">${t.servicio}</div>
        </div>
      </div>
    </div>
  `;
}

// ── RENDER FAQ ────────────────────────────────────────────────
function renderFaq(faq) {
  return faq.filter(f => f.active).map(f => `
    <div class="faq-item">
      <div class="faq-question">
        <span>${f.question}</span>
        <div class="faq-chevron">
          <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l4 4 4-4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-inner">${f.answer}</div>
      </div>
    </div>
  `).join('');
}

// ── NAV HTML ──────────────────────────────────────────────────
function renderNav() {
  return `
<nav class="nav" role="navigation" aria-label="Navegación principal">
  <div class="container">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" aria-label="Henska — Volver al inicio">
        <div class="nav-logo-mark" aria-hidden="true">✦</div>
        Henska
      </a>
      <div class="nav-links" role="menubar">
        <a href="index.html" class="nav-link" data-page="index.html" role="menuitem">Inicio</a>
        <a href="tarot.html" class="nav-link" data-page="tarot.html" role="menuitem">Lecturas de Tarot</a>
        <a href="radiestesia.html" class="nav-link" data-page="radiestesia.html" role="menuitem">Radiestesia</a>
        <a href="sobre-mi.html" class="nav-link" data-page="sobre-mi.html" role="menuitem">Sobre mí</a>
        <a href="sesion.html" class="nav-link nav-cta" data-page="sesion.html" role="menuitem">Quiero una sesión</a>
      </div>
      <button class="nav-hamburger" id="nav-hamburger" aria-label="Abrir menú" aria-expanded="false" aria-controls="nav-mobile">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="nav-mobile" id="nav-mobile" role="menu" aria-label="Menú móvil">
    <a href="index.html" class="nav-link" data-page="index.html" role="menuitem">Inicio</a>
    <a href="tarot.html" class="nav-link" data-page="tarot.html" role="menuitem">Lecturas de Tarot</a>
    <a href="radiestesia.html" class="nav-link" data-page="radiestesia.html" role="menuitem">Radiestesia</a>
    <a href="sobre-mi.html" class="nav-link" data-page="sobre-mi.html" role="menuitem">Sobre mí</a>
    <a href="sesion.html" class="nav-link nav-cta" data-page="sesion.html" role="menuitem">Quiero una sesión</a>
  </div>
</nav>`;
}

// ── FOOTER HTML ───────────────────────────────────────────────
function renderFooter(data) {
  const waGeneral = buildWALinkGeneral(data, 'Hola Bes! Quiero saber más sobre las sesiones.');
  return `
<footer class="footer" role="contentinfo" aria-label="Pie de página Henska">
  <div class="container">
    <div class="footer-inner">
      <div>
        <div class="footer-brand-name">Henska</div>
        <div class="footer-brand-desc">Tarot y radiestesia para guiarte, desbloquear tu energía y alinear tu camino. Sin clichés. Con claridad.</div>
      </div>
      <div>
        <div class="footer-col-title">Sesiones</div>
        <nav class="footer-links" aria-label="Navegación de sesiones">
          <a href="tarot.html">Lecturas de Tarot</a>
          <a href="radiestesia.html">Sesiones de Radiestesia</a>
          <a href="sesion.html">Quiero una sesión</a>
        </nav>
      </div>
      <div>
        <div class="footer-col-title">Conoceme</div>
        <nav class="footer-links" aria-label="Navegación secundaria">
          <a href="sobre-mi.html">Sobre mí</a>
          <a href="${waGeneral}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="${data.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a>
        </nav>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2025 Henska — Beska. Todos los derechos reservados.</div>
      <div class="footer-social">
        <a href="${waGeneral}" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">${WA_SVG} WhatsApp</a>
        <a href="${data.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Ver Instagram de Henska">
          <svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          Instagram
        </a>
      </div>
    </div>
  </div>
</footer>`;
}
