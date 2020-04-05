<template>
  <div>
    <hero-title :top-title="title" />
    <div class="container mx-auto">
      <div class="mb-3">
        <article-oveview :articles="findDataInStore" :loading="isDataLoading" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import heroTitle from '~/components/elements/heroTitle'
import articleOveview from '~/components/elements/article/overview'
export default {
  components: {
    heroTitle,
    articleOveview,
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
  async asyncData({ store, params }) {
    const { name } = await store.dispatch('categories/getOne', params.id)
    return { title: name }
  },
  data: () => ({}),
  computed: {
    ...mapState({ isDataLoading: (state) => state.articles.isGetPending }),
    ...mapGetters({ findDataInStore: 'articles/list' }),
    noContentFound() {
      return this.findDataInStore.count === 0
    },
  },
  mounted() {
    this.$root.$on('newArticle', (obj) => {
      this.$router.push('/article/new')
    })
    this.getArticleData(this.$route.params)
  },
  methods: {
    ...mapActions({
      getArticleData: 'articles/getAll',
    }),
  },
}
</script>
