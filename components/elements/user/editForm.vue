<template>
  <div>
    <modal
      :show="showConfirm"
      confirm-text="Löschen"
      icon="alert-triangle-outline"
      centered
      :confirm="false"
      @dismiss="showConfirm = false"
      >Bist du sicher, dass du dein Account Löschen möchtest?
      <br />
      <b>Wenn du dein Account löschen möchtest, kontaktiere uns.</b><br />
      <p class="my-5">
        <a href="mailto:support@getit.social" target="_blank"
          >Support kontaktieren.</a
        >
      </p>
    </modal>

    <div class="mt-3 flex justify-center">
      <div class="max-w-sm p-3">
        <image-upload
          folder="profilepictures"
          placeholder="Profilbild"
          @target="setImage"
        />
      </div>
    </div>

    <ValidationObserver v-slot="{ handleSubmit }" slim>
      <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required|min:2|alpha_spaces"
        >
          <!-- userName INPUT -->
          <h3 class="text-light">Persönliches</h3>
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="userName">
              <span class="text-info">Dein Name</span>
              <input
                id="userName"
                v-model="myUser.name"
                name="Name"
                type="text"
                class="form-input mt-1 block w-full"
                placeholder="z.B. Getränke"
              />
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>

        <!-- userLocation INPUT -->
        <div class="form-content">
          <label class="form-label w-full" for="userLocation">
            <span class="text-info">Wohnort</span>
            <!-- v-model="myUser.location"
              :list="getSuggestionList" -->
            <client-only>
              <autocomplete
                input-class="form-input"
                source="/api/maps/geocode?query="
                results-property="items"
                results-display="label"
                :clear-button-icon="true"
              >
              </autocomplete>
            </client-only>
          </label>
        </div>

        <ValidationProvider v-slot="{ errors }" name="Benutzertext">
          <!-- userDescription INPUT -->
          <div class="form-content my-5" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="userDescription">
              <client-only>
                <wysiwyg
                  label="Stelle dich mit ein paar Sätzen vor"
                  :initial-content="myUser.description"
                  @content="(data) => (myUser.description = data)"
                />
              </client-only>
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>
        <h3 class="mt-3 text-light">Account</h3>
        <button
          class="w-auto px-0 hover:text-danger mr-auto"
          type="button"
          @click.prevent="showConfirm = true"
        >
          Account löschen
        </button>
        <bottom-area>
          <div class="flex">
            <div class="ml-auto">
              <button class="primary" type="submit">
                speichern
              </button>
            </div>
          </div>
        </bottom-area>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import coreMixin from '~/components/elements/user/mixins'

export default {
  name: 'EditUserForm',
  mixins: [coreMixin],
  props: {
    myUser: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    showConfirm: false,
  }),
  methods: {
    async submit() {
      try {
        await this.update(this.myUser)
        this.$addToast({
          message: 'Profil bearbeitet!',
        })
        this.$router.go(-1)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteItem() {
      // Todo Delete User
      this.$addToast({
        message: 'Profil gelöscht!',
        toastType: 'primary',
      })
      await this.logout()
    },
  },
}
</script>
