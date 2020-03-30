<template>
  <div class="container mx-auto">
    <div class="my-3">
      <categories :categories="findDataInStore" :loading="isDataLoading" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import categories from '~/components/elements/stock/categories'
export default {
  components: {
    categories
  },
  data: () => ({}),
  pageTitle: 'Kategorien',
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'Neue Kategorie',
        route: '/'
      }
    ]
  },
  computed: {
    ...mapState({ isDataLoading: (state) => state.categories.isGetPending }),
    ...mapGetters({ findDataInStore: 'categories/list' }),
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
      getData: 'categories/getAll'
    })
  }
}
</script>
