<template>
  <div>
    <img src="/img/store.svg" alt="" width="200" class="mx-auto" />
    <h2 class="my-5 text-info">Dein Geschäft</h2>
    <p class="text-light">
      Eines Tages aber beschloß eine kleine Zeile Blindtext, ihr Name war Lorem
      Ipsum.
    </p>
    <!-- userLocation INPUT -->
    <div class="form-content">
      <label class="form-label w-full" for="userLocation">
        <span class="text-info">Vollständige Adresse</span>
        <!-- v-model="myUser.location"
              :list="getSuggestionList" -->
        <autocomplete
          :value="companyLocation"
          endpoint="maps/geocode"
          queryname="query"
          display-name="label"
          placeholder="Sesamstrasse 12"
          @selection="selectLocation"
        />
      </label>
      <div
        v-if="address.locationId"
        class="flex flex-col bg-white text-info rounded-lg border p-3 mt-3"
      >
        <div class="font-bold">{{ name }}</div>
        <div class="leading-tight text-light">{{ address.street }}</div>
        <div class="leading-tight text-light">
          {{ address.postalCode }} {{ address.city }}
          {{ address.district === address.city ? '' : address.district }}
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
      <nuxt-link to="/onboarding" class="button border my-10">Zurück</nuxt-link>
      <nuxt-link to="/" class="button border my-10">Weiter</nuxt-link>
    </div>
  </div>
</template>

<script>
import coreMixin from '~/components/elements/onboarding/mixins'

export default {
  name: 'Personal',
  layout: 'onboarding',
  mixins: [coreMixin],
  computed: {
    companyLocation() {
      // if (!this.myUser.location) return
      return this.address?.label
    },
  },
  methods: {
    selectLocation({ address, locationId, label }) {
      if (!address || !locationId) return
      this.address = { ...address, label, locationId }
      console.log(address)
    },
  },
}
</script>

<style lang="css" scoped></style>
