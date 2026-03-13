<template>
  <div class="cat-carousel" ref="root">

    <!-- ── Carrusel de cards ── -->
    <div class="cat-carousel__wrapper">
      <button class="cat-arrow" @click="prev" :disabled="currentIdx === 0">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <div class="cat-track" ref="track" @scroll="onTrackScroll">
        <div
          v-for="(cat, i) in categories"
          :key="cat.id"
          class="cat-card"
          :class="{ 'cat-card--active': activeId === cat.id, 'cat-card--visible': visibleCards.includes(i) }"
          :style="{ '--delay': `${i * 0.055}s` }"
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
            <span class="cat-card__brand-count" v-if="cat.brands.length">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
              {{ cat.type === 'products' ? cat.brands.length + ' productos' : cat.brands.length + ' marcas' }}
            </span>
            <span class="cat-card__expand-hint">
              {{ activeId === cat.id ? 'Cerrar' : 'Ver más' }}
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                :style="{ transform: activeId === cat.id ? 'rotate(180deg)' : 'rotate(0)', transition: '0.2s' }">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <button class="cat-arrow" @click="next" :disabled="currentIdx >= maxIdx">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>

    <!-- Dots + barra de progreso -->
    <div class="cat-footer-bar">
      <div class="cat-dots">
        <button
          v-for="(_, i) in dotCount" :key="i"
          class="cat-dot"
          :class="{ 'cat-dot--active': activeDot === i }"
          @click="goToDot(i)"
        ></button>
      </div>
      <div class="cat-progress">
        <div class="cat-progress__bar" :style="{ width: `${progress}%` }"></div>
      </div>
    </div>

    <!-- ── Modal centrado ── -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="activeCat" class="cat-modal-backdrop" @click.self="toggleCard(activeCat!.id)" :key="activeCat.id">
          <div
            class="cat-panel"
            :class="activeCat.type === 'products' ? 'cat-panel--products' : ''"
            role="dialog"
            :aria-label="activeCat.name"
          >

            <!-- Header -->
            <div class="cat-panel__header">
              <div class="cat-panel__header-left">
                <div class="cat-panel__icon-wrap" v-html="activeCat.icon"></div>
                <div>
                  <p class="cat-panel__label">Categoría seleccionada</p>
                  <h3 class="cat-panel__title">{{ activeCat.name }}</h3>
                </div>
              </div>
              <div class="cat-panel__header-right">
                <a
                  :href="`https://wa.me/528991495634?text=Hola%2C%20quiero%20cotizar%20de%3A%20${encodeURIComponent(activeCat.name)}`"
                  target="_blank" rel="noopener" class="btn btn-wa"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  Cotizar ahora
                </a>
                <button class="cat-panel__close" @click="toggleCard(activeCat.id)" aria-label="Cerrar">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            </div>

            <!-- Descripción + tags -->
            <div class="cat-panel__body">
              <p class="cat-panel__desc">{{ activeCat.description }}</p>
              <div class="cat-panel__tags">
                <span v-for="tag in activeCat.tags" :key="tag" class="cat-panel__tag">{{ tag }}</span>
              </div>
            </div>

            <!-- ── MODO MARCAS: marquesina ── -->
            <template v-if="activeCat.type !== 'products'">
              <div v-if="activeCat.brands.length" class="cat-panel__brands-section">
                <p class="cat-panel__section-label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  Marcas que manejamos
                </p>
                <div class="marquee-wrap">
                  <div
                    class="marquee-track"
                    :class="{ 'marquee-track--paused': marqueeHovered }"
                    @mouseenter="marqueeHovered = true"
                    @mouseleave="marqueeHovered = false"
                  >
                    <template v-for="loop in 2" :key="loop">
                      <div
                        v-for="brand in activeCat.brands"
                        :key="`${loop}-${brand}`"
                        class="marquee-item"
                        :aria-hidden="loop === 2 ? 'true' : undefined"
                      >
                        <img
                          v-if="getBrandLogo(activeCat.id, brand)"
                          :src="getBrandLogo(activeCat.id, brand)!"
                          :alt="brand"
                          class="marquee-item__img"
                        />
                        <span v-else class="marquee-item__text">{{ brand }}</span>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <div v-else class="cat-panel__no-brands">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                Consulta disponibilidad de marcas directamente por WhatsApp
              </div>
            </template>

            <!-- ── MODO PRODUCTOS: grid grande ── -->
          <template v-else>
              <div class="cat-panel__products-section">
                <p class="cat-panel__section-label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="7" height="7"/><rect x="15" y="3" width="7" height="7"/><rect x="2" y="14" width="7" height="7"/><rect x="15" y="14" width="7" height="7"/></svg>
                  Productos disponibles
                </p>
                
                <div class="marquee-wrap">
                  <div
                    class="marquee-track"
                    :class="{ 'marquee-track--paused': marqueeHovered }"
                    @mouseenter="marqueeHovered = true"
                    @mouseleave="marqueeHovered = false"
                  >
                    <template v-for="loop in 2" :key="loop">
                      <div
                        v-for="brand in activeCat.brands"
                        :key="`${loop}-${brand}`"
                        class="product-card product-card--marquee"
                        :aria-hidden="loop === 2 ? 'true' : undefined"
                      >
                        <div class="product-card__img-wrap">
                          <img
                            v-if="getBrandLogo(activeCat.id, brand)"
                            :src="getBrandLogo(activeCat.id, brand)!"
                            :alt="brand"
                            class="product-card__img"
                          />
                          <div v-else class="product-card__placeholder">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                          </div>
                        </div>
                         </div>
                    </template>
                  </div>
                </div>
              </div>
            </template>

          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const track          = ref<HTMLElement | null>(null)
