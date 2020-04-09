<template>
  <card>
    <div class="flex">
      <img :src="imageUrl(article)" alt="" class="w-20 md:w-32" />

      <div class="flex flex-col content-between w-full p-3">
        <div class="flex">
          <div>
            <h3 class="text-primary font-bold text-xl md:text-2xl">
              {{ article.name }}
            </h3>
            <p class="leading-none text-info">{{ article.price }} €</p>
          </div>
          <div class="ml-auto">
            <span
              class="tag"
              :class="[article.published ? 'tag-success' : 'tag-warning']"
            ></span>
            <span class="tag tag-primary">{{ article.stock }}</span>
          </div>
        </div>
        <div class="mt-auto flex">
          <div class="ml-auto">
            <!-- TODO: Implement quickactions -->
            <!-- BUTTONS MINUS PLUS -->
          </div>
        </div>
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
