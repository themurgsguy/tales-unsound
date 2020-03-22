<template>
  <div id="app">
    <terminal/>
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
@import "@/assets/scss/common";

html,
body {
  background-color: $bg-color;
}

#app {
  font-family: $font-stack;
  font-size: 1.375em; // 20px
  font-weight: 500;
  line-height: 1.5;
  color: $text-color;
}
</style>
