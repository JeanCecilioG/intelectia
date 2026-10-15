// ============================================================
// WHATSAPP — troque só aqui.
// Formato: 55 + DDD + número, só dígitos. Ex.: 5531912345678
// Enquanto estiver vazio, os botões levam para a seção #contato.
// ============================================================
var WHATSAPP_NUMERO = '';
var WHATSAPP_MENSAGEM = 'Olá! Quero meu diagnóstico gratuito';

// Botões de contato ([data-whatsapp]) viram link do WhatsApp com a mensagem pronta,
// e o número aparece formatado onde houver [data-whatsapp-number].
(function () {
  var numero = WHATSAPP_NUMERO.replace(/\D/g, '');
  if (!/^55\d{10,11}$/.test(numero)) {
    console.warn('WhatsApp ainda não configurado: defina WHATSAPP_NUMERO no main.js.');
    return;
  }
  var link = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(WHATSAPP_MENSAGEM);

  document.querySelectorAll('[data-whatsapp]').forEach(function (a) {
    a.href = link;
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // 55 31 91234 5678 -> (31) 91234-5678
  var local = numero.slice(2);
  var formatado = '(' + local.slice(0, 2) + ') ' + local.slice(2, -4) + '-' + local.slice(-4);
  document.querySelectorAll('[data-whatsapp-number]').forEach(function (el) {
    var a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = 'WhatsApp ' + formatado;
    el.replaceWith(a);
  });
})();

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

// Botão flutuante: aparece no celular só quando nenhum outro botão de WhatsApp está à vista.
(function () {
  var flutuante = document.querySelector('.wa-float');
  var menu = document.getElementById('menu');
  if (!flutuante || !('IntersectionObserver' in window)) return;
  var alvos = [document.querySelector('.hero .btn--primary'), document.getElementById('contato'), document.querySelector('footer')].filter(Boolean);
  var visiveis = new Set();

  function atualizar() {
    var menuAberto = menu && menu.classList.contains('is-open');
    flutuante.classList.toggle('is-hidden', visiveis.size > 0 || menuAberto);
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) visiveis.add(e.target); else visiveis.delete(e.target);
    });
    atualizar();
  });
  alvos.forEach(function (alvo) { observador.observe(alvo); });

  if (menu) new MutationObserver(atualizar).observe(menu, { attributes: true, attributeFilter: ['class'] });
})();
