<template>
  <div>
    <hero-title v-show="!noContentFound" :top-title="$t('nav.stock')" />
    <div class="container mx-auto">
      <div class="my-3">
        <search-input v-if="!noContentFound" @search="applySearch" />
        <category-overview :categories="findDataInStore" />
        <transition name="fade">
          <div v-show="noContentFound">
            <empty-state :empty-text="$t('no_categories_yet')"
              ><nuxt-link to="/category/new" class="button w-auto">{{
                $t('new_category')
              }}</nuxt-link></empty-state
            >
          </div>
        </transition>
        <transition name="fade">
          <div v-show="noSearchContentFound">
            <empty-state :empty-text="$t('no_results')" image="search"
              ><nuxt-link to="/category/new" class="button w-auto">{{
                $t('new_category')
              }}</nuxt-link></empty-state
            >
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { isEmpty } from 'lodash'
import heroTitle from '~/components/elements/heroTitle'
import categoryOverview from '~/components/elements/category/overview'
import emptyState from '~/components/elements/utils/emptyState'
import searchInput from '~/components/elements/utils/searchInput'

export default {
  components: {
    heroTitle,
    categoryOverview,
    emptyState,
    searchInput,
  },
  middleware: ['authenticated'],
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'new_category',
        route: '/category/new',
      },
    ],
  },
  computed: {
    ...mapState({ isDataLoading: (state) => state.isRootLoading }),
    ...mapGetters({ findDataInStore: 'categories/list' }),
    noContentFound() {
      if (this.isDataLoading) return
      return this.findDataInStore?.count === 0 && !this.findDataInStore?.params
    },
    noSearchContentFound() {
      if (this.isDataLoading) return
      return this.findDataInStore?.count === 0 && !!this.findDataInStore?.params
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
    applySearch(val) {
      if (isEmpty(val)) {
        this.getData()
      }
      this.getData({ search: val })
    },
  },
}
</script>
