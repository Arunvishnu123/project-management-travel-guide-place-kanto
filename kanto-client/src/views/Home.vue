<template>
  <div>
    <NavBar />
    <ImageSlider class="image" />
    <KantoDes class="tabs" />
    <CityTable class="table" />
    <ImportantPlaces  />
    <ImportantAttractions />
    <Badges  />
    <Pictures />
    <Map />
  </div>
</template>

<script>
import ImageSlider from "../components/ImageSlider.vue";
import NavBar from "../components/NavBar.vue";
import KantoDes from "../components/KantoDes.vue";
import CityTable from "../components/CityTable.vue";
import ImportantPlaces from "../components/ImportantPlaces.vue";
import ImportantAttractions from "../components/ImportantAttractions.vue";
import Badges from "../components/Badges.vue";
import Pictures from "../components/Pictures.vue"
import Map from "../components/Map.vue"
export default {
  components: {
    ImageSlider,
    NavBar,
    KantoDes,
    CityTable,
    ImportantPlaces,
    ImportantAttractions,
    Badges,
    Pictures,
    Map
    
  },
  data: () => ({
    openDrawer: false,
  }),
};
</script>

<style scoped>
.image {
  position: relative;
  top: -675px;
  
}
.tabs {
  position: relative;
  top: -675px;
}
.table{
  position: relative;
  top:-1209px;
 
}


</style>
