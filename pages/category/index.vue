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
import { mapActions, mapGetters, mapState } from 'vuex'
import categoryOverview from '~/components/elements/category/overview'
export default {
  components: {
    categoryOverview,
  },
  data: () => ({}),
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
  mounted() {
    try {
      this.setTitle('Kategorien')
      this.getData()
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    ...mapActions({
      getData: 'categories/getAll',
      setTitle: 'setTitleAction',
    }),
  },
}
</script>
