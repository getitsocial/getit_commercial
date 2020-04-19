<template>
  <div>
    <h3>Allgemeine Informationen</h3>
    <ValidationObserver ref="shop" v-slot="{ handleSubmit }" slim>
      <form @submit.prevent="handleSubmit(updateShop)">
        <ValidationProvider
          v-slot="{ errors }"
          :rules="{ required: true, max: 20, shopname: { name, check } }"
          name="Name"
        >
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="companyName">
              <span class="text-info">Name deines Shops</span>
              <input
                id="companyName"
                v-model="name"
                type="text"
                vid="name"
                class="form-input mt-1 block w-full"
                placeholder="Musterhaus GmbH"
                @input="checkName"
              />
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="Rechtsform"
        >
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="companyType">
              <span class="text-info">Rechtsform</span>
              <select
                id="companyType"
                v-model="companyType"
                class="form-select mt-1 block w-full"
              >
                <option value="SS">Selbstständig</option>
                <option value="EU">Einzelunternehmer</option>
                <option value="PG"
                  >Personengesellschaft (z. B. GdbR, OHG, KG)</option
                >
                <option value="GN">Gemeinnützig / Verein</option>
                <option value="GP"
                  >Gesellschaft in privater Hand (z. B. GmbH, UG, Ltd.)</option
                >
                <option value="AG">Aktiengesellschaft</option>
              </select>
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="Mitarbeiterzahl"
        >
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="companySize">
              <span class="text-info">Mitarbeiterzahl</span>
              <select
                id="companySize"
                v-model="size"
                class="form-select mt-1 block w-full"
              >
                <option value="1">1-5</option>
                <option value="5">5-20</option>
                <option value="20">20-200</option>
                <option value="200">200-1000</option>
              </select>
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>
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
            :rules="{ required: true, address: { address } }"
            :initial="initialAddress"
            @selection="selectLocation"
          />
          <div
            v-if="initialAddress.locationId"
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
        <bottom-area>
          <div class="flex">
            <div class="ml-auto">
              <button class="primary" type="submit">
                speichern
              </button>
            </div>
          </div>
        </bottom-area>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import coreMixin from '~/components/elements/onboarding/mixins'

export default {
  name: 'EditForm',
  mixins: [coreMixin],
  data() {
    return {}
  },
  computed: {
    initialAddress() {
      return {
        address: this.address,
        locationId: this.address?.locationId,
        label: this.address?.label,
      }
    },
  },
  methods: {
    async updateShop() {
      try {
        await this.$refs.shop.validate()
        await this.update()
        // Todo Delete User
        this.$addToast({
          message: 'Shop geändert',
        })
        this.$router.push('/shop')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
