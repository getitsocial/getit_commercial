<template>
  <div />
</template>
<script>
export default {
  data: () => ({
    online: true
  }),
  watch: {
    online(val) {
      this.$addToast({
        message: this.online ? 'You are online' : 'You are offline',
        toastType: this.online ? 'primary' : 'warning'
      })
    }
  },
  mounted() {
    if (!window.navigator) {
      this.online = false
      return
    }
    this.online = Boolean(window.navigator.onLine)
    window.addEventListener('offline', this._toggleNetworkStatus)
    window.addEventListener('online', this._toggleNetworkStatus)
  },
  destroyed() {
    window.removeEventListener('offline', this._toggleNetworkStatus)
    window.removeEventListener('online', this._toggleNetworkStatus)
  },
  methods: {
    _toggleNetworkStatus({ type }) {
      this.online = type === 'online'
    }
  }
}
</script>
