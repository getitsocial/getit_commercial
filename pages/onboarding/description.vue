<template>
  <div>
    <img src="/img/bio.svg" alt="" width="200" class="mx-auto" />
    <h2 class="my-5 text-info">Fast geschafft!</h2>
    <p class="text-light">
      Wenn du möchtest, beschreib dein Geschäft mit ein paar Sätzen. Lass deiner
      Kreativität freien lauf!
    </p>

    <ValidationProvider v-slot="{ errors }" name="Beschreibung">
      <!-- userDescription INPUT -->
      <div class="form-content my-5" :class="{ error: errors[0] }">
        <label class="form-label w-full" for="shopDescription">
          <client-only>
            <wysiwyg
              :initial-content="description"
              @content="(data) => (description = data)"
            />
          </client-only>
          <span class="error-message">{{ errors[0] }}</span>
        </label>
      </div>
    </ValidationProvider>

    <div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
      <nuxt-link to="/onboarding/picture" class="button border my-10"
        >Zurück</nuxt-link
      >
      <button class="button border my-10" @click="goNext">
        Los gehts!
      </button>
    </div>
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
      this.$router.push('/onboarding/done')
    },
  },
}
</script>

<style lang="css" scoped></style>
