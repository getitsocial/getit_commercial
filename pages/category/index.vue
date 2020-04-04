<template>
  <div class="container mx-auto">
    <div class="my-3">
      <category-overview
        :categories="findDataInStore"
        :loading="isDataLoading"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import categoryOverview from '~/components/elements/category/overview'
export default {
  components: {
    categoryOverview,
  },
  fetch({ params, store }) {
    return store.dispatch('categories/getAll')
  },
  data: () => ({}),
  pageTitle: 'Kategorien',
  middleware: ['authenticated'],
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'Neue Kategorie',
        route: '/category/new',
      },
    ],
  },
  computed: {
    ...mapState({ isDataLoading: (state) => state.categories.isGetPending }),
    ...mapGetters({ findDataInStore: 'categories/list' }),
    noContentFound() {
      return this.findDataInStore.count === 0
    },
  },
}
</script>
