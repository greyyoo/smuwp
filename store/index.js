import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {},
      isLoggedIn: false
    },
    mutations: {
      setUser (state, user) {
        state.user = user
        if (state.user) {
          state.isLoggedIn = true
        } else {
          state.isLoggedIn = false
        }
      }
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        if (req.session.user) {
          commit('setUser', req.session.user)
        }
      }
    }
  })
}

export default createStore
