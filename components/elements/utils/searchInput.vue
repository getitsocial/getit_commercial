<template>
  <div class="h-16">
    <div class="container max-w-md px-3">
      <ValidationObserver v-slot="{ handleSubmit }" slim>
        <form autocomplete="off" @submit.prevent="handleSubmit(submit)">
          <ValidationProvider v-slot="{ errors }" name="Suche" rules="max:100">
            <!-- articleName INPUT -->
            <div class="form-content" :class="{ error: errors[0] }">
              <label class="form-label w-full" for="searchInput">
                <div class="form-icon-r">
                  <input
                    id="searchInput"
                    v-model.trim="searchtext"
                    type="text"
                    class="form-input block w-full"
                    :placeholder="$t(placeholder)"
                    autocomplete="off"
                  />
                  <div class="input-icon">
                    <eva-icons
                      name="search-outline"
                      fill="#cbd5e0"
                      width="20"
                    />
                  </div>
                </div>
                <span class="error-message">{{ errors[0] }}</span>
              </label>
            </div>
          </ValidationProvider>
        </form>
      </ValidationObserver>
    </div>
  </div></template
>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'SearchInput',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    placeholder: {
      type: String,
      default: 'search',
    },
  },
  data: () => ({
    searchtext: null,
  }),
  methods: {
    submit() {
      this.$emit('search', this.searchtext)
    },
  },
}
</script>

<style lang="css" scoped></style>
