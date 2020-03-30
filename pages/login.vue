<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="mx-auto w-auto mb-1 flex">
        <img class="h-24 w-24 mx-auto" src="/img/logo.svg" alt="habbr." />
      </div>

      <h2 class="text-center text-3xl leading-9 font-extrabold text-secondary">
        habbr.
      </h2>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md mt-2">
      <card
        class="transition-shadow duration-700 ease-in-out"
        :class="shadow"
        padded
      >
        <form @submit.prevent="submit">
          <label class="block">
            <span class="text-gray-700">E-Mail</span>
            <input class="form-input mt-1 block w-full" placeholder="" />
          </label>

          <label class="block mt-3">
            <span class="text-gray-700">Passwort</span>
            <input
              class="form-input mt-1 block w-full"
              type="password"
              placeholder=""
            />
          </label>

          <div class="mt-3 flex items-center justify-end">
            <div class="leading-5">
              <a href="#">
                Hilfe bei der Anmeldung?
              </a>
            </div>
          </div>

          <div class="mt-3">
            <span class="block w-full">
              <button class="primary" type="submit">
                Anmelden
              </button>
            </span>
          </div>
          <div class="mt-3">
            <span class="block w-full">
              <button type="submit" class="border">
                Laden registrieren
              </button>
            </span>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t"></div>
            </div>
            <div class="relative flex justify-center text-sm leading-5">
              <span class="px-2 bg-white text-primary">
                Oder melde dich an mit
              </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <div>
              <span class="w-full inline-flex rounded-md shadow-sm">
                <button class="bordered">
                  <eva-icons
                    class="h-5 h-5 inline-block align-middle"
                    name="facebook"
                    fill="currentColor"
                  />
                </button>
              </span>
            </div>

            <div>
              <span class="w-full inline-flex rounded-md shadow-sm">
                <button class="bordered">
                  <eva-icons
                    class="h-5 h-5 inline-block align-middle"
                    name="google"
                    fill="currentColor"
                  />
                </button>
              </span>
            </div>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'Login',
  layout: 'blank',
  data: () => ({
    shadow: 'shadow-0'
  }),
  mounted: debounce(function() {
    this.shadow = 'shadow-xl'
  }, 200),
  methods: {
    submit() {
      this.shadow = 'shadow-0'
      setTimeout(() => {
        this.$router.push('/')
      }, 700)
    }
  }
}
</script>

<style lang="css" scoped></style>
