<template>
  <div class="bg-info text-white w-full z-50 shadow-sm">
    <div class="container mx-auto px-3">
      <div class="flex flex-wrap">
        <transition name="slide-fade">
          <div v-if="show">
            <h1
              class="tracking-wider leading-none py-5 md:py-7 select-none"
              :class="[$store.state.isMobile ? 'text-xl' : 'text-3xl']"
            >
              <span>{{ topTitle }}</span>
            </h1>
          </div>
        </transition>
        <div v-show="isRootLoading" class="ml-auto my-auto">
          <i class="spinner-light"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
 * Scroll Effect
 * https://tahazsh.com/hide-navbar-on-scroll-down-in-vue
 */
import { mapState } from 'vuex'

export default {
  name: 'HeroTitle',
  props: {
    // Name of the icon
    topTitle: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    show: true,
    transitionName: 'slide-left',
  }),
  computed: {
    ...mapState({ isRootLoading: (state) => state.isRootLoading }),
  },
  watch: {
    async $route(to, from) {
      this.show = false
      await this.promiseTimeout(300)
      this.show = true
    },
  },
}
</script>
<style lang="scss">
.scrollShadow {
  box-shadow: 0px 12px 13px 0px rgba(0, 0, 0, 0.1);
}
</style>
