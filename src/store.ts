import { createStore } from 'vuex'

const state = () => ({
  width: document.documentElement.clientWidth
})

const getters = {
  getWidth: (state: { width: number }) => state.width
}

const mutations = {
  currentWidth (state: { width: number }, newWidth: number) {
    state.width = newWidth
  },
}

export default createStore({
  state,
  getters,
  mutations
})