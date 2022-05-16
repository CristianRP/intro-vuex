import getRandomInt from '../../helpers/getRandomInt'

export const  incrementRandomInt = async ( { commit } ) => {
  commit('toggleLoading')
  const value = await getRandomInt()
  commit('incrementBy', value)
  commit('toggleLoading')
}
