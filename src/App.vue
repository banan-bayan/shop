<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from "@/components/V-wrapper.vue";
  export default {
    name: 'app',
    components: {Wrapper}, 
  }
</script>

<style lang="scss"> 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
