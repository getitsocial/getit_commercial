<template>
  <div>
    <img src="/img/party.svg" alt="" width="200" class="mx-auto" />
    <h2 class="my-5 text-info">Herzlich Willkommen</h2>
    <p class="text-light">
      Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
      Konsonantien leben die Blindtexte.
    </p>
    <ValidationProvider v-slot="{ errors }" rules="required" name="unternehmen">
      <!-- Name INPUT -->
      <div class="form-content my-3" :class="{ error: errors[0] }">
        <label class="form-label w-full" for="companyName">
          <span class="text-info">Name des Unternehmens</span>
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
      rules="required"
      name="mitarbeiterzahl"
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
        </label>
      </div>
    </ValidationProvider>
    <div class="w-32 max-w-md mx-auto">
      <nuxt-link to="/onboarding/company" class="button border my-10"
        >Weiter</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import coreMixin from '~/components/elements/onboarding/mixins'

export default {
  name: 'Personal',
  layout: 'onboarding',
  mixins: [coreMixin],
}
</script>

<style lang="css" scoped></style>
