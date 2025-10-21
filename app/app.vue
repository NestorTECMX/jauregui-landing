<template>
  <div class="i-app">
    <INavbar />
    <div class="i-body d-flex align-items-center justify-content-center">

    </div>
    <div class="w-100 text-center mb-5 mt-5">
      <h1 class="mb-5">SOMOS PROVEEDORES DIRECTOS DE:</h1>
      <IBrands />
    </div>
    <div class="w-100 text-center mb-5 mt-5">
      <h1 class="mb-5">NUESTROS SERVICIOS</h1>
      <IServices />
    </div>
  </div>
</template>

<style>
.i-body {
  background-color: rgba(255, 255, 255, 0.05);
  width: 100%;
  height: 500px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 5rem;
  background-image: url('/img/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
}

.i-app {
  color: white;
}
</style>
