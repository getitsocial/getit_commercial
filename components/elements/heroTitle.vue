<template>
  <div class="bg-info text-white w-full z-50 shadow-sm">
    <div class="container mx-auto px-3">
      <transition name="slide-fade">
        <div v-if="show">
          <h1
            class="tracking-wider leading-none py-5 md:py-7 select-none"
            :class="[$store.state.isMobile ? 'text-xl' : 'text-3xl']"
          >
            {{ topTitle }}
          </h1>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
/*
 * Scroll Effect
 * https://tahazsh.com/hide-navbar-on-scroll-down-in-vue
 */
export default {
  name: 'HeroTitle',
  props: {
    // Name of the icon
    topTitle: {
      type: String,
      default: undefined
    }
  },
  data: () => ({
    show: true,
    transitionName: 'slide-left'
  }),
  watch: {
    async $route(to, from) {
      this.show = false
      await this.promiseTimeout(300)
      this.show = true
    }
  },
  mounted() {
    this.show = true
  }
}
</script>
<style lang="scss">
.scrollShadow {
  box-shadow: 0px 12px 13px 0px rgba(0, 0, 0, 0.1);
}
</style>
