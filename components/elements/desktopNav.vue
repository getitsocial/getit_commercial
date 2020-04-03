<template>
  <nav class="bg-white py-6 border-b border-gray z-50">
    <div class="flex items-center flex-shrink-0 container mx-auto px-3">
      <!-- Brand Area Content -->
      <div class="hidden sm:block">
        <nuxt-link to="/" class="no-underline focus:no-underline">
          <span class="align-middle text-secondary font-bold text-2xl"
            >DEMOAPP</span
          >
        </nuxt-link>
      </div>
      <!-- Navigation Area -->
      <ul class="flex ml-2 pt-1 sm:ml-6">
        <li
          v-for="(nav, index) in mainNavigationContent"
          :key="index"
          class="mr-6"
        >
          <nuxt-link
            class="desktopNav-button"
            :to="nav.route"
            :exact="nav.exact"
          >
            {{ nav.name }}
          </nuxt-link>
        </li>
      </ul>
      <!-- Right Navigation Area -->
      <ul class="flex ml-auto">
        <li v-for="(nav, index) in rightNavigationContent" :key="index">
          <nuxt-link :to="nav.route">
            <eva-icons
              :name="isActive(nav.route) ? nav.icon : `${nav.icon}-outline`"
              fill="currentColor"
              width="20"
              class="mb-1"
            />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import desktopPoints from './desktopNavigation.json'

export default {
  data: () => ({ ...desktopPoints }),
  methods: {
    isActive(route) {
      return this.$route.path === route
    }
  }
}
</script>

<style lang="scss" scoped>
.desktopNav {
  &-button {
    @apply inline-block text-primary no-underline tracking-wider;

    &:hover {
      @apply text-light;
    }
  }
}
</style>
