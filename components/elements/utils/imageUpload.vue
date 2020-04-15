<template>
  <ValidationProvider
    v-slot="{ errors }"
    ref="provider"
    name="Bild"
    rules="ext:jpg,png,jpeg"
  >
    <!-- articlePicture FILE -->
    <div v-if="initialImage">
      <img :src="initialImage" alt="" class="rounded-lg mx-auto" />
      <button class="w-auto mx-auto" @click="removeImageAction">
        Entfernen
      </button>
    </div>
    <div v-else class="animated dropbox">
      <div class="dropbox-content">
        <div>
          <eva-icons
            v-if="!isUploading"
            name="image-outline"
            fill="currentColor"
          />
          <p :class="{ 'spinner-dark': isUploading }">
            {{ placeholder }}
          </p>
        </div>
        <span class="error-message">{{ errors[0] }}</span>
      </div>
      <input
        :ref="folder"
        type="file"
        multiple
        accept="image/*"
        class="input-file"
        @change="handleFileChange"
      />
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { mapActions } from 'vuex'
import { isEmpty } from 'lodash'
export default {
  name: 'ImageUpload',
  components: {
    ValidationProvider,
  },
  props: {
    folder: {
      type: String,
      default: null,
      required: true,
    },
    initialImage: {
      type: String,
      default: null,
    },
    initialId: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Bild auswählen',
    },
  },
  data: () => ({
    image: {},
    isUploading: false,
  }),
  mounted() {
    if (isEmpty(this.image, true)) return
    this.image = this.initialImage
  },
  methods: {
    ...mapActions({
      uploadImage: 'filehandler/imageUpload',
      removeImage: 'filehandler/imageRemove',
    }),
    async handleFileChange(e) {
      this.file = this.$refs[this.folder].files[0]
      const formData = new FormData()
      formData.append('file', this.file)
      try {
        this.isUploading = true
        await this.$refs.provider.validate(e)
        this.image = await this.uploadImage({
          formData,
          folder: this.folder,
          user: this.user,
        })
        this.isUploading = false
        this.$emit('target', this.image)
      } catch (error) {
        this.isUploading = false
        console.log(error)
      }
    },
    async removeImageAction() {
      if (this.initialId) await this.removeImage(this.initialId)
      this.$emit('target', { secure_url: null, public_id: null })
    },
  },
}
</script>

<style lang="scss" scoped>
// File Input
//
.dropbox {
  @apply transition-all duration-100 ease-in-out;
  @apply flex content-center justify-center flex-wrap;
  @apply bg-white text-primary border-2 border-dashed border-2 rounded text-center h-40 cursor-pointer;
  &:hover {
    @apply bg-grey;
  }
  &-content {
    @apply absolute mt-16;
  }
}
.input-file {
  @apply opacity-0 w-full h-full cursor-pointer bg-primary inline-block;
}
</style>
