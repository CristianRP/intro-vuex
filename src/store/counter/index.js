import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

export const counterStore = {
  namespaced: true,

  state,

  mutations,

  actions, // methods

  getters // computed
}
