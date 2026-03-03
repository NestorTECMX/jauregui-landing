<template>
  <div class="cat-showcase">
    
    <div class="cat-grid">
      <div
        v-for="(cat, i) in categories"
        :key="cat.id"
        class="cat-card fade-in-up"
        :class="{ 'cat-card--active': activeId === cat.id }"
        :style="{ animationDelay: `${i * 0.05}s` }"
        @click="toggleCard(cat.id)"
        role="button"
        :aria-expanded="activeId === cat.id"
      >
        <div class="cat-card__accent"></div>
        <div class="cat-card__icon-wrap">
          <span class="cat-card__icon" v-html="cat.icon"></span>
        </div>
        <div class="cat-card__body">
          <h3 class="cat-card__name">{{ cat.name }}</h3>
          <p class="cat-card__tagline">{{ cat.tagline }}</p>
        </div>
        <div class="cat-card__footer">
          <span class="cat-card__expand-hint">
            Ver más
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </span>
        </div>
      </div>
    </div>

    <Transition name="modal-fade">
      <div 
        v-if="activeCat" 
        class="cat-modal-overlay" 
        @click.self="toggleCard(activeCat.id)" 
        role="dialog" 
        aria-modal="true"
      >
        <div class="cat-modal-content">
          <button class="cat-modal__close" @click="toggleCard(activeCat.id)" aria-label="Cerrar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <div class="cat-panel__inner">
            <div class="cat-panel__icon-wrap" v-html="activeCat.icon"></div>
            <div class="cat-panel__info">
              <p class="cat-panel__label">Categoría seleccionada</p>
              <h3 class="cat-panel__title">{{ activeCat.name }}</h3>
              <p class="cat-panel__desc">{{ activeCat.description }}</p>
              <div class="cat-panel__tags">
                <span v-for="tag in activeCat.tags" :key="tag" class="cat-panel__tag">{{ tag }}</span>
              </div>
            </div>
            
            <div class="cat-panel__cta">
              <a
                :href="`https://wa.me/528997987131?text=Hola%2C%20me%20interesa%20cotizar%20de%20la%20categoría%3A%20${encodeURIComponent(activeCat.name)}`"
                target="_blank" rel="noopener" class="btn btn-wa btn-lg"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                Cotizar ahora
              </a>
              <button class="btn" @click="toggleCard(activeCat.id)">Cerrar panel</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeId = ref<string | null>(null)

