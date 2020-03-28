<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div
      v-if="hasHeaderSlot"
      class="border-b border-gray-200 px-4 py-5 sm:px-6"
    >
      <!-- Content goes here -->
      <!-- We use less vertical padding on card headers on desktop than on body sections -->
      <slot name="header"></slot>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <!-- Content goes here -->
      <slot />
    </div>
    <div
      v-if="hasFooterSlot"
      class="border-t border-gray-200 px-4 py-4 sm:px-6"
    >
      <!-- Content goes here -->
      <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
      <slot name="header"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  computed: {
    hasFooterSlot() {
      return !!this.$slots.footer
    },
    hasHeaderSlot() {
      return !!this.$slots.header
    }
  }
}
</script>

<style lang="css" scoped></style>
