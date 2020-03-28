<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="border-b px-6 py-3 flex justify-between">
      <div class="my-auto">
        <h3 class="text-lg leading-6 font-medium text-primary">
          Aktuelle Bestellungen
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-light">
          24 Bestellungen heute
        </p>
      </div>
      <div>
        <button class="px-0">
          <span class="hidden sm:block"> Neue Bestellung </span>
          <span class="block sm:hidden"
            ><unicon name="plus" fill="currentColor" width="20"
          /></span>
        </button>
      </div>
    </div>
    <ul>
      <li
        v-for="order in orders"
        :key="order.id"
        class="border-b cursor-pointer hover:bg-grey transition ease-in-out duration-150"
        @click="goToDetail()"
      >
        <div class="p-3 md:p-6 grid grid-cols-3 gap-4">
          <div class="flex items-center">
            <div class="hidden sm:inline-block">
              <img
                class="inline-block h-9 w-9 rounded-full"
                :src="order.user.picture"
                alt=""
              />
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-bold">
                {{ order.user.name }}
              </p>
              <p class="text-xs leading-4">
                {{ order.createdAt }}
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="ml-3">
              <p class="text-sm leading-5 font-bold">
                {{ order.items.amount }} Artikel
              </p>
              <p class="text-xs leading-4">{{ order.items.totalPrice }} €</p>
            </div>
          </div>
          <div class="text-right">
            <span
              v-if="order.status === 'pending'"
              class="inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium leading-5 bg-warning text-white"
            >
              Offen
            </span>
            <span
              v-if="order.status === 'shipped'"
              class="inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium leading-5 bg-warning text-white"
            >
              Unterwegs
            </span>
            <span
              v-if="order.status === 'done'"
              class="inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium leading-5 bg-success text-white"
            >
              Geliefert
            </span>
            <span
              v-if="order.status === 'canceled'"
              class="inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium leading-5 bg-danger text-white"
            >
              Abgebrochen
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  data: () => ({
    orders: [
      {
        id: 'ab12',
        user: {
          name: 'Simon Peters',
          picture: 'https://randomuser.me/api/portraits/men/61.jpg'
        },
        createdAt: 'Vor 2 Stunden',
        items: {
          amount: 4,
          totalPrice: '12,49'
        },
        status: 'pending'
      },
      {
        id: 'ab13',
        user: {
          name: 'Nathalie Ringel',
          picture: 'https://randomuser.me/api/portraits/women/31.jpg'
        },
        createdAt: 'Vor 3 Stunden',
        items: {
          amount: 2,
          totalPrice: '14,49'
        },
        status: 'pending'
      },
      {
        id: 'ab14',
        user: {
          name: 'Maren Steinert',
          picture: 'https://randomuser.me/api/portraits/women/19.jpg'
        },
        createdAt: 'Vor 5 Stunden',
        items: {
          amount: 5,
          totalPrice: '14,49'
        },
        status: 'shipped'
      },
      {
        id: 'ab15',
        user: {
          name: 'Jonas Braden',
          picture: 'https://randomuser.me/api/portraits/men/19.jpg'
        },
        createdAt: 'Vor 7 Stunden',
        items: {
          amount: 2,
          totalPrice: '2,49'
        },
        status: 'done'
      },
      {
        id: 'ab16',
        user: {
          name: 'Julia Duesterhelm',
          picture: 'https://randomuser.me/api/portraits/women/18.jpg'
        },
        createdAt: 'Vor 9 Stunden',
        items: {
          amount: 4,
          totalPrice: '1,49'
        },
        status: 'done'
      },
      {
        id: 'ab17',
        user: {
          name: 'Mustafa Yilmaz',
          picture: 'https://randomuser.me/api/portraits/men/12.jpg'
        },
        createdAt: 'Gestern',
        items: {
          amount: 7,
          totalPrice: '10,49'
        },
        status: 'canceled'
      }
    ]
  }),
  methods: {
    goToDetail() {
      this.$router.push('/order/detail')
    }
  }
}
</script>

<style lang="css" scoped></style>
