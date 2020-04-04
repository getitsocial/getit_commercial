<template>
  <div class="max-w-xl mx-auto px-3">
    <!-- Top Bar -->
    <div class="pt-5 md:pt-10 md:pb-5">
      <button class="w-auto ml-auto p-0" @click="$router.go(-1)">
        <eva-icons name="close-outline" fill="currentColor" />
      </button>
    </div>
    <div class="mt-4">
      <nuxt />
    </div>
  </div>
</template>
<script>
export default {}
</script>
