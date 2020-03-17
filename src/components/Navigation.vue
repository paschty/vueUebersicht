<template>
    <nav>
        <router-link v-for="site in sites" :key="site.link" v-bind:to="site.link">{{site.title}}</router-link>
    </nav>
</template>

<script>
    export default {
        name: "Navigation.vue",
        props: ["currentID"],
        data() {
            return {
                sites: [
                    {
                        link: "/",
                        title: "Start"
                    },
                    {
                        link: "/vue",
                        title: "Vue"
                    },
                    {
                        link: "/deklarativesRendering",
                        title: "Deklaratives Rendering"
                    },
                    {
                        link: "/Bedingungen",
                        title: "Bedingungen"
                    },
                    {
                        link: "/Schleifen",
                        title: "Schleifen"
                    },
                    {
                        link: "/Eingaben",
                        title: "Eingaben"
                    }
                    , {
                        link: "/Eingaben2",
                        title: "Eingaben II"
                    }, {
                        link: "/Komponenten",
                        title: "Komponenten"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    a, a:visited, a:active {
        color: white;
        text-decoration: none;
        display: inline-block;
        padding: 10px;
    }
</style>