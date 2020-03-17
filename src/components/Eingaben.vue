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
        <button v-on:click="reverseMessage">Reverse Message</button>

    </section>
</template>

<script>
    export default {
        name: "Eingaben",
        data() {
            return {
                message: "Hello Vue.js!",
                htmlCode: "<div id=\"app-5\">\n" +
                    "  <p>{{ message }}</p>\n" +
                    "  <button v-on:click=\"reverseMessage\">Reverse Message</button>\n" +
                    "</div>",
                jsCode: "var app5 = new Vue({\n" +
                    "  el: '#app-5',\n" +
                    "  data: {\n" +
                    "    message: 'Hello Vue.js!'\n" +
                    "  },\n" +
                    "  methods: {\n" +
                    "    reverseMessage: function () {\n" +
                    "      this.message = this.message.split('').reverse().join('')\n" +
                    "    }\n" +
                    "  }\n" +
                    "})",

            }
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('');
            }
        }
    }
</script>

<style scoped>

</style>