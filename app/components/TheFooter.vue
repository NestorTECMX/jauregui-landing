<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <!-- Brand -->
        <div class="footer__brand">
          <img src="/img/logo/logo.png" alt="Jauregui" class="footer__logo" />
          <p class="footer__tagline">
            Empresa 100% mexicana con más de 10 años de experiencia. Tu aliado industrial en el noreste de México.
          </p>
          <div class="footer__social">
            <a href="https://wa.me/528997987131" target="_blank" rel="noopener" class="footer__social-btn footer__social-btn--wa" title="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
            </a>
            <a href="mailto:jauregui_car@hotmail.com" class="footer__social-btn" title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick links -->
        <div class="footer__col">
          <h4 class="footer__col-title">Navegación</h4>
          <nav class="footer__links">
            <NuxtLink to="/"           class="footer__link">Inicio</NuxtLink>
            <NuxtLink to="/nosotros"   class="footer__link">Quiénes Somos</NuxtLink>
            <NuxtLink to="/categorias" class="footer__link">Categorías</NuxtLink>
            <NuxtLink to="/contacto"   class="footer__link">Contacto</NuxtLink>
          </nav>
        </div>

        <!-- Categories -->
        <div class="footer__col">
          <h4 class="footer__col-title">Categorías</h4>
          <nav class="footer__links">
            <NuxtLink to="/categorias" class="footer__link" v-for="cat in cats" :key="cat">{{ cat }}</NuxtLink>
          </nav>
        </div>

        <!-- Contact -->
        <div class="footer__col">
          <h4 class="footer__col-title">Contacto</h4>
          <ul class="footer__contact">
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Ignacio Zaragoza #102, Col. Octavio Silva<br>Río Bravo, Tamps. C.P. 88945</span>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12"/></svg>
              <span>(899) 149-5634<br>(899) 798-7131</span>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>jauregui_car@hotmail.com</span>
            </li>
            <li>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Lun–Vie 8am–6pm · Sáb 8am–1pm</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer__bottom">
        <span class="footer__copy">© {{ year }} Jauregui Ferretera Industrial. Todos los derechos reservados.</span>
        <span class="footer__made">Hecho en 🇲🇽 México</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
const cats = ['Automatización','Rodamientos','Electricidad','Mangueras Industriales','Ferretera','Seguridad Industrial']
</script>

<style scoped>
.footer {
  background: var(--bg-darkest);
  border-top: 1px solid var(--bg-border);
  padding: 72px 0 0;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.6fr;
  gap: 56px;
  padding-bottom: 56px;
  border-bottom: 1px solid var(--bg-border);
}

/* Brand */
.footer__logo {
  height: 52px;
  width: auto;
  object-fit: contain;
  /* Logo dorado + blanco funciona perfecto sobre fondo oscuro */
  filter: drop-shadow(0 0 6px rgba(245,184,0,0.12));
  margin-bottom: 16px;
  display: block;
}
.footer__tagline {
  color: var(--text-muted);
  font-size: 13.5px;
  line-height: 1.65;
  margin-bottom: 20px;
  max-width: 280px;
}
.footer__social { display: flex; gap: 8px; }
.footer__social-btn {
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1px solid var(--bg-border);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-muted);
  text-decoration: none;
  transition: var(--t-base);
}
.footer__social-btn:hover { border-color: var(--brand); color: var(--brand); }
.footer__social-btn--wa:hover { border-color: #25D366; color: #25D366; }

/* Columns */
.footer__col-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 18px;
}
.footer__links { display: flex; flex-direction: column; gap: 10px; }
.footer__link {
  color: var(--text-muted);
  font-size: 14px;
  text-decoration: none;
  transition: color var(--t-fast);
  width: fit-content;
}
.footer__link:hover { color: var(--brand); }

/* Contact */
.footer__contact { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.footer__contact li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: var(--text-muted);
  font-size: 13.5px;
  line-height: 1.55;
}
.footer__contact li svg { color: var(--brand); flex-shrink: 0; margin-top: 2px; }

/* Bottom */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  font-size: 12.5px;
  color: var(--text-muted);
  flex-wrap: wrap;
  gap: 8px;
}

/* Responsive */
@media (max-width: 1024px) { .footer__grid { grid-template-columns: 1fr 1fr; gap: 40px; } }
@media (max-width: 580px)  {
  .footer__grid { grid-template-columns: 1fr; gap: 32px; }
  .footer__bottom { flex-direction: column; text-align: center; }
}
</style>