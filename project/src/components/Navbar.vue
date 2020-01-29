<template>
  <b-navbar toggleable="lg" variant="primary">
    <b-navbar-brand href="https://www.fool.com">
      <img 
      src="../assets/fool-logo.png" 
      class="d-inline-block align-top logo" 
      alt="The Motley Fool"
      width="157"
      height="26"
      />
    </b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        
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
