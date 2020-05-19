<template>
  <div id="app">
    <ImpressDemo />
  </div>
</template>

<script>
import ImpressDemo from './components/ImpressDemo.vue'

export default {
  name: 'App',
  components: {
    ImpressDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
