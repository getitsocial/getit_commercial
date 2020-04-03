import Vue from 'vue'

// Mixins

Vue.mixin({
  computed: {
    currentPage() {
      return this.$route.path
    },
    user() {
      return this.$store.state?.user
    },
  },
  methods: {
    isEmpty(someObject) {
      return (
        Object.entries(someObject).length === 0 &&
        someObject.constructor === Object
      )
    },
    promiseTimeout: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  },
})

// Injects
export default ({ app, store, error }, inject) => {
  // Add Toast
  inject('addToast', ({ message, toastType, pill, dontHide }) =>
    store.dispatch('toasts/add', {
      message,
      toastType,
      toastId: new Date().valueOf(),
      pill,
      dontHide,
    })
  )
}
