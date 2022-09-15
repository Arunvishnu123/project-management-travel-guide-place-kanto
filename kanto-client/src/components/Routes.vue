<template>
<div class="routes">
    <w-app>
        <w-tag xl height="3em" class="heading" bg-color="primary">Routes List of World Kanto</w-tag>
        <div class="cities">
            <vueper-slides class="no-shadow" slide-multiple :arrows-outside="false" :visible-slides="4" :slide-ratio="1 / 4" :dragging-distance="70">
                <vueper-slide v-for="city in this.$store.state.routeDetails" :key="city" :style="
              'background-color: ' +
              ['#043e94', '#2c3f5c'][
                this.$store.state.routeDetails.indexOf(city) % 2
              ]
            ">
                    <template #content>
                        <div class="vueperslide__content-wrapper">
                            <div class="vueperslide__title">{{ city.routeName }}</div>
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
    name: "Pictures",
    components: {
        VueperSlides,
        VueperSlide,
    },
    created() {
        this.$store.dispatch("getRouteDetails");
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

.routes {
    position: relative;
    top: -450px;
    height: 0;
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
