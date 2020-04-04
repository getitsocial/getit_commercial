<template>
  <div class="container mx-auto">
    <div class="mb-3">
      <h2 class="text-info">aa</h2>
      <article-oveview :articles="findDataInStore" :loading="isDataLoading" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
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
        emit: 'newArticle',
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
  mounted() {
    this.$root.$on('newArticle', (obj) => {
      this.setOne(this.category)
      this.$router.push('/article/new')
    })
    this.setTitle(this.category.name)
    this.getData({ id: this.category.id })
  },
  methods: {
    ...mapActions({
      getData: 'articles/getAll',
      setTitle: 'setTitleAction',
    }),
    ...mapMutations({
      setOne: 'categories/setOne',
    }),
  },
}
</script>
