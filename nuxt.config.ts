// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Jauregui Ferretera Industrial | Río Bravo, Tamaulipas',
      meta: [
        { name: 'description', content: 'Empresa 100% mexicana con más de 10 años de experiencia en ventas de material eléctrico, ferretería, plomería, seguridad industrial y más. Río Bravo, Tamaulipas.' },
        { name: 'keywords', content: 'ferretería, material eléctrico, seguridad industrial, automatización, rodamientos, Río Bravo, Tamaulipas' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es_MX' },
        { property: 'og:site_name', content: 'Jauregui Ferretera Industrial' },
        { name: 'theme-color', content: '#E8500A' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/app.css'],

  modules: [],
})