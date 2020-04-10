<template>
  <div>
    <modal
      :show="showConfirm"
      confirm-text="Löschen"
      icon="alert-triangle-outline"
      centered
      @confirm="deleteArticle"
      @dismiss="showConfirm = false"
      >Bist du sicher, dass du den Artikel <b>{{ article.name }}</b> Löschen
      möchtest?
    </modal>
    <!-- Todo: Change folder to articles/:shopId -->
    <image-upload
      folder="article"
      :initial-image="article.picture"
      @target="setImage"
    />
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
                class="form-input block w-full"
                placeholder="z.B. Paprika"
              />
              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-if="haveStock"
          v-slot="{ errors }"
          tag="div"
          name="Lagerbestand"
          rules="numeric"
        >
          <!-- articleStock INPUT -->
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="articleStock">
              <span class="text-info">Lagerbestand</span>
              <div class="flex">
                <input
                  id="articleStock"
                  v-model.number="article.stock"
                  type="number"
                  class="form-input block w-full"
                  placeholder="z.B. 250"
                />
                <button class="w-auto" @click="removeStock">
                  <eva-icons
                    name="close-outline"
                    fill="currentColor"
                    width="20"
                  />
                </button>
              </div>

              <span class="error-message">{{ errors[0] }}</span>
            </label>
          </div>
        </ValidationProvider>
        <div v-else>
          <span class="text-info text-sm">Lagerbestand</span>
          <button class="primary w-auto" @click="addStock">
            Lagerbestand anlegen
          </button>
        </div>
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
                class="form-input block w-full"
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
                  :initial-content="article.description"
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
          <div class="flex">
            <div>
              <button
                class="w-auto hover:text-danger mr-auto"
                @click.prevent="showConfirm = true"
              >
                Artikel löschen
              </button>
            </div>
            <div>
              <button class="primary" type="submit">
                Artikel bearbeiten
              </button>
            </div>
          </div>
        </bottom-area>
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
    article: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data: () => ({ showConfirm: false }),
  computed: {
    haveStock() {
      return this.article.stock !== -1
    },
    ...mapState({ loadState: (state) => state.categories.loading }),
  },
  methods: {
    setImage(img) {
      this.article.picture = img
    },
    ...mapActions({
      update: 'articles/update',
      deleteAction: 'articles/delete',
    }),
    async submit() {
      try {
        await this.update(this.article)
        this.$addToast({ message: 'Artikel bearbeitet!', toastType: 'primary' })
        this.$router.go(-1)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteArticle() {
      await this.deleteAction(this.article)
      this.$addToast({
        message: 'Artikel gelöscht!',
        toastType: 'primary',
      })
      this.$router.push(`/category/${this.article.category.id}`)
    },
    addStock() {
      this.article.stock = 0
    },
    removeStock() {
      this.article.stock = -1
    },
  },
}
</script>

<style lang="css" scoped></style>
