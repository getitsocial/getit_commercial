<template>
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
              <eva-icons name="map" fill="currentColor" width="20" />
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
</template>

<script>
import simpleMap from '~/components/elements/map/simple'

export default {
  name: 'Meta',
  components: {
    simpleMap
  },
  data: () => ({
    showMap: false
  })
}
</script>

<style lang="css" scoped></style>
