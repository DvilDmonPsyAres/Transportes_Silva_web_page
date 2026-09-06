window.SiteComponents = (() => {
  const esc = (value = '') => String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' }[char]));
  const image = (src, alt, className = '') => `<img class="${className}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="this.style.display='none';this.nextElementSibling.hidden=false"> <span class="media-fallback" hidden aria-hidden="true">Imagen de reemplazo</span>`;
  const icon = (label) => `<span aria-hidden="true">${label}</span>`;
  return { esc, image, icon };
})();
