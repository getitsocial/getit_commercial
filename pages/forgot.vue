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

      Informationen zum zurücksetzen deines Passworts wurde dir per Mail versand
      <br />
      <b>Bitte schaue in dein Mail Postfach.</b><br />
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

            <div class="mt-6">
              <span class="block w-full">
                <button class="primary" type="submit">
                  Informationen zuschicken
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
  name: 'Forgot',
  layout: 'blank',
  middleware: 'notAuthenticated',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    submitted: false,
    showSuccess: false,
    defaultOptions: {
      animationData: animationData.default,
      loop: false,
      autoplay: false,
    },
    guest: {
      email: '',
      password: '',
      link: `${process.env.appUrl}/reset`,
      accessToken: process.env.VUE_APP_MASTER_KEY,
    },
  }),
  methods: {
    ...mapActions({
      forgot: 'forgotPassword',
      sendNewPassword: 'passwordReset',
    }),
    async submit(e) {
      try {
        await this.forgot(this.guest)
        this.$refs.form.reset()
        this.guest = {
          email: '',
          password: '',
          link: process.env.VUE_APP_URL,
        }
        this.$nextTick(() => {
          this.$refs.form.reset()
        })
        this.submitted = true
        this.showSuccess = true
      } catch ({ response }) {
        this.showSuccess = false
        this.$refs.form.setErrors({
          email: [response.data.message],
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
