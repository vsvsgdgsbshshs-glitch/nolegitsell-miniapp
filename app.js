const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  try { tg.setHeaderColor('#ffffff'); tg.setBackgroundColor('#f7f8fc'); } catch (_) {}
}

const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('menuOverlay');

function openMenu(){
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden','false');
  menuBtn.setAttribute('aria-expanded','true');
}
function close(){
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
  menuBtn.setAttribute('aria-expanded','false');
}
menuBtn.addEventListener('click', openMenu);
closeMenu.addEventListener('click', close);
overlay.addEventListener('click', e => { if(e.target === overlay) close(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') close(); });

// VK/Instagram links were not provided in the request. Keep icons visible,
// but do not invent URLs. Add real links here when available.
document.querySelectorAll('.disabled-social').forEach(el => {
  el.addEventListener('click', e => e.preventDefault());
});
