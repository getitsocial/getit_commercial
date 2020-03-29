<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="border-b px-6 py-3 flex justify-between">
      <div class="my-auto">
        <h3 class="text-lg leading-6 font-medium text-primary">
          Kategorien
        </h3>
        <p
          class="mt-1 max-w-2xl text-sm leading-5 text-light"
          :class="{ 'spinner-dark spinner-left': loading }"
        >
          6 Kateogrien
        </p>
      </div>
      <div>
        <button class="px-0">
          <span class="hidden sm:block"> Neue Kategorie </span>
          <span class="block sm:hidden"
            ><eva-icons name="plus" fill="currentColor"
          /></span>
        </button>
      </div>
    </div>
    <ul>
      <li
        v-for="category in categories"
        :key="category.id"
        class="bcategory-b cursor-pointer hover:bg-grey transition ease-in-out duration-150"
        @click="goToArticleList()"
      >
        <div class="p-3 md:p-6 grid grid-cols-2 gap-2">
          <div class="flex item-center">
            <div class="ml-3">
              <p class="text-sm leading-5 font-bold">
                {{ category.name }}
              </p>
            </div>
          </div>
          <div class="flex item-center">
            <div class="ml-3">
              <p class="text-sm leading-5 font-bold">
                {{ category.articles.amount }} Artikel
              </p>
              <p class="text-xs leading-4">
                {{ category.articles.stock }} auf lager
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    categories: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({}),
  methods: {
    goToArticleList() {
      this.$router.push('/stock/articles')
    }
  }
}
</script>

<style lang="css" scoped></style>
