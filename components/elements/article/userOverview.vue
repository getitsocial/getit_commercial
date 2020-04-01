<template>
  <card>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="list-element hovered"
        @click="check(index)"
      >
        <div class="p-3 md:p-6 grid grid-cols-3 gap-4">
          <div class="flex items-center">
            <div>
              <p class="text-sm leading-5 font-bold">
                {{ item.name }}
              </p>
              <p class="text-xs text-light leading-4">
                245515684
              </p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="ml-3">
              <p class="text-sm leading-5 font-bold">
                {{ item.amount }} {{ item.currency }}
              </p>
              <p class="text-xs text-light leading-4">
                {{ item.unitPrice }} € Stk.
              </p>
            </div>
          </div>
          <div class="text-right">
            <span
              class="inline-flex items-center px-2 py-0.5 rounded-md text-sm font-medium leading-5 text-white"
              :class="[item.packed ? 'bg-success' : 'bg-warning']"
            >
              {{ item.packed ? 'Eingepackt' : 'Offen' }}
            </span>
          </div>
        </div>
      </li>
    </ul>
  </card>
</template>

<script>
export default {
  name: 'UserOverview',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({}),
  methods: {
    check(index) {
      this.items[index].packed = !this.items[index].packed
    }
  }
}
</script>

<style lang="css" scoped></style>