const root           = ref<HTMLElement | null>(null)
const currentIdx     = ref(0)
const activeId       = ref<string | null>(null)
const visibleCards   = ref<number[]>([])
const progress       = ref(0)
const marqueeHovered = ref(false)
const visibleCount   = 4
let autoTimer:    ReturnType<typeof setInterval>
let progressTimer: ReturnType<typeof setInterval>

// ─── Categorías ─────────────────────────────────────────────────────────────
const categories = [
  {
    id: 'automatizacion',
    type: 'brands',
    name: 'Automatización',
    tagline: 'Control, PLCs y automatización industrial',
    description: 'Soluciones completas para automatización de procesos: PLCs, variadores de frecuencia, sensores industriales, HMIs, botones de control y accesorios para entornos de alta demanda.',
    tags: ['PLCs', 'Variadores', 'Sensores', 'HMI', 'Controles', 'Botones'],
    brands: ['ABB', 'BUSSMAN', 'LITTELFUSE', 'EATON', 'FLUKE', 'HUBBELL'],
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4M6 7h.01M9 7h6M6 10h12M6 13h8"/></svg>`,
  },
  {
    id: 'rodamientos',
    type: 'brands',
    name: 'Rodamientos',
    tagline: 'Rodamientos y transmisión de potencia',
    description: 'Rodamientos de bolas, cilíndricos, cónicos y de agujas. Chumaceras, cadenas de transmisión, poleas y bandas para todo tipo de maquinaria industrial.',
    tags: ['Rodamientos de bolas', 'Cónicos', 'Chumaceras', 'Cadenas', 'Poleas', 'Bandas'],
    brands: ['SKF', 'TIMKEN', 'NTN', 'KOYO', 'ROLLWAY', 'FAG'],
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
  },
  {
    id: 'electricidad',
    type: 'brands',
    name: 'Electricidad',
    tagline: 'Material eléctrico residencial e industrial',
    description: 'Cable, conduit, centros de carga, contactores, interruptores termomagnéticos, canaletas y accesorios para instalaciones residenciales e industriales.',
    tags: ['Cable', 'Conduit', 'Interruptores', 'Contactores', 'Canaletas', 'Luminarias'],
    brands: ['VIAKON', 'M', 'ARGOS', 'EATON', 'SQD', 'LEVINTON'],
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  },
  {
    id: 'mangueras',
    type: 'brands',
    name: 'Mangueras Industriales',
    tagline: 'Mangueras para fluidos y alta presión',
    description: 'Mangueras hidráulicas, neumáticas, sanitarias y para agua caliente. Acoples, conectores y accesorios para sistemas de alta presión en aplicaciones exigentes.',
    tags: ['Hidráulicas', 'Neumáticas', 'Sanitarias', 'Acoples', 'Alta presión'],
    brands: ['PARKER', 'GATES', 'DIXOM', 'KURIYAMA'],
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9z"/><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>`,
  },
  {
    id: 'ferretera',
    type: 'brands',
    name: 'Ferretera',
    tagline: 'Herramientas y consumibles ferreteros',
    description: 'Herramienta manual y eléctrica, tornillería, soldadura, abrasivos, adhesivos, lubricantes y consumibles ferreteros para obra civil e industria.',
    tags: ['Herr. manual', 'Herr. eléctrica', 'Tornillería', 'Soldadura', 'Abrasivos'],
    brands: ['TRUPER', 'MILWAUKEE', 'URREA', 'DEWALT', 'FANDELI', 'AUSTROMEX'],
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    id: 'seguridad',
    type: 'brands',
    name: 'Seguridad Industrial',
    tagline: 'EPP y señalización normativa',
    description: 'Equipo de protección personal completo: cascos, guantes dieléctricos, lentes, calzado de protección, arneses, respiradores y señalización según normas NOM y OSHA.',
    tags: ['Cascos', 'Guantes', 'Calzado', 'Arneses', 'Respiradores', 'Señalización'],
    brands: ['MSA', 'M', 'JIRSA', 'ANSELL', 'CAT', 'GOJO'],
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
  },
  {
    id: 'empaque',
    type: 'products',  // ← grid grande
    name: 'Material de Empaque',
    tagline: 'Embalaje y soluciones logísticas',
    description: 'Cajas de cartón en múltiples medidas, stretch film (emplayador), fleje, esquineros, cinta adhesiva',
    tags: ['Cartón', 'Stretch film', 'Fleje', 'Cinta adhesiva', 'Emplayador'],
    brands: ['EUNO', 'EDOS', 'ETRES', 'ECUATRO', 'ECINCO', 'ESEIS', 'ESIETE'],
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  },
  {
    id: 'plasticos',
    type: 'products',  // ← grid grande
    name: 'Plásticos y Metales',
    tagline: 'Materiales para ingeniería industrial',
    description: 'PTR, cobre, aluminio, lámina negra, galvanizada y acero inoxidable en diferentes medidas y calibres. Plásticos de ingeniería: nylon, teflón, acrílico y poliuretano en barras, láminas y perfiles.',
    tags: ['PTR', 'Cobre', 'Aluminio', 'Acero inox.', 'Lámina negra', 'Nylon', 'Teflón'],
    brands: ['FUNO', 'FDOS', 'FTRES', 'FCUATRO', 'FCINCO', 'FSEIS'],
    icon: `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/><line x1="12" y1="22" x2="12" y2="15.5"/><polyline points="22 8.5 12 15.5 2 8.5"/></svg>`,
  },
]

