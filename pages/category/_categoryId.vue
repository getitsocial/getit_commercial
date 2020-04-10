<template>
  <div>
    <hero-title :top-title="title" back-button />
    <div class="container mx-auto">
      <div class="my-3">
        <search-input v-if="!noContentFound" @search="applySearch" />
        <article-oveview :articles="findDataInStore" :loading="isDataLoading" />
        <transition name="fade">
          <div v-show="noContentFound">
            <empty-state
              :empty-text="`Es gibt noch keine ${title}`"
              image="articles"
              ><nuxt-link
                :to="`/article/new/${categoryId}`"
                class="button w-auto"
                >{{ title }} anlegen</nuxt-link
              ></empty-state
            >
          </div>
        </transition>
        <transition name="fade">
          <div v-show="noSearchContentFound">
            <empty-state
              empty-text="Die Suche ergab keinen Treffer"
              image="search"
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
import { isEmpty, merge } from 'lodash'
import heroTitle from '~/components/elements/heroTitle'
import articleOveview from '~/components/elements/article/overview'
import emptyState from '~/components/elements/utils/emptyState'
import searchInput from '~/components/elements/utils/searchInput'

export default {
  components: {
    heroTitle,
    articleOveview,
    emptyState,
    searchInput,
  },
  middleware: ['authenticated'],
  pageTitle: 'Artikel',
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'Kategorie bearbeiten',
        emit: 'editCategory',
      },
      {
        name: 'Neuer Artikel',
        emit: 'newArticle',
      },
    ],
  },
  async asyncData({ store, params, error }) {
    try {
      const { name } = await store.dispatch(
        'categories/getOne',
        params.categoryId
      )
      return { title: name, categoryId: params.categoryId }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  data: () => ({}),
  computed: {
    ...mapState({ isDataLoading: (state) => state.articles.isGetPending }),
    ...mapGetters({ findDataInStore: 'articles/list' }),
    noContentFound() {
      if (this.isDataLoading) return
      return (
        this.findDataInStore?.count === 0 &&
        !this.findDataInStore?.params?.search
      )
    },
    noSearchContentFound() {
      if (this.isDataLoading) return
      return (
        this.findDataInStore?.count === 0 &&
        !!this.findDataInStore?.params?.search
      )
    },
  },
  beforeMount() {
    this.$root.$on('newArticle', (obj) => {
      this.$router.push(`/article/new/${this.categoryId}`)
    })
    this.$root.$on('editCategory', (obj) => {
      this.$router.push(`/category/edit/${this.categoryId}`)
    })
    this.getArticleData(this.$route.params)
  },
  methods: {
    ...mapActions({
      getArticleData: 'articles/getAll',
    }),
    applySearch(val) {
      if (isEmpty(val)) {
        this.getArticleData({ categoryId: this.categoryId })
      }
      this.getArticleData(
        merge({ categoryId: this.categoryId }, { search: val })
      )
    },
  },
}
</script>
