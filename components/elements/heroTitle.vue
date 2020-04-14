<template>
  <div
    class="text-info bg-grey w-full z-30"
    :class="{ 'sticky top-0': $store.state.isMobile }"
  >
    <div class="container mx-auto px-3">
      <div class="flex flex-wrap">
        <transition name="slide-fade">
          <div v-if="show" class="flex">
            <button v-if="backButton" class="w-auto" @click="$router.go(-1)">
              <eva-icons name="arrow-back-outline" fill="currentColor" />
            </button>
            <h1
              class="tracking-wider leading-none py-3 md:py-4 select-none text-2xl font-bold"
            >
              <span>{{ topTitle }}</span>
            </h1>
          </div>
        </transition>
        <div v-show="isRootLoading" class="ml-auto my-auto">
          <i class="spinner-dark"></i>
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
    backButton: {
      type: Boolean,
      default: false,
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