// ─── Logos / imágenes ────────────────────────────────────────────────────────
const brandLogoMap: Record<string, Record<string, string>> = {
  ferretera: {
    TRUPER: '/img/brands/truper.svg', DEWALT: '/img/brands/dewalt.png',
    URREA: '/img/brands/urrea.png', MAKITA: '/img/brands/makita.png',
    CRAFTSMAN: '/img/brands/craftsman.png', MILWAUKEE: '/img/brands/milwaukee.png',
    AUSTROMEX: '/img/brands/austromex.png', FANDELI: '/img/brands/fandeli.png',
  },
  rodamientos: {
    KOYO: '/img/brands/koyo.png', ROLLWAY: '/img/brands/rollway.png',
    FAG: '/img/brands/fag.png', SKF: '/img/brands/skf.png',
    TIMKEN: '/img/brands/timken.png', NTN: '/img/brands/ntn.png',
  },
  electricidad: {
    SQD: '/img/brands/sqd.png', LEVINTON: '/img/brands/leviton.png',
    VIAKON: '/img/brands/viakon.png', M: '/img/brands/3m.png',
    ARGOS: '/img/brands/argos.png', EATON: '/img/brands/eaton.png',
  },
  mangueras: {
    GATES: '/img/brands/gates.png', DIXOM: '/img/brands/dixom.png',
    KURIYAMA: '/img/brands/kuriyama.png', PARKER: '/img/brands/parker.png',
  },
  automatizacion: {
    ABB: '/img/brands/abb.png', BUSSMAN: '/img/brands/bussman.png',
    LITTELFUSE: '/img/brands/littelfuse.png', EATON: '/img/brands/eaton.png',
    FLUKE: '/img/brands/fluke.png', HUBBELL: '/img/brands/hubbell.png',
  },
  seguridad: {
    MSA: '/img/brands/msa.svg', M: '/img/brands/3m.png',
    JIRSA: '/img/brands/jirsa.png', ANSELL: '/img/brands/ansell.png',
    CAT: '/img/brands/cat.png', GOJO: '/img/brands/gojo.png',
  },
  // Imágenes de productos (se muestran en grid grande)
  empaque: {
    EUNO: '/img/brands/euno.png', EDOS: '/img/brands/edos.png',
    ETRES: '/img/brands/etres.png', ECUATRO: '/img/brands/ecuatro.png',
    ECINCO: '/img/brands/ecinco.png', ESEIS: '/img/brands/eseis.png',
    ESIETE: '/img/brands/esiete.png',
  },
  plasticos: {
    FUNO: '/img/brands/funo.png', FDOS: '/img/brands/fdos.png',
    FTRES: '/img/brands/ftres.png', FCUATRO: '/img/brands/fcuatro.png',
    FCINCO: '/img/brands/fcinco.png', FSEIS: '/img/brands/fseis.png',
  },
}

