<template>
<div>
    <w-app>
        <div>
            <w-toolbar fixed bg-color="info-dark2" color="white">
                <div class="title2">Kanto Travel Guide</div>
                <div class="spacer"></div>
                <span class="ml2"><a class="test1" href="#kanto">Kanto</a></span>
                <span class="ml2"><a class="test1" href="#places">Cities</a></span>
                <span class="test1 ml2"><a class="test1" href="#attractions">Attractions</a></span>
                <span class="test1 ml2"><a class="test1" href="#badges">Badges</a></span>
                <span class="test1 ml2"><a class="test1" href="#pictures">Pictures</a></span>
                <span class="test1 ml2"><a class="test1" href="#map">Map</a></span>
                <button @click="pathFinding()" class="test1">PathFinder</button>
                <button @click="exampleWalkThrough()" class="test1">WalkThrough</button>
            </w-toolbar>
        </div>

        <w-drawer width="100em" v-model="openDrawer1" :[position]="true">
            <w-button bg-color="white" @click="openDrawer1 = false" sm outline round absolute icon="wi-cross">
            </w-button>
            <w-flex column>
                <w-flex column>
                    <w-tag xl height="2em" bg-color="primary">Dynamic Path Finding</w-tag>

                    <w-tag xl class="startpoint" height="1.5em" color="primary">Start Point</w-tag>
                    <select v-model="startPoint" class="start" name="starts">
                        <option value="">--Please Select the Start Point--</option>
                        <option value="Pallet Town">Pallet Town</option>
                        <option value="Saffron City">Saffron City</option>
                        <option value="Vermillion City">Vermillion City</option>
                        <option value="Lavender Town">Lavender Town</option>
                        <option value="Celadon City">Celadon City</option>
                        <option value="Fuchsia City">Fuchsia City</option>
                        <option value="Cerulean City">Cerulean City</option>
                    </select>
                    <w-tag xl class="destpoint" height="1.5em" color="primary">Destination Point</w-tag>
                    <select v-model="destinationPoint" class="dest" name="starts">
                        <option value="">--Please Select the Destination Point--</option>
                        <option value="Pallet Town">Pallet Town</option>
                        <option value="Saffron City">Saffron City</option>
                        <option value="Vermillion City">Vermillion City</option>
                        <option value="Lavender Town">Lavender Town</option>
                        <option value="Celadon City">Celadon City</option>
                        <option value="Fuchsia City">Fuchsia City</option>
                        <option value="Cerulean City">Cerulean City</option>
                    </select>
                </w-flex>
                <w-flex row>
                    <w-button @click="find()" width="10em" class="find grow">Find</w-button>
                </w-flex>

                <div class="table1">
                    <w-table class="table" :headers="table.headers" :items="table.items">
                        <template #header-label="{ label, index }">
                            {{ index }}: {{ label }}
                        </template>
                    </w-table>
                </div>
            </w-flex>

        </w-drawer>

        <w-drawer width="100em" v-model="openDrawer2" :[position]="true">
            <w-button bg-color="white" @click="openDrawer2 = false" sm outline round absolute icon="wi-cross">
            </w-button>
            <w-flex column>
                <w-flex>
                    <w-tag xl class="grow" height="2em" bg-color="primary">Example WalkThrough</w-tag>
                </w-flex>
                <w-table class="table1" :headers="table1.headers" :items="table1.items">
                    <template #header-label="{ label }">
                       {{ label }}
                    </template>
                </w-table>
            </w-flex>
        </w-drawer>
    </w-app>

    <ImageSlider class="imasge" />
    <KantoDes class="tab1s" id="kanto" />
    <ImportantPlaces id="places" />
    <ImportantAttractions id="attractions" />
    <Badges id="badges" />
    <Routes id="pictures" />
    <Map id="map" />

</div>
</template>

