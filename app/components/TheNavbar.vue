<template>
  <header class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="container navbar__inner">

      <!-- Logo -->
      <NuxtLink to="/" class="navbar__logo" aria-label="Jauregui Ferretera Industrial">
        <img src="/img/logo/logo.png" alt="Jauregui" class="navbar__logo-img" />
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="navbar__nav" role="navigation">
        <NuxtLink to="/"          class="navbar__link">Inicio</NuxtLink>
      

        <!-- Categorías dropdown -->
        <div class="navbar__dropdown-wrap" @mouseenter="catOpen = true" @mouseleave="catOpen = false">
          <NuxtLink to="/categorias" class="navbar__link navbar__link--caret">
            Categorías
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              class="navbar__caret" :class="{ 'navbar__caret--open': catOpen }">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </NuxtLink>
          <Transition name="dropdown">
            <div v-if="catOpen" class="navbar__dropdown">
              <div class="dropdown-grid">
                <NuxtLink
                  v-for="cat in categories" :key="cat.id"
                  to="/categorias" class="dropdown-item"
                  @click="catOpen = false"
                >
                  <span class="dropdown-item__icon" v-html="cat.icon"></span>
                  <span class="dropdown-item__name">{{ cat.name }}</span>
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>

          <NuxtLink to="/nosotros"  class="navbar__link">Nosotros</NuxtLink>
        <NuxtLink to="/contacto"  class="navbar__link">Contacto</NuxtLink>
      </nav>

      <!-- Right side -->
      <div class="navbar__right">
        <!-- Business Hours Badge -->
        <div class="biz-badge" :class="isOpen ? 'biz-badge--open' : 'biz-badge--closed'">
          <span class="biz-badge__dot"></span>
          <span class="biz-badge__status">{{ isOpen ? 'Abierto' : 'Cerrado' }}</span>
          <span class="biz-badge__detail">{{ nextEvent }}</span>
        </div>

        <!-- WhatsApp CTA -->
        <a href="https://wa.me/528997987131" target="_blank" rel="noopener" class="navbar__wa-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>

        <!-- Hamburger -->
        <button class="navbar__hamburger" @click="mobileOpen = !mobileOpen"
          :aria-expanded="mobileOpen" aria-label="Menú">
          <span :class="{ 'is-open': mobileOpen }"></span>
          <span :class="{ 'is-open': mobileOpen }"></span>
          <span :class="{ 'is-open': mobileOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile">
      <div v-if="mobileOpen" class="navbar__mobile">
        <div class="mobile-biz-badge" :class="isOpen ? 'mobile-biz-badge--open' : 'mobile-biz-badge--closed'">
          <span class="biz-badge__dot"></span>
          {{ isOpen ? 'Abierto ahora' : 'Cerrado ahora' }} · {{ nextEvent }}
        </div>
        <NuxtLink to="/"           class="mobile-link" @click="mobileOpen = false">Inicio</NuxtLink>
        <NuxtLink to="/nosotros"   class="mobile-link" @click="mobileOpen = false">Nosotros</NuxtLink>
        <NuxtLink to="/categorias" class="mobile-link" @click="mobileOpen = false">Categorías</NuxtLink>
        <NuxtLink to="/contacto"   class="mobile-link" @click="mobileOpen = false">Contacto</NuxtLink>
        <a href="https://wa.me/528997987131" target="_blank" class="mobile-wa-btn" @click="mobileOpen = false">
          Cotizar por WhatsApp
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const { isOpen, nextEvent } = useBusinessHours()

const scrolled    = ref(false)
const mobileOpen  = ref(false)
const catOpen     = ref(false)

