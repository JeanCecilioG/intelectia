// Menu do celular: abre/fecha a navegação e fecha ao escolher um link ou apertar Esc.
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.getElementById('menu');
  if (!toggle || !menu) return;
  var text = toggle.querySelector('.menu-toggle__text');

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    text.textContent = open ? 'Fechar' : 'Menu';
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();
