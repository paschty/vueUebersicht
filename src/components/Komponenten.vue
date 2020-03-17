<template>
    <section class="page">
        <h2>Komponenten</h2>
        Javascript-Code:
        <pre v-highlightjs="jsCode"><code class="javascript"></code></pre>
        <br/>
        <br/>

        HTML-Template:
        <pre v-highlightjs="htmlCode"><code class="html"></code></pre>
        <br/>
        <br/>

        Ergebnis(HTML):
        <pre v-highlightjs="result"><code class="html"></code></pre>

    </section>
</template>

<script>
    export default {
        name: "Komponenten",
        data() {
            return {
              jsCode: "Vue.component('todo-item', {\n" +
                  "  props: ['todo'],\n" +
                  "  template: '<li>{{ todo.text }}</li>'\n" +
                  "})\n" +
                  "\n" +
                  "var app7 = new Vue({\n" +
                  "  el: '#app-7',\n" +
                  "  data: {\n" +
                  "    groceryList: [\n" +
                  "      { id: 0, text: 'Vegetables' },\n" +
                  "      { id: 1, text: 'Cheese' },\n" +
                  "      { id: 2, text: 'Whatever else humans are supposed to eat' }\n" +
                  "    ]\n" +
                  "  }\n" +
                  "})",
                htmlCode: "<div id=\"app-7\">\n" +
                    "  <ol>\n" +
                    "    <todo-item\n" +
                    "      v-for=\"item in groceryList\"\n" +
                    "      v-bind:todo=\"item\"\n" +
                    "      v-bind:key=\"item.id\"\n" +
                    "    ></todo-item>\n" +
                    "  </ol>\n" +
                    "</div>",
                result: "<div id=\"app-7\" class=\"demo\">\n" +
                    "    <ol>\n" +
                    "        <li>Vegetables</li>\n" +
                    "        <li>Cheese</li>\n" +
                    "        <li>Whatever else humans are supposed to eat</li>\n" +
                    "    </ol>\n" +
                    "</div>"
            };
        }
    }
</script>

<style scoped>

</style>