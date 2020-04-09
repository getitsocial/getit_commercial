<template>
  <div
    class="fixed inset-0 flex items-start justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end z-50"
  >
    <transition-group
      name="toast"
      class="max-w-sm w-full rounded-lg pointer-events-auto"
    >
      <div
        v-for="(t, index) in toasts"
        :key="t.toastId"
        class="animated rounded-lg shadow-lg overflow-hidden my-3 bg-primary"
      >
        <div class="p-4">
          <div class="flex items-center">
            <div class="w-0 flex-1 flex justify-between">
              <p class="w-0 flex-1 text-sm leading-5 font-medium text-white">
                {{ t.message }}
              </p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button class="p-0">
                <eva-icons
                  name="close-outline"
                  fill="#ffffff"
                  class="cursor-pointer"
                  @click="$store.commit('toasts/removeToast', index)"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { debounce } from 'lodash'
export default {
  name: 'Toast',
  computed: {
    toasts() {
      return this.$store.getters['toasts/list']
    },
  },
  mounted() {
    this.$root.$on(
      'keyDownEscape',
      debounce(() => {
        this.$store.commit('toasts/removeLastToast')
      }, 10)
    )
  },
  methods: {
    toastColor(color) {
      return color ? `toast-${color}` : 'toast-primary'
    },
  },
}
</script>
