<template>
  <div>
    <img src="/img/store.svg" alt="" width="200" class="mx-auto" />
    <h2 class="my-5 text-info">Dein Geschäft</h2>
    <p class="text-light">
      Gib die Addresse deines Shops an damit andere wissen, wo sie dich finden
      können.
    </p>
    <ValidationObserver ref="picture" v-slot="{ handleSubmit }" slim>
      <form @submit.prevent="handleSubmit(goNext)">
        <!-- userLocation INPUT -->
        <div class="form-content">
          <autocomplete
            label="Vollständige Adresse"
            name="Strasse"
            :value="companyLocation"
            endpoint="maps/geocode"
            queryname="query"
            display-name="label"
            placeholder="Sesamstrasse 12"
            rules="required"
            @selection="selectLocation"
          />
          <div
            v-if="address.locationId"
            class="flex flex-col bg-white text-info rounded-lg border p-3 mt-3"
          >
            <div class="font-bold">{{ name }}</div>
            <div class="leading-tight text-light">
              {{ address.street }} {{ address.houseNumber }}
            </div>
            <div class="leading-tight text-light">
              {{ address.postalCode }} {{ address.city }}
              {{ address.district === address.city ? '' : address.district }}
            </div>
          </div>
        </div>

        <ValidationProvider v-slot="{ errors }" rules="required" name="Telefon">
          <!-- Name INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="companyPhone">
              <span class="text-info">Telefonnummer</span>
              <input
                id="companyPhone"
                v-model="phone"
                type="text"
                class="form-input mt-1 block w-full"
                placeholder="+49 531 2083920"
              />
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>

        <ValidationProvider v-slot="{ errors }" rules="max:200" name="Webseite">
          <!-- Name INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="companyPhone">
              <span class="text-info">Webseite</span>
              <input
                id="companyPhone"
                v-model="website"
                type="text"
                class="form-input mt-1 block w-full"
                placeholder="https://getit.social"
              />
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>
        <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <nuxt-link to="/onboarding" class="button border my-10"
            >Zurück</nuxt-link
          >
          <button type="submit" class="button border my-10">
            Weiter
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import coreMixin from '~/components/elements/onboarding/mixins'

export default {
  name: 'Personal',
  layout: 'onboarding',
  mixins: [coreMixin],
  computed: {
    companyLocation(e) {
      // if (!this.myUser.location) return
      return this.address?.label
    },
  },
  methods: {
    selectLocation({ address, locationId, label }) {
      if (!address || !locationId) return
      this.address = { ...address, label, locationId }
    },
    async goNext() {
      try {
        await this.$refs.picture.validate()
        this.$router.push('/onboarding/picture')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
