<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  display: block;
  /* Correction pour éviter le display grid */
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  /* Assurez-vous que le conteneur parent n'empêche pas le sticky */
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  /* Assurez-vous que le conteneur parent n'empêche pas le sticky */
}

body.no-scroll {
  overflow: hidden !important;
  position: fixed;
  width: 100%;
  height: 100%;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
