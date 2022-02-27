<template>
<w-app>
    <div class="title">
        <w-toolbar bg-color="info-dark1" color="white">
            <div class="title2">Kanto Travel Guide</div>
            <div class="spacer"></div>
            <span class="ml2"><a class="test" href="url">Cities</a></span>
            <span class="test ml2"><a class="test" href="url">Attractions</a></span>
            <span class="test ml2"><a class="test" href="#kantoID">Badges</a></span>
            <span class="test ml2"><a class="test" href="url">Pictures</a></span>
            <span class="test ml2"><a class="test" href="url">Admin</a></span>
        </w-toolbar>
    </div>
</w-app>
</template>

<script>
export default {
    name: "NavBar",
    props: {
        kantoID: {
            default () {
                return {};
            }

        }

    }
};
</script>

<style scoped>
.title2 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 11cm;
}

.test {
    padding-left: 15px;
    padding-right: 15px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: .5cm;
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

a:hover,
a:active {
    background-color: rgb(26, 59, 245);
    color: white;

}
</style>
