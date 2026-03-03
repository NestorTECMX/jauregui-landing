<template>
  <div class="app-root">
    <TheNavbar />
    <main class="app-main">
      <NuxtPage />
    </main>
    <TheFooter />
    <TheWaFloat />
  </div>
</template>

<style>
.app-root { display: flex; flex-direction: column; min-height: 100dvh; }
.app-main { flex: 1; }
</style>