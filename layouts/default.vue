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
      <div :class="[$store.state.isMobile ? 'mb-20' : 'mt-20']">
        <!-- Hero -->
        <transition name="fade-faster">
          <div class="sticky top-0" style="">
            <hero-title v-if="title" :top-title="title" />
            <sub-menu
              v-if="subNavigation"
              :items="subNavigation"
              :class="{ 'pt-2': !title }"
            />
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
import mobileNav from '@/components/elements/mobileNav'
import desktopNav from '@/components/elements/desktopNav'
import footerNav from '@/components/elements/footerNav'
import onlineStatus from '@/components/elements/onlineStatus'
import subMenu from '@/components/elements/subMenu'
import heroTitle from '@/components/elements/heroTitle'

export default {
  components: {
    mobileNav,
    desktopNav,
    footerNav,
    onlineStatus,
    subMenu,
    heroTitle,
  },
  data: () => ({}),
  computed: {
    title() {
      return this.$route.matched.map((r) => {
        return r.components.default.options
          ? r.components.default.options.pageTitle
          : r.components.default.pageTitle
      })[0]
    },
    subNavigation(navigationItems) {
      return this.$route.matched.map((r) => {
        return r.components.default.options
          ? r.components.default.options.subNavigation
          : r.components.default.subNavigation
      })[0]
    },
    getUser() {
      return this.$store.getters.user
    },
  },
  destroyed() {
    // window.removeEventListener('scroll')
  },
  methods: {
    hideWelcomePopup() {
      this.showWelcomePopup = false
    },
  },
}
</script>