<script>
import ImageSlider from "../components/ImageSlider.vue";
///import NavBar from "../components/NavBar.vue";
import KantoDes from "../components/KantoDes.vue";
//import CityTable from "../components/CityTable.vue";
import ImportantPlaces from "../components/ImportantPlaces.vue";
import ImportantAttractions from "../components/ImportantAttractions.vue";
import Badges from "../components/Badges.vue";
import Routes from "../components/Routes.vue";
import Map from "../components/Map.vue";
import Path from "../Database/pathnames.json"
import exampleWalkThrough from "../Database/walkdesc.json"

export default {
    components: {
        ImageSlider,
        /// NavBar,
        KantoDes,
        ///CityTable,
        ImportantPlaces,
        ImportantAttractions,
        Badges,
        Routes,
        Map,
    },
    data: () => ({
        openDrawer: false,
        showNav: true,
        openDrawer1: false,
        openDrawer2: false,
        startPoint: null,
        destinationPoint: null,
        validators: {
            required: value => !!value || 'This field is required'
        },
        table: {
            headers: [{
                    label: 'ID',
                    key: 'id'
                },
                {
                    label: 'Covered Places',
                    key: 'route'
                },

            ],
            items: [{
                id: 0,
                route: null
            }]

        },
        table1: {
            headers: [{
                    label: 'Stepnumber',
                    key: 'stepNumber'
                },
                {
                    label: 'Covered',
                    key: 'cityName'
                },
                 {
                    label: 'Description',
                    key: 'contentInfo'
                },

            ],
            items: [{
                stepNumber:null,
                cityName: null,
                contentInfo:null

            }]

        }
    }),

    methods: {
        pathFinding() {
            this.openDrawer1 = true;
            console.log("djsjsodfjsdf")
        },

        exampleWalkThrough() {
            this.openDrawer2 = true;
            console.log(exampleWalkThrough)
            this.table1.items = exampleWalkThrough
        },
        find() {
            console.log(this.startPoint)
            console.log(this.destinationPoint)
            for (let P of Path) {
                if (P.startPlace == this.startPoint && P.destinationPlace == this.destinationPoint) {
                    let Ar = []
                    for (let i of P.path.split(",")) {
                        let object = {
                            id: P.path.split(",").indexOf(i) + 1,
                            route: i
                        }
                        Ar.push(object)
                    }
                    console.log(Ar)
                    this.table.items = Ar
                    console.log(Ar)
                    console.log(this.table.items)
                }

            }
        }
    },

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

.table {
    position: relative;
    top: -1209px;
}

.title2 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 11cm;
}

.foot {
    position: relative;
    height: 500px;
    background-color: rgb(40, 79, 206);
    top: -300px;
}

.table1 {
    position: relative;
    overflow: scroll;
    padding: 0;

    top: 20px
}

.test1 {
    padding-left: 0px;
    padding-right: 5px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 0.5cm;
    color: white;
}

a:link,
a:visited {
    background-color: info-dark1;
    color: rgb(255, 255, 255);
    border: 2px solid info-dark1;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}

button {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    height: 40px;
    width: 40;
    font-size: 10px;

}

button:visited {
    background-color: info-dark1;
    color: rgb(255, 255, 255);
    border: 2px solid info-dark1;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}

button:active,
button:hover {
    background-color: rgb(26, 59, 245);
    color: white;
}

a:hover,
a:active {
    background-color: rgb(26, 59, 245);
    color: white;
}

.mainfooter {
    position: relative;
    top: -340px;
}

.start {
    position: relative;
    top: 30px
}

.table {
    margin-top: 0;
    top: 100px;
    padding: 0;
    overflow: scroll;
}

.dest {
    position: relative;
    top: 50px
}

.start1 {
    top: -70px
}

.find {
    position: fixed;
    top: 210px;
    left: 680px
}

.startpoint {
    top: 18px
}

.destpoint {
    top: 40px
}

.routes {
    top: -300px
}
</style>
