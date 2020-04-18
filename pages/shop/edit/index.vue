<template>
  <div>
    <h2>Shop bearbeiten</h2>
    <edit-form />
  </div>
</template>

<script>
import editForm from '~/components/elements/shop/editForm'
export default {
  name: 'EditCategory',
  layout: 'fullview',
  middleware: ['authenticated'],
  components: {
    editForm,
  },
  async asyncData({ store, params, error }) {
    try {
      await store.dispatch('shop/getOne')
    } catch (error) {
      error(error)
    }
  },
  data: () => ({}),
}
</script>

<style lang="css" scoped></style>
