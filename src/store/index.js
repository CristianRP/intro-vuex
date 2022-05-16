import getRandomInt from '@/helpers/getRandomInt'
import { createStore } from 'vuex'

export default createStore({
  state: { // data
    count: 1,
    lastMutation: 'none',
    isLoading: false,
    lastRandomInt: 0
  },

  mutations: {
    increment( state ) {
      state.count++
      state.lastMutation = 'increment'
    },
    incrementBy( state, val ) {
      state.count += val
      state.lastMutation = 'incrementBy ' + val
      state.lastRandomInt = val
    },
    toggleLoading( state) {
      state.isLoading = !state.isLoading
      state.lastMutation = 'setLoading ' + state.isLoading
    }
  },

  actions: { // methods
    async incrementRandomInt( { commit } ) {
      commit('toggleLoading')
      const value = await getRandomInt()
      commit('incrementBy', value)
      commit('toggleLoading')
    }
  },

  getters: { // computed
    squareCount( state ) {
      return state.count * state.count
    }
  }
})
