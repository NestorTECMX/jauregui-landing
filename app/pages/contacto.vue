<template>
  <div class="contacto">
    <!-- Hero -->
<section class="page-hero">
      
      <div class="page-hero__bg">
        <img src="/img/banner/banner1.png" alt="Fondo Jauregui Contacto" aria-hidden="true" class="page-hero__bg-img" />
        <div class="page-hero__overlay"></div>
      </div>

      <div class="container page-hero__content">
        <p class="s-label" style="color:var(--brand)">Estamos aquí</p>
        <h1 class="page-hero__title">Contacto</h1>
        <p class="page-hero__desc">Visítanos, llámanos o escríbenos. Respondemos rápido.</p>
      </div>
    </section>

    <!-- Main contact section -->
    <section class="section-gap" style="background:var(--bg-light)">
      <div class="container">
        <div class="contact-grid">

          <!-- LEFT: Info + Schedule -->
          <div class="contact-info">

            <!-- Business hours status badge -->
            <div class="contact-status-card" :class="isOpen ? 'contact-status-card--open' : 'contact-status-card--closed'">
              <div class="contact-status-card__dot"></div>
              <div>
                <strong>{{ isOpen ? 'Abierto ahora' : 'Cerrado ahora' }}</strong>
                <span>{{ nextEvent }}</span>
              </div>
            </div>

            <!-- Info items -->
            <div class="contact-info__items">
              <div class="contact-info-item" v-for="item in contactItems" :key="item.label">
                <div class="contact-info-item__icon" v-html="item.icon"></div>
                <div>
                  <p class="contact-info-item__label">{{ item.label }}</p>
                  <div class="contact-info-item__value" v-html="item.value"></div>
                </div>
              </div>
            </div>

            <!-- Horario table -->
            <div class="horario-table">
              <h3 class="horario-table__title">Horario de atención</h3>
              <table>
                <tbody>
                  <tr v-for="row in schedule" :key="row.day" :class="{ 'horario-active': isCurrentDay(row.dayNum) }">
                    <td class="horario-day">{{ row.day }}</td>
                    <td class="horario-hours">{{ row.hours }}</td>
                    <td class="horario-status">
                      <span class="horario-badge" :class="row.hours === 'Cerrado' ? 'horario-badge--closed' : 'horario-badge--open'">
                        {{ row.hours === 'Cerrado' ? 'Cerrado' : 'Abierto' }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- WhatsApp CTA -->
            <a
              href="https://wa.me/528991495634?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20productos"
              target="_blank" rel="noopener"
              class="btn btn-wa btn-lg contact-wa-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              Escribir a WhatsApp
            </a>
          </div>

          <!-- RIGHT: Map -->
          <div class="contact-map-wrap">
            <div class="contact-map-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Ignacio Zaragoza #102, Col. Octavio Silva, Río Bravo, Tamps.
            </div>
            <div class="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.4725395488354!2d-98.12609136145302!3d25.98533373945754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86656d4eda462803%3A0xf12d004f8c24a45!2sZaragoza%20102%2C%20Octavio%20Silva%2C%2088945%20Cdad.%20R%C3%ADo%20Bravo%2C%20Tamps.!5e0!3m2!1ses-419!2smx!4v1772496480317!5m2!1ses-419!2smx"
                width="100%"
                height="100%"
                style="border:0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación Jauregui Ferretera Industrial"
              ></iframe>
            </div>
            <!-- Quick actions -->
            <div class="contact-map-actions">
              <a href="https://maps.google.com/?q=Ignacio+Zaragoza+102+Col+Octavio+Silva+Rio+Bravo+Tamaulipas"
                target="_blank" rel="noopener" class="btn btn-outline-dark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Abrir en Google Maps
              </a>
              <a href="tel:8991495634" class="btn btn-outline-dark">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12"/></svg>
                (899) 149-5634
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA bottom -->
    <section class="section-gap-sm cta-bottom">
      <div class="container cta-bottom__inner">
        <div>
          <h2 class="cta-bottom__title">¿Tienes un proyecto?</h2>
          <p class="cta-bottom__sub">Cuéntanos qué necesitas y te preparamos una cotización sin compromiso.</p>
        </div>
        <a href="https://wa.me/528991495634?text=Hola%2C%20tengo%20un%20proyecto%20y%20me%20gustar%C3%ADa%20cotizar"
          target="_blank" rel="noopener" class="btn btn-brand btn-lg">
          Solicitar cotización →
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { isOpen, nextEvent } = useBusinessHours()

useSeoMeta({
  title: 'Contacto | Jauregui Ferretera Industrial',
  description: 'Visítanos en Ignacio Zaragoza #102, Col. Octavio Silva, Río Bravo, Tamaulipas. Whatsapp: 8991495634. Tel: 8997987131.',
})

function isCurrentDay(dayNum: number): boolean {
  return new Date().getDay() === dayNum
}

const contactItems = [
  {
    label: 'Dirección',
    value: 'Ignacio Zaragoza #102<br>Col. Octavio Silva<br>Río Bravo, Tamaulipas C.P. 88945',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    label: 'Teléfonos',
    value: '<a href="tel:8991495634">(899) 149-5634</a><span class="wa-chip">WhatsApp</span><br><a href="tel:8997987131">(899) 798-7131</a> ',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.06-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  },
  {
    label: 'Correo electrónico',
    value: '<a href="mailto:jauregui_car@hotmail.com">jauregui_car@hotmail.com</a><br><a href="mailto:jauregui.industrial@gmail.com">jauregui.industrial@gmail.com</a>',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  },
]

const schedule = [
  { day: 'Lunes',     hours: '8:00am – 6:00pm', dayNum: 1 },
  { day: 'Martes',    hours: '8:00am – 6:00pm', dayNum: 2 },
  { day: 'Miércoles', hours: '8:00am – 6:00pm', dayNum: 3 },
  { day: 'Jueves',    hours: '8:00am – 6:00pm', dayNum: 4 },
  { day: 'Viernes',   hours: '8:00am – 6:00pm', dayNum: 5 },
  { day: 'Sábado',    hours: '8:00am – 1:00pm', dayNum: 6 },
  { day: 'Domingo',   hours: 'Cerrado',          dayNum: 0 },
]
</script>

<style scoped>
/* page-hero same as other pages */
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

/* Contact layout */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 40px;
  align-items: start;
}

