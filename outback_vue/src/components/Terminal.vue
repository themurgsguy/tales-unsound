<template>
  <b-container id="terminal" class="terminal">
    <b-row align-h="center">
      <b-col cols="9">
        <p>{{ name }}</p>
      </b-col>
    </b-row>

    <b-row align-h="center" class="mt-auto">
      <b-col cols="9">
        <p v-for="(log, index) in backlog" :key="index" :class="log.style">{{ log.text }}</p>
      </b-col>
    </b-row>

    <b-row ref="prompt" align-h="center" class="mt-3">
      <b-col cols="9">
        <b-form-group>
          <b-form-input type="text" v-model="prompt" @keyup.enter="onEnter" autocomplete="" autofocus trim></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
const stopWords = ['to', 'the']

export default {
  name: 'terminal',
  mounted () {
    this.fetchPlace(1)
  },
  data: () => ({
    backlog: [],
    prompt: '',
  }),
  computed: {
    name () {
      return this.$store.getters.placeName
    }
  },
  methods: {
    onEnter () {
      const action = this.parseExpression(this.prompt)
      this.prompt = ''

      this.updateFeed(action.action, 'text-muted')

      if (action.verb === 'move') {
        if (action.object === this.name) {
          this.updateFeed(`Dude, I'm like... at the ${action.object}.`)
          return
        }
        const newPlaceId = this.$store.getters.exitByName(action.object).id
        console.log('newPlaceId: ', newPlaceId)
        if (!newPlaceId) {
          this.updateFeed(`I don't see any ${action.object} here.`)
          return
        }
        this.fetchPlace(newPlaceId)
      }
    },
    async fetchPlace (placeId) {
      await this.$store.dispatch('fetchPlace', placeId)

      const description = this.$store.getters.placeDescription
      const exits = this.$store.getters.exitDescriptions.join(' ')

      this.updateFeed(description)
      this.updateFeed(exits)
    },
    async updateFeed (text, style) {
      await this.backlog.push({ text, style })
      window.scroll({
        top: this.$el.scrollHeight,
        behavior: 'smooth'
      })
    },
    parseExpression (expression) {
      const tokens = expression.split(/\s+/)
      const keywords = tokens.filter(token => !stopWords.includes(token))
      return {
        action: expression,
        verb: keywords[0],
        object: keywords.slice(1).join(' ')
      }
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/common";

  .terminal {
    display: flex;
    flex-direction: column;
    padding-top: 1em;
    padding-bottom: 1em;
    min-height: 100vh;
  }

  .terminal .form-control {
    background-color: $bg-color;
    height: calc(1.5em + 0.75em + 2px);
    padding: 0.375em 0;
    font-size: 1em;
    color: $text-color;
    border: none;

    &:focus {
      box-shadow: none;
      outline: none;
      border: none;
      background-color: $bg-color;
      color: $text-color;
    }
  }
  // TEMP: These styles need to change eventually into something
  // more properly done
  p {
    padding-bottom: 0.2em;
  }
  .indented {
    padding-left: 1.25em;
  }
  .text-muted {
    padding-top: 1.2em;
  }
</style>
