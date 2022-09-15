<template>
<div class="test111"> 
    <vueper-slides v-if="this.$store.state.test!=null" :duration="1000" autoplay fade :touchable="true">
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
import "vueperslides/dist/vueperslides.css";

export default {
    name: "ImageSlider",
    components: {
        VueperSlides,
        VueperSlide,
    },
    data: () => ({
        slides: [{
                image: "https://archives.bulbagarden.net/media/upload/2/25/LGPE_Kanto_Map.png",
                title: "Welcome to Kanto",
                content: "The Pokemon World",
            },
            {
                image: "https://tlauncher.org/images/2013-05-28_021150_5598231.jpg",
                title: "Welcome to Kanto",
                content: "The Pokemon World",
            },
            {
                image: "https://static.planetminecraft.com/files/resource_media/screenshot/1520/dpm6b8919209_lrg.jpg",
                title: "Welcome to Kanto",
                content: "The Pokemon World",
            },
        ],
        pauseOnHover: true,
        autoPlaying: true,
        internalAutoPlaying: true,
    }),
    created() {
        //this.slides[0].title = "this.$store.state.test.cityName" 
    },
    methods: {
        async updatedata() {
            await console.log("kbhh", this.$store.state.test);
            if (this.$store.state.test != null) {
                console.log("newpasdfsdfge", this.$store.state.test);
                // this.slides[0].title = this.$store.state.test[0].cityName
            }
        },

        test() {
            this.slides[0].title = this.$store.state.test.cityName
            console.log(this.slides[0].title)
            console.log(this.$store.state.test.cityName)
        }
    },

    mounted() {
        /// this.updatedata();
    },
};
</script>

<style scoped>
.vueperslide__image {
    transform: scale(1.5) rotate(-10deg);
}

.vueperslide__title {
    font-size: 5em;
    color: rgb(8, 4, 4);
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.vueperslide__content {
    font-size: 3em;
    color: rgb(22, 16, 16);
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.test111{
    position:relative;
top:-675px
}
</style>
