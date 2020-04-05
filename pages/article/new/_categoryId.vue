<template>
  <div><new-form :category="$route.params" /></div>
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
}
</script>

<style lang="css" scoped></style>
