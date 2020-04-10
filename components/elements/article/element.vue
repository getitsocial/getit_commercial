<template>
  <card
    class="flex flex-col overflow-hidden select-none"
    :class="{ 'animated hover:shadow-lg cursor-pointer': link }"
    @click="goToDetail"
  >
    <div
      class="flex-shrink-0"
      :class="{ 'cursor-pointer': link }"
      @click="goToDetail"
    >
      <div
        class="h-1"
        :class="[article.published ? 'bg-success' : 'bg-warning']"
      />
      <img
        class="h-56 md:h-auto w-full object-cover"
        :src="imageUrl(article)"
        alt=""
      />
    </div>
    <div class="flex-1 bg-white p-3 flex flex-col justify-between">
      <div class="flex-1">
        <div class="block">
          <h4 class="leading-7 text-xl font-semibold">
            {{ article.name }}
          </h4>
        </div>
        <div class="flex text-sm justify-end content-center font-medium h-6">
          <div class="mr-auto my-auto">
            <span class="inline-block align-middle">
              {{ article.price }} €
            </span>
          </div>
          <div class="text-light my-auto">
            <eva-icons name="archive-outline" fill="currentColor" width="20" />
            <span v-if="article.haveStock" class="inline-block align-middle">{{
              article.stock
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <!--
    <div class="p-3 border-t flex justify-between">
      asd
    </div>
    -->
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
    link: {
      type: String,
      default: null,
    },
  },
  data: () => ({}),
  methods: {
    // eslint disable next line
    imageUrl: ({ picture }) => picture?.secure_url || '/img/placeholder.svg',
    goToDetail() {
      if (!this.link) return
      this.$router.push(this.link)
    },
  },
}
</script>

<style lang="scss" scoped></style>
