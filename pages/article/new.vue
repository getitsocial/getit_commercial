<template>
  <div><new-form :category="category" /></div>
</template>

<script>
import { mapState } from 'vuex'
import newForm from '~/components/elements/article/newForm'
export default {
  name: 'NewCategory',
  components: {
    newForm,
  },
  layout: 'fullview',
  middleware: ['authenticated'],
  data: () => ({}),
  computed: {
    ...mapState({ category: (state) => state.categories.one }),
  },
}
</script>

<style lang="css" scoped></style>
