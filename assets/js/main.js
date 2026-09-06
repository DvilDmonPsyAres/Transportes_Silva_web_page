document.addEventListener('DOMContentLoaded', () => {
  window.SiteConfigLoader.renderAll();
  window.SiteAnimations.init();
  const header=document.querySelector('#site-header'); const toggle=document.querySelector('.menu-toggle'); const nav=document.querySelector('.mobile-nav');
  const updateHeader=()=>header.classList.toggle('is-scrolled',scrollY>12); updateHeader();addEventListener('scroll',updateHeader,{passive:true});
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',open);toggle.textContent=open?'×':'☰';});
  nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}});
  document.querySelectorAll('.faq-question').forEach(button=>button.addEventListener('click',()=>{const item=button.closest('.faq-item');const open=item.classList.toggle('is-open');button.setAttribute('aria-expanded',open);}));
  const lightbox=document.querySelector('#lightbox'); document.querySelectorAll('[data-gallery]').forEach(item=>item.addEventListener('click',()=>{lightbox.innerHTML=`<button aria-label="Cerrar vista ampliada">×</button><img src="${item.dataset.gallery}" alt="${item.dataset.alt}" onerror="this.outerHTML='<p class=\\'lightbox-fallback\\'>Imagen de galería pendiente de reemplazo</p>'">`;lightbox.classList.add('is-open');lightbox.setAttribute('aria-hidden','false');lightbox.querySelector('button').focus();}));
  const close=()=>{lightbox.classList.remove('is-open');lightbox.setAttribute('aria-hidden','true');};lightbox.addEventListener('click',e=>{if(e.target===lightbox||e.target.tagName==='BUTTON')close();});document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
});
