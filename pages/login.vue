<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="mx-auto w-auto mb-1 flex">
        <img class="h-24 w-24 mx-auto" src="/img/logo.svg" alt="get it!" />
      </div>

      <h2 class="text-center text-3xl leading-9 font-extrabold text-secondary">
        get it!
      </h2>
      <div
        class="text-sm text-warning font-bold border-t border-b p-3 my-3 text-center"
      >
        Aktuell ist unsere Anwendung nur für Beta-User verfügbar.
      </div>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md mt-2">
      <card
        class="transition-shadow duration-700 ease-in-out"
        :class="shadow"
        padded
      >
        <ValidationObserver v-slot="{ handleSubmit }" slim>
          <form @submit.prevent="handleSubmit(submit)">
            <label class="block">
              <span class="text-info">E-Mail</span>
              <validation-provider
                v-slot="{ errors }"
                mode="lazy"
                name="email"
                rules="email|required"
              >
                <input
                  v-model="guest.email"
                  class="form-input mt-1 block w-full"
                  placeholder="john@bar.com"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </validation-provider>
            </label>

            <label class="block mt-3">
              <span class="text-info">Passwort</span>
              <validation-provider
                v-slot="{ errors }"
                name="password"
                mode="lazy"
                rules="required|verify_password"
              >
                <input
                  v-model="guest.password"
                  class="form-input mt-1 block w-full"
                  type="password"
                  placeholder="******************"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </validation-provider>
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
        </ValidationObserver>

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
                <button
                  class="bordered"
                  :class="{ 'spinner-dark': isLoading === 'facebook' }"
                  @click="socialLogin('facebook')"
                >
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
                <button
                  class="bordered"
                  :class="{ 'spinner-dark': isLoading === 'google' }"
                  @click="socialLogin('google')"
                >
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
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapActions } from 'vuex'
import { debounce } from 'lodash'

export default {
  name: 'Login',
  layout: 'blank',
  middleware: 'notAuthenticated',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    isLoading: null,
    shadow: 'shadow-0',
    guest: {
      email: '',
      password: '',
      accessToken: process.env.VUE_APP_MASTER_KEY,
    },
  }),
  mounted: debounce(function () {
    this.shadow = 'shadow-xl'
  }, 200),
  methods: {
    ...mapActions(['loginWithSocial', 'loginWithEmail']),
    async submit(e) {
      try {
        this.haveError = {}
        await this.loginWithEmail(this.guest)
        await this.$router.push('/')
      } catch (e) {
        this.$store.commit('setLoginPending', false)
        this.haveError = {
          message: `E-Mail or Password wrong!`,
        }
      }
    },
    async socialLogin(provider) {
      try {
        this.haveError = {}
        this.isLoading = provider
        const { authResponse } = await this.$socialLoginService(provider)
        await this.loginWithSocial({
          accessToken: authResponse.access_token,
          provider,
        })
        await this.$router.push('/')
      } catch (error) {
        console.log(error)
        this.isLoading = false
        this.haveError = error?.error
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
