import * as filestack from 'filestack-js'
const client = filestack.init(process.env.VUE_APP_FILESTACK_API_KEY)

// const endPoint = `categories`
export const state = () => ({
  file: null,
  isUploadPending: false
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
  }
}

export const actions = {
  // Post
  async imageUpload({ dispatch, commit, state }, file) {
    commit('setUploadPending')
    const res = await client.upload(file)
    console.log(res)
    commit('unsetUploadPending')
  }
}
