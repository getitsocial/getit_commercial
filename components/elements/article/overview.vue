<template>
  <card>
    <ul>
      <li v-if="loading" class="p-4 text-center">
        <i class="spinner-dark"></i>
      </li>
      <li
        v-for="article in articles"
        :key="article.id"
        class="list-element hovered"
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
  </card>
</template>

<script>
export default {
  name: 'ArticleOveview',
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
