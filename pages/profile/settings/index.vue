<template>
  <div>
    <h2>{{ $t('profile_settings') }}</h2>
    <edit-form :my-user="myUser" />
  </div>
</template>

<script>
import { clone } from 'lodash'
import editForm from '~/components/elements/user/editForm'
export default {
  name: 'EditCategory',
  layout: 'fullview',
  middleware: ['authenticated'],
  components: {
    editForm,
  },
  asyncData({ store, params, error }) {
    try {
      const myUser = store.state.user
      return { myUser: clone(myUser) }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  data: () => ({}),
}
</script>

<style lang="css" scoped></style>
