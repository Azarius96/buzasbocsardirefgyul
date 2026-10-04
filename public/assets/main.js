// Mobil menü
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Fokozatos megjelenés görgetéskor
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -60px 0px' })
  : null;
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

// Képnagyító
const lb = document.createElement('div');
lb.className = 'lightbox';
lb.innerHTML = '<img alt="">';
document.body.appendChild(lb);
lb.addEventListener('click', () => lb.classList.remove('open'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
document.querySelectorAll('.gallery a').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  const img = lb.querySelector('img');
  img.src = a.href;
  img.alt = a.querySelector('img')?.alt || '';
  lb.classList.add('open');
}));

// Évszám a láblécben
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
