<template>
  <b-navbar toggleable="lg" variant="primary">
    <b-navbar-brand href="#">
      <img 
      src="../assets/fool-logo.png" 
      class="d-inline-block align-top logo" 
      alt="Kitten"
      width="157"
      height="26"
      />
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto"></b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
