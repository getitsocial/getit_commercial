<template>
  <div class="container mx-auto">
    <div class="my-3">
      <order-overview :orders="findDataInStore" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import orderOverview from '~/components/elements/order/overview'

export default {
  components: {
    orderOverview,
  },
  fetch({ store }) {
    store.dispatch('orders/getAll')
    store.dispatch('setTitleAction', 'Vorgänge')
  },
  data: () => ({}),
  middleware: ['authenticated'],
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'Neue Bestellung',
        route: '/',
      },
    ],
  },
  computed: {
    ...mapGetters({ findDataInStore: 'orders/list' }),
    noContentFound() {
      return this.findDataInStore.count === 0
    },
  },
}
</script>
