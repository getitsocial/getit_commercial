<template>
  <card>
    <ul>
      <li
        v-for="category in categories.rows"
        :key="category.id"
        class="list-element hovered"
        @click="goToArticleList(category.id)"
      >
        <div class="p-3 md:p-6 grid grid-cols-2 gap-2 text-primary">
          <div class="flex items-center">
            <div class="ml-3">
              <div class="text-sm leading-5 font-bold">
                {{ category.name }}
              </div>
            </div>
          </div>
          <div class="flex item-center justify-end">
            <div class="ml-3">
              <eva-icons name="chevron-right-outline" fill="currentColor" />
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
    categories: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
  methods: {
    goToArticleList(articleId) {
      this.$router.push(`/category/${articleId}`)
    },
  },
}
</script>

<style lang="css" scoped></style>
