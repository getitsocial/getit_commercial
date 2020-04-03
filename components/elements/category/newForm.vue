<template>
  <div>
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
      <button class="primary">
        Kategorie anlegen
      </button></bottom-area
    >
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import bottomArea from '~/components/layout/bottomarea'

export default {
  name: 'NewCategoryForm',
  components: {
    ValidationProvider,
    bottomArea,
  },
  data: () => ({
    category: {},
  }),
}
</script>

<style lang="css" scoped></style>
