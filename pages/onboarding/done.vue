<template>
  <div>
    <lottie
      :options="defaultOptions"
      :play="showSuccess"
      :height="300"
      :width="300"
    />
    <h2 class="my-5 text-info">Geschafft!</h2>
    <p class="text-light">
      Danke für deine Registrierung. Du kannst jetzt loslegen!
    </p>

    <button class="button border my-10" @click="goNext">
      Weiter
    </button>
  </div>
</template>

<script>
import coreMixin from '~/components/elements/onboarding/mixins'
import * as animationData from '@/assets/img/success.json'

export default {
  name: 'Personal',
  layout: 'onboarding',
  mixins: [coreMixin],
  data: () => ({
    defaultOptions: {
      animationData: animationData.default,
      loop: false,
      autoplay: true,
    },
  }),
  methods: {
    goNext() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="css" scoped></style>
