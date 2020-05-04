<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/firstaid">FirstAid</router-link>
    <router-link to="/Emergency">Emergency</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
nav a {
  font-weight: 700;
  margin: 10px 20px;
}
</style>