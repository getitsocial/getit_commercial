/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */

// const endPoint = `categories`
export const state = () => ({
  isUploadPending: false,
})

export const mutations = {
  setData: (state, data) => {
    state.file = data
  },
  setUploadPending: (state) => {
    state.isUploadPending = true
  },
  unsetUploadPending: (state) => {
    state.isUploadPending = false
  },
}

export const actions = {
  // Post
  async imageUpload({ dispatch, commit, state }, { formData, folder }) {
    try {
      commit('setUploadPending')
      const { data } = await this.$axios.post(
        `/clientapi/image/upload/${folder}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      commit('unsetUploadPending')
      return data
    } catch (e) {
      commit('unsetUploadPending')
    }
  },

  // Delete
  async imageRemove({ dispatch, commit, state }, image) {
    await this.$axios.delete(`/clientapi/image/delete`, { data: image })
  },
}
