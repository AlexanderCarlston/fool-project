<template>
  <div id="app">
    <Navbar></Navbar>

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

<style>

nav:after {
  background: linear-gradient(to right, #336699 16%,#ffcd02 16%, #ffcd02 32%, #e84f47 32%, #e84f47 48%, #339933 48%, #339933 64%, #336699 64%,#336699 80%,#ffcd02 80%);
  position: absolute;
  content: '';
  height: 4px;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
