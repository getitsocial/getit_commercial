<template>
  <card>
    <div class="flex">
      <img :src="imageUrl(article)" alt="" width="120" />

      <div class="flex flex-col content-between w-full p-3">
        <div class="flex flex-wrap">
          <h3>{{ article.name }}</h3>
          <div class="tag tag-primary ml-auto">{{ article.stock }}</div>
        </div>
        <div class="mt-auto">{{ article.price }} €</div>
      </div>
    </div>
  </card>
</template>

<script>
/* eslint-disable camelcase */
export default {
  name: 'ArticleElement',
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),
  methods: {
    // eslint disable next line
    imageUrl: ({ picture }) => picture?.secure_url || '/img/placeholder.svg',
  },
}
</script>

<style lang="scss" scoped></style>
