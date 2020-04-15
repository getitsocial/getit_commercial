<template>
  <div class="flex h-screen bg-white">
    <div class="m-auto text-center">
      <div class="w-64 mx-auto">
        <lottie :options="defaultOptions" :height="300" :width="300" />
      </div>
      <div>
        <h1 class="text-primary">
          <span class="text-4xl font-extrabold">{{ error.statusCode }}</span>
        </h1>
        <h3>
          <span class="text-2xl text-primary">{{ error.message }}</span>
        </h3>
      </div>
      <button class="button-primary mt-3" @click="$router.go(-1)">
        Zurück
      </button>
    </div>
  </div>
</template>

<script>
import * as animationData from '@/assets/img/pow.json'

export default {
  layout: 'blank',
  props: {
    error: {
      type: Object,
      default() {
        return {}
      },
      required: true,
    },
  },
  data: () => ({
    defaultOptions: {
      animationData: animationData.default,
      loop: true,
      autoplay: true,
    },
  }),
}
</script>
