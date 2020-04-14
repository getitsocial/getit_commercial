<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8"
  >
    <modal
      :show="showSuccess"
      centered
      :dismiss="false"
      confirm-text="Zum Login"
      @confirm="$router.push('/login')"
    >
      <lottie
        :options="defaultOptions"
        :play="showSuccess"
        :height="300"
        :width="300"
      />

      Vielen Dank für deine Registrierung!
      <br />
      <b>Du kannst dich nun einloggen.</b><br />
    </modal>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="mx-auto w-auto mb-1 flex">
        <img class="h-24 w-24 mx-auto" src="/img/logo.svg" alt="get it!" />
      </div>

      <h2 class="text-center text-3xl leading-9 font-extrabold text-secondary">
        get it!
      </h2>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md mt-2">
      <card class="transition-shadow duration-700 ease-in-out shadow-xl" padded>
        <ValidationObserver ref="form" v-slot="{ handleSubmit }" slim>
          <form @submit.prevent="handleSubmit(submit)">
            <label class="block mt-3">
              <span class="text-info">Name</span>
              <validation-provider
                v-slot="{ errors }"
                mode="lazy"
                name="Name"
                rules="min:2|required"
              >
                <input
                  v-model="guest.name"
                  class="form-input mt-1 block w-full"
                  placeholder="Lothar Muster"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </validation-provider>
            </label>

            <label class="block mt-3">
              <span class="text-info">E-Mail</span>
              <validation-provider
                v-slot="{ errors }"
                mode="lazy"
                vid="email"
                name="E-Mail"
                rules="email|required"
              >
                <input
                  v-model="guest.email"
                  class="form-input mt-1 block w-full"
                  placeholder="lothar@mustermail.com"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </validation-provider>
            </label>

            <label class="block mt-3">
              <span class="text-info">Passwort</span>
              <validation-provider
                id="password"
                v-slot="{ errors }"
                name="Passwort"
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

            <label class="block mt-3">
              <span class="text-info">Passwort wiederholen</span>
              <validation-provider
                v-slot="{ errors }"
                name="Password wiederholen"
                mode="lazy"
                rules="required|password:@Passwort"
              >
                <input
                  id="confirmPassword"
                  v-model="guest.confirmPassword"
                  class="form-input mt-1 block w-full"
                  type="password"
                  placeholder="******************"
                />
                <span class="error-message">{{ errors[0] }}</span>
              </validation-provider>
            </label>

            <div class="mt-6">
              <span class="block w-full">
                <button
                  class="primary"
                  type="submit"
                  :class="{ 'spinner-light': isLoading }"
                >
                  Registrieren
                </button>
              </span>
            </div>
            <div class="mt-3">
              <span class="block w-full">
                <button
                  type="button"
                  class="border"
                  @click.prevent="$router.push('/')"
                >
                  Zurück zum Login
                </button>
              </span>
            </div>
          </form>
        </ValidationObserver>
      </card>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { mapActions } from 'vuex'
import * as animationData from '@/assets/img/success.json'

export default {
  name: 'Signup',
  layout: 'blank',
  middleware: 'notAuthenticated',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      isLoading: false,
      submitted: false,
      showSuccess: false,
      defaultOptions: {
        animationData: animationData.default,
        loop: false,
        autoplay: false,
      },
      haveError: {},
      statusText: '',
      guest: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        accessToken: process.env.VUE_APP_MASTER_KEY,
      },
    }
  },
  methods: {
    ...mapActions({
      register: 'createUser',
    }),
    async submit(e) {
      try {
        this.isLoading = true
        await this.register(this.guest)
        this.submitted = true
        this.$refs.form.reset()
        this.guest = {}
        this.isLoading = false

        this.$nextTick(() => {
          this.$refs.form.reset()
        })
        this.showSuccess = true
      } catch ({ response: { data } }) {
        this.isLoading = false
        this.showSuccess = false
        this.$refs.form.setErrors({
          email: [data.message],
        })
      }
    },
    confirmModal() {
      this.submitted = false
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="css" scoped></style>
