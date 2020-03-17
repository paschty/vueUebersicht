<template>
    <section class="page">
        <h2>Deklaratives Rendering</h2>
        Javascript-Code:
        <pre v-highlightjs="jsCode"><code class="javascript"></code></pre>
        <br/>
        <br/>

        HTML-Template:
        <pre v-highlightjs="htmlCode"><code class="html"></code></pre>

        Ergebnis:
        <pre v-highlightjs="result"><code class="html"></code></pre>

    </section>
</template>


<script>

    export default {
        name: "VueInstanz",
        data(){
            return {
                jsCode: "var app = new Vue({\n" +
                    "  el: '#app',\n" +
                    "  data: {\n" +
                    "    message: 'Hello Vue!'\n" +
                    "  }\n" +
                    "})",
                htmlCode: "<div id=\"app\">\n" +
                    "  {{ message }}\n" +
                    "</div>",
                result: "Hello Vue!"
            }
        }
    }
</script>

<style scoped>

</style>