// Nombres descriptivos para los productos (en vez de claves internas)
const productNames: Record<string, Record<string, string>> = {
  empaque: {
    EUNO: 'Esquineros', EDOS: 'Stretch Film', ETRES: 'Esquineros',
    ECUATRO: 'Emplayador', ECINCO: 'Emplayador', ESEIS: 'Fleje',
    ESIETE: 'Cinta Adhesiva',
  },
  plasticos: {
    FUNO: 'Plásticos de Ingeniería', FDOS: 'Lámina Negra / Galvanizada', FTRES: 'Cobre y Aluminio',
    FCUATRO: 'PTR y Perfiles', FCINCO: 'Barras y Varillas', FSEIS: 'Acero Inoxidable',
  },
}

function getBrandLogo(catId: string, brand: string): string | null {
  return brandLogoMap[catId]?.[brand] ?? null
}
function getProductName(catId: string, key: string): string {
  return productNames[catId]?.[key] ?? key
}

// ─── Computed ────────────────────────────────────────────────────────────────
const activeCat = computed(() => categories.find(c => c.id === activeId.value) ?? null)
const maxIdx    = computed(() => Math.max(0, categories.length - visibleCount))
const dotCount  = computed(() => Math.ceil(categories.length / visibleCount))
const activeDot = computed(() => Math.round(currentIdx.value / visibleCount))

// ─── Scroll ──────────────────────────────────────────────────────────────────
function cardWidth() {
  const card = track.value?.querySelector('.cat-card') as HTMLElement | null
  return card ? card.offsetWidth + 14 : 229
}
function scrollToIdx(idx: number) {
  track.value?.scrollTo({ left: idx * cardWidth(), behavior: 'smooth' })
}
function next() { currentIdx.value = Math.min(currentIdx.value + 1, maxIdx.value); scrollToIdx(currentIdx.value) }
function prev() { currentIdx.value = Math.max(currentIdx.value - 1, 0);            scrollToIdx(currentIdx.value) }
function goToDot(i: number) { currentIdx.value = Math.min(i * visibleCount, maxIdx.value); scrollToIdx(currentIdx.value) }
function onTrackScroll() {
  if (!track.value) return
  currentIdx.value = Math.round(track.value.scrollLeft / cardWidth())
}
function toggleCard(id: string) {
  activeId.value = activeId.value === id ? null : id
  document.body.style.overflow = activeId.value ? 'hidden' : ''
}

