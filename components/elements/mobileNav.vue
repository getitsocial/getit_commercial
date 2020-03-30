<template>
  <div class="flex flex-wrap bg-white p-1 border-t border-gray z-40">
    <div class="max-w-sm w-full mx-auto">
      <ul class="flex justify-between">
        <li
          v-for="(nav, index) in navigationContent"
          :key="index"
          class="text-center"
        >
          <nuxt-link
            class="mobileNav-button animated"
            :to="nav.route"
            :exact="nav.exact"
          >
            <eva-icons
              :name="isActive(nav.route) ? nav.icon : `${nav.icon}-outline`"
              fill="currentColor"
            />
            <div
              class="-my-1 py-1 text-xs font-bold"
              :class="isActive(nav.route) ? '' : 'text-primary-light'"
            >
              {{ nav.name }}
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navigationPoints from './mobileNavigation.json'

export default {
  data: () => ({ ...navigationPoints }),
  methods: {
    isActive(route) {
      return this.$route.path === route
    }
  }
}
</script>
<style lang="scss" scoped>
.mobileNav {
  &-button {
    @apply text-primary inline-block pt-2 px-4;

    &:hover {
      @apply text-primary;
    }

    &:focus {
      @apply no-underline;
    }

    &.link-active {
      @apply text-primary;
    }
  }
}
</style>
