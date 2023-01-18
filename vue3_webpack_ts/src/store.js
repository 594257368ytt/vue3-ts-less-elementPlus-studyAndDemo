import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      patients: []
    }
  }
})

export default store;