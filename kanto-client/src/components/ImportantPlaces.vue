<template>
<div class="citydetails">
    <w-app>
        <w-tag xl height="3em" class="heading" bg-color="primary">Cities in World Kanto</w-tag>
        <div class="cities">
            <vueper-slides class="no-shadow" slide-multiple :arrows-outside="false" :visible-slides="4" :slide-ratio="1 / 4" :dragging-distance="70">
                <vueper-slide v-for="city in this.$store.state.city" :key="city" :style="
              'background-color: ' +
              ['#043e94', '#2c3f5c'][this.$store.state.city.indexOf(city) % 2]
            ">
                    <template #content>
                        <div class="vueperslide__content-wrapper">
                            <div class="vueperslide__title">{{ city.cityName }}</div>
                            <div class="vueperslide__content">
                                {{ city.description }}
                            </div>
                        </div>
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>
    </w-app>
</div>
</template>

<script>
import {
    VueperSlides,
    VueperSlide
} from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
    name: "ImportantPlaces",
    components: {
        VueperSlides,
        VueperSlide,
    },

    methods: {},
    created() {
        this.$store.dispatch("getCityData");
    },
};
</script>

<style scoped>
.heading {
    font-size: 5em;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.no-shadow {
    position: relative;
    height: -10000px;
}

.image {
    height: 30px;
    width: 30px;
}

.citydetails {
    position: relative;
    top: -1200px;
}

.vueperslide__title {
    font-size: 2em;
    color: rgb(255, 255, 255);
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-decoration: underline;
}

.vueperslide__content {
    font-size: 1em;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-align: justify;
    padding: 7px;
}
</style>
