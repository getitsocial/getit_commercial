import { getField, updateField } from 'vuex-map-fields'
import { assign } from 'lodash'

const endPoint = `shops`

export const state = () => ({
  name: '',
  size: '',
  description: '',
  address: {},
  contact: {
    phone: '',
    website: '',
  },
  companyType: '',
  picture: null,
  pictureId: null,
  logo: null,
  logoId: null,
  loading: {
    create: false,
    update: false,
    delete: false,
  },
})

export const mutations = {
  updateField,
  setLoading: (state, data) => {
    state.loading = assign(state.loading, data)
  },
}

export const actions = {
  // Post
  async create({ dispatch, commit, state }, data) {
    const {
      name,
      size,
      description,
      address,
      contact,
      companyType,
      picture,
      pictureId,
      logo,
      logoId,
    } = state
    commit('setLoading', { create: true })
    await this.$axios.post(`/api/${endPoint}`, {
      name,
      size,
      description,
      address,
      contact,
      companyType,
      picture,
      pictureId,
      logo,
      logoId,
    })
    commit('setLoading', { create: false })
  },
}

export const getters = {
  getField,
}
