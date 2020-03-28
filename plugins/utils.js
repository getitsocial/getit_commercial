import Vue from 'vue'

// Mixins

Vue.mixin({
  computed: {
    currentPage() {
      return this.$route.path
    },
    user() {
      return this.$store.state?.user
    }
  },
  methods: {
    isEmpty(someObject) {
      return (
        Object.entries(someObject).length === 0 &&
        someObject.constructor === Object
      )
    },
    promiseTimeout: (ms) => new Promise((resolve) => setTimeout(resolve, ms))
  }
})
