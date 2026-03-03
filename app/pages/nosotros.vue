<template>
  <div class="nosotros">
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="container page-hero__content">
        <p class="s-label" style="color:var(--brand)">Conócenos</p>
        <h1 class="page-hero__title">Quiénes Somos</h1>
        <p class="page-hero__desc">
          Empresa 100% mexicana con más de 10 años de experiencia como aliado industrial del noreste de México.
        </p>
        <nav class="page-hero__breadcrumb">
          <NuxtLink to="/">Inicio</NuxtLink>
          <span>›</span>
          <span>Nosotros</span>
        </nav>
      </div>
    </section>

    <section class="section-gap">
      <div class="container">
        
        <div class="about-main reveal">
          
          <div class="about-main__text">
            <p class="s-label">¿Quiénes somos?</p>
            <h2 class="s-title-light">Jauregui Ferretera <span style="color:var(--brand)">Industrial</span></h2>
            <p class="about-main__body">
              Somos una empresa 100% mexicana, con más de 10 años de experiencia en ventas de material eléctrico,
              ferretería, plomería, seguridad industrial, material para empaque, químicos y limpieza, manejando
              actualmente marcas líderes a nivel internacional.
            </p>
            <p class="about-main__body">
              Nuestro objetivo es satisfacer de una manera pronta y eficiente las necesidades de nuestro cliente,
              por lo que nos esforzamos día con día para brindarles un mejor servicio y calidad.
            </p>
            <div class="about-main__badges">
              <div class="about-badge" v-for="b in aboutBadges" :key="b.label">
                <span class="about-badge__icon" v-html="b.icon"></span>
                <div>
                  <strong>{{ b.value }}</strong>
                  <span>{{ b.label }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="about-main__pillars">
            <div class="section-header" style="margin-bottom: 32px;">
              <p class="s-label" style="color:var(--brand)">Identidad corporativa</p>
              <h2 class="s-title-light">Nuestros pilares</h2>
            </div>
            
            <div class="mvv-vertical-grid">
              <div class="mvv-card mvv-card--side reveal" v-for="(item, i) in mvv" :key="item.title" :class="`reveal-delay-${i+1}`">
                <div class="mvv-card__icon" v-html="item.icon"></div>
                <div class="mvv-card__content">
                  <h3 class="mvv-card__title">{{ item.title }}</h3>
                  <p class="mvv-card__text">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section-gap values-section">
      <div class="container">
        <div class="reveal section-header" style="text-align:center">
          <p class="s-label" style="justify-content:center">Valores</p>
          <h2 class="s-title">Lo que nos <span style="color:var(--brand)">define</span></h2>
          <p class="s-subtitle" style="margin:14px auto 0">
            Estos principios guían cada decisión y cada interacción con nuestros clientes y colaboradores.
          </p>
        </div>
        <div class="values-grid">
          <div class="value-card reveal" v-for="(v, i) in values" :key="v.name"
            :class="`reveal-delay-${(i % 4) + 1}`">
            <div class="value-card__icon" v-html="v.icon"></div>
            <h4 class="value-card__name">{{ v.name }}</h4>
            <p class="value-card__desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-gap quality-section">
      <div class="container">
        <div class="quality-inner reveal">
          <div class="quality-badge">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
          </div>
          <div class="quality-content">
            <p class="s-label">Política de Calidad</p>
            <h2 class="s-title-light" style="font-size:1.9rem; margin-bottom:16px">Nuestro compromiso<br>con la excelencia</h2>
            <p class="quality-text">
              En Jauregui Ferretera Industrial nuestro principal compromiso es la satisfacción total de nuestros
              clientes; es por ello que constantemente invertimos en nuestros procesos a través de innovaciones
              tecnológicas y mediante el liderazgo y desarrollo de nuestros recursos humanos, cumpliendo con
              las disposiciones legales y ofreciendo productos y servicios de calidad constante y eficiente.
            </p>
            <p class="quality-text">
              El Sistema de Gestión de Calidad es nuestro manual y promovemos la mejora continua por medio
              de las siguientes actividades esenciales dentro de nuestro ambiente laboral.
            </p>
            <div class="quality-pills">
              <span v-for="p in qualityPills" :key="p" class="quality-pill">{{ p }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useReveal()

useSeoMeta({
  title: 'Quiénes Somos | Jauregui Ferretera Industrial',
  description: 'Empresa 100% mexicana con más de 10 años en distribución de material eléctrico, ferretería y seguridad industrial en Río Bravo, Tamaulipas.',
})

const aboutBadges = [
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
    value: '+10 años',
    label: 'de experiencia'
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>`,
    value: '100%',
    label: 'empresa mexicana'
  },
  {
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    value: '8 líneas',
    label: 'de producto'
  },
]

const mvv = [
  {
    title: 'Misión',
    text: 'Satisfacer las necesidades de nuestros clientes ofreciendo soluciones integrales, con los mejores productos y procesos, soportados por un excelente clima organizacional, con empleados motivados que hagan confiables nuestras promesas, bajo el concepto ganar-ganar.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  },
  {
    title: 'Visión',
    text: 'Ser una empresa líder en la distribución de los principales fabricantes, nacionales e internacionales fortaleciendo alianzas con nuestros proveedores para garantizar productos de calidad a precios competitivos.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  },
  {
    title: 'Nuestro Objetivo',
    text: 'Trabajar de manera efectiva, con enfoque en precio calidad y servicio, siendo nuestra filosofía de negocios el concepto "ganar-ganar", cuidando con esmero a los clientes y desarrollando una cultura de honestidad, en un marco de respeto al bienestar social.',
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  },
]

const values = [
  { name: 'Responsabilidad', desc: 'Cumplimos nuestros compromisos con seriedad y puntualidad.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
  { name: 'Honestidad',      desc: 'Actuamos con transparencia en cada trato comercial.',        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>` },
  { name: 'Compromiso',      desc: 'Nos involucramos al 100% con las metas de nuestros clientes.',icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="20 6 9 17 4 12"/></svg>` },
  { name: 'Productividad',   desc: 'Ser siempre activos, eficientes y orientados a resultados.',  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>` },
  { name: 'Trabajo en equipo',desc: 'Conscientes de que juntos podemos más y mejor.',              icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
  { name: 'Actitud de servicio',desc:'Amables, proactivos e interesados en servir eficientemente.', icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>` },
  { name: 'Innovación',      desc: 'Buscamos siempre las mejores alternativas de solución.',     icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` },
  { name: 'Lealtad',         desc: 'Medular en nuestra empresa, mantiene firmes nuestros cimientos.',icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>` },
  { name: 'Puntualidad',     desc: 'Respeto permanente por el tiempo de nuestros clientes.',       icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
]

const qualityPills = ['Innovación tecnológica','Desarrollo humano','Liderazgo','Mejora continua','Cumplimiento legal','Calidad constante','Satisfacción total']
</script>

<style scoped>
/* Page hero */
.page-hero {
  position: relative;
  padding: 120px 0 72px;
  overflow: hidden;
}
.page-hero__bg {
  position: absolute; inset: 0;
  background: var(--bg-darkest);
  background-image:
    linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 56px 56px;
}
.page-hero__bg::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--brand) 40%, var(--accent) 60%, transparent);
}
.page-hero__content { position: relative; z-index: 1; }
.page-hero__title {
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 900;
  color: var(--text-primary);
  letter-spacing: -1px;
  margin: 8px 0 16px;
  line-height: 1.05;
}
.page-hero__desc { font-size: 17px; color: var(--text-secondary); max-width: 520px; line-height: 1.7; margin-bottom: 24px; }
.page-hero__breadcrumb { display: flex; gap: 8px; align-items: center; font-size: 13px; color: var(--text-muted); }
.page-hero__breadcrumb a { color: var(--text-muted); text-decoration: none; }
.page-hero__breadcrumb a:hover { color: var(--brand); }

.section-header { margin-bottom: 52px; }

/* About main */
.about-main {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 72px;
  align-items: start;
}
.about-main__body {
  color: var(--text-dark-muted);
  font-size: 16px;
  line-height: 1.8;
  margin-top: 16px;
}
.about-main__badges {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid #DDE0EA;
}
.about-badge {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--bg-light); /* o var(--bg-white) dependiendo de tu paleta */
  border: 1px solid var(--bg-border);
  border-radius: var(--r-md);
  padding: 14px 18px;
}
.about-badge__icon {
  width: 44px; height: 44px;
  background: rgba(245,184,0,0.08);
  border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
  color: var(--brand);
  flex-shrink: 0;
}
.about-badge strong { display: block; font-size: 18px; font-weight: 800; color: var(--text-dark); }
.about-badge span { font-size: 12px; color: var(--text-dark-muted); }

/* MVV Grid (Pilares a la derecha) */
.mvv-vertical-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Rediseño limpio de las tarjetas MVV */
.mvv-card {
  background: #ffffff;
  border: 1px solid var(--bg-border);
  border-radius: var(--r-xl);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.02);
}

.mvv-card--side {
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 28px 32px;
}

/* Efecto Hover (Sombra y línea lateral mágica) */
.mvv-card:hover {
  border-color: var(--brand);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(245,184,0,0.12);
}

.mvv-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 4px; height: 100%;
  background: var(--brand);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
}

.mvv-card:hover::before {
  transform: scaleY(1);
}

.mvv-card__icon {
  width: 56px; height: 56px;
  background: var(--brand-light);
  border: 1px solid rgba(245,184,0,0.2);
  border-radius: var(--r-lg);
  display: flex; align-items: center; justify-content: center;
  color: var(--brand);
  flex-shrink: 0;
}

.mvv-card__content {
  flex: 1;
}

.mvv-card__title {
  font-size: 17px; font-weight: 800;
  color: black;
  text-transform: uppercase; letter-spacing: 1px;
  margin-bottom: 8px;
}

.mvv-card__text {
  color: var(--text-secondary);
  font-size: 14.5px;
  line-height: 1.65;
}

/* Values */
.values-section { background: var(--bg-light); }
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.value-card {
  background: #fff;
  border: 1.5px solid #E0E3EE;
  border-radius: var(--r-lg);
  padding: 26px 24px;
  transition: var(--t-base);
}
.value-card:hover { border-color: var(--brand); transform: translateY(-3px); box-shadow: 0 6px 24px rgba(245,184,0,0.1); }
.value-card__icon {
  width: 46px; height: 46px;
  background: rgba(245,184,0,0.07);
  border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
  color: var(--brand); margin-bottom: 14px;
  transition: var(--t-base);
}
.value-card:hover .value-card__icon { background: var(--brand); color: #fff; }
.value-card__name { font-size: 14px; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; }
.value-card__desc { font-size: 13px; color: var(--text-dark-muted); line-height: 1.6; }

/* Quality */
.quality-section { background: var(--bg-card); }
.quality-inner {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 48px;
  align-items: flex-start;
  background: var(--bg-card-hover);
  border: 1px solid var(--bg-border);
  border-radius: var(--r-2xl);
  padding: 52px;
}
.quality-badge {
  width: 88px; height: 88px;
  border-radius: 50%;
  background: var(--brand-light);
  border: 2px solid rgba(245,184,0,0.3);
  display: flex; align-items: center; justify-content: center;
  color: var(--brand);
  flex-shrink: 0;
}
.quality-text { color: var(--text-secondary); font-size: 15px; line-height: 1.8; margin-bottom: 14px; }
.quality-pills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.quality-pill {
  font-size: 12px; font-weight: 600;
  background: var(--bg-separator);
  border: 1px solid var(--bg-border);
  color: var(--brand);
  padding: 5px 12px;
  border-radius: 99px;
}

/* Responsive */
@media (max-width: 900px) {
  .about-main { grid-template-columns: 1fr; gap: 60px; }
  .values-grid { grid-template-columns: repeat(2, 1fr); }
  .quality-inner { grid-template-columns: 1fr; }
  .mvv-card--side { flex-direction: column; gap: 16px; align-items: center; text-align: center; }
}
@media (max-width: 580px) {
  .values-grid { grid-template-columns: 1fr; }
}
</style>