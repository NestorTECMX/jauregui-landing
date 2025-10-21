<template>
    <div class="i-services ps-3 pe-3 row">
        <div class="i-service col-md-4 d-flex align-items-center justify-content-center flex-column m-1"
            v-for="(service) of services" :key="service.name">
            <h3 class="text-warning">{{ service.name }}</h3>
            <span>{{ service.description }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IBrands',
    data() {
        return {
            "services": [
                {
                    "name": "INGENIERÍA ELÉCTRICA",
                    "description": "Instalaciones en alta, media y baja presión. Servicios de ingeniería. Terciaría."
                },
                {
                    "name": "CONSTRUCCIÓN",
                    "description": "Pavimento hidráulico y asfáltico. Estructuras de concreto hidráulico. Remodelaciones. Edificaciones de naves industriales."
                },
                {
                    "name": "VENTILACIÓN INDUSTRIAL",
                    "description": "Diseño e ingeniería de sistemas de extracción y ventilación."
                },
                {
                    "name": "ARQUITECTURA",
                    "description": "Diseño arquitectónico. Acabados interiores y exteriores. Aplicación de pintura a edificios y estructuras. Instalación de pisos cerámicos, vinílicos y epóxicos."
                },
                {
                    "name": "AIRE ACONDICIONADO",
                    "description": "Diseño e ingeniería de sistemas A/C."
                },
                {
                    "name": "ESTRUCTURAS DE ACERO",
                    "description": "Cálculo e ingeniería estructural, construcciones de acero, fabricaciones metálicas."
                },
                {
                    "name": "MAQUINADOS INDUSTRIALES",
                    "description": "Maquinados de alta presión. Maquinados en CNC. Soldadura TIG/MIG. Fabricación de fixtures. Fabricación y mantenimiento de moldes."
                },
                {
                    "name": "INSTALACIONES MECÁNICAS",
                    "description": "Sistemas contra incendios, tubería de fluidos."
                }
            ]
        }
    }
}
</script>

<style>
.i-services {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.i-service {
    height: 300px;
    text-align: center;
    font-size: 1.5rem;
}
</style>