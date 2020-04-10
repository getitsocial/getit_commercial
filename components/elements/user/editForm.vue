<template>
  <div>
    <modal
      :show="showConfirm"
      confirm-text="Löschen"
      icon="alert-triangle-outline"
      centered
      @confirm="deleteItem"
      @dismiss="showConfirm = false"
      >Bist du sicher, dass du dein Account Löschen möchtest?
      <br />
      <b
        >Deine erstellten persönlichen Daten werden ebenfalls gelöscht und sind
        nicht mehr wiederherstellbar!</b
      ></modal
    ><!--
    <image-upload
      folder="article"
      :initial-image="{ secure_url: myUser.picture }"
      @target="setImage"
    />
    -->
    <ValidationObserver v-slot="{ handleSubmit }" slim>
      <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider v-slot="{ errors }" rules="required">
          <!-- userName INPUT -->
          <h3 class="mt-3 text-light">Persönliches</h3>
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
  name: 'EditCategoryForm',
  mixins: [coreMixin],
  props: {
    myUser: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({ showConfirm: false }),
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
