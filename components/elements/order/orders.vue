<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="border-b px-6 py-3 flex justify-between">
      <div class="my-auto">
        <h3 class="text-lg leading-6 font-medium text-primary">
          Aktuelle Bestellungen
        </h3>
        <p
          class="mt-1 max-w-2xl text-sm leading-5 text-light"
          :class="{ 'spinner-dark spinner-left': loading }"
        >
          24 Bestellungen heute
        </p>
      </div>
      <div>
        <button class="px-0">
          <span class="hidden sm:block"> Neue Bestellung </span>
          <span class="block sm:hidden"
            ><eva-icons name="plus" fill="currentColor"
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
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    orders: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({}),
  methods: {
    goToDetail() {
      this.$router.push('/order/detail')
    }
  }
}
</script>

<style lang="css" scoped></style>
