<template>
    <section class="page">
        <h2>Bedingungen</h2>
        Javascript-Code:
        <pre v-highlightjs="jsCode"><code class="javascript"></code></pre>
        <br/>
        <br/>

        HTML-Template:
        <pre v-highlightjs="htmlCode"><code class="html"></code></pre>

        Ergebnis(HTML):
        <pre v-highlightjs="result"><code class="html"></code></pre>
    </section>
</template>

<script>
    export default {
        name: "BedingungenUndSchleifen",
        data(){
            return {
                jsCode: "<div id=\"app-3\">\n" +
                    "  <span v-if=\"seen\">Now you see me</span>\n" +
                    "</div>",
                htmlCode: "var app3 = new Vue({\n" +
                    "  el: '#app-3',\n" +
                    "  data: {\n" +
                    "    seen: true\n" +
                    "  }\n" +
                    "})",
                result: "<div id=\"app-3\" class=\"demo\">\n<span>Now you see me</span>\n</div>",
            }
        }
    }
</script>

<style scoped>

</style>