<template>
  <div class="container mx-auto">
    <div class="my-3">
      <meta-information />
      <article-list :items="items" class="mt-3" />
      <div class="mt-3 flex justify-end">
        <div class="w-full px-1 md:w-auto px-0">
          <button class="primary">
            Fahrer anfordern
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import metaInformation from '~/components/elements/order/meta'
import articleList from '~/components/elements/order/articles'
export default {
  components: {
    metaInformation,
    articleList
  },
  pageTitle: 'Bestellung 224521',
  subNavigation: {
    rightNavigationContent: [
      {
        emit: 'showMap',
        icon: 'map'
      }
    ]
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
        packed: false
      },
      {
        id: 'ab13',
        name: 'Trauben',
        amount: 2,
        currency: 'Pakete',
        unitPrice: 2,
        totalPrice: 4,
        packed: false
      },
      {
        id: 'ab14',
        name: 'Toilettenpapier',
        amount: 1,
        currency: 'Paket',
        unitPrice: 2.5,
        totalPrice: 2.5,
        packed: false
      },
      {
        id: 'ab15',
        name: 'Bio Landliebe Milch',
        amount: 1,
        currency: 'Paket',
        unitPrice: 0.99,
        totalPrice: 0.99,
        packed: false
      },
      {
        id: 'ab16',
        name: 'Wachsmalstifte',
        amount: 1,
        currency: 'Paket',
        unitPrice: 2.99,
        totalPrice: 2.99,
        packed: false
      }
    ]
  })
}
</script>
<style lang="scss"></style>
