const dismissInterval = 4000

export const state = () => ({
  toasts: [],
})

export const getters = {
  list(state) {
    return state.toasts
  },
}

export const mutations = {
  addToast(state, data) {
    state.toasts.push(data)
  },
  removeToast({ toasts }, index) {
    toasts.splice(index, 1)
  },
  removeToastById(state, toastId) {
    const index = state.toasts.findIndex((toast) => toast.toastId === toastId)
    state.toasts.splice(index, 1)
  },
  removeLastToast(state, toastId) {
    state.toasts.pop()
  },
}

export const actions = {
  async add({ commit }, data) {
    if (!data.message) {
      return
    }
    commit('addToast', data)
    if (!data.dontHide) {
      await setTimeout(
        () => commit('removeToastById', data.toastId),
        dismissInterval
      )
    }
  },
  remove({ state, commit }, { toastId }) {
    commit('removeToast', toastId)
  },
}
