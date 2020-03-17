<template>
  <div id="mycore">
    <header>
      <img src="./assets/logo.png">
      <Navigation />
    </header>
    <h1>Vue.js Übersicht</h1>
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: 'App',
  components: {Navigation}
}
</script>

<style scoped>
#mycore {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

  h1 {
    text-align: center;
    margin: 0px;
    padding: 10px;
  }

  section.page {
    padding: 4rem 2rem;
    background-color: #e9ecef;
    width: 70%;
    border-radius: .3rem;
    margin: auto;
    margin-top: 2rem;
  }

  header {
    background-color: #30424c;
    color: white;
    padding: 15px;
    text-align: center;
  }

</style>
