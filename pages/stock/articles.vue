<template>
  <div class="container mx-auto">
    <div class="mb-3">
      <articles :articles="findDataInStore" :loading="isDataLoading" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import articles from '~/components/elements/stock/articles'
export default {
  components: {
    articles
  },
  pageTitle: 'Getränke',
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'Neuer Artikel',
        route: '/'
      }
    ]
  },
  data: () => ({}),
  computed: {
    ...mapState({ isDataLoading: (state) => state.articles.isGetPending }),
    ...mapGetters({ findDataInStore: 'articles/list' }),
    noContentFound() {
      return this.findDataInStore.count === 0
    }
  },
  async mounted() {
    try {
      await this.getData({})
    } catch (e) {
      console.log(e.message)
    }
  },
  methods: {
    ...mapActions({
      getData: 'articles/getAll'
    })
  }
}
</script>
