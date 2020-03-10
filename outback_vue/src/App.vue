<template>
  <div id="app">
    <terminal></terminal>
  </div>
</template>

<script>
import Terminal from '@/components/Terminal.vue'

export default {
  name: 'App',
  components: {
    Terminal
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";

#app {
  font-family: $font-stack;
  font-size: 1.5em; // 24px
  line-height: 1.5;
  height: 100vh;
}
</style>
