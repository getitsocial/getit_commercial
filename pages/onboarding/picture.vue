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
          :initial-image="logo"
          :initial-id="logoId"
          @target="selectLogo"
        />
      </div>
    </div>
    <div class="mt-3 flex justify-center">
      <div class="max-w-sm p-3">
        <image-upload
          folder="shops"
          placeholder="Dein Shop"
          :initial-image="picture"
          :initial-id="pictureId"
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
/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring:
true}] */
import coreMixin from '~/components/elements/onboarding/mixins'
import imageUpload from '~/components/elements/utils/imageUpload'

export default {
  name: 'Picture',
  layout: 'onboarding',
  components: {
    imageUpload,
  },
  mixins: [coreMixin],
  methods: {
    selectPicture({ secure_url, public_id }) {
      // eslint-disable-next-line camelcase
      this.picture = secure_url
      // eslint-disable-next-line camelcase
      this.pictureId = public_id
    },
    selectLogo({ secure_url, public_id }) {
      // eslint-disable-next-line camelcase
      this.logo = secure_url
      // eslint-disable-next-line camelcase
      this.logoId = public_id
    },
  },
}
</script>

<style lang="css" scoped></style>
