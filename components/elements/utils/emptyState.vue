<template>
  <div class="flex items-center justify-center mt-5">
    <div class="text-center w-auto">
      <img :src="`/img/${image}.svg`" alt="" width="300" class="mx-auto" />
      <h2 class="text-info font-bold mt-4 mb-2">{{ emptyText }}</h2>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmptyState',
  props: {
    image: {
      type: String,
      default: 'fitting',
    },
    emptyText: {
      type: String,
      default: 'Du hast noch keine Einträge',
    },
  },
  data: () => ({}),
}
</script>

<style lang="css" scoped></style>
