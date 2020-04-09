<template>
  <div>
    <!-- Todo: Change folder to articles/:shopId -->
    <image-upload folder="articles" @target="setImage" />
    <ValidationObserver v-slot="{ handleSubmit }" slim>
      <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider
          v-slot="{ errors }"
          name="Artikelname"
          rules="required"
        >
          <!-- articleName INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="articleName">
              <span class="text-info">Name des Artikels</span>
              <input
                id="articleName"
                v-model="article.name"
                type="text"
                class="form-input mt-1 block w-full"
                placeholder="z.B. Paprika"
              />
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="Lagerbestand"
          rules="numeric|required"
        >
          <!-- articleStock INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="articleStock">
              <span class="text-info">Lagerbestand</span>
              <input
                id="articleStock"
                v-model.number="article.stock"
                type="number"
                class="form-input mt-1 block w-full"
                placeholder="z.B. 250"
              />
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="Preis"
          rules="decimal|required"
        >
          <!-- articlePrice INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="articlePrice">
              <span class="text-info">Stückpreis</span>
              <currency-input
                v-model="article.price"
                class="form-input mt-1 block w-full"
                locale="de"
                placeholder="z.B. 12,00"
              />
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="Artikelbeschreibung">
          <!-- articleName INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="articleDescription">
              <client-only>
                <wysiwyg
                  label="Artikelbeschreibung"
                  @content="(data) => (article.description = data)"
                />
              </client-only>
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>

        <div class="form-content my-3">
          <label class="form-label w-full" for="articleDescription">
            <span class="text-info">Veröffentlicht?</span>
            <toggle
              :boolean-value="article.published"
              @change="(val) => (article.published = val)"
            />
          </label>
        </div>
        <bottom-area>
          <button class="primary" type="submit">
            Artikel anlegen
          </button></bottom-area
        >
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions, mapState } from 'vuex'

import bottomArea from '~/components/layout/bottomarea'
import imageUpload from '~/components/elements/utils/imageUpload'
import wysiwyg from '~/components/elements/utils/wysiwyg'
import toggle from '~/components/elements/utils/toggle'

export default {
  name: 'NewArticleForm',
  components: {
    ValidationProvider,
    ValidationObserver,
    bottomArea,
    imageUpload,
    wysiwyg,
    toggle,
  },
  props: {
    category: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data: () => ({
    article: {
      picture: null,
      description: null,
      published: true,
    },
  }),
  computed: mapState({ loadState: (state) => state.categories.loading }),
  methods: {
    setImage(img) {
      this.article.picture = img
    },
    ...mapActions({
      create: 'articles/create', // map `this.add()` to `this.$store.dispatch('increment')`
    }),
    async submit() {
      try {
        this.article.category = this.category.categoryId
        await this.create(this.article)
        this.$addToast({ message: 'Artikel angelegt!', toastType: 'primary' })
        this.$router.go(-1)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
