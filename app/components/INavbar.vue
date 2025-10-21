<template>
    <nav class="i-navbar w-100 text-white p-3 row">
        <div class="col-md-4">
            <div class="i-brand-logo"></div>
        </div>
        <div class="col-md-6 offset-md-2 d-flex align-items-center justify-content-end">
            <a :href="item.href" :key="item.href" v-for="(item, idx) of items" class="ps-3 pe-3 pb-1"
                :class="{ 'me-3': idx < items.length - 1, 'i-active': idx === 0 }">{{
                    item.label }}</a>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'INavbar',
    data() {
        return {
            items: [
                { label: 'Inicio', href: '/' },
                { label: 'Nosotros', href: '/nosotros' },
                { label: 'Marcas', href: '/marcas' },
                { label: 'Contacto', href: '/contacto' },
            ]
        }
    }
}
</script>

<style>
.i-navbar {
    position: relative;
    left: 0px;
    top: 0px;
    background-color: #303030;
    min-height: 100px;
}

.i-brand-logo {
    width: 100%;
    height: 80px;
    background-image: url('/img/logo.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.i-navbar a {
    text-decoration: none;
    color: white;
    display: block;
    font-size: 1.25rem;
}

.i-navbar a.i-active {
    border-bottom: 3px solid rgba(255, 255, 255, 0.8);
    border-radius: 2px;
}
</style>