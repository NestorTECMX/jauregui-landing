<template>
  <div class="categorias">
<section class="page-hero">
      
      <div class="page-hero__bg">
        <img src="/img/banner/banner1.png" alt="Fondo Jauregui" aria-hidden="true" class="page-hero__bg-img" />
        <div class="page-hero__overlay"></div>
        </div>

      <div class="container page-hero__content">
        <p class="s-label" style="color:var(--brand)">Portafolio</p>
        <h1 class="page-hero__title">Nuestras Categorías</h1>
        <p class="page-hero__desc">
          8 líneas de producto para cubrir todas las necesidades de tu empresa o proyecto industrial.
        </p>
      </div>
    </section>

    <!-- Carousel section -->
    <section class="section-gap" style="background:var(--bg-light)">
      <div class="container">
        <div class="reveal section-header">
          <p class="s-label">Explorar</p>
          <h2 class="s-title">Selecciona una <span style="color:var(--brand)">categoría</span></h2>
          <p class="s-subtitle">Haz clic en cualquier categoría para ver detalles y cotizar directamente por WhatsApp.</p>
        </div>
        <CategoryCarousel class="reveal reveal-delay-1" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useReveal()

useSeoMeta({
  title: 'Categorías | Jauregui Ferretera Industrial',
  description: 'Automatización, rodamientos, electricidad, mangueras industriales, ferretera, seguridad industrial, empaque y plásticos. Distribuidores en Río Bravo, Tamaulipas.',
})

const categories = [
  { id:'automatizacion', name:'Automatización', description:'PLCs, variadores de frecuencia, sensores, HMI, contactores y todo para automatización de procesos industriales.', tags:['PLCs','Variadores','Sensores','HMI'], icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M6 7h.01M9 7h6M6 10h12M6 13h8"/></svg>` },
  { id:'rodamientos',    name:'Rodamientos',    description:'Rodamientos de bolas, cilíndricos, cónicos, chumaceras, cadenas, poleas y elementos de transmisión para maquinaria.', tags:['Rodamientos','Chumaceras','Cadenas','Bandas'], icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>` },
  { id:'electricidad',   name:'Electricidad',   description:'Cable, conduit, centros de carga, interruptores termomagnéticos, contactores y accesorios para instalaciones.', tags:['Cable','Conduit','Interruptores','Luminarias'], icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>` },
  { id:'mangueras',      name:'Mangueras Industriales', description:'Mangueras hidráulicas, neumáticas y sanitarias. Acoples, conectores y accesorios para sistemas de alta presión.', tags:['Hidráulicas','Neumáticas','Acoples','Alta presión'], icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9z"/><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>` },
  { id:'ferretera',      name:'Ferretera',      description:'Herramienta manual y eléctrica, tornillería, soldadura, abrasivos y todos los consumibles ferreteros para obra e industria.', tags:['Herr. manual','Tornillería','Soldadura','Abrasivos'], icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>` },
  { id:'seguridad',      name:'Seguridad Industrial', description:'EPP completo: cascos, guantes dieléctricos, lentes, calzado, arneses y señalización según normas NOM y OSHA.', tags:['Cascos','Guantes','Calzado','Señalización'], icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>` },
  { id:'empaque',        name:'Material de Empaque',  description:'Cinta, stretch film, fleje, etiquetas, bolsas industriales y cajas de cartón para embalaje y logística.', tags:['Stretch film','Fleje','Cinta adhesiva','Bolsas'], icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>` },
  { id:'plasticos',      name:'Plásticos y Metales',  description:'Láminas de nylon, teflón, acrílico, poliuretano y perfiles de aluminio y acero inoxidable para fabricación industrial.', tags:['Nylon','Teflón','Acrílico','Acero inox.'], icon:`<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>` },
]
</script>

<style scoped>
/* 1. Contenedor limpio */
.page-hero { position: relative; padding: 120px 0 72px; overflow: hidden; }
.page-hero__bg { position: absolute; inset: 0; z-index: 0; }

/* 2. Imagen centrada */
.page-hero__bg-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center;
}

/* 3. Overlay con oscurecimiento parejo + tu cuadrícula industrial */
.page-hero__overlay {
  position: absolute; inset: 0;
  background-color: rgba(17, 17, 17, 0.85); 
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 56px 56px;
}

/* 4. La línea de colores de adorno abajo */
.page-hero__bg::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, transparent, var(--brand) 40%, var(--accent) 60%, transparent);
}

/* 5. Textos por encima de todo */
.page-hero__content { position: relative; z-index: 2; }
.page-hero__title { font-size: clamp(2.8rem, 6vw, 5rem); font-weight: 900; color: var(--text-primary); letter-spacing: -1px; margin: 8px 0 16px; line-height: 1.05; }
.page-hero__desc { font-size: 17px; color: var(--text-secondary); max-width: 520px; line-height: 1.7; margin-bottom: 24px; }
.page-hero__breadcrumb { display: flex; gap: 8px; align-items: center; font-size: 13px; color: var(--text-muted); }
.page-hero__breadcrumb a { color: var(--text-muted); text-decoration: none; }
.page-hero__breadcrumb a:hover { color: var(--brand); }

.section-header { margin-bottom: 52px; }


/* Detail grid */
.cat-detail-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.cat-detail-card {
  background: var(--bg-card);
  border: 1px solid var(--bg-border);
  border-radius: var(--r-xl);
  padding: 28px 24px;
  display: flex; flex-direction: column; gap: 14px;
  transition: var(--t-base);
}
.cat-detail-card:hover { border-color: var(--brand); transform: translateY(-4px); box-shadow: var(--shadow-brand); }
.cat-detail-card__header { display: flex; align-items: center; gap: 14px; }
.cat-detail-card__icon {
  width: 48px; height: 48px;
  background: var(--brand-light);
  border: 1px solid rgba(245,184,0,0.2);
  border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
  color: var(--brand); flex-shrink: 0;
  transition: var(--t-base);
}
.cat-detail-card:hover .cat-detail-card__icon { background: var(--brand); color: #fff; }
.cat-detail-card__title { font-size: 15px; font-weight: 700; color: var(--text-primary); line-height: 1.3; }
.cat-detail-card__desc { font-size: 13.5px; color: var(--text-secondary); line-height: 1.65; flex: 1; }
.cat-detail-card__tags { display: flex; flex-wrap: wrap; gap: 6px; }
.cat-detail-card__tags span {
  font-size: 10.5px; font-weight: 600;
  background: var(--bg-separator); border: 1px solid var(--bg-border);
  color: var(--text-secondary); padding: 3px 9px; border-radius: 99px;
}
.cat-detail-card__cta {
  display: inline-flex; align-items: center;
  font-size: 13px; font-weight: 700; color: var(--brand);
  text-decoration: none; margin-top: 4px;
  transition: gap 0.2s ease;
  gap: 4px;
}
.cat-detail-card:hover .cat-detail-card__cta { gap: 8px; }

@media (max-width: 1024px) { .cat-detail-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 720px)  { .cat-detail-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px)  { .cat-detail-grid { grid-template-columns: 1fr; } }
</style>