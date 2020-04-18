import { getField, updateField } from 'vuex-map-fields'

const endPoint = `shops`

export const state = () => ({
  shop: {
    name: '',
    size: '',
    description: '',
    address: {},
    contact: {
      phone: '',
      website: '',
    },
    companyType: '',
    picture: {},
    logo: {},
  },
  loading: {
    getone: false,
    create: false,
    update: false,
    delete: false,
  },
})

export const mutations = {
  updateField,
  setLoading: (state, data) => {
    state.loading = data
  },
  setShop: (state, data) => {
    state.shop = data
  },
  clearStore: (state, data) => {
    state.shop = {}
  },
}

export const actions = {
  // Get One
  async getOne({ commit }) {
    try {
      const data = await this.$axios.$get(`/api/${endPoint}/active`)
      commit('setShop', data)
      return data
    } catch (error) {}
  },

  // Post
  async create({ dispatch, commit, state }, data) {
    commit('setLoading', { create: true })
    await this.$axios.post(`/api/${endPoint}`, state.shop)
    commit('clearStore')
    commit('setLoading', { create: false })
    await dispatch('refreshToken', null, { root: true })
  },
}

export const getters = {
  getField,
}
