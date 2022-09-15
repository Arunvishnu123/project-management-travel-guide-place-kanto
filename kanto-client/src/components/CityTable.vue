<template>
<div>
    <w-app>
        <w-tag xl height="3em" class="heading" bg-color="primary">Important Facts about World Kanto</w-tag>
        <w-table :headers="table.headers" :items="table.items"> </w-table>
    </w-app>
</div>
</template>

<script>
export default {
    name: "CityTable",
    data: () => ({
        table: {
            headers: [{
                    label: "Professor",
                    key: "firstName"
                },
                {
                    label: "Professor Oak",
                    key: "lastName"
                },
            ],
            items: [{

                    firstName: "Total Area",
                    lastName: "32,423.90 km2"
                },
                {

                    firstName: "GDP Total",
                    lastName: "$2.1 trillion"
                },
                {

                    firstName: "Density",
                    lastName: "1,300/km2"
                },
                {

                    firstName: "Land type",
                    lastName: "Island"
                },
                {

                    firstName: "Website",
                    lastName: "https://bulbapedia.bulbagarden.net/wiki/Kanto"
                },
                   {

                    firstName: "Virgil",
                    lastName: "Carman"
                },
            ],
            sort: "+firstName",
        },
    }),
};
</script>

<style scoped>
.heading {
    height: 50px;
    font-size: 5em;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
