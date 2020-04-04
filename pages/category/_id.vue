<template>
  <div class="container mx-auto">
    <div class="mb-3">
      <h2 class="text-info">{{ category.name }}</h2>
      <article-oveview :articles="findDataInStore" :loading="isDataLoading" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import articleOveview from '~/components/elements/article/overview'
export default {
  components: {
    articleOveview,
  },
  async asyncData({ params, store }) {
    const category = await store.dispatch('categories/getOne', params.id)
    await store.dispatch('articles/getAll', params)
    return { category }
  },
  middleware: ['authenticated'],
  pageTitle: 'Artikel',
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'Neuer Artikel',
        route: '/article/new',
        params: { aaa: 'bbb' },
      },
    ],
  },
  computed: {
    ...mapState({ isDataLoading: (state) => state.articles.isGetPending }),
    ...mapGetters({ findDataInStore: 'articles/list' }),
    noContentFound() {
      return this.findDataInStore.count === 0
    },
  },
}
</script>
