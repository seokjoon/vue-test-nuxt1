export const actions = {
  setItem({ commit, state }) {
    commit('setItem')
  },
}


export const getters = {
  getItem: state => state.item,
}


export const mutations = {
  setItem(state) {
    state.item = 'foo'
  },
}


export const state = () => ({
  item: '',
})
