<template>
  <section class="section-gap brands-section">
    <div class="container">
      <div class="reveal section-header">
        <p class="s-label" style="color:var(--brand)">Marcas Líderes</p>
        <h2 class="s-title-light">Trabajamos con los <span style="color:var(--brand)">mejores</span></h2>
        <p class="s-subtitle-light">Distribuidores autorizados de marcas de clase mundial.</p>
      </div>
    </div>

    <!-- FILA 1 -->
    <div class="brand-marquee-wrapper reveal reveal-delay-1">
      <div class="brand-marquee-track">

        <div
          class="brand-card"
          v-for="(b, i) in extendedBrandsRow1"
          :key="b.name + '-' + b.img + '-' + i"
        >
          <img :src="`/img/brands/${b.img}`" :alt="b.name" class="brand-card__img"/>
          <span class="brand-card__name">{{ b.name }}</span>
        </div>

      </div>
    </div>

    <!-- FILA 2 -->
    <div class="brand-marquee-wrapper">
      <div class="brand-marquee-track reverse">

        <div
          class="brand-card"
          v-for="(b, i) in extendedBrandsRow2"
          :key="b.name + '-' + b.img + '-' + i"
        >
          <img :src="`/img/brands/${b.img}`" :alt="b.name" class="brand-card__img"/>
          <span class="brand-card__name">{{ b.name }}</span>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const brands = [
  { name: 'TRUPER', img: 'truper.svg' },
  { name: 'DEWALT', img: 'dewalt.png' },
  { name: 'URREA', img: 'urrea.png' },
  { name: 'MAKITA', img: 'makita.png' },
  { name: 'CRAFTSMAN', img: 'craftsman.png' },
  { name: 'MILWAUKEE', img: 'milwaukee.png' },
  { name: 'AUSTROMEX', img: 'austromex.png' },
  { name: 'FANDELI', img: 'fandeli.png' },
  { name: 'KOYO', img: 'koyo.png' },
  { name: 'ROLLWAY', img: 'rollway.png' },
  { name: 'FAG', img: 'fag.png' },
  { name: 'SKF', img: 'skf.png' },
  { name: 'TIMKEN', img: 'timken.png' },
  { name: 'NTN', img: 'ntn.png' },
  { name: 'SQD', img: 'sqd.png' },
  { name: 'LEVINTON', img: 'leviton.png' },
  { name: 'VIAKON', img: 'viakon.png' },
  { name: '3M', img: '3m.png' },
  { name: 'ARGOS', img: 'argos.png' },
  { name: 'EATON', img: 'eaton.png' },
  { name: 'GATES', img: 'gates.png' },
  { name: 'DIXOM', img: 'dixom.png' },
  { name: 'KURIYAMA', img: 'kuriyama.png' },
  { name: 'PARKER', img: 'parker.png' },
  { name: 'ABB', img: 'abb.png' },
  { name: 'BUSSMAN', img: 'bussman.png' },
  { name: 'LITTELFUSE', img: 'littelfuse.png' },
  { name: 'FLUKE', img: 'fluke.png' },
  { name: 'HUBBELL', img: 'hubbell.png' },
  { name: 'MSA', img: 'msa.svg' },
  { name: 'JIRSA', img: 'jirsa.png' },
  { name: 'ANSELL', img: 'ansell.png' },
  { name: 'CAT', img: 'cat.png' },
  { name: 'GOJO', img: 'gojo.png' }
]

// dividir en dos filas
const midpoint = Math.ceil(brands.length / 2)

const brandsRow1 = brands.slice(0, midpoint)
const brandsRow2 = brands.slice(midpoint)

// duplicar para scroll infinito
const extendedBrandsRow1 = computed(() => [...brandsRow1, ...brandsRow1])
const extendedBrandsRow2 = computed(() => [...brandsRow2, ...brandsRow2])
</script>

<style scoped>

.brands-section {
  overflow: hidden;
  padding: 60px 0;
  background: var(--bg-dark);
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

/* wrapper */

.brand-marquee-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;

  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 20%,
    black 80%,
    transparent
  );

  mask-image: linear-gradient(
    to right,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
}

/* track */

.brand-marquee-track {
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 20px 0;
  width: max-content;
  animation: scrollBrands 40s linear infinite;
}

.brand-marquee-track.reverse {
  animation: scrollBrandsReverse 40s linear infinite;
}

.brand-marquee-track:hover {
  animation-play-state: paused;
}

/* animaciones */

@keyframes scrollBrands {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 30px)); }
}

@keyframes scrollBrandsReverse {
  0% { transform: translateX(calc(-50% - 30px)); }
  100% { transform: translateX(0); }
}

/* cards */

.brand-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 140px;
  cursor: pointer;

  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}

.brand-card:hover {
  opacity: 1;
  filter: grayscale(0%);
  transform: scale(1.05);
}

.brand-card__img {
  height: 60px;
  width: auto;
  object-fit: contain;
}

.brand-card__name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-light, #fff);
  text-align: center;
}

/* mobile */

@media (max-width: 768px) {

  .brand-marquee-track {
    gap: 40px;
    animation-duration: 40s;
  }

  .brand-card__img {
    height: 45px;
  }

}

</style>
