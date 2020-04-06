<template>
  <div>
    <h2>Kategory bearbeiten</h2>
    <edit-form :category="category" />
  </div>
</template>

<script>
import editForm from '~/components/elements/category/editForm'
export default {
  name: 'EditCategory',
  layout: 'fullview',
  middleware: ['authenticated'],
  components: {
    editForm,
  },
  async asyncData({ store, params, error }) {
    try {
      const category = await store.dispatch('categories/getOne', params.id)
      return { category }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  data: () => ({}),
}
</script>

<style lang="css" scoped></style>
