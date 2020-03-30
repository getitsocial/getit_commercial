<template>
  <div>
    <card v-if="showMap" class="mb-3">
      <div class="h-full">
        <simple-map />
      </div>
    </card>
    <card padded>
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
  </div>
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
  }),
  mounted() {
    this.$root.$on('showMap', (obj) => {
      this.showMap = !this.showMap
    })
  }
}
</script>

<style lang="css" scoped></style>
