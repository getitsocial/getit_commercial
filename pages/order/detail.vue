<template>
  <div class="container mx-auto">
    <div class="my-3">
      <meta-information />
      <user-overview :items="items" class="mt-3" />
      <bottom-area>
        <button class="primary">
          Fahrer anfordern
        </button></bottom-area
      >
    </div>
  </div>
</template>

<script>
import metaInformation from '~/components/elements/order/meta'
import userOverview from '~/components/elements/article/userOverview'
import bottomArea from '~/components/layout/bottomarea'

export default {
  components: {
    metaInformation,
    userOverview,
    bottomArea,
  },
  pageTitle: 'Bestellung 224521',
  subNavigation: {
    rightNavigationContent: [
      {
        emit: 'showMap',
        icon: 'map',
      },
    ],
  },
  data: () => ({
    items: [
      {
        id: 'ab12',
        name: 'Bananen',
        amount: 4,
        currency: 'Kilo',
        unitPrice: 1,
        totalPrice: 4,
        packed: false,
      },
      {
        id: 'ab13',
        name: 'Trauben',
        amount: 2,
        currency: 'Pakete',
        unitPrice: 2,
        totalPrice: 4,
        packed: false,
      },
      {
        id: 'ab14',
        name: 'Toilettenpapier',
        amount: 1,
        currency: 'Paket',
        unitPrice: 2.5,
        totalPrice: 2.5,
        packed: false,
      },
      {
        id: 'ab15',
        name: 'Bio Landliebe Milch',
        amount: 1,
        currency: 'Paket',
        unitPrice: 0.99,
        totalPrice: 0.99,
        packed: false,
      },
      {
        id: 'ab16',
        name: 'Wachsmalstifte',
        amount: 1,
        currency: 'Paket',
        unitPrice: 2.99,
        totalPrice: 2.99,
        packed: false,
      },
    ],
  }),
}
</script>
<style lang="scss"></style>
