<template>
  <div>
    <ValidationProvider
      v-slot="{ errors }"
      ref="provider"
      name="Artikelbild"
      rules="ext:jpg,png,jpeg"
    >
      <!-- articlePicture FILE -->
      <div class="animated dropbox">
        <div class="dropbox-content">
          <div>
            <eva-icons name="image-outline" fill="currentColor" />
            <p>Artikelbild auswählen</p>
          </div>
          <span class="error-message">{{ errors[0] }}</span>
        </div>
        <input
          ref="articleImage"
          type="file"
          multiple
          accept="image/*"
          class="input-file"
          @change="handleFileChange"
        />
      </div>
    </ValidationProvider>
    <ValidationProvider v-slot="{ errors }" name="Artikelname" rules="required">
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
    <bottom-area>
      <button class="primary">
        Artikel anlegen
      </button></bottom-area
    >
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { ValidationProvider } from 'vee-validate'
import bottomArea from '~/components/layout/bottomarea'

export default {
  name: 'NewArticleForm',
  components: {
    ValidationProvider,
    bottomArea
  },
  data: () => ({
    article: {}
  }),
  methods: {
    ...mapActions({
      upload: 'filehandler/imageUpload'
    }),
    async handleFileChange(e) {
      const formData = new FormData()
      try {
        const { valid } = await this.$refs.provider.validate(e)
        if (valid) {
          formData.append('file', this.$refs.articleImage.files[0])
          console.log(formData)
          await this.upload(this.$refs.articleImage.files[0])
          console.log('Uploaded the file...')
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="css" scoped></style>
