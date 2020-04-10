<template>
  <div class="flex">
    <ValidationProvider
      v-slot="{ errors }"
      tag="div"
      name="Lagerbestand"
      rules="numeric|required"
      class="w-full"
    >
      <!-- articleStock INPUT -->
      <div class="form-content" :class="{ error: errors[0] }">
        <label class="form-label w-full" for="articleStock">
          <span class="text-info">Lagerbestand bearbeiten</span>
          <input
            id="articleStock"
            v-model.number="article.stock"
            type="number"
            class="form-input block w-full mt-1"
            placeholder="z.B. 250"
            @keyup.enter="updateArticle"
          />
          <span class="error-message">{{ errors[0] }}</span>
        </label>
      </div>
    </ValidationProvider>
    <button
      class="primary border w-auto mt-6 ml-2"
      :class="{ 'spinner-light': loadState.update }"
      @click="pullOne"
    >
      -1
    </button>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'StockAction',
  components: {
    ValidationProvider,
  },
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),
  computed: mapState({ loadState: (state) => state.articles.loading }),
  methods: {
    ...mapActions({
      updateAction: 'articles/update', // map `this.add()` to `this.$store.dispatch('increment')`
    }),
    async pullOne() {
      if (!this.article.stock) return
      this.article.stock--
      await this.updateAction(this.article)
    },
    async updateArticle() {
      await this.updateAction(this.article)
    },
  },
}
</script>

<style lang="css" scoped></style>
