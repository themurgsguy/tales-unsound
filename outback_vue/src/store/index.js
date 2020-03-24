import Vue from 'vue'
import Vuex from 'vuex'
import { $fetch } from '@/plugins/fetch'

Vue.use(Vuex)

// const ExitNotFound = { id: 0, name: null, description: null}

// const places = [
//   {
//     id: 1,
//     name: 'attic',
//     description: "I sit crossed legged on the floor, on top of a shaggy rug placed between the TV stand and the old sunken couch. Rays of light peirce through a dusty window on the ceiling, their intense brightness warmly contrasting with the otherwise dim atmosphere inside the room.",
//     exits: [
//       {
//         id: 2,
//         name: 'bookshelf',
//         description: 'A massive Bookself spans across the entire front wall.'
//       },
//       {
//         id: 3,
//         name: 'tv stand',
//         description: "Sounds that resemble an Atari 600 blip away over by the TV stand.",
//       },
//       {
//         id: 4,
//         name: "window",
//         description: "Intense rays are being cast from the upper left window revealing specs of dusk as they float by."
//       }
//     ],
//   },
//   {
//     id: 2,
//     name: 'bookshelf',
//     description: "I stand before the massive bookshelf.",
//     exits: [
//       {
//         id: 1,
//         name: 'attic',
//         description: 'behind me is the rest of the attic.'
//       },
//       {
//         id: 3,
//         name: 'tv stand',
//         description: "Sounds that resemble an Atari 600 blip away over by the TV stand.",
//       },
//       {
//         id: 4,
//         name: "window",
//         description: "Intense rays are being cast from the upper left window revealing specs of dusk as they float by."
//       }
//     ]
//   }
// ]

export default new Vuex.Store({
  state: {
    id: '',
    place: '',
    description: '',
    exits: [],
    items: []
  },
  mutations: {
    place (state, place) {
      state.id = place.id
      state.place = place.name
      state.description = place.description
      state.exits = place.exits
      state.items = place.items
    }
  },
  actions: {
    async fetchPlace ({ commit }, placeId) {
      try {
        const newPlace = await $fetch(`/theoutback/place/${placeId}`)
        commit('place', newPlace)
      } catch (e) {
        console.error(`fetchPlace: ${e.message}`)
      }
    }
  },
  getters: {
    placeId: state => state.id,
    placeName: state => state.place,
    placeDescription: state => state.description,
    exitDescriptions: state => {
      return state.exits.map(exit => exit.description)
    },
    exitByName: state => name => {
      return state.exits.find(exit => exit.name === name)
    },
    exitById: state => id => {
      return state.exits.find(exit => exit.id === id)
    }
  }
})
