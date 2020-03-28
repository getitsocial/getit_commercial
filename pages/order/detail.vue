<template>
  <div class="container mx-auto">
    <div class="mb-3">
      <card>
        <template v-slot:header>
          <div class="flex justify-between">
            <div class="my-auto">
              <h3 class="text-lg leading-6 font-medium text-primary">
                Bestellung
              </h3>
              <p class="mt-1 max-w-2xl leading-5 text-light">
                224521
              </p>
            </div>
            <div>
              <button @click="showMap = !showMap">
                <span>
                  <unicon name="map" fill="currentColor" width="20" />
                </span>
              </button>
            </div>
          </div>
        </template>
        <div v-if="showMap" class="h-full mb-5 bitem">
          <simple-map />
        </div>

        <div>
          <dl class="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
              <dt class="leading-5 font-medium text-light">
                User
              </dt>
              <dd class="mt-2 leading-5">
                <a
                  href="#"
                  class="flex-shrink-0 group block focus:outline-none focus:no-underline"
                >
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-9 w-9 rounded-full"
                        src="https://randomuser.me/api/portraits/women/19.jpg"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="leading-5 font-bold text-primary">
                        Maren Steinert
                      </p>
                      <p class="leading-4 font-medium text-light">
                        Profildetails
                      </p>
                    </div>
                  </div>
                </a>
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="leading-5 font-medium text-light">
                Lieferanschrift
              </dt>
              <dd class="mt-1 leading-5">
                Sesamstrasse 24 <br />
                38100 Braunschweig
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="leading-5 font-medium text-light">
                Email address
              </dt>
              <dd class="mt-1 leading-5 text-gray-900">
                msteinert@googlemail.de
              </dd>
            </div>
            <div class="sm:col-span-1">
              <dt class="leading-5 font-medium text-light">
                Rechnungssumme
              </dt>
              <dd class="mt-1 leading-5 text-gray-900">
                14,35 €
              </dd>
            </div>
            <div class="sm:col-span-2">
              <dt class="leading-5 font-medium text-light">
                Notitz
              </dt>
              <dd class="mt-1 leading-5 text-gray-900">
                Bitte zwei mal Klingeln. Fahrstuhlknopf 4.
              </dd>
            </div>
          </dl>
        </div>
      </card>

      <div class="bg-white overflow-hidden shadow rounded-lg mt-3">
        <ul>
          <li
            v-for="(item, index) in items"
            :key="index"
            class="bitem-b cursor-pointer hover:bg-grey transition ease-in-out duration-150"
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
                    {{ item.unitPrice }} € / {{ item.totalPrice }} €
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
      </div>

      <card class="mt-3">
        <div class="flex justify-end">
          <div><button class="primary">Fahrer anfordern</button></div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import simpleMap from '~/components/elements/map/simple'
export default {
  components: {
    simpleMap
  },
  data: () => ({
    showMap: false,
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
  }),
  methods: {
    check(index) {
      this.items[index].packed = !this.items[index].packed
    }
  }
}
</script>
<style lang="scss"></style>
