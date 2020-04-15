<template>
  <div>
    <img src="/img/party.svg" alt="" width="200" class="mx-auto" />
    <h2 class="my-5 text-info">Herzlich Willkommen</h2>
    <p class="text-light">
      Vielen Dank für deine Anmeldung! Mit ein paar wenigen Schritten helfen wir
      dir, dein Shop anzulegen. Los gehts!
    </p>
    <ValidationObserver ref="start" v-slot="{ handleSubmit }" tag="form">
      <form @submit.prevent="handleSubmit(goNext)">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|max:200"
          name="Name"
        >
          <!-- Name INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="companyName">
              <span class="text-info">Name deines Shops</span>
              <input
                id="companyName"
                v-model="name"
                type="text"
                class="form-input mt-1 block w-full"
                placeholder="Musterhaus GmbH"
              />
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          rules="required|oneOf:SS,EU,PG,GN,GP,AG"
          name="Rechtsform"
        >
          <!-- Size INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="companyType">
              <span class="text-info">Rechtsform</span>
              <select
                id="companyType"
                v-model="companyType"
                class="form-select mt-1 block w-full"
              >
                <option value="SS" selected>Selbstständig</option>
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
          rules="required|oneOf:1,5,20,200"
          name="Mitarbeiterzahl"
        >
          <!-- Size INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="companySize">
              <span class="text-info">Mitarbeiterzahl</span>
              <select
                id="companySize"
                v-model="size"
                class="form-select mt-1 block w-full"
              >
                <option value="1" selected>1-5</option>
                <option value="5">5-20</option>
                <option value="20">20-200</option>
                <option value="200">200-1000</option>
              </select>
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>
        <div class="w-32 max-w-md mx-auto">
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
  methods: {
    goNext() {
      this.$router.push('/onboarding/shop')
    },
  },
}
</script>

<style lang="css" scoped></style>
