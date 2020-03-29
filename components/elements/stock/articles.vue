<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="border-b px-6 py-3 flex justify-between">
      <div class="my-auto">
        <h3 class="text-lg leading-6 font-medium text-primary">
          Getränke
        </h3>
        <p
          class="mt-1 max-w-2xl text-sm leading-5 text-light"
          :class="{ 'spinner-dark spinner-left': loading }"
        >
          12 Artikel
        </p>
      </div>
      <div>
        <button class="px-0">
          <span class="hidden sm:block"> Neuer Artikel </span>
          <span class="block sm:hidden"
            ><eva-icons name="plus" fill="currentColor"
          /></span>
        </button>
      </div>
    </div>
    <ul>
      <li
        v-for="article in articles"
        :key="article.id"
        class="bitem-b cursor-pointer hover:bg-grey transition ease-in-out duration-150"
      >
        <div class="p-3 md:p-6 grid grid-cols-3 gap-4">
          <div class="flex items-center">
            <div class="ml-3">
              <p class="text-sm leading-5 font-bold">
                {{ article.name }}
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="ml-3">
              <p class="text-sm leading-5 font-bold">
                {{ article.stock }} im Lager
              </p>
              <p class="text-xs leading-4">{{ article.price }} € Stk.</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    articles: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({})
}
</script>

<style lang="css" scoped></style>
