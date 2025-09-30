(() => {
  const header = document.querySelector('.site-header');
  const button = document.querySelector('.hamburger');
  const nav    = document.getElementById('site-menu');

  if (!header || !button || !nav) return;

  const open = () => {
    header.classList.add('is-open');
    nav.classList.add('is-open'); // ←追加
    document.body.classList.add('scroll-lock');
    button.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    header.classList.remove('is-open');
    nav.classList.remove('is-open'); // ←追加
    document.body.classList.remove('scroll-lock');
    button.setAttribute('aria-expanded', 'false');
  };
  const toggle = () => header.classList.contains('is-open') ? close() : open();

  button.addEventListener('click', toggle);

  nav.addEventListener('click', e => {
    if (e.target.closest('a')) close();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });

  const bp = 768;
  window.addEventListener('resize', () => {
    if (window.innerWidth > bp) close();
  });
})();