/* Status card */
.contact-status-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: var(--r-lg);
  border: 1.5px solid;
  margin-bottom: 28px;
}
.contact-status-card--open  { background: rgba(16,185,89,0.06);  border-color: rgba(16,185,89,0.25);  }
.contact-status-card--closed { background: rgba(245,184,0,0.06); border-color: rgba(245,184,0,0.25); }
.contact-status-card__dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  animation: pulseDot 2s ease infinite;
}
.contact-status-card--open  .contact-status-card__dot { background: #2ECC71; }
.contact-status-card--closed .contact-status-card__dot { background: var(--brand); }
.contact-status-card strong { display: block; font-size: 15px; font-weight: 700; color: var(--text-dark); }
.contact-status-card span   { font-size: 13px; color: var(--text-dark-muted); }

/* Info items */
.contact-info__items { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
.contact-info-item { display: flex; gap: 16px; align-items: flex-start; }
.contact-info-item__icon {
  width: 44px; height: 44px;
  background: rgba(245,184,0,0.07);
  border: 1px solid rgba(245,184,0,0.2);
  border-radius: var(--r-md);
  display: flex; align-items: center; justify-content: center;
  color: var(--brand); flex-shrink: 0;
}
.contact-info-item__label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-dark-muted); margin-bottom: 4px; }
.contact-info-item__value { font-size: 14.5px; line-height: 1.65; color: var(--text-dark); }

/* Horario table */
.horario-table { background: #fff; border: 1.5px solid #E0E3EE; border-radius: var(--r-lg); overflow: hidden; margin-bottom: 24px; }
.horario-table__title { font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--text-dark-muted); padding: 16px 20px; border-bottom: 1px solid #E0E3EE; }
table { width: 100%; border-collapse: collapse; }
tr { border-bottom: 1px solid #ECEEF2; transition: background var(--t-fast); }
tr:last-child { border-bottom: none; }
tr.horario-active { background: rgba(245,184,0,0.04); }
td { padding: 11px 20px; font-size: 14px; }
.horario-day  { font-weight: 600; color: var(--text-dark); }
.horario-hours { color: var(--text-dark-muted); }
.horario-badge { display: inline-flex; font-size: 10.5px; font-weight: 700; padding: 2px 8px; border-radius: 99px; }
.horario-badge--open   { background: rgba(16,185,89,0.1);  color: #16a34a; }
.horario-badge--closed { background: rgba(245,184,0,0.1); color: var(--brand); }

.contact-wa-btn { width: 100%; justify-content: center; font-size: 15px; }

/* Map */
.contact-map-wrap { display: flex; flex-direction: column; gap: 12px; }
.contact-map-label {
  display: flex; align-items: center; gap: 8px;
  font-size: 13px; font-weight: 600;
  color: var(--text-dark-muted);
  background: #fff; border: 1px solid #DDE0EA;
  padding: 10px 16px; border-radius: var(--r-md);
}
.contact-map-label svg { color: var(--brand); flex-shrink: 0; }
.contact-map {
  border-radius: var(--r-xl);
  overflow: hidden;
  height: 400px;
  border: 1px solid #DDE0EA;
  box-shadow: var(--shadow-md);
}
.contact-map-actions { display: flex; gap: 10px; flex-wrap: wrap; }
.contact-map-actions .btn { font-size: 13px; padding: 10px 16px; }

/* CTA bottom */
.cta-bottom { background: var(--bg-card); border-top: 1px solid var(--bg-border); }
.cta-bottom__inner {
  display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
}
.cta-bottom__title { font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 6px; }
.cta-bottom__sub { color: var(--text-secondary); }

/* WA chip */
:deep(.wa-chip) { display: inline-flex; align-items: center; font-size: 11px; font-weight: 700; background: rgba(37,211,102,0.12); color: #16a34a; padding: 2px 8px; border-radius: 99px; margin-left: 6px; }
:deep(a) { color: var(--brand); text-decoration: none; }
:deep(a:hover) { text-decoration: underline; }
:deep(.contact-info-item__value a) { 
  color: var(--brand); 
  text-decoration: none; 
  font-weight: 600;
}
:deep(.contact-info-item__value a:hover) { 
  text-decoration: underline; 
}
/* Aseguramos que el texto de los botones siempre sea oscuro/legible */
.btn-wa, .btn-brand {
  color: var(--text-primary, #0f172a) !important;
}
/* Responsive */
@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
  .contact-map { height: 300px; }
}
</style>