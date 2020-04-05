<template>
  <div class="min-h-screen flex flex-col bg-gry">
    <toast />
    <online-status />
    <!-- <debug-view v-if="mode === 'development'" /> -->
    <!-- Navigation -->
    <mobile-nav v-if="$store.state.isMobile" class="fixed bottom-0 w-full" />
    <desktop-nav v-else class="fixed top-0 w-full" />
    <!-- Content -->
    <div class="flex-1">
      <div :class="[$store.state.isMobile ? 'mb-20' : 'top-nav']">
        <!-- Hero -->
        <transition name="fade-faster">
          <div
            class="sticky top-0"
            :class="{ 'top-subnavigation': !$store.state.isMobile }"
          >
            <sub-menu v-if="subNavigation" :items="subNavigation" />
          </div>
        </transition>
        <!-- Main Content -->
        <nuxt />
      </div>
    </div>
    <footer-nav :class="[$store.state.isMobile ? 'hidden' : 'mt-3']" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import mobileNav from '@/components/elements/mobileNav'
import desktopNav from '@/components/elements/desktopNav'
import footerNav from '@/components/elements/footerNav'
import onlineStatus from '@/components/elements/onlineStatus'
import subMenu from '@/components/elements/subMenu'

export default {
  components: {
    mobileNav,
    desktopNav,
    footerNav,
    onlineStatus,
    subMenu,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(['user']),
    subNavigation(navigationItems) {
      return this.$route.matched.map((r) => {
        return r.components.default.options
          ? r.components.default.options.subNavigation
          : r.components.default.subNavigation
      })[0]
    },
  },
}
</script>
<style lang="scss" scoped>
.top-nav {
  margin-top: 4.75rem;
}

.top-subnavigation {
  top: 4.75rem;
}
</style>
