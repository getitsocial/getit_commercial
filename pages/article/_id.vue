<template>
  <div>
    <hero-title top-title="Artikeldetails" />
    <div class="container mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 p-3">
          <article-element :article="article" />
        </div>
        <div class="w-full md:w-1/2">
          <div class="p-3">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <div v-html="article.description"></div>
            <avatar :img-src="article.author.picture" class="mt-3">
              <div class="ml-2 font-bold">{{ article.author.name }}</div>
            </avatar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articleElement from '~/components/elements/article/element'
import avatar from '~/components/elements/avatar'
import heroTitle from '~/components/elements/heroTitle'

export default {
  name: 'ViewArticle',
  middleware: ['authenticated'],
  components: {
    articleElement,
    avatar,
    heroTitle,
  },
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'Artikel bearbeiten',
        emit: 'editArticle',
      },
    ],
  },
  async asyncData({ store, params, error }) {
    try {
      const article = await store.dispatch('articles/getOne', params.id)
      return { article }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  data: () => ({}),
  mounted() {
    this.$root.$on('editArticle', (obj) => {
      this.$router.push(`/article/edit/${this.$route.params?.id}`)
    })
  },
  methods: {
    // eslint-disable-next-line
    imageUrl: ({ picture }) => picture?.secure_url || '/img/placeholder.svg'
  },
}
</script>

<style lang="css" scoped></style>
