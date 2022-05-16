
export const increment = ( state ) => {
  state.count++
  state.lastMutation = 'increment'
}

export const incrementBy = ( state, val ) => {
  state.count += val
  state.lastMutation = 'incrementBy ' + val
  state.lastRandomInt = val
}

export const toggleLoading = (state) => {
  state.isLoading = !state.isLoading
  state.lastMutation = 'setLoading ' + state.isLoading
}

