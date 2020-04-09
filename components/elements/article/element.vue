<template>
  <card>
    <div class="flex">
      <img :src="imageUrl(article)" alt="" width="120" />

      <div class="flex flex-col content-between w-full p-3">
        <div class="flex flex-wrap">
          <h3>{{ article.name }}</h3>
          <div class="ml-auto">
            <span
              class="tag"
              :class="[article.published ? 'tag-success' : 'tag-warning']"
            ></span>
            <span class="tag tag-primary">{{ article.stock }}</span>
          </div>
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
