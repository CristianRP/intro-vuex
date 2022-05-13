import getRandomInt from '@/helpers/getRandomInt'
import { createStore } from 'vuex'

export default createStore({
  state: {
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
    }
  },

  actions: {
    async incrementRandomInt( context ) {
      this.isLoading = true
      const value = await getRandomInt()
      context.commit('incrementBy', value)
    }
  }
})