const categories = [
  { id: 'automatizacion', name: 'Automatización', tagline: 'Sistemas de control y automatización industrial', description: 'Soluciones completas para automatización de procesos industriales: PLCs, variadores de frecuencia, sensores, botones y más. Marcas de confianza para entornos de alta demanda.', tags: ['PLCs', 'Variadores', 'Sensores', 'HMI', 'Controles'], icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M6 7h.01M9 7h6M6 10h12M6 13h8"/></svg>` },
  { id: 'rodamientos', name: 'Rodamientos', tagline: 'Rodamientos y elementos de transmisión', description: 'Amplio catálogo de rodamientos de bolas, cilíndricos, cónicos y de agujas. Chumaceras, cadenas de transmisión, poleas y bandas para todo tipo de maquinaria industrial.', tags: ['Rodamientos de bolas', 'Chumaceras', 'Cadenas', 'Poleas', 'Bandas'], icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>` },
  { id: 'electricidad', name: 'Electricidad', tagline: 'Material eléctrico residencial e industrial', description: 'Todo en material eléctrico: cable, conduit, centros de carga, contactores, interruptores termomagnéticos, canaletas y accesorios para instalaciones residenciales e industriales.', tags: ['Cable', 'Conduit', 'Interruptores', 'Contactores', 'Luminarias'], icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>` },
  { id: 'mangueras', name: 'Mangueras Industriales', tagline: 'Mangueras para todo tipo de fluido y presión', description: 'Mangueras hidráulicas, neumáticas, sanitarias y para agua caliente. Acoples, conectores y accesorios para sistemas de alta presión en aplicaciones industriales exigentes.', tags: ['Hidráulicas', 'Neumáticas', 'Acoples', 'Alta presión', 'Sanitarias'], icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9z"/><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>` },
  { id: 'ferretera', name: 'Ferretera', tagline: 'Herramientas y consumibles ferreteros', description: 'Herramienta manual y eléctrica, tornillería, soldadura, abrasivos, adhesivos, lubricantes y todo tipo de consumibles ferreteros para obra civil e industria.', tags: ['Herr. manual', 'Herr. eléctrica', 'Tornillería', 'Soldadura', 'Abrasivos'], icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>` },
  { id: 'seguridad', name: 'Seguridad Industrial', tagline: 'Equipo de protección personal y señalización', description: 'EPP completo: cascos, guantes dieléctricos, lentes de seguridad, calzado de protección, arneses, respiradores, ropa de trabajo y señalización según normas NOM y OSHA.', tags: ['Cascos', 'Guantes', 'Calzado', 'Arneses', 'Señalización'], icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>` },
  { id: 'empaque', name: 'Material de Empaque', tagline: 'Soluciones para embalaje y logística', description: 'Cinta de empaque, stretch film, fleje, esquineros, etiquetas, bolsas industriales, cajas de cartón y todo lo necesario para empaque, embalaje y protección de productos.', tags: ['Stretch film', 'Fleje', 'Cinta adhesiva', 'Bolsas', 'Cartón'], icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>` },
  { id: 'plasticos', name: 'Plásticos y Metales', tagline: 'Materiales para ingeniería y diseño industrial', description: 'Láminas y barras de nylon, teflón, delrín, acrílico, poliuretano. Láminas y perfiles de acero, aluminio y acero inoxidable para fabricación de piezas y maquinaria.', tags: ['Nylon', 'Teflón', 'Acrílico', 'Aluminio', 'Acero inox.'], icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>` },
]

const activeCat = computed(() => categories.find(c => c.id === activeId.value) ?? null)

function toggleCard(id: string) {
  activeId.value = activeId.value === id ? null : id
  
  // Detener el scroll del cuerpo de la página cuando el modal está abierto
  if (activeId.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.cat-showcase {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  width: 100%;
}

/* Card */
.cat-card {
  width: 100%;
  background: #fff;
  border: 1.5px solid #DDE0EA;
  border-radius: var(--r-xl);
  padding: 0 0 20px;
  cursor: pointer;
  transition: border-color var(--t-base), box-shadow var(--t-base), transform var(--t-base);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.cat-card:hover {
  border-color: var(--brand);
  box-shadow: 0 8px 32px rgba(245,184,0,0.15);
  transform: translateY(-4px);
}
.cat-card--active {
  border-color: var(--brand);
  box-shadow: 0 8px 32px rgba(245,184,0,0.2);
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.cat-card__accent {
  height: 3px;
  background: linear-gradient(90deg, var(--brand), var(--accent));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.cat-card:hover .cat-card__accent,
.cat-card--active .cat-card__accent { transform: scaleX(1); }

.cat-card__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  background: #F6F7FA;
  color: var(--text-dark-muted);
  transition: background var(--t-base), color var(--t-base);
}
.cat-card:hover .cat-card__icon-wrap,
.cat-card--active .cat-card__icon-wrap {
  background: rgba(245,184,0,0.06);
  color: var(--brand);
}

.cat-card__body { padding: 18px 18px 0; flex: 1; }
.cat-card__name { font-size: 15px; font-weight: 700; color: var(--text-dark); margin-bottom: 6px; line-height: 1.3; }
.cat-card__tagline { font-size: 13px; color: var(--text-dark-muted); line-height: 1.5; white-space: normal; }

.cat-card__footer { padding: 14px 18px 0; }
.cat-card__expand-hint {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 11.5px; font-weight: 600; color: var(--brand);
  letter-spacing: 0.3px;
}

/* ============================
   MODAL OVERLAY (NUEVO)
============================ */
.cat-modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(15, 23, 42, 0.4); /* Fondo oscuro */
  backdrop-filter: blur(8px); /* Efecto borroso profesional */
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.cat-modal-content {
  background: var(--bg-card, #fff);
  border-radius: var(--r-xl);
  max-width: 800px; /* Panel ancho */
  width: 100%;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

/* Botón cerrar modal */
.cat-modal__close {
  position: absolute;
  top: 16px; right: 16px;
  background: none; border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.2s;
}
.cat-modal__close:hover {
  background: var(--bg-separator);
  color: var(--text-primary);
}

/* Ajustes del contenido para el Modal */
.cat-panel__inner {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 32px;
  flex-wrap: wrap;
}
.cat-panel__icon-wrap {
  width: 72px; height: 72px;
  background: var(--brand-light);
  border: 1px solid rgba(245,184,0,0.25);
  border-radius: var(--r-lg);
  display: flex; align-items: center; justify-content: center;
  color: var(--brand);
  flex-shrink: 0;
}
.cat-panel__icon-wrap svg { width: 40px; height: 40px; }

.cat-panel__info { flex: 1; min-width: 250px; }
.cat-panel__label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--brand); margin-bottom: 6px; }
.cat-panel__title { font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin-bottom: 10px; }
.cat-panel__desc  { font-size: 15px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px; white-space: normal; }
.cat-panel__tags  { display: flex; flex-wrap: wrap; gap: 6px; }
.cat-panel__tag {
  font-size: 12px; font-weight: 600;
  background: var(--bg-separator); border: 1px solid var(--bg-border);
  color: var(--text-secondary); padding: 5px 12px; border-radius: 99px;
}
.cat-panel__cta { display: flex; flex-direction: column; gap: 10px; flex-shrink: 0; width: 220px; }

/* Transición suave para oscurecer pantalla y "pop" del panel */
.modal-fade-enter-active, .modal-fade-leave-active { 
  transition: opacity 0.3s ease; 
}
.modal-fade-enter-active .cat-modal-content { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.modal-fade-leave-active .cat-modal-content { transition: transform 0.2s ease; }

.modal-fade-enter-from { opacity: 0; }
.modal-fade-enter-from .cat-modal-content { transform: scale(0.95) translateY(10px); }

.modal-fade-leave-to { opacity: 0; }
.modal-fade-leave-to .cat-modal-content { transform: scale(0.98); }

/* Responsivo para el modal */
@media (max-width: 768px) {
  .cat-panel__inner { flex-direction: column; text-align: center; padding: 24px 20px; }
  .cat-panel__icon-wrap { margin: 0 auto; }
  .cat-panel__tags { justify-content: center; }
  .cat-panel__cta { width: 100%; margin-top: 10px; }
}
</style>