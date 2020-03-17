<template>
    <section class="page">
        <h2>Eingaben</h2>
        Javascript-Code:
        <pre v-highlightjs="jsCode"><code class="javascript"></code></pre>
        <br/>
        <br/>

        HTML-Template:
        <pre v-highlightjs="htmlCode"><code class="html"></code></pre>
        <br/>
        <br/>

        Ergebnis:

        <p>{{ message }}</p>
        <input v-model="message">

    </section>
</template>

<script>
    export default {
        name: "Eingaben2",
        data() {
            return {
                message: "Hello Vue.js!",
                htmlCode: "<div id=\"app-6\">\n" +
                    "  <p>{{ message }}</p>\n" +
                    "  <input v-model=\"message\">\n" +
                    "</div>",
                jsCode: "var app6 = new Vue({\n" +
                    "  el: '#app-6',\n" +
                    "  data: {\n" +
                    "    message: 'Hello Vue!'\n" +
                    "  }\n" +
                    "})",

            }
        }
    }
</script>

<style scoped>

</style>