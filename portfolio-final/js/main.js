// ══════════════════════════════════════
//  Noah C. Jones — Portfolio JS
//  jonesncharbonnet.com
// ══════════════════════════════════════

// ── Page navigation ──────────────────────────────────────
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) { target.classList.add('active'); window.scrollTo(0, 0); }
  const navMap = { projects:'nav-projects', github:'nav-github', about:'nav-about', contact:'nav-contact' };
  if (navMap[page]) { const el = document.getElementById(navMap[page]); if (el) el.classList.add('active'); }
  if (['sideral','njem','airbnb'].includes(page)) {
    const el = document.getElementById('nav-projects'); if (el) el.classList.add('active');
  }
}

// ── Mobile menu ──────────────────────────────────────────
function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}
document.addEventListener('click', e => {
  const menu = document.getElementById('mobileMenu');
  if (menu && menu.classList.contains('open') && !menu.contains(e.target) && !e.target.closest('.hamburger')) {
    menu.classList.remove('open');
  }
});

// ── Scroll reveal ────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// Re-run reveal when page changes
const origNavigate = navigate;
window.navigate = function(page) {
  origNavigate(page);
  setTimeout(initReveal, 50);
};

initReveal();

// ── Contact form ─────────────────────────────────────────
async function handleContactSubmit(e) {
  e.preventDefault();
  const btn  = e.target.querySelector('.form-submit');
  const data = {
    name:    e.target.querySelector('#c-name').value,
    email:   e.target.querySelector('#c-email').value,
    message: e.target.querySelector('#c-message').value,
  };
  if (!data.name || !data.email || !data.message) {
    btn.textContent = 'Please fill all fields';
    setTimeout(() => btn.textContent = 'Send Message', 3000);
    return;
  }
  btn.textContent = 'Sending…'; btn.disabled = true;
  try {
    const res = await fetch('https://formspree.io/f/mnjlynwv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      btn.textContent = 'Sent ✓'; btn.style.background = '#4ade80';
      e.target.reset();
    } else throw new Error();
  } catch {
    btn.textContent = 'Failed — try again'; btn.style.background = '#f87171';
  } finally {
    btn.disabled = false;
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; }, 4000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) form.addEventListener('submit', handleContactSubmit);
});
