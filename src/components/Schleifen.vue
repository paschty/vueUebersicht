<template>
    <section class="page">
        <h2>Schleifen</h2>
        Javascript-Code:
        <pre v-highlightjs="jsCode"><code class="javascript"></code></pre>

        HTML-Template:
        <pre v-highlightjs="htmlCode"><code class="html"></code></pre>

        Ergebnis(HTML):
        <pre v-highlightjs="result"><code class="html"></code></pre>
    </section>
</template>

<script>
    export default {
        name: "Schleifen",
        data() {
            return {
                jsCode: "var app4 = new Vue({\n" +
                    "  el: '#app-4',\n" +
                    "  data: {\n" +
                    "    todos: [\n" +
                    "      { text: 'Learn JavaScript' },\n" +
                    "      { text: 'Learn Vue' },\n" +
                    "      { text: 'Build something awesome' }\n" +
                    "    ]\n" +
                    "  }\n" +
                    "})",
                htmlCode: "<div id=\"app-4\">\n" +
                    "  <ol>\n" +
                    "    <li v-for=\"todo in todos\">\n" +
                    "      {{ todo.text }}\n" +
                    "    </li>\n" +
                    "  </ol>\n" +
                    "</div>",
                result: "<div id=\"app-4\" class=\"demo\">\n" +
                    "    <ol>\n" +
                    "        <li>\n" +
                    "            Learn JavaScript\n" +
                    "        </li>\n" +
                    "        <li>\n" +
                    "            Learn Vue\n" +
                    "        </li>\n" +
                    "        <li>\n" +
                    "            Build something awesome\n" +
                    "        </li>\n" +
                    "    </ol>\n" +
                    "</div>"
            }
        }
    }
</script>

<style scoped>

</style>