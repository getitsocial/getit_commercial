<!-- eslint-disable camelcase -->

<template>
  <div>
    <img src="/img/urban.svg" alt="" width="200" class="mx-auto" />
    <h2 class="my-5 text-info">Dein Aussehen</h2>
    <p class="text-light">
      Zeig dein Shop mit einem Foto und deinem Logo.
    </p>
    <div class="mt-3 flex justify-center">
      <div class="max-w-sm p-3">
        <image-upload
          folder="logos"
          placeholder="Dein Logo"
          :image="logo"
          @target="selectLogo"
        />
      </div>
    </div>
    <div class="mt-3 flex justify-center">
      <div class="max-w-sm p-3">
        <image-upload
          folder="shops"
          placeholder="Dein Shop"
          :image="picture"
          @target="selectPicture"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
      <nuxt-link to="/onboarding/shop" class="button border my-10"
        >Zurück</nuxt-link
      >
      <nuxt-link to="/onboarding/description" class="button border my-10"
        >Weiter</nuxt-link
      >
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import coreMixin from '~/components/elements/onboarding/mixins'

export default {
  name: 'Picture',
  layout: 'onboarding',
  mixins: [coreMixin],
}
</script>

<style lang="css" scoped></style>
