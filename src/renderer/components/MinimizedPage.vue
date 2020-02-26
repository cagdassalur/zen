<template>
  <div id="wrapper" v-on:click="openMainWindow()">
    
  </div>
</template>

<script>
  // import {  } from "../";
  export default {
    name: 'minimized-page',
    components: { },
    methods: {
      openMainWindow(){
        console.log("CLICKED")
        this.$router.push('landing-page')
      }
     }
  }
</script>

<style scoped>
  #wrapper {
    /* background: #141414; */
    background: rgb(190, 73, 73);
    height: 100vh;
    padding: 60px 0px;
    width: 100vw;  
    }

</style>
