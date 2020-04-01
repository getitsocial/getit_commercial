<template>
  <div class="my-4 flex justify-end">
    <div class="w-full px-1 md:w-auto px-0">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomArea',

  data: () => ({})
}
</script>

<style lang="css" scoped></style>
