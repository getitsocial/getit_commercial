<template>
  <div
    class="bg-primary z-50 px-3 sm:px-0 z-50"
    :class="{ alternate: alternate }"
  >
    <div class="container mx-auto">
      <div class="flex flex-shrink-0 mx-auto">
        <ul class="navigation flex select-none">
          <li v-for="(item, index) in items.leftNavigationContent" :key="index">
            <nuxt-link :to="item.route" :exact="item.exact">
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
        <ul class="navigation flex ml-auto">
          <li
            v-for="(item, index) in items.rightNavigationContent"
            :key="index"
          >
            <nuxt-link
              v-if="!item.emit"
              :to="{ path: item.route, params: item.params, query: item.query }"
              exact
            >
              {{ item.name }}
              <eva-icons
                v-if="item.icon"
                :name="`${item.icon}-outline`"
                fill="currentColor"
              />
            </nuxt-link>
            <button
              v-else
              class="navlink rounded-none"
              @click="emitAction(item.emit)"
            >
              {{ item.name }}
              <eva-icons
                v-if="item.icon"
                :name="`${item.icon}-outline`"
                fill="currentColor"
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubNavigation',
  props: {
    // Name of the icon
    items: {
      type: Object,
      default() {
        return {}
      },
    },
    alternate: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitAction(action) {
      this.$root.$emit(action)
    },
  },
}
</script>

<style lang="scss" scoped>
.navlink {
  @apply inline-block align-middle transition-all duration-100 ease-in-out no-underline;
  @apply text-white p-2;
  &:hover {
    @apply bg-info;
  }
  &.link-active,
  .link-active-exact {
    @apply bg-secondary;
  }
}

.navigation {
  ul {
    @apply m-0 p-0;
  }
  li a {
    @extend .navlink;
  }
}

.alternate {
  @apply bg-white;
  .navigation {
    li a {
      @apply text-primary;
      &:hover {
        @apply bg-info text-white;
      }
    }
  }
}
</style>
