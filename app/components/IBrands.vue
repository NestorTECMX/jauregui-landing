<template>
    <div class="i-brands ps-3 pe-3">
        <div class="i-brand d-block" v-for="(brand, bidx) of brands" :key="brand.image"
            :class="{ 'me-3': bidx < brands.length - 1 }"
            :style="{ 'background-image': `url(/img/brands/${brand.image})` }">
        </div>
    </div>
</template>

<script>
export default {
    name: 'IBrands',
    data() {
        return {
            brands: [
                { name: 'TRUPER', image: 'truper.svg' },
                { name: 'URREA', image: 'urrea.png' },
                { name: 'SURTEK', image: 'surtek.jpg' },
                { name: 'PRETUL', image: 'pretul.png' },
                { name: 'CRAFTSMAN', image: 'craftsman.png' },
                { name: 'DEWALT', image: 'dewalt.png' },
                { name: 'MAKITA', image: 'makita.png' },
            ]
        }
    }
}
</script>

<style>
.i-brands {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.i-brand {
    width: 8rem;
    height: 8rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 80%;
    background-color: white;
    border-radius: 100%;
}
</style>