// ─── Auto-play ───────────────────────────────────────────────────────────────
function startAutoPlay() {
  progress.value = 0
  autoTimer = setInterval(() => {
    if (currentIdx.value < maxIdx.value) next()
    else { currentIdx.value = 0; scrollToIdx(0) }
    progress.value = 0
  }, 4200)
  progressTimer = setInterval(() => {
    progress.value = Math.min(progress.value + 0.38, 100)
  }, 16)
}

// ─── Reveal + mount ──────────────────────────────────────────────────────────
onMounted(() => {
  const obs = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        const idx = parseInt((e.target as HTMLElement).dataset.idx || '0')
        if (!visibleCards.value.includes(idx)) visibleCards.value.push(idx)
      }
    }),
    { threshold: 0.1 }
  )
  nextTick(() => {
    track.value?.querySelectorAll('.cat-card').forEach((el, i) => {
      (el as HTMLElement).dataset.idx = String(i)
      obs.observe(el)
    })
  })
  startAutoPlay()
})

onUnmounted(() => {
  clearInterval(autoTimer)
  clearInterval(progressTimer)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ══ WRAPPER ══════════════════════════════════════ */
.cat-carousel { position: relative; }
.cat-carousel__wrapper { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }

/* ══ TRACK ════════════════════════════════════════ */
.cat-track {
  display: flex; gap: 14px; overflow-x: auto;
  scroll-snap-type: x mandatory; scrollbar-width: none;
  flex: 1; padding: 14px 2px 18px;
}
.cat-track::-webkit-scrollbar { display: none; }

/* ══ ARROW ════════════════════════════════════════ */
.cat-arrow {
  flex-shrink: 0; width: 42px; height: 42px; border-radius: 50%;
  border: 1.5px solid #DDE0EA; background: #fff; color: var(--text-dark-muted);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: var(--t-base);
}
.cat-arrow:hover:not(:disabled) { border-color: var(--brand); color: var(--brand-darker); box-shadow: var(--shadow-brand); }
.cat-arrow:disabled { opacity: 0.25; cursor: not-allowed; }

/* ══ CARD ═════════════════════════════════════════ */
.cat-card {
  flex-shrink: 0; width: 215px; scroll-snap-align: start;
  background: #fff; border: 1.5px solid #E2E5EF; border-radius: 18px;
  padding: 0 0 18px; cursor: pointer;
  display: flex; flex-direction: column; overflow: hidden;
  opacity: 0; transform: translateY(18px);
  transition: border-color var(--t-base), box-shadow var(--t-base), transform var(--t-base);
}
.cat-card--visible { animation: fadeUp 0.45s ease var(--delay) both; opacity: 1; transform: none; }
.cat-card:hover { border-color: var(--brand); box-shadow: 0 10px 36px rgba(245,184,0,0.18); transform: translateY(-5px); }
.cat-card--active { border-color: var(--brand); box-shadow: 0 10px 36px rgba(245,184,0,0.22); background: #FFFEF5; }

.cat-card__accent {
  height: 3px;
  background: linear-gradient(90deg, var(--brand), rgba(245,184,0,0.25));
  transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease;
}
.cat-card:hover .cat-card__accent,
.cat-card--active .cat-card__accent { transform: scaleX(1); }

.cat-card__icon-wrap {
  height: 84px; display: flex; align-items: center; justify-content: center;
  background: #F6F7FA; color: #8A92A8;
  transition: background var(--t-base), color var(--t-base);
}
.cat-card:hover .cat-card__icon-wrap,
.cat-card--active .cat-card__icon-wrap { background: rgba(245,184,0,0.07); color: var(--brand-darker); }

.cat-card__body { padding: 16px 16px 0; flex: 1; }
.cat-card__name { font-size: 13.5px; font-weight: 700; color: var(--text-dark); margin-bottom: 5px; line-height: 1.3; }
.cat-card__tagline { font-size: 11.5px; color: var(--text-dark-muted); line-height: 1.5; }

.cat-card__footer { padding: 12px 16px 0; display: flex; align-items: center; justify-content: space-between; }
.cat-card__brand-count {
  display: inline-flex; align-items: center; gap: 4px;
  font-size: 10px; font-weight: 600; color: var(--text-dark-muted);
  background: #F0F1F6; padding: 3px 8px; border-radius: 99px;
}
.cat-card__expand-hint { display: inline-flex; align-items: center; gap: 4px; font-size: 11.5px; font-weight: 700; color: var(--brand-darker); }

/* ══ DOTS + PROGRESS ══════════════════════════════ */
.cat-footer-bar { display: flex; flex-direction: column; align-items: center; gap: 10px; margin-bottom: 28px; }
.cat-dots { display: flex; gap: 7px; }
.cat-dot { width: 7px; height: 7px; border-radius: 99px; border: none; background: #C8CBDA; cursor: pointer; transition: var(--t-base); }
.cat-dot--active { width: 26px; background: var(--brand); }
.cat-progress { width: 220px; height: 2px; background: #E2E5EF; border-radius: 1px; }
.cat-progress__bar { height: 100%; background: var(--brand); border-radius: 1px; transition: width 0.05s linear; }

/* ══ MODAL ════════════════════════════════════════ */
.cat-modal-backdrop {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center;
  padding: 24px 16px;
}
.cat-panel {
  background: var(--bg-card); border: 1px solid var(--bg-border);
  border-radius: 24px; overflow: hidden;
  width: 100%; max-width: 720px; max-height: 88vh; overflow-y: auto;
  box-shadow: 0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
  scrollbar-width: thin; scrollbar-color: var(--bg-border) transparent;
}
/* Modal más ancho para productos */
.cat-panel--products { max-width: 860px; }

/* Header */
.cat-panel__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 28px; border-bottom: 1px solid var(--bg-border);
  gap: 16px; flex-wrap: wrap; position: sticky; top: 0;
  background: var(--bg-card); z-index: 2;
}
.cat-panel__header-left { display: flex; align-items: center; gap: 16px; }
.cat-panel__icon-wrap {
  width: 52px; height: 52px; background: rgba(245,184,0,0.1);
  border: 1px solid rgba(245,184,0,0.22); border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  color: var(--brand-darker); flex-shrink: 0;
}
.cat-panel__label { font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--brand); margin-bottom: 3px; }
.cat-panel__title { font-size: 1.25rem; font-weight: 800; color: var(--text-primary); line-height: 1.2; }
.cat-panel__header-right { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.cat-panel__close {
  width: 36px; height: 36px; border-radius: 50%;
  border: 1px solid var(--bg-border); background: var(--bg-card-hover); color: var(--text-secondary);
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: var(--t-base);
}
.cat-panel__close:hover { border-color: var(--brand); color: var(--brand); }

/* Body */
.cat-panel__body {
  padding: 20px 28px; border-bottom: 1px solid var(--bg-border);
  display: flex; align-items: flex-start; gap: 24px; flex-wrap: wrap;
}
.cat-panel__desc { font-size: 14px; color: var(--text-secondary); line-height: 1.7; flex: 1; min-width: 240px; }
.cat-panel__tags { display: flex; flex-wrap: wrap; gap: 7px; align-content: flex-start; }
.cat-panel__tag {
  font-size: 11px; font-weight: 600;
  background: var(--bg-separator); border: 1px solid var(--bg-border);
  color: var(--text-secondary); padding: 4px 11px; border-radius: 99px;
}

/* Label de sección (marcas / productos) */
.cat-panel__section-label {
  display: flex; align-items: center; gap: 7px;
  font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--text-muted); padding: 0 28px 12px;
}
.cat-panel__section-label svg { color: var(--brand); }

/* ══ MARQUESINA (marcas) ══════════════════════════ */
.cat-panel__brands-section { padding: 14px 0 18px; }
.marquee-wrap {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
}
.marquee-track {
  display: flex; width: max-content;
  animation: marqueeScroll 16s linear infinite;
}
.marquee-track--paused { animation-play-state: paused; }
@keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

.marquee-item {
  flex-shrink: 0; width: 155px; height: 68px;
  padding: 10px 18px; margin: 0 5px; border-radius: 12px;
  background: var(--bg-card-hover); border: 1px solid var(--bg-border);
  display: flex; align-items: center; justify-content: center;
  transition: border-color var(--t-base), background var(--t-base);
}
.marquee-item:hover { border-color: rgba(245,184,0,0.35); background: rgba(245,184,0,0.04); }
.marquee-item__img {
  max-height: 38px; max-width: 105px; object-fit: contain;
  filter: grayscale(100%) brightness(0.5) invert(1); opacity: 0.65;
  transition: filter 0.4s ease, opacity 0.4s ease;
}
.marquee-item:hover .marquee-item__img { filter: grayscale(0%) brightness(1) invert(0); opacity: 1; }
.marquee-item__text {
  font-size: 12.5px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase;
  color: var(--text-muted); transition: color var(--t-fast);
}
.marquee-item:hover .marquee-item__text { color: var(--brand); }

.cat-panel__no-brands {
  display: flex; align-items: center; gap: 8px;
  padding: 14px 28px; font-size: 13px; color: var(--text-muted); font-style: italic;
}
.cat-panel__no-brands svg { color: var(--brand); flex-shrink: 0; }

/* ══ GRID DE PRODUCTOS ════════════════════════════ */
.cat-panel__products-section { padding: 14px 0 24px; }

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 14px;
  padding: 0 24px;
}

.product-card {
  display: flex; flex-direction: column;
  border-radius: 16px; overflow: hidden;
  border: 1.5px solid var(--bg-border);
  background: var(--bg-card-hover);
  transition: border-color var(--t-base), box-shadow var(--t-base), transform var(--t-base);
  cursor: default;
}

.product-card--marquee {
  flex-shrink: 0;
  width: 180px; /* Mantiene el tamaño original que tenían en el grid */
  margin: 0 7px; /* Equivale al gap de 14px (7px de cada lado) */
}
.product-card:hover {
  border-color: rgba(245,184,0,0.45);
  box-shadow: 0 8px 28px rgba(245,184,0,0.12);
  transform: translateY(-3px);
}

/* Zona de imagen — cuadrada con buen padding */
.product-card__img-wrap {
  aspect-ratio: 4/3;
  display: flex; align-items: center; justify-content: center;
  background: #fff;
  padding: 16px;
  border-bottom: 1px solid var(--bg-border);
}
.product-card__img {
  width: 100%; height: 100%;
  object-fit: contain;
  transition: transform 0.35s ease;
}
.product-card:hover .product-card__img { transform: scale(1.06); }

.product-card__placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted);
}

