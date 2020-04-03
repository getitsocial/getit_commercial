<template>
  <div class="container mx-auto">
    <div class="my-3">
      <order-overview :orders="findDataInStore" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import orderOverview from '~/components/elements/order/overview'

export default {
  components: {
    orderOverview,
  },
  data: () => ({}),
  pageTitle: 'Bestellungen',
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
  async mounted() {
    try {
      await this.getData({})
    } catch (e) {
      console.log(e.message)
    }
  },
  methods: {
    ...mapActions({
      getData: 'orders/getAll',
    }),
  },
}
</script>
