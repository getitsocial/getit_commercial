import { getField, updateField } from 'vuex-map-fields'

export const state = () => ({
  company: {
    name: '',
    size: '',
    address: {},
  },
})

export const mutations = {
  updateField,
}

export const getters = {
  getField,
}
