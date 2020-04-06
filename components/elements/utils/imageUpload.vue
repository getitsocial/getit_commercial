<template>
  <ValidationProvider
    v-slot="{ errors }"
    ref="provider"
    name="Bild"
    rules="ext:jpg,png,jpeg"
  >
    <!-- articlePicture FILE -->
    <div v-if="havePicture">
      <img :src="image.secure_url" alt="" class="rounded-lg" />
      <button class="w-auto ml-auto" @click="removeImageAction">
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
            Bild auswählen
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
import { mapActions, mapState } from 'vuex'
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
    image: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),
  computed: {
    ...mapState({ isUploading: (state) => state.filehandler.isUploadPending }),
    havePicture() {
      return !isEmpty(this.image)
    },
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
        await this.$refs.provider.validate(e)
        this.image = await this.uploadImage({
          formData,
          folder: this.folder,
        })
        this.$emit('update:target', this.image)
      } catch (e) {
        console.log(e)
      }
    },
    async removeImageAction() {
      if (!this.image) return
      await this.removeImage(this.image)
      this.image = null
      this.$emit('update:target', {})
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
