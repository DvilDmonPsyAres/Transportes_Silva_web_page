# Portafolio de sitios empresariales estáticos

Primera plantilla comercial: **01 Corporate**. Es un sitio responsive, accesible y sin dependencias, pensado para negocios de servicios. La información comercial se edita en un solo archivo: [`config/site-config.js`](config/site-config.js).

## Vista rápida

Abra [`index.html`](index.html) en un navegador. Para una vista con servidor local (recomendado por algunos navegadores), ejecute `python3 -m http.server 8080` desde la raíz y abra `http://localhost:8080`.

## Personalizar para un cliente

1. Copie esta carpeta completa y nómbrela para el cliente.
2. Abra `config/site-config.js` y cambie primero `business`, `branding`, `hero`, `seo` y `social`.
3. Reemplace las imágenes de `assets/images/` conservando **exactamente** estos nombres: `logo.webp`, `favicon.webp`, `hero.webp`, `about.webp`, `service-01.webp` a `service-04.webp`, `gallery-01.webp` a `gallery-05.webp` y `testimonial-01.webp` a `testimonial-03.webp`.
4. Cambie los colores desde `branding.colors`. No necesita buscar variables CSS para un cambio habitual de identidad.
5. Actualice arreglos como `services`, `benefits`, `gallery`, `testimonials`, `process` y `faq`. Puede añadir o quitar objetos: las secciones se renderizan de forma automática.
6. Revise `seo`: título, descripción, canonical, imagen y palabras clave. Actualice también correo, teléfono, dirección, horarios y enlaces sociales.
7. Pruebe en móvil, revise que WhatsApp incluya el código de país sin `+`, y publique los archivos en cualquier hosting estático.

## Mapa de contenido

| Necesidad | Dónde editar |
| --- | --- |
| Nombre, teléfono, WhatsApp, correo, horario | `business` |
| Logo y colores | `branding` |
| Hero y botones | `hero`, `buttons` |
| Servicios y beneficios | `services`, `benefits` |
| Galería, testimonios, pasos y FAQ | Arreglos con el mismo nombre |
| Llamadas intermedias | `ctas` |
| SEO y schema LocalBusiness | `seo` y `business` |

## Arquitectura

```text
assets/css/       Sistema de diseño, layout, componentes y responsive
assets/js/        Renderizado modular, interacciones, WhatsApp y animaciones
assets/images/    Rutas normalizadas para fotos intercambiables
config/           Configuración del negocio y contenido
templates/        Catálogo de variantes visuales futuras
```

No hay datos de negocio repartidos por el HTML. `config-loader.js` construye las secciones, metadatos, Schema.org y enlaces `tel:` / WhatsApp desde la configuración. Si falta una foto, el componente muestra un fallback visual elegante en lugar de una imagen rota.

## Añadir una nueva plantilla

1. Cree `templates/02-nombre/`.
2. Reutilice `config/site-config.js` y `assets/js/` sin copiar la lógica de contactos, SEO ni componentes.
3. Añada una hoja visual de variante o un HTML compositor que mantenga los mismos identificadores de sección.
4. Mantenga los nombres de imagen normalizados para que la migración de contenido sea inmediata.

## Producción

Use WebP o AVIF comprimido, con hero de aproximadamente 2000 px de ancho y el resto entre 1200–1600 px. Antes de publicar: compruebe enlaces, contraste, contenido legal, canonical y los datos de LocalBusiness. Para optimizar aún más, minifique CSS/JS como parte de su pipeline de despliegue; los archivos fuente se conservan legibles para facilitar la personalización.
# Silva_transportes
# Transportes_Silva_web_page
