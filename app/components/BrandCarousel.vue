<template>
  <section class="section-gap brands-section">
    <div class="container">
      <div class="reveal section-header">
        <p class="s-label" style="color:var(--brand)">Marcas Líderes</p>
        <h2 class="s-title-light">Trabajamos con los <span style="color:var(--brand)">mejores</span></h2>
        <p class="s-subtitle-light">Distribuidores autorizados de marcas de clase mundial.</p>
      </div>
    </div>

    <div class="brand-marquee-wrapper reveal reveal-delay-1">
      <div class="brand-marquee-track">
        
        <div 
          class="brand-card" 
          v-for="(b, i) in extendedBrands" 
          :key="`${b.name}-${i}`"
        >
          <img :src="`/img/brands/${b.img}`" :alt="b.name" class="brand-card__img" />
          <span class="brand-card__name">{{ b.name }}</span>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// ⚠️ Reemplaza esto con tu array real de marcas
const brands = [
  { name: 'Craftsman', img: 'craftsman.png' },
  { name: 'Dewalt', img: 'dewalt.png' },
  { name: 'Makita', img: 'makita.png' },
  { name: 'Pretul', img: 'pretul.png' },
  { name: 'Surtek', img: 'surtek.jpg' },
  { name: 'Truper', img: 'truper.svg' },
  { name: 'Urrea', img: 'urrea.png' },
]

// Duplicamos el array para lograr el efecto infinito sin cortes
const extendedBrands = computed(() => [...brands, ...brands])
</script>

<style scoped>
.brands-section {
  overflow: hidden; /* Evita cualquier desbordamiento horizontal en la página entera */
  padding: 60px 0;
  background: var(--bg-dark); /* Ajusta según tu paleta si no es fondo oscuro */
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

/* ============================
   MAGIA DE LA MARQUESINA
============================ */

.brand-marquee-wrapper {
  width: 100%;
  max-width: 1200px; /* Limita el ancho máximo si lo deseas, o usa 100vw para toda la pantalla */
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  
  /* Máscara de gradiente: hace que los extremos izquierdo y derecho se desvanezcan */
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
}

.brand-marquee-track {
  display: flex;
  align-items: center;
  /* El gap es importante para calcular el salto infinito */
  gap: 60px; 
  padding: 20px 0;
  width: max-content;
  /* 25s es la velocidad. Ajusta a 15s para más rápido o 35s para más lento */
  animation: scrollBrands 25s linear infinite;
}

/* Pausar al poner el mouse encima */
.brand-marquee-track:hover {
  animation-play-state: paused;
}

/* El cálculo exacto: Se mueve la mitad de su tamaño total (el array original) menos la mitad de un gap */
@keyframes scrollBrands {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 30px)); } /* 30px es la mitad del gap de 60px */
}

/* ============================
   TARJETAS DE MARCA
============================ */

.brand-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 140px; /* Ancho consistente para cada marca */
  cursor: pointer;
  
  /* Efecto inicial apagado */
  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.brand-card:hover {
  opacity: 1;
  filter: grayscale(0%);
  transform: scale(1.05); /* Pequeño zoom */
}

.brand-card__img {
  height: 60px; /* Alto fijo para que los logos se vean alineados */
  width: auto;
  object-fit: contain;
}

.brand-card__name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-light, #fff); /* Ajusta si tu fondo es claro */
  text-align: center;
}

/* Responsivo para móviles */
@media (max-width: 768px) {
  .brand-marquee-track {
    gap: 40px;
    animation-duration: 15s; /* Un poco más rápido en móviles suele sentirse mejor */
  }
  
  @keyframes scrollBrands {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-50% - 20px)); } /* 20px = mitad del gap de 40px */
  }
  
  .brand-card__img {
    height: 45px;
  }
}
</style>