/* Nombre del producto debajo de la imagen */
.product-card__name {
  padding: 10px 12px;
  font-size: 12px; font-weight: 700;
  color: var(--text-white);
  text-align: center;
  line-height: 1.3;
}

/* ══ TRANSITIONS ══════════════════════════════════ */
.modal-enter-active { transition: opacity 0.28s ease; }
.modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

.modal-enter-active .cat-panel { transition: transform 0.32s cubic-bezier(0.34,1.56,0.64,1), opacity 0.28s ease; }
.modal-leave-active .cat-panel { transition: transform 0.2s ease, opacity 0.2s ease; }
.modal-enter-from .cat-panel { transform: scale(0.92) translateY(20px); opacity: 0; }
.modal-leave-to .cat-panel { transform: scale(0.96) translateY(10px); opacity: 0; }

/* ══ RESPONSIVE ═══════════════════════════════════ */
@media (max-width: 900px) { .cat-panel__body { flex-direction: column; gap: 14px; } }
@media (max-width: 768px) {
  .cat-card { width: 185px; }
  .cat-panel__header, .cat-panel__body { padding: 16px 18px; }
  .products-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); padding: 0 16px; }
}
@media (max-width: 480px) {
  .cat-card { width: 162px; }
  .cat-arrow { display: none; }
  .products-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>