<template>
  <nav class="bg-white border-b py-4 z-50 px-3 sm:px-0 fixed w-full">
    <div class="flex items-center flex-shrink-0 container mx-auto">
      <!-- Brand Area Content -->
      <div class="brand">
        <nuxt-link to="/">
          <img src="~assets/img/logo_primary.svg" alt="" width="40" />
        </nuxt-link>
      </div>
      <!-- Navigation Area -->
      <ul class="navigation flex ml-3 sm:ml-6">
        <li
          v-for="(nav, index) in mainNavigationContent"
          :key="index"
          class="mr-8 mt-1"
        >
          <nuxt-link
            class="desktopNav-button"
            :to="nav.route"
            :exact="nav.exact"
          >
            <span class="align-middle text-primary">
              <unicon :name="nav.icon" fill="currentColor" width="20"
            /></span>
            <span class="hidden sm:inline-block select-none">{{
              nav.name
            }}</span>
          </nuxt-link>
        </li>
      </ul>
      <!-- Right Navigation Area -->
      <ul class="navigation flex ml-auto">
        <li class="ml-3">
          <avatar img-link="/profile" left bordered custom="border border-2"
            ><span class="hidden sm:block mr-2">Peter Pan</span></avatar
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import desktopPoints from './desktopNavigation.json'
import avatar from '@/components/elements/avatar'

export default {
  components: { avatar },
  data: () => ({ ...desktopPoints })
}
</script>

<style lang="scss" scoped>
.desktopNav {
  &-button {
    @apply inline-block text-info select-none;

    &:hover {
      @apply text-light;
    }

    &:focus {
      @apply text-light no-underline;
    }
  }
}

.brand {
  @apply text-white;
}
</style>
