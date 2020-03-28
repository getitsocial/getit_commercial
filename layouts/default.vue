<template>
  <div class="min-h-screen flex flex-col bg-grey">
    <!-- Navigation -->
    <mobile-nav v-if="$store.state.isMobile" class="fixed bottom-0 w-full" />
    <desktop-nav v-else class="fixed top-0 w-full" alternate />
    <!-- Content -->
    <div class="flex-1">
      <div :class="[$store.state.isMobile ? 'mb-20' : 'mt-20']">
        <!-- Main Content -->
        <nuxt />
      </div>
    </div>
    <footer-nav v-if="!$store.state.isMobile" />
  </div>
</template>

<script>
import mobileNav from '~/components/elements/mobileNav'
import desktopNav from '~/components/elements/desktopNav'
import footerNav from '~/components/elements/footer'

export default {
  components: {
    mobileNav,
    desktopNav,
    footerNav
  },
  data: () => ({
    open: false,
    items: [
      {
        name: 'Bestellungen',
        link: '/',
        icon: 'shopping-basket'
      },
      {
        name: 'Bestand',
        link: '/',
        icon: 'archive'
      },
      {
        name: 'Team',
        link: '/',
        icon: 'users-alt'
      },
      {
        name: 'Unternehmen',
        link: '/',
        icon: 'store-alt'
      }
    ]
  })
}
</script>

<style></style>
