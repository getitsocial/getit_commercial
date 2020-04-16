<template>
  <div>
    <h2>Artikel bearbeiten</h2>
    <edit-form :article="article" />
  </div>
</template>

<script>
import editForm from '~/components/elements/article/editForm'
export default {
  name: 'EditArticle',
  layout: 'fullview',
  middleware: ['authenticated'],
  components: {
    editForm,
  },
  async asyncData({ store, params, error }) {
    try {
      const article = await store.dispatch('articles/getOne', params.id)
      if (!article.picture) article.picture = {}
      return { article }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  data: () => ({}),
}
</script>

<style lang="css" scoped></style>
