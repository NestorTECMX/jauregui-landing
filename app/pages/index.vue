<template>
  <div class="home">

    <!-- ═══════════════ HERO ═══════════════ -->
 <section class="hero">
      <div class="hero__bg">
        
        <img src="/img/banner/banner1.png" alt="Jauregui Industrial Ferretera" aria-hidden="true" class="hero__bg-img" />
        
        <div class="hero__overlay"></div>
        <div class="hero__grid-lines"></div>
        <div class="hero__diagonal"></div>
      </div>

      <div class="container hero__content">
       <div class="hero__left">
        <!-- Eyebrow -->
        <div class="hero__eyebrow">
          <span class="hero__eyebrow-dot"></span>
          <span>Empresa 100% Mexicana · +10 años de experiencia</span>
        </div>

        <!-- Title -->
        <h1 class="hero__title">
          <span class="hero__title-top">JAUREGUI</span>
          <span class="hero__title-main">INDUSTRIAL</span>
          <span class="hero__title-bottom">Ferretera</span>
        </h1>

        <p class="hero__desc">
          Soluciones de confianza. Distribuidores de material eléctrico, plomería,
          seguridad industrial y automatización. Atendemos a empresas y particulares en el noreste de México.
        </p>    

        <div class="hero__ctas">
          <NuxtLink to="/categorias" class="btn btn-brand btn-lg">
            Ver catálogo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </NuxtLink>
          <a href="https://wa.me/528997987131" target="_blank" rel="noopener" class="btn btn-wa btn-lg">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            Cotizar ahora
          </a>
        </div>

        <!-- Stats -->
        <div class="hero__stats">
          <div class="hero__stat" v-for="s in stats" :key="s.label">
            <strong>{{ s.value }}</strong>
            <span>{{ s.label }}</span>
          </div>
        </div>
      </div>

      <!--Hero Right-->

  
</div>
      <!-- Scroll indicator -->
      <div class="hero__scroll">
        <div class="hero__scroll-line"></div>
        <span></span>
      </div>
    </section>

    <!-- ═══════════════ CATEGORIES ═══════════════ -->
    <section class="section-gap" style="background: var(--bg-light);">
      <div class="container">
        <div class="reveal section-header">
          <p class="s-label">Nuestras Categorías</p>
          <h2 class="s-title">Todo para tu <span style="color:var(--brand)">proyecto industrial</span></h2>
          <p class="s-subtitle">Haz clic en una categoría para conocer más sobre nuestros productos y solicitar cotización.</p>
        </div>
        <CategoryCarousel class="reveal reveal-delay-2" />
      </div>
    </section>

    <!-- ═══════════════ BRANDS ═══════════════ -->
<section class="section-gap brands-section">
      <div class="container">
        <BrandCarousel class="reveal reveal-delay-2" />
      </div>
    </section>

    <!-- ═══════════════ PERKS ═══════════════ -->
    <section class="section-gap" style="background: var(--bg-light);">
      <div class="container">
        <div class="reveal section-header">
          <p class="s-label">¿Por qué elegirnos?</p>
          <h2 class="s-title">Ventajas que nos <span style="color:var(--brand)">distinguen</span></h2>
        </div>
        <div class="perks-grid">
          <div class="perk-card reveal" v-for="(p, i) in perks" :key="p.title" :class="`reveal-delay-${i+1}`">
            <div class="perk-card__icon" v-html="p.icon"></div>
            <h3 class="perk-card__title">{{ p.title }}</h3>
            <p class="perk-card__desc">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════ CTA BAND ═══════════════ -->
    <section class="cta-band">
      <div class="container cta-band__inner">
        <div class="cta-band__text">
          <h2 class="cta-band__title">¿Listo para cotizar?</h2>
          <p class="cta-band__sub">Escríbenos por WhatsApp y te respondemos en minutos.</p>
        </div>
        <a href="https://wa.me/528997987131?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20algunos%20productos"
          target="_blank" rel="noopener" class="btn btn-brand btn-lg">
          Iniciar cotización →
        </a>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useReveal()

useSeoMeta({
  title: 'Jauregui Ferretera Industrial | Inicio',
  description: 'Distribuidores de material eléctrico, ferretería, seguridad industrial, automatización y más. Río Bravo, Tamaulipas.',
})

const stats = [
  { value: '+10 años', label: 'de experiencia' },
  { value: '8',        label: 'líneas de producto' },
  { value: '100%',     label: 'empresa mexicana' },
  { value: 'Lun–Sáb', label: 'atención directa' },
]

const brands = [
  { name: 'Truper',    img: 'truper.svg'    },
  { name: 'DeWalt',    img: 'dewalt.png'    },
  { name: 'Urrea',     img: 'urrea.png'     },
  { name: 'Craftsman', img: 'craftsman.png' },
  { name: 'Surtek',    img: 'surtek.jpg'    },
  { name: 'Pretul',    img: 'pretul.png'    },
  { name: 'Makita',    img: 'makita.png'    },
]

