import { assign } from 'lodash'

const endPoint = `categories`

export const state = () => ({
  list: {
    count: null,
    rows: [],
  },
  loading: {
    create: false,
    update: false,
    delete: false,
  },
})

export const mutations = {
  setData: (state, { data, headers }) => {
    state.list = {
      rows: data,
      count: parseInt(headers['x-total-count']),
    }
  },
  setLoading: (state, data) => {
    state.loading = assign(state.loading, data)
  },
}

export const actions = {
  // Get All
  async getAll({ commit, state }, params) {
    try {
      commit('setRootLoading', true, { root: true })
      const response = await this.$axios.get(
        `/api/${endPoint}`,
        params ? { params } : null
      )
      commit('setData', response)
      commit('setRootLoading', false, { root: true })
    } catch (error) {
      commit('setRootLoading', false, { root: true })
    }
  },

  // Get One
  async getOne({ commit }, id) {
    try {
      commit('setRootLoading', true, { root: true })
      const data = await this.$axios.$get(`/api/${endPoint}/${id}`)
      commit('setRootLoading', false, { root: true })
      return data
    } catch (error) {
      commit('setRootLoading', false, { root: true })
    }
  },

  // Post
  async create({ dispatch, commit, state }, data) {
    commit('setLoading', { create: true })
    await this.$axios.post(`/api/${endPoint}`, data)
    commit('setLoading', { create: false })
  },

  // Put
  async update({ dispatch, commit, state }, data) {
    commit('setLoading', { update: true })
    await this.$axios.patch(`/api/${endPoint}/${data.id}`, data)
    commit('setLoading', { update: false })
  },

  // Delete
  async delete({ dispatch, commit }, { id }) {
    commit('setLoading', { delete: true })
    await this.$axios.delete(`/api/${endPoint}/${id}`)
    commit('setLoading', { delete: false })
  },
}

// List getter
export const getters = {
  list: (state) => state.list,
}
