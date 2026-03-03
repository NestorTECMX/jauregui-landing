<template>
  <Transition name="wa-float">
    <a
      v-if="visible"
      href="https://wa.me/528997987131?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20productos"
      target="_blank"
      rel="noopener"
      class="wa-float"
      title="Cotizar por WhatsApp"
    >
      <svg class="wa-float__icon" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
      <span class="wa-float__label">¿Necesitas ayuda?</span>
      <span class="wa-float__ping"></span>
    </a>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(false)
onMounted(() => setTimeout(() => { visible.value = true }, 2500))
</script>

<style scoped>
.wa-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 800;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #25D366;
  color: #fff;
  text-decoration: none;
  padding: 14px 20px 14px 16px;
  border-radius: 99px;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 4px 24px rgba(37,211,102,0.5);
  transition: transform var(--t-base), box-shadow var(--t-base);
  position: fixed;
}
.wa-float:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 32px rgba(37,211,102,0.6);
  color: #fff;
}
.wa-float__label { white-space: nowrap; }
.wa-float__ping {
  position: absolute;
  top: -3px; right: -3px;
  width: 14px; height: 14px;
  border-radius: 50%;
  background: #fff;
  animation: pingAnim 2s ease infinite;
}
@keyframes pingAnim {
  0%   { transform: scale(1); opacity: 0.8; }
  70%  { transform: scale(2); opacity: 0; }
  100% { transform: scale(2); opacity: 0; }
}

/* Float transition */
.wa-float-enter-active { transition: opacity 0.5s ease, transform 0.5s ease; }
.wa-float-leave-active { transition: opacity 0.3s ease; }
.wa-float-enter-from   { opacity: 0; transform: translateY(20px) scale(0.9); }
.wa-float-leave-to     { opacity: 0; }

@media (max-width: 480px) {
  .wa-float__label { display: none; }
  .wa-float { padding: 16px; border-radius: 50%; }
}
</style>