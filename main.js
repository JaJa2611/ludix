/* LUDIX Website – Sprache, Download-Links, Animationen. */

// ===== Download: bei einer neuen Version nur hier ändern =====
const DOWNLOAD = {
  version: '0.3.1',
  size: '116 MB',
  // Der Installer liegt als GitHub-Release im Repository JaJa2611/ludix.
  url: 'https://github.com/JaJa2611/ludix/releases/download/v0.3.1/LUDIX-Setup-0.3.1.exe',
};

document.documentElement.classList.add('js');

document.querySelectorAll('[data-download]').forEach((a) => {
  a.href = DOWNLOAD.url;
  a.setAttribute('download', '');
});
document.querySelectorAll('[data-version]').forEach((el) => { el.textContent = 'Version ' + DOWNLOAD.version; });
document.querySelectorAll('[data-size]').forEach((el) => { el.textContent = DOWNLOAD.size; });

// ===== Sprache =====
(function initLanguage() {
  const langs = window.LUDIX_LANGS || [{ code: 'de', name: 'Deutsch' }];
  const strings = window.LUDIX_STRINGS || {};

  // Deutsche Texte aus dem HTML einsammeln, damit man jederzeit zurückwechseln kann.
  const textEls = [...document.querySelectorAll('[data-i18n]')];
  const attrEls = [...document.querySelectorAll('[data-i18n-attr]')];
  const de = {};
  textEls.forEach((el) => { de[el.dataset.i18n] = el.innerHTML; });
  attrEls.forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':');
      de[key] = el.getAttribute(attr);
    });
  });
  strings.de = de;

  const button = document.getElementById('lang-button');
  const current = document.getElementById('lang-current');
  const menu = document.getElementById('lang-menu');

  function apply(code) {
    const dict = strings[code] || {};
    const t = (key) => (dict[key] != null ? dict[key] : de[key]);
    textEls.forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    attrEls.forEach((el) => {
      el.dataset.i18nAttr.split(';').forEach((pair) => {
        const [attr, key] = pair.split(':');
        el.setAttribute(attr, t(key));
      });
    });
    document.documentElement.lang = code;
    if (current) current.textContent = code.toUpperCase();
    if (menu) menu.querySelectorAll('li').forEach((li) => li.setAttribute('aria-selected', String(li.dataset.code === code)));
    try { localStorage.setItem('ludix-lang', code); } catch {}
  }

  function initialLanguage() {
    let saved = null;
    try { saved = localStorage.getItem('ludix-lang'); } catch {}
    if (saved && langs.some((l) => l.code === saved)) return saved;
    const browser = (navigator.languages || [navigator.language || 'de']).map((l) => l.slice(0, 2).toLowerCase());
    const match = browser.find((b) => langs.some((l) => l.code === b));
    return match || (browser[0] === 'de' ? 'de' : 'en');
  }

  if (menu && button) {
    langs.forEach((l) => {
      const li = document.createElement('li');
      li.role = 'option';
      li.tabIndex = 0;
      li.dataset.code = l.code;
      li.innerHTML = `<span>${l.name}</span><small>${l.code.toUpperCase()}</small>`;
      menu.appendChild(li);
    });
    const open = (yes) => { menu.hidden = !yes; button.setAttribute('aria-expanded', String(yes)); };
    button.addEventListener('click', (e) => { e.stopPropagation(); open(menu.hidden); });
    menu.addEventListener('click', (e) => {
      const li = e.target.closest('li');
      if (li) { apply(li.dataset.code); open(false); button.focus(); }
    });
    menu.addEventListener('keydown', (e) => {
      const li = e.target.closest('li');
      if (li && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); li.click(); }
      if (e.key === 'Escape') { open(false); button.focus(); }
    });
    document.addEventListener('click', () => open(false));
  }

  apply(initialLanguage());
})();

// ===== Kopfleiste bekommt beim Scrollen einen Hintergrund =====
const topbar = document.querySelector('.topbar');
const onScroll = () => topbar && topbar.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Einblenden beim Scrollen =====
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
}

// ===== Screenshots vergrößern =====
const lightbox = document.getElementById('lightbox');
if (lightbox && lightbox.showModal) {
  const big = lightbox.querySelector('img');
  document.querySelectorAll('[data-zoom]').forEach((img) => {
    img.closest('.shot').addEventListener('click', () => {
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      lightbox.showModal();
    });
  });
  lightbox.addEventListener('click', () => lightbox.close());
}

// ===== Hintergrund: ruhiges Punkteraster, über das langsam helle Wellen ziehen =====
(function background() {
  const canvas = document.getElementById('bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const GAP = 30;
  let w = 0, h = 0, dpr = 1, cols = 0, rows = 0;
  let mouseX = -9999, mouseY = -9999;
  let last = 0, running = true;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / GAP) + 1;
    rows = Math.ceil(h / GAP) + 1;
    draw(performance.now());
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    const time = reduced.matches ? 0 : t;
    const cx = w / 2, cy = h * 0.35;
    const maxDist = Math.hypot(w, h) * 0.65;
    const offX = (w - (cols - 1) * GAP) / 2;
    for (let i = 0; i < cols; i++) {
      const x = offX + i * GAP;
      for (let j = 0; j < rows; j++) {
        const y = j * GAP;
        // Drei überlagerte, sehr langsame Sinuswellen ergeben ein sanftes Schimmern.
        const wave =
          Math.sin(x * 0.006 + time * 0.00022) +
          Math.sin(y * 0.009 - time * 0.00017) +
          Math.sin((x + y) * 0.004 + time * 0.00013);
        let a = 0.035 + Math.max(0, wave / 3) * 0.16;
        // Zum Rand hin ausblenden, damit der Inhalt im Vordergrund bleibt.
        a *= 1 - Math.min(1, Math.hypot(x - cx, y - cy) / maxDist) * 0.7;
        // Leicht heller in der Nähe der Maus.
        const md = Math.hypot(x - mouseX, y - mouseY);
        if (md < 160) a += (1 - md / 160) * 0.12;
        ctx.fillStyle = `rgba(255,255,255,${a.toFixed(3)})`;
        ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
      }
    }
  }

  function loop(t) {
    if (!running) return;
    if (t - last > 33) { draw(t); last = t; } // etwa 30 Bilder pro Sekunde reichen
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', (e) => { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden && !reduced.matches;
    if (running) requestAnimationFrame(loop);
  });
  reduced.addEventListener?.('change', () => {
    running = !reduced.matches;
    if (running) requestAnimationFrame(loop); else draw(0);
  });

  resize();
  if (!reduced.matches) requestAnimationFrame(loop);
  else running = false;
})();
