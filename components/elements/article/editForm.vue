<template>
  <div>
    <modal
      :show="showConfirm"
      confirm-text="Löschen"
      icon="alert-triangle-outline"
      centered
      @dismiss="showConfirm = false"
      @confirm="deleteArticle"
      >Bist du sicher, dass du den Artikel <b>{{ article.name }}</b> Löschen
      möchtest?
    </modal>
    <modal
      v-if="showChangeCategory"
      icon="shuffle-outline"
      :confirm="false"
      dismiss-text="Abbrechen"
      @dismiss="showChangeCategory = false"
      >Neue Kategorie wählen
      <autocomplete endpoint="categories" @selection="selectCategory" />
    </modal>

    <modal
      v-if="showCopyCategory"
      icon="copy-outline"
      :confirm="false"
      dismiss-text="Abbrechen"
      @dismiss="showCopyCategory = false"
      >In welche Kategorie soll der Artikel kopiert werden?
      <autocomplete endpoint="categories" @selection="selectToCopyArticle" />
    </modal>

    <!-- Todo: Change folder to articles/:shopId -->
    <image-upload
      folder="article"
      :initial-image="article.picture.secure_url"
      :initial-id="article.picture.publicId"
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

        <!-- articleName INPUT -->
        <div class="form-content my-3">
          <span class="text-info">Kategorie</span>
          <button
            class="w-auto border"
            @click.prevent="showChangeCategory = true"
          >
            {{ article.category.name }}
          </button>
        </div>
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
        <!-- TAX INPUT -->
        <ValidationProvider
          v-slot="{ errors }"
          mode="lazy"
          slim
          rules="required"
        >
          <div class="form-content my-3" :class="{ error: errors[0] }">
            <label class="form-label w-full" for="articleTax"
              ><span class="text-info text-sm">Steuersatz</span></label
            >
            <select v-model="article.tax" class="form-select w-full">
              <option :value="19">
                19 %
              </option>
              <option :value="7">
                7 %
              </option>
              <option :value="0">
                Steuerfrei
              </option>
            </select>
            <span class="error-message">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" name="Artikelbeschreibung">
          <!-- articleDescription INPUT -->
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
          <div class="flex justify-end">
            <div class="mr-3">
              <button
                class="w-auto hover:text-danger"
                type="button"
                @click.prevent="showConfirm = true"
              >
                <eva-icons name="trash-2-outline" fill="currentColor" />
              </button>
            </div>
            <div class="mr-auto">
              <button
                class="w-auto"
                type="button"
                @click.prevent="showCopyCategory = true"
              >
                <eva-icons name="copy-outline" fill="currentColor" />
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
import { clone } from 'lodash'
import coreMixin from '~/components/elements/article/mixins'
export default {
  name: 'NewArticleForm',
  mixins: [coreMixin],
  props: {
    article: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  data: () => ({
    showConfirm: false,
    showChangeCategory: false,
    showCopyCategory: false,
  }),
  methods: {
    async submit() {
      try {
        await this.update(this.article)
        this.$addToast({ message: 'Artikel bearbeitet!' })
        this.$router.go(-1)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteArticle() {
      await this.deleteAction(this.article)
      this.$addToast({
        message: 'Artikel gelöscht!',
      })
      this.$router.push(`/category/${this.article.category.id}`)
    },
    selectCategory({ id, name }) {
      if (!id) return
      this.article.category._id = id
      this.article.category.name = name
      this.showChangeCategory = false
    },
    async selectToCopyArticle({ id }) {
      if (!id) return
      const newArticle = clone(this.article)
      delete newArticle._id
      newArticle.category._id = id
      try {
        await this.create(newArticle)
        this.showCopyCategory = false
        this.$router.push(`/category/${id}`)
        this.$addToast({ message: 'Artikel kopiert!' })
      } catch (error) {
        this.showCopyCategory = false
        console.log(error)
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