const categories = [
  { id: 'automatizacion', name: 'Automatización',            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 8h.01M9 8h6"/></svg>` },
  { id: 'rodamientos',    name: 'Rodamientos',               icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>` },
  { id: 'electricidad',   name: 'Electricidad',              icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>` },
  { id: 'mangueras',      name: 'Mangueras Industriales',    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12a7 7 0 1 0 14 0A7 7 0 0 0 5 12zM12 8v8M8 12h8"/></svg>` },
  { id: 'ferretera',      name: 'Ferretera',                 icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>` },
  { id: 'seguridad',      name: 'Seguridad Industrial',      icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>` },
  { id: 'empaque',        name: 'Material de Empaque',       icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>` },
  { id: 'plasticos',      name: 'Plásticos y Metales',       icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>` },
]

function onScroll() { scrolled.value = window.scrollY > 48 }

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
/* ── Base ── */
.navbar {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 900;
  transition: background 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease;
  padding: 0;
}
.navbar--scrolled {
  background: rgba(8, 10, 12, 0.94);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.05), 0 8px 40px rgba(0,0,0,0.6);
}

.navbar__inner {
  display: flex;
  align-items: center;
  height: 72px;
  gap: 8px;
}

/* ── Logo ── */
.navbar__logo { display: flex; align-items: center; flex-shrink: 0; margin-right: 12px; }
.navbar__logo-img {
  height: 50px;
  width: auto;
  object-fit: contain;
  /* Logo tiene fondo negro transparente con dorado y blanco — se ve perfecto sobre navbar oscuro */
  filter: drop-shadow(0 0 8px rgba(245, 184, 0, 0.15));
  transition: filter var(--t-base);
}
.navbar__logo:hover .navbar__logo-img {
  filter: drop-shadow(0 0 14px rgba(245, 184, 0, 0.4));
}

/* ── Nav links ── */
.navbar__nav {
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
}
.navbar__link {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  padding: 8px 14px;
  border-radius: var(--r-sm);
  transition: color var(--t-fast), background var(--t-fast);
  display: flex;
  align-items: center;
  gap: 5px;
  white-space: nowrap;
}
.navbar__link:hover,
.navbar__link.router-link-active { color: var(--brand); }
.navbar__caret { transition: transform 0.2s ease; }
.navbar__caret--open { transform: rotate(180deg); }

/* ── Dropdown ── */
.navbar__dropdown-wrap { position: relative; }
.navbar__dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  width: 560px;
  background: var(--bg-card);
  border: 1px solid var(--bg-border);
  border-radius: var(--r-xl);
  box-shadow: var(--shadow-lg), 0 0 0 1px rgba(255,255,255,0.04);
  overflow: hidden;
}
.dropdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  padding: 10px;
  background: var(--bg-separator);
}
.dropdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 10px;
  border-radius: var(--r-md);
  text-decoration: none;
  color: var(--text-secondary);
  background: var(--bg-card);
  transition: background var(--t-base), color var(--t-base);
}
.dropdown-item:hover {
  background: var(--bg-card-hover);
  color: var(--brand);
}
.dropdown-item__icon { line-height: 0; transition: transform var(--t-base); }
.dropdown-item:hover .dropdown-item__icon { transform: scale(1.15); }
.dropdown-item__name { font-size: 11px; font-weight: 600; text-align: center; line-height: 1.2; }

/* Dropdown transition */
.dropdown-enter-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.dropdown-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.dropdown-enter-from   { opacity: 0; transform: translateX(-50%) translateY(8px); }
.dropdown-leave-to     { opacity: 0; transform: translateX(-50%) translateY(6px); }

/* ── Business hours badge ── */
.biz-badge {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px 6px 10px;
  border-radius: 99px;
  border: 1px solid;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  transition: var(--t-base);
}
.biz-badge--open {
  background: rgba(16, 185, 89, 0.1);
  border-color: rgba(16, 185, 89, 0.3);
  color: #2ECC71;
}
.biz-badge--closed {
  background: rgba(245, 184, 0, 0.1);
  border-color: rgba(245, 184, 0, 0.3);
  color: #F5B800;
}
.biz-badge__dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: currentColor;
  animation: pulseDot 2s ease infinite;
  flex-shrink: 0;
}
.biz-badge__status { font-weight: 700; }
.biz-badge__detail {
  font-size: 11px;
  font-weight: 400;
  opacity: 0.8;
  padding-left: 4px;
  border-left: 1px solid currentColor;
}

/* ── Right side ── */
.navbar__right {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
  flex-shrink: 0;
}

.navbar__wa-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--brand);
  color: var(--black-brand);
  font-size: 13px;
  font-weight: 800;
  padding: 9px 16px;
  border-radius: var(--r-sm);
  text-decoration: none;
  transition: var(--t-base);
  letter-spacing: 0.2px;
}
.navbar__wa-btn:hover {
  background: var(--brand-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-brand);
  color: var(--black-brand);
}

/* ── Hamburger ── */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: var(--t-base);
  transform-origin: center;
}
.navbar__hamburger span.is-open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__hamburger span.is-open:nth-child(2) { opacity: 0; transform: scaleX(0); }
.navbar__hamburger span.is-open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile ── */
.navbar__mobile {
  background: var(--bg-card);
  border-top: 1px solid var(--bg-border);
  padding: 16px 0 24px;
  display: flex;
  flex-direction: column;
}
.mobile-biz-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  padding: 10px 24px;
  border-bottom: 1px solid var(--bg-border);
  margin-bottom: 8px;
}
.mobile-biz-badge--open  { color: #2ECC71; }
.mobile-biz-badge--closed { color: var(--brand); }
.mobile-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;
  padding: 14px 24px;
  border-left: 3px solid transparent;
  transition: var(--t-base);
}
.mobile-link:hover,
.mobile-link.router-link-active {
  color: var(--brand);
  border-left-color: var(--brand);
  background: var(--brand-light);
}
.mobile-wa-btn {
  margin: 16px 24px 0;
  background: #25D366;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  padding: 14px;
  border-radius: var(--r-sm);
  text-decoration: none;
}

/* Transitions */
.mobile-enter-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.mobile-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.mobile-enter-from   { opacity: 0; transform: translateY(-10px); }
.mobile-leave-to     { opacity: 0; transform: translateY(-6px); }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .biz-badge__detail { display: none; }
}
@media (max-width: 820px) {
  .navbar__nav, .navbar__wa-btn, .biz-badge { display: none; }
  .navbar__hamburger { display: flex; }
}
@media (max-width: 480px) {
  .navbar__logo-img { height: 38px; }
}
</style>