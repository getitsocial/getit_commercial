<template>
  <div
    class="px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 p-3"
  >
    <article-element
      v-for="article in articles.rows"
      :key="article.id"
      :article="article"
      :link="`/article/${article.id}`"
    />
  </div>
</template>

<script>
import articleElement from '~/components/elements/article/element'
export default {
  name: 'ArticleOveview',
  components: {
    articleElement,
  },
  props: {
    articles: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({}),
}
</script>

<style lang="css" scoped></style>
