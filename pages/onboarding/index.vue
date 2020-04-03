<template>
  <div>
    <img src="/img/party.svg" alt="" width="200" class="mx-auto" />
    <h2 class="my-5 text-info">Herzlich Willkommen (Demo)</h2>
    <p class="text-light">
      Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
      Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in
      Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein
      kleines Bächlein namens.
    </p>
    <div class="w-32 max-w-md mx-auto">
      <nuxt-link to="/onboarding/company" class="button border my-10"
        >Weiter</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personal',
  layout: 'onboarding',
  data: () => ({})
}
</script>

<style lang="css" scoped></style>
