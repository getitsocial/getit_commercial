<template>
  <div>
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
          <button
            class="primary"
            :class="{ 'spinner-light': loadState.create }"
            type="submit"
          >
            Kategorie anlegen
          </button></bottom-area
        >
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import coreMixin from '~/components/elements/category/mixins'

export default {
  name: 'NewCategoryForm',
  mixins: [coreMixin],
  data: () => ({
    category: {},
  }),
  methods: {
    async submit() {
      try {
        await this.create(this.category)
        this.$addToast({ message: 'Kategorie angelegt!', toastType: 'primary' })
        this.$router.go(-1)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
