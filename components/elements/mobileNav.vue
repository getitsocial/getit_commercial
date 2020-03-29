<template>
  <div class="bg-white p-1 border-t z-40">
    <div class="max-w-sm w-full">
      <ul class="flex justify-between">
        <li
          v-for="(nav, index) in navigationContent"
          :key="index"
          class="text-center"
        >
          <nuxt-link
            class="mobileNav-button animated py-2"
            :to="nav.route"
            :exact="nav.exact"
          >
            <eva-icons
              :name="isActive(nav.route) ? nav.icon : `${nav.icon}-outline`"
              :fill="isActive(nav.route) ? 'currentColor' : 'currentColor'"
            />
            <div
              class="-my-2 py-2 text-xs font-bold"
              :class="isActive(nav.route) ? '' : 'text-light'"
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
  &-button,
  a {
    @apply text-primary inline-block px-2;

    &:hover {
      @apply text-primary;
    }

    &:focus {
      @apply text-primary no-underline;
    }

    &.link-active {
      @apply text-primary no-underline;
    }
  }
}
</style>
