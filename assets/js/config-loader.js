window.SiteConfigLoader = (() => {
  const c = window.siteConfig;
  const $ = (selector) => document.querySelector(selector);
  const C = window.SiteComponents;
  const waLink = (message = "") =>
    `https://wa.me/${c.business.whatsapp}?text=${encodeURIComponent(message || `Hola, quiero solicitar información sobre ${c.business.name}.`)}`;
  const phoneLink = `tel:${c.business.phoneRaw}`;
  const setMeta = (selector, content) => {
    let el = $(selector);
    if (!el) {
      el = document.createElement("meta");
      const [key, value] = selector.includes("property")
        ? ["property", selector.match(/"(.+)"/)[1]]
        : ["name", selector.match(/"(.+)"/)[1]];
      el.setAttribute(key, value);
      document.head.append(el);
    }
    el.content = content;
  };
  const cta = (label, mode = "primary") =>
    mode === "whatsapp"
      ? `<a class="btn btn--${mode === "whatsapp" ? "primary" : mode}" href="${waLink()}" target="_blank" rel="noopener">${C.esc(label)}</a>`
      : `<a class="btn btn--${mode}" href="#contact">${C.esc(label)}</a>`;
  function renderHeader() {
    $("#site-header").innerHTML =
      `<div class="container header-inner"><a class="brand" href="#hero" aria-label="Inicio, ${C.esc(c.business.name)}"><img class="brand-image" src="${C.esc(c.branding.logo)}" alt="" onerror="this.remove()"><span class="brand-mark" aria-hidden="true">S</span><span>${C.esc(c.business.name)}</span></a><nav class="desktop-nav" aria-label="Navegación principal">${c.navigation.map((i) => `<a href="${i.href}">${C.esc(i.label)}</a>`).join("")}<a class="btn btn--dark" href="${waLink()}" target="_blank" rel="noopener">${C.esc(c.buttons.primary)}</a></nav><button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-nav">☰</button><nav class="mobile-nav" id="mobile-nav" aria-label="Navegación móvil">${c.navigation.map((i) => `<a href="${i.href}">${C.esc(i.label)}</a>`).join("")}<a class="btn btn--dark" href="${waLink()}" target="_blank" rel="noopener">${C.esc(c.buttons.primary)}</a></nav></div>`;
  }
  function renderHero() {
    $("#hero").innerHTML =
      `<div class="hero"><div class="hero-media">${C.image(c.hero.image, c.hero.imageAlt, "hero-image")}</div><div class="container hero-content"><p class="eyebrow">${C.esc(c.hero.eyebrow)}</p><h1 class="hero-title">${C.esc(c.hero.title)}</h1><p class="hero-text">${C.esc(c.hero.description)}</p><div class="hero-actions">${cta(c.buttons.primary, "whatsapp")}<a class="btn btn--outline" href="#services">${C.esc(c.buttons.secondary)}</a></div><p class="hero-badge">${C.esc(c.hero.badge)}</p></div></div>`;
  }
  function renderTrust() {
    $("#trust").innerHTML =
      `<div class="container"><div class="trust-grid reveal">${c.trust.map((item) => `<div class="trust-item"><div class="trust-value">${C.esc(item.value)}</div><div class="trust-label">${C.esc(item.label)}</div></div>`).join("")}</div></div>`;
  }
  function renderAbout() {
    const a = c.about;
    $("#about").innerHTML =
      `<div class="container split"><div class="media-frame reveal">${C.image(a.image, a.imageAlt)}</div><div class="reveal"><p class="eyebrow">${C.esc(a.eyebrow)}</p><h2 class="section__title">${C.esc(a.title)}</h2><p class="section__lead">${C.esc(a.text)}</p><ul class="check-list">${a.values.map((x) => `<li>${C.esc(x)}</li>`).join("")}</ul><a class="btn btn--dark" style="margin-top:1.8rem" href="#contact">Conoce nuestro enfoque</a></div></div>`;
  }
  function renderServices() {
    const x = c.ctas.services;
    $("#services").innerHTML =
      `<div class="container"><div class="section__head reveal"><p class="eyebrow">Lo que hacemos</p><h2 class="section__title">El camino hacia un transporte eficiente empieza aquí.</h2><p class="section__lead">Diseñamos trayectos optimizados para resolver la logística de tu personal, sin complicaciones.</p></div><div class="cards">${c.services.map((s) => `<article class="service-card reveal"><span class="service-icon">${C.icon(s.icon)}</span><h3>${C.esc(s.title)}</h3><p>${C.esc(s.description)}</p><a class="text-link" href="${waLink(`Hola, quiero información sobre ${s.title}.`)}" target="_blank" rel="noopener">Consultar servicio →</a></article>`).join("")}</div><aside class="inline-cta reveal"><div><h3>${C.esc(x.title)}</h3><p>${C.esc(x.text)}</p></div><a class="btn btn--primary" href="${waLink()}" target="_blank" rel="noopener">${C.esc(x.button)}</a></aside></div>`;
  }
  function renderBenefits() {
    $("#benefits").innerHTML =
      `<div class="container"><div class="section__head reveal"><p class="eyebrow">Nuestra diferencia</p><h2 class="section__title">Transporte empresarial pensado para mover a tu equipo con seguridad y confianza.</h2></div><div class="benefit-grid">${c.benefits.map((b) => `<article class="benefit reveal"><span class="benefit-number">${C.esc(b.icon)}</span><h3>${C.esc(b.title)}</h3><p>${C.esc(b.text)}</p></article>`).join("")}</div></div>`;
  }
  function renderGallery() {
    $("#gallery").innerHTML =
      `<div class="container"><div class="section__head reveal"><p class="eyebrow">Nuestro trabajo</p><h2 class="section__title">Transporte confiable para tu empresa.</h2><p class="section__lead">Contamos con unidades preparadas para brindar un servicio seguro, puntual y cómodo para el traslado de personal. Atendemos empresas, escuelas, eventos y viajes especiales, con cobertura dentro y fuera del área metropolitana de Monterrey.</p></div><div class="gallery-grid">${c.gallery.map((g, i) => `<button class="gallery-item reveal" data-gallery="${C.esc(g.src)}" data-alt="${C.esc(g.alt)}" aria-label="Ampliar imagen: ${C.esc(g.alt)}">${C.image(g.src, g.alt)}</button>`).join("")}</div></div>`;
  }
  function renderProcess() {
    $("#process").innerHTML =
      `<div class="container"><div class="section__head reveal"><p class="eyebrow">Cómo trabajamos</p><h2 class="section__title">Una solución de transporte diseñada para tu operación.</h2></div><div class="process-grid">${c.process.map((p, i) => `<article class="process-step reveal"><span>${String(i + 1).padStart(2, "0")}</span><h3>${C.esc(p.title)}</h3><p>${C.esc(p.text)}</p></article>`).join("")}</div></div>`;
  }
  function renderTestimonials() {
    $("#testimonials").innerHTML =
      `<div class="container"><div class="section__head reveal"><p class="eyebrow">Historias reales</p><h2 class="section__title">La confianza se gana en cada detalle.</h2></div><div class="testimonial-grid">${c.testimonials.map((t) => `<figure class="testimonial reveal"><div class="stars" aria-label="${t.rating} de 5 estrellas">${"★".repeat(t.rating)}</div><blockquote>“${C.esc(t.quote)}”</blockquote><figcaption><strong>${C.esc(t.name)}</strong>${C.esc(t.role)}</figcaption></figure>`).join("")}</div></div>`;
  }
  function renderFaq() {
    $("#faq").innerHTML =
      `<div class="container split"><div class="reveal"><p class="eyebrow">Preguntas frecuentes</p><h2 class="section__title"></h2><p class="section__lead">Si tu pregunta no está aquí, escríbenos. Será un gusto orientarte.</p><a class="btn btn--dark" style="margin-top:1.5rem" href="${waLink()}" target="_blank" rel="noopener">Hacer una pregunta</a></div><div class="faq-list reveal">${c.faq.map((f, i) => `<article class="faq-item"><button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}">${C.esc(f.question)}</button><div class="faq-answer" id="faq-answer-${i}" role="region"><p>${C.esc(f.answer)}</p></div></article>`).join("")}</div></div>`;
  }
  function renderContact() {
    const x = c.ctas.contact;
    $("#contact").innerHTML =
      `<div class="container"><div class="section__head reveal"><p class="eyebrow">${C.esc(x.eyebrow)}</p><h2 class="section__title">${C.esc(x.title)}</h2><p class="section__lead">${C.esc(x.text)}</p></div><div class="contact-card reveal"><div class="contact-line"><small>Teléfono</small><a href="${phoneLink}">${C.esc(c.business.phone)}</a></div><div class="contact-line"><small>Correo</small><a href="mailto:${C.esc(c.business.email)}">${C.esc(c.business.email)}</a></div><div class="contact-line"><small>Ubicación y horario</small><a href="${C.esc(c.business.mapUrl)}" target="_blank" rel="noopener">${C.esc(c.business.address)}</a><span>${c.business.schedule.map(C.esc).join(" · ")}</span></div><div class="contact-actions"><a class="btn btn--primary" href="${waLink()}" target="_blank" rel="noopener">${C.esc(c.buttons.whatsapp)}</a><a class="btn btn--ghost" href="${phoneLink}">${C.esc(c.buttons.call)}</a></div></div></div>`;
  }
  function renderFooter() {
    const socials = Object.entries(c.social).filter(([, url]) => url);
    $("#site-footer").innerHTML =
      `<div class="container"><div class="footer-grid"><div><a class="brand" href="#hero"><span class="brand-mark">N</span><span>${C.esc(c.business.name)}</span></a><p style="max-width:330px;margin-top:1rem;font-size:.92rem">${C.esc(c.business.description)}</p></div><div><h3 class="footer-title">Navegación</h3><ul class="footer-list">${c.navigation.map((n) => `<li><a href="${n.href}">${C.esc(n.label)}</a></li>`).join("")}</ul></div><div><h3 class="footer-title">Servicios</h3><ul class="footer-list">${c.services
        .slice(0, 4)
        .map((s) => `<li>${C.esc(s.title)}</li>`)
        .join(
          "",
        )}</ul></div><div><h3 class="footer-title">Contacto</h3><ul class="footer-list"><li><a href="${phoneLink}">${C.esc(c.business.phone)}</a></li><li><a href="mailto:${C.esc(c.business.email)}">${C.esc(c.business.email)}</a></li><li> <a href="${waLink()}" target="_blank" rel="noopener">WhatsApp</a></li></ul>${socials.length ? `<div class="socials" style="margin-top:1rem">${socials.map(([name, url]) => `<a href="${C.esc(url)}" target="_blank" rel="noopener">${C.esc(name)}</a>`).join("")}</div>` : ""}</div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${C.esc(c.business.name)}. Todos los derechos reservados.</span><span><a href="#">Aviso de privacidad</a> · <a href="#">Términos</a></span></div></div>`;
  }
  function applySeo() {
    document.title = c.seo.title;
    setMeta('meta[name="description"]', c.seo.description);
    setMeta('meta[name="keywords"]', c.seo.keywords);
    setMeta('meta[property="og:title"]', c.seo.title);
    setMeta('meta[property="og:description"]', c.seo.description);
    setMeta('meta[property="og:image"]', c.seo.image);
    setMeta('meta[property="og:type"]', "website");
    setMeta('meta[name="twitter:card"]', "summary_large_image");
    let canonical = $('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }
    canonical.href = c.seo.canonical;
    document.documentElement.lang = c.seo.locale.slice(0, 2);
    document.documentElement.style.setProperty(
      "--color-primary",
      c.branding.colors.primary,
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      c.branding.colors.secondary,
    );
    document.documentElement.style.setProperty(
      "--color-accent",
      c.branding.colors.accent,
    );
    document.documentElement.style.setProperty(
      "--color-background",
      c.branding.colors.background,
    );
    document.documentElement.style.setProperty(
      "--color-surface",
      c.branding.colors.surface,
    );
    document.documentElement.style.setProperty(
      "--color-text",
      c.branding.colors.text,
    );
    $("#schema-data").textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: c.business.name,
      description: c.business.description,
      telephone: c.business.phone,
      email: c.business.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.business.address,
        addressCountry: "MX",
      },
      url: c.seo.canonical,
      image: c.seo.image,
      openingHours: c.business.schedule,
    });
  }
  function renderAll() {
    applySeo();
    renderHeader();
    renderHero();
    renderTrust();
    renderAbout();
    renderServices();
    renderBenefits();
    renderGallery();
    renderProcess(); /*
    renderTestimonials();
    */
    renderFaq();
    renderContact();
    renderFooter();
    $("#floating-whatsapp").href = waLink();
  }
  return { renderAll, waLink };
})();
