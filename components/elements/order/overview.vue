<template>
  <card :padded="false">
    <ul>
      <li
        v-for="order in orders"
        :key="order.id"
        class="list-element hovered z-20"
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
  </card>
</template>

<script>
export default {
  name: 'OrderOverview',
  props: {
    orders: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({}),
  methods: {
    goToDetail() {
      this.$router.push('/order/detail')
    },
  },
}
</script>

<style lang="css" scoped></style>
