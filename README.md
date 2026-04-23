# Henska — Sitio Web

Sitio web de acompañamiento espiritual (Tarot y Radiestesia) con panel CMS integrado.

## Estructura

```
henska/
├── index.html          → Home
├── tarot.html          → Lecturas de Tarot
├── radiestesia.html    → Sesiones de Radiestesia
├── sobre-mi.html       → Sobre mí / Beska
├── sesion.html         → Quiero una sesión (selector interactivo de WA)
├── cms.html            → Panel de edición (CMS)
├── css/
│   └── styles.css      → Estilos globales
├── js/
│   └── main.js         → Lógica compartida + renderizado
└── data/
    └── sessions.js     → Datos de todas las sesiones (fuente única de verdad)
```

## Configuración inicial

1. Abrí `data/sessions.js`
2. Cambiá `whatsapp` por tu número real (código de país + número, sin `+`):
   ```js
   whatsapp: "5491112345678",
   ```
3. Cambiá `instagram` por tu URL de Instagram.

## Editar contenido con el CMS

1. Abrí `cms.html` en el navegador.
2. Editá precios, descripciones, características, testimonios y FAQ desde la interfaz.
3. Hacé clic en **Guardar cambios** — los datos se guardan en `localStorage` y el sitio los usa automáticamente.

> **Nota**: El CMS usa `localStorage` del navegador. Los cambios se aplican en ese mismo navegador. Para hacer los cambios permanentes en producción, editá directamente `data/sessions.js`.

## Deploy en GitHub Pages

1. Subí todo el contenido de esta carpeta a un repositorio en GitHub.
2. En Settings → Pages, seleccioná la rama `main` y carpeta `/` (root).
3. GitHub Pages va a publicar el sitio en `https://tuusuario.github.io/henska/`.

## Tecnologías

- HTML5, CSS3 (custom properties), JavaScript vanilla
- Fuentes: Yeseva One + DM Sans (Google Fonts)
- Sin frameworks ni dependencias externas
- CMS basado en localStorage (no requiere backend)

## Personalización de colores

Todos los colores están en `css/styles.css` como CSS variables:

```css
--green:        #8AB5AE;
--terra:        #DC8C73;
--n900:         #1F1F1D;
```
