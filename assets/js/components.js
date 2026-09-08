window.SiteComponents = (() => {
  const esc = (value = "") =>
    String(value).replace(
      /[&<>'"]/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[char],
    );
  const image = (src, alt, className = "") =>
    `<img
    class="${esc(className)}"
    src="${esc(src)}"
    alt="${esc(alt)}"
    loading="eager"
    decoding="async"
  >`;
  const icon = (label) => `<span aria-hidden="true">${label}</span>`;
  return { esc, image, icon };
})();
