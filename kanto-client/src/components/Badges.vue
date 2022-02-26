<template>
<div class="test">
    <w-app>
        <w-tag xl height="3em" class="heading" bg-color="primary">Badges in World Kanto</w-tag>

        <div class="cities">
            <vueper-slides class="no-shadow" slide-multiple :arrows-outside="false" :visible-slides="4" :slide-ratio="1 / 4" :dragging-distance="70">
                <vueper-slide v-for="i in 12" :key="i" :title="i.toString()" :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]" />
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
    name: "Badges",
    components: {
        VueperSlides,
        VueperSlide,
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

.test {
    position: relative;
    top: -1340px;
    height: 0;
}
</style>
