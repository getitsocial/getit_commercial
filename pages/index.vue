<template>
  <div class="container mx-auto">
    <div class="my-3">
      <orders :orders="findDataInStore" :loading="isDataLoading" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import orders from '~/components/elements/order/orders'

export default {
  components: {
    orders
  },
  data: () => ({}),
  pageTitle: 'Bestellungen',
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'Neue Bestellung',
        route: '/'
      }
    ]
  },
  computed: {
    ...mapState({ isDataLoading: (state) => state.orders.isGetPending }),
    ...mapGetters({ findDataInStore: 'orders/list' }),
    noContentFound() {
      return this.findDataInStore.count === 0
    }
  },
  async mounted() {
    try {
      await this.getData({})
    } catch (e) {
      console.log(e.message)
    }
  },
  methods: {
    ...mapActions({
      getData: 'orders/getAll'
    })
  }
}
</script>
