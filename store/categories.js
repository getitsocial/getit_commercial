const endPoint = `categories`

export const state = () => ({
  list: [],
})

export const mutations = {
  setData: (state, data) => {
    state.list = data
  },
  setMyData: (state, data) => {
    state.listMy = data
  },
}

export const actions = {
  // Get All
  async getAll({ commit, state }, params) {
    try {
      commit('setRootLoading', true, { root: true })
      const data = await this.$axios.$get(
        `/api/${endPoint}`,
        params ? { params } : null
      )
      commit('setData', data)
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
    commit('setRootLoading', true, { root: true })
    await this.$axios.post(`/api/${endPoint}`, data)
    commit('setRootLoading', false, { root: true })
  },

  // Put
  async update({ dispatch, commit, state }, data) {
    commit('setRootLoading', true, { root: true })
    await this.$axios.put(`/api/${endPoint}/${data.id}`, data)
    commit('setRootLoading', false, { root: true })
  },

  // Delete
  async delete({ dispatch, commit }, data) {
    commit('setRootLoading', true, { root: true })
    await this.$axios.delete(`/api/${endPoint}/${data.id}`)
    commit('setRootLoading', false, { root: true })
  },
}

// List getter
export const getters = {
  list: (state) => state.list,
}
