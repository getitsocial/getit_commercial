<template>
  <div>
    <transition name="topModalBg">
      <div
        v-show="show"
        class="modal-bg"
        @click="$emit('dismiss')"
        @keyup.esc="$emit('dismiss')"
      ></div
    ></transition>
    <transition name="topModal">
      <card v-show="show" class="modal-wrapper">
        <div class="modal">
          <div
            class="modal-body max-w-md p-6 sm:p-8"
            :class="[{ 'text-center': centered }]"
          >
            <div v-if="icon">
              <eva-icons :name="icon" fill="currentColor" width="100" />
            </div>
            <div>
              <slot name="header"></slot>
            </div>
            <div class="mb-6 mt-3">
              <slot />
            </div>
            <div
              class="flex justify-end"
              :class="{ 'justify-center': centered }"
            >
              <button
                v-if="dismiss"
                class="w-auto border"
                @click="$emit('dismiss')"
              >
                {{ dismissText }}
              </button>
              <button
                v-if="confirm"
                class="primary w-auto ml-4"
                @click="$emit('confirm')"
              >
                {{ confirmText }}
              </button>
            </div>
          </div>
        </div>
      </card>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    centered: {
      type: Boolean,
      default: false,
    },
    confirm: {
      type: Boolean,
      default: true,
    },
    show: {
      type: Boolean,
      default: true,
    },
    confirmText: {
      type: String,
      default: 'Okay',
    },
    dismiss: {
      type: Boolean,
      default: true,
    },
    dismissText: {
      type: String,
      default: 'Abbruch',
    },
    icon: {
      type: String,
      default: null,
    },
  },
  data: () => ({}),
  watch: {
    show(newValue, oldValue) {
      const rootBody = document.getElementsByTagName('body')[0]
      if (newValue) rootBody.classList.add('overflow-hidden')
      else rootBody.classList.remove('overflow-hidden')
    },
  },
  beforeDestroy() {
    const rootBody = document.getElementsByTagName('body')[0]
    rootBody.classList.remove('overflow-hidden')
  },
}
</script>

<style lang="scss" scoped>
.modal {
  @apply h-screen w-full absolute flex items-center justify-center;
  &-wrapper {
    @apply z-50 fixed top-0 left-0 bottom-0 right-0 bg-transparent;
  }
  &-bg {
    @apply z-50 fixed top-0 left-0 h-screen w-full bg-primary opacity-75;
  }
  &-body {
    @apply bg-white m-3 max-h-full text-info;
  }
}
</style>
