(() => {
  const header = document.querySelector('.site-header');
  const button = document.querySelector('.hamburger');
  const nav    = document.getElementById('site-menu');

  if (!header || !button || !nav) return;

  const open = () => {
    header.classList.add('is-open');
    document.body.classList.add('scroll-lock');
    button.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    header.classList.remove('is-open');
    document.body.classList.remove('scroll-lock');
    button.setAttribute('aria-expanded', 'false');
  };
  const toggle = () => header.classList.contains('is-open') ? close() : open();

  button.addEventListener('click', toggle);

  // メニュー内リンクをクリックしたら閉じる
  nav.addEventListener('click', e => {
    if (e.target.closest('a')) close();
  });

  // Escで閉じる
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });

  // 画面が大きくなったら状態リセット
  const bp = 768;
  window.addEventListener('resize', () => {
    if (window.innerWidth > bp) close();
  });
})();