const perks = [
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: 'Distribuidores autorizados',
    desc: 'Trabajamos directamente con fabricantes líderes internacionales para garantizar autenticidad y garantía de fábrica.'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    title: 'Respuesta inmediata',
    desc: 'Atendemos cotizaciones por WhatsApp con respuesta en minutos. Tu proyecto no puede esperar.'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    title: 'Asesoría personalizada',
    desc: '¿No sabes exactamente qué necesitas? Nuestro equipo te guía para elegir la solución ideal para tu proyecto.'
  },
  {
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></svg>`,
    title: 'Facilidades de pago',
    desc: 'Aceptamos efectivo, transferencia y tarjeta. Disponemos de crédito para clientes frecuentes.'
  },
]
</script>

<style scoped>
/* ── HERO ── */
.hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-bottom: 40px;
}
.hero__bg { position: absolute; inset: 0; z-index: 0; }

.hero__bg-img {
  width: 100%; height: 100%;
  object-fit: cover;
  /* IMPORTANTE: Esto asegura que el "foco" de la imagen se cargue hacia la derecha */
  object-position: right center; 
  /* Le subimos la opacidad para que la imagen luzca más viva */
  opacity: 0.85; 
}

.hero__overlay{
  position:absolute;
  inset:0;
  background:
    linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.45) 40%, rgba(0,0,0,.70) 100%),
    linear-gradient(180deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,.60) 100%);
}

.hero__grid-lines {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 64px 64px;
  /* La malla también se desvanece hacia la derecha para no ensuciar la foto */
  mask-image: linear-gradient(to right, black 0%, black 50%, transparent 100%);
}

.hero__diagonal {
  position: absolute;
  /* Movimos la línea diagonal a la izquierda para enmarcar el bloque de texto */
  bottom: 0; left: 0; 
  width: 50%;
  height: 4px;
  background: linear-gradient(90deg, var(--brand), transparent);
  z-index: 1;
}

.hero__content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 80px;
  align-items: center;
  gap: 60px;
}


/* Eyebrow */
.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(245, 184, 0, 0.08);
  border: 1px solid rgba(245, 184, 0, 0.2);
  color: var(--brand);
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 7px 16px;
  border-radius: 99px;
  margin-bottom: 24px;
  animation: fadeUp 0.8s ease both;
}
.hero__eyebrow-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--brand);
  box-shadow: 0 0 12px var(--brand);
  animation: pulseDot 2s ease infinite;
}

/* Title (Refactorizado para JAUREGUI) */
.hero__title {
  display: flex;
  flex-direction: column;
  gap: 2px;
  animation: fadeUp 0.8s ease 0.1s both;
}
.hero__title-top {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--brand); /* Jauregui en el color de la marca */
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1;
}
.hero__title-main {
  font-size: clamp(3.2rem, 8vw, 6.5rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -2px;
  color: var(--text-primary);
}
.hero__title-bottom {
  font-size: clamp(1.2rem, 3vw, 2rem);
  font-weight: 300;
  color: var(--text-secondary);
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-top: 4px;
}

.hero__desc {
  margin-top: 24px;
  font-size: 17px;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 580px;
  animation: fadeUp 0.8s ease 0.2s both;
}

.hero__ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 36px;
  animation: fadeUp 0.8s ease 0.3s both;
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--bg-border);
  flex-wrap: wrap;
  animation: fadeUp 0.8s ease 0.45s both;
}
.hero__stat { display: flex; flex-direction: column; gap: 3px; }
.hero__stat strong {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.5px;
  line-height: 1;
}
.hero__stat span {
  font-size: 11.5px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}



/* ── Section header ── */
.section-header { margin-bottom: 52px; }

/* ── Perks ── */
.perks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.perk-card {
  background: var(--bg-white);
  border: 1.5px solid #E5E7EF;
  border-radius: var(--r-xl);
  padding: 32px 28px;
  transition: var(--t-base);
}
.perk-card:hover {
  border-color: var(--brand);
  box-shadow: 0 8px 32px rgba(245,184,0,0.1);
  transform: translateY(-3px);
}
.perk-card__icon {
  width: 54px; height: 54px;
  background: rgba(245,184,0,0.08);
  border: 1px solid rgba(245,184,0,0.2);
  border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
  color: var(--brand);
  margin-bottom: 20px;
  transition: var(--t-base);
}
.perk-card:hover .perk-card__icon { background: var(--brand); color: #fff; }
.perk-card__title { font-size: 16px; font-weight: 700; color: var(--text-dark); margin-bottom: 10px; }
.perk-card__desc { font-size: 14px; color: var(--text-dark-muted); line-height: 1.65; }

/* ── CTA Band ── */
.cta-band {
  background: var(--brand);
  padding: 56px 0;
  position: relative;
  overflow: hidden;
}
.cta-band::before {
  content: '';
  position: absolute; inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.cta-band__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.cta-band__title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--black-brand);
  line-height: 1.1;
}
.cta-band__sub { color: rgba(0,0,0,0.55); font-size: 16px; margin-top: 6px; }

/* El botón dentro del band es negro con texto dorado — inversión de marca */
.cta-band .btn-brand {
  background: var(--black-brand);
  color: var(--brand);
  border: 2px solid var(--black-brand);
}
.cta-band .btn-brand:hover {
  background: #1a1d24;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  color: var(--brand);
}

/* Responsive */
@media (max-width: 1024px) {
  .perks-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .hero { min-height: 60vh; }
  .hero__stats { gap: 20px; }
}
@media (max-width: 520px) {
  .perks-grid { grid-template-columns: 1fr; }
  .cta-band__inner { flex-direction: column; text-align: center; }
}
@media (max-width: 900px){

  .hero__content{
    grid-template-columns: 1fr;
    text-align:left;
  }

}
</style>