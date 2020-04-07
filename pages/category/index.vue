<template>
  <div>
    <hero-title v-show="!noContentFound" top-title="Kategorien" />
    <div class="container mx-auto">
      <div class="my-3">
        <category-overview :categories="findDataInStore" />
        <transition name="fade">
          <div v-show="noContentFound">
            <empty-state empty-text="Du hast noch keine Kategorien angelegt."
              ><nuxt-link to="/category/new" class="button w-auto"
                >Kategorie anlegen</nuxt-link
              ></empty-state
            >
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import heroTitle from '~/components/elements/heroTitle'
import categoryOverview from '~/components/elements/category/overview'
import emptyState from '~/components/elements/utils/emptyState'
export default {
  components: {
    heroTitle,
    categoryOverview,
    emptyState,
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
    ...mapState({ isDataLoading: (state) => state.isRootLoading }),
    ...mapGetters({ findDataInStore: 'categories/list' }),
    noContentFound() {
      if (this.isDataLoading) return
      return this.findDataInStore?.count === 0
    },
  },
  beforeMount() {
    try {
      this.getData()
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    ...mapActions({
      getData: 'categories/getAll',
    }),
  },
}
</script>
