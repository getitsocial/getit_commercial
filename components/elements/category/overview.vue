<template>
  <card>
    <ul>
      <li v-if="loading" class="p-4 text-center">
        <i class="spinner-dark"></i>
      </li>
      <li
        v-for="category in categories"
        :key="category.id"
        class="list-element hovered"
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
  </card>
</template>

<script>
export default {
  name: 'CategoryOverview',
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
      this.$router.push('/article')
    }
  }
}
</script>

<style lang="css" scoped></style>
