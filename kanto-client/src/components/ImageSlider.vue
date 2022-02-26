<template>
<div>
    <vueper-slides fade :touchable="true">
        <vueper-slide v-for="slide in slides" :key="slide.id" :image="slide.image">
            <template #content>
                <div class="vueperslide__content-wrapper">
                    <div class="vueperslide__title">{{ slide.title }}</div>
                    <div class="vueperslide__content">{{ slide.content }}</div>
                </div>
            </template>
        </vueper-slide>
    </vueper-slides>
</div>
</template>

<script>
import {
    VueperSlides,
    VueperSlide
} from "vueperslides";
import 'vueperslides/dist/vueperslides.css'

export default {
    name:"ImageSlider",
    components: {
        VueperSlides,
        VueperSlide,
    },
    data: () => ({
        slides: [{
                image: "https://tlauncher.org/images/2013-05-28_021150_5598231.jpg",
                title: "Welcome to Kanto",
                content: "Slide content.",
            },
            {
                image: "https://daily.pokecommunity.com/wp-content/uploads/2020/07/pokemon-paths.jpg",
                title: "Visit",
                content: "Slide content.",
            },
            {
                image: "https://static.planetminecraft.com/files/resource_media/screenshot/1520/dpm6b8919209_lrg.jpg",
                title: "Content 2",
                content: "Slide content.",
            },
            {
                image: "https://static.planetminecraft.com/files/resource_media/screenshot/1251/Celadon1_4453712_lrg.jpg",
                title: "Content 3",
                content: "Slide content.",
            },
        ],
    }),
};
</script>

<style scoped>
.vueperslide__image {
    transform: scale(1.5) rotate(-10deg);
}

.vueperslide__title {
    font-size: 7em;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.vueperslide__content {
    font-size: 4em;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
