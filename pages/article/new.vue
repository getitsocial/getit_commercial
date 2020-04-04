<template>
  <div><new-form :category="{ test: 123456 }" /></div>
</template>

<script>
import newForm from '~/components/elements/article/newForm'
export default {
  name: 'NewCategory',
  components: {
    newForm,
  },
  layout: 'fullview',
  middleware: ['authenticated'],
  data: () => ({}),
  created() {
    this.id = this.$route.params
  },
}
</script>

<style lang="css" scoped></style>
