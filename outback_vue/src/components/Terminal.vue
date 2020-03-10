<template>
  <b-container class="terminal">
    <b-row align-h="center">
      <b-col cols="9">
        <p class="red">{{ placeName }}</p>
      </b-col>
    </b-row>

    <b-row align-h="center" class="mt-auto">
      <b-col cols="9">
        <p v-for="(log, index) in backlog" :key="index">{{ log }}</p>
      </b-col>
    </b-row>

    <b-row align-h="center" class="mt-3">
      <b-col cols="9">
        <b-form-group>
          <b-form-input type="text" v-model="prompt" @keyup.enter="onEnter" autofocus></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'terminal',
  data: () => ({
    backlog: [],
    prompt: ''
  }),
  computed: {
    placeName () {
      return 'Shlong'
    }
  },
  methods: {
    onEnter () {
      this.backlog.push(this.prompt)
      this.prompt = ''
    }
  }
}
</script>

<style lang="scss">
  .terminal {
    display: flex;
    flex-direction: column;
    padding-top: 1em;
    padding-bottom: 1em;
    height: 100%;
    border: solid 1px red;
  }

  .terminal .form-control {
    height: calc(1.5em + 0.75em + 2px);
    padding: 0.375em 0;
    font-size: 1em;
  }
</style>
