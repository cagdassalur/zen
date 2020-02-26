<template>
  <div id="wrapper">
    <main>
      <div class="left-side">
        <volume-slider></volume-slider>
      </div>

      <div class="right-side">
      </div>
    </main>
  </div>
</template>

<script>
  import VolumeSlider from './VolumeSlider/VolumeSlider'

  export default {
    name: 'landing-page',
    components: { VolumeSlider },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }


</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { 
    font-family: 'Source Sans Pro', sans-serif; 
    overflow: hidden; /* Hide scrollbars */
    /* -webkit-app-region: drag */
  }

  button, input, .vue-slider {
    -webkit-app-region: no-drag;
  }

  #wrapper {
    /* background: #141414; */
    background: #000;
    height: 100vh;
    padding: 60px 0px;
    width: 100vw;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }
</style>
