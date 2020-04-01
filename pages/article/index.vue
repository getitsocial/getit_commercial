<template>
  <div class="container mx-auto">
    <div class="mb-3">
      <article-oveview :articles="findDataInStore" :loading="isDataLoading" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import articleOveview from '~/components/elements/article/overview'
export default {
  components: {
    articleOveview
  },
  pageTitle: 'Getränke',
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'Neuer Artikel',
        route: '/article/new'
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
