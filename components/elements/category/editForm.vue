<template>
  <div>
    <modal
      :show="showConfirm"
      confirm-text="Löschen"
      icon="alert-triangle-outline"
      centered
      @confirm="deleteItem"
      @dismiss="showConfirm = false"
      >Bist du sicher, dass du die Kategorie <b>{{ category.name }}</b> Löschen
      möchtest?
      <br />
      <b
        >Die darin enthaltenen Produkte werden ebenfalls gelöscht und sind nicht
        mehr wiederherstellbar!</b
      ></modal
    >
    <ValidationObserver v-slot="{ handleSubmit }" slim>
      <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider v-slot="{ errors }" rules="required">
          <!-- categoryName INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="categoryName">
              <span class="text-info">Name der Kategorie</span>
              <input
                id="categoryName"
                v-model="category.name"
                name="Kategorie"
                type="text"
                class="form-input mt-1 block w-full"
                placeholder="z.B. Getränke"
              />
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>
        <bottom-area>
          <div class="flex justify-end">
            <div class="mr-auto">
              <button
                class="w-auto hover:text-danger"
                type="button"
                @click.prevent="showConfirm = true"
              >
                <eva-icons name="trash-2-outline" fill="currentColor" />
              </button>
            </div>

            <div>
              <button class="w-auto" type="submit">
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
import coreMixin from '~/components/elements/category/mixins'

export default {
  name: 'EditCategoryForm',
  mixins: [coreMixin],
  props: {
    category: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({ showConfirm: false }),
  methods: {
    async submit() {
      try {
        await this.update(this.category)
        this.$addToast({
          message: 'Kategorie bearbeitet!',
        })
        this.$router.go(-1)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteItem() {
      await this.deleteAction(this.category)
      this.$addToast({
        message: 'Kategorie gelöscht!',
        toastType: 'primary',
      })
      this.$router.push('/category')
    },
  },
}
</script>
