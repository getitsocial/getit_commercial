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
        <!-- TAX INPUT -->
        <ValidationProvider
          v-slot="{ errors }"
          mode="lazy"
          slim
          rules="required"
          name="Steuersatz"
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
import coreMixin from '~/components/elements/article/mixins'

export default {
  name: 'NewArticleForm',
  mixins: [coreMixin],
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
      stock: -1,
    },
  }),
  methods: {
    async submit() {
      try {
        this.article.category = this.category.categoryId
        await this.create(this.article)
        this.$addToast({ message: 'Artikel angelegt!' })
        this.$router.go(-1)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="css" scoped></style>
