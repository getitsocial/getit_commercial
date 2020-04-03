<template>
  <div class="flex flex-wrap items-center md:flex-no-wrap h-screen bg-white">
    <div class="w-full p-10 m-auto text-center">
      <h1 class="text-2xl text-info font-bold">
        Sie werden angemeldet...
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'notAuthenticated',
  name: 'Callback',
  layout: 'blank',
  data() {
    return {}
  },
}
</script>
