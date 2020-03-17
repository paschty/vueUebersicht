<template>
    <section class="page">
        <h2>Vue (/vjuː/)</h2>
        <ul>
            <li v-for="punkt in punkte">{{punkt}}</li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "Vue",
        data(){
            return {
                punkte: [
                    "JavaScript Framework für Benutzeroberflächen",
                    "MVVM-Muster (Model View ViewModel)",
                    "Fokus auf \"View\" -> einfache Integration",
                    "Entwickelt durch Evan You + Community",
                    "Kernframework durch Module erweiterbar z.B. vuex, vue-router, vue-apollo"
                ]
            }
        }
    }
</script>

<style scoped>
    li {
        padding: 4px;
    }
</style>