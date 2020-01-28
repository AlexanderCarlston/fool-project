<template>
  <div id="app">

      <Navbar></Navbar>
      <h1>Django VueJs</h1>

      
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">

</style>
