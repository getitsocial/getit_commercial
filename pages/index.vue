<template>
  <div>
    <hero-title top-title="Vorgänge" />
    <div class="container mx-auto">
      <div class="my-3">
        <order-overview :orders="findDataInStore" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import heroTitle from '~/components/elements/heroTitle'
import orderOverview from '~/components/elements/order/overview'

export default {
  components: {
    heroTitle,
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
  mounted() {},
}
</script>
