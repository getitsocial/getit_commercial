<template>
  <transition-group name="toasts" class="toast-wrapper">
    <div
      v-for="(t, index) in toasts"
      :key="t.toastId"
      class="p-2 toasts-item"
      :tabindex="index"
    >
      <div :class="toastColor(t.toastType)" class="toast shadow-lg">
        <span v-if="t.pill" class="toast-pill">{{ t.pill }}</span>
        <span class="font-semibold mx-2 text-left flex-auto">{{
          t.message
        }}</span>
        <eva-icons
          name="close-outline"
          fill="#f0f0f0"
          class="cursor-pointer"
          @click="$store.commit('toasts/removeToast', index)"
        />
      </div>
    </div>
  </transition-group>
</template>

<script>
import { mapActions } from 'vuex'
import { debounce } from 'lodash'
export default {
  name: 'Toast',
  computed: {
    toasts() {
      return this.$store.getters['toasts/list']
    }
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
    ...mapActions(['removeAlert']),
    toastColor(color) {
      return color ? `toast-${color}` : 'toast-primary'
    }
  }
}
</script>
<style lang="scss" scoped>
// Toast
.toast {
  @apply p-2 rounded inline-flex;

  &-wrapper {
    @apply w-full fixed text-right;
    z-index: 9999;
  }

  &-pill {
    @apply flex rounded uppercase px-2 py-1 text-xs font-bold;
  }

  &-primary {
    background-color: theme('colors.primary');
    color: theme('colors.white');

    .toast-pill {
      background-color: theme('colors.light');
    }
  }

  &-warning {
    background-color: theme('colors.warning');
    color: theme('colors.grey');

    .toast-pill {
      background-color: theme('colors.warning');
    }
  }

  &-danger {
    background-color: theme('colors.danger');
    color: theme('colors.grey');

    .toast-pill {
      background-color: theme('colors.danger');
    }
  }
}
</style>
