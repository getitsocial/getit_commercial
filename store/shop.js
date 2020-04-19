import { getField, updateField } from 'vuex-map-fields'

const endPoint = `shops`

export const state = () => ({
  shop: {
    _id: null,
    name: '',
    size: '',
    description: '',
    address: {
      locationId: null,
    },
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
    if (!data.picture) data.picture = {}
    if (!data.logo) data.logo = {}
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
    } catch (error) {
      console.log(error)
    }
  },

  // CheckName
  async checkName({ commit }, name) {
    await this.$axios.$post(`/api/${endPoint}/checkName`, { name })
  },

  // Post
  async create({ dispatch, commit, state }, data) {
    commit('setLoading', { create: true })
    await this.$axios.post(`/api/${endPoint}`, state.shop)
    commit('clearStore')
    commit('setLoading', { create: false })
    await dispatch('refreshToken', null, { root: true })
  },

  // Update
  async update({ dispatch, commit, state: { shop } }, data) {
    commit('setLoading', { update: true })
    await this.$axios.patch(`/api/${endPoint}/${shop.id}`, shop)
    await dispatch('getMe', null, { root: true })
    commit('setLoading', { update: false })
  },
}

export const getters = {
  getField,
}
