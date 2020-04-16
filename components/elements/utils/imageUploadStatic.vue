<template>
  <ValidationProvider
    v-slot="{ errors }"
    ref="provider"
    name="Bild"
    rules="ext:jpg,png,jpeg"
  >
    <!-- articlePicture FILE -->
    <div v-if="imgLocal">
      <img :src="imgLocal" alt="" class="rounded-lg mx-auto" />
    </div>
    <div class="animated dropbox">
      <div class="dropbox-content">
        <div class="my-auto" :class="{ 'spinner-dark': isUploading }">
          {{ placeholder }}
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
/* eslint-disable camelcase */
import { ValidationProvider } from 'vee-validate'
import { mapActions } from 'vuex'
import { isObject } from 'lodash'
export default {
  name: 'ImageUploadStatic',
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
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: 'Bild auswählen',
    },
  },

  data: () => ({
    isUploading: false,
    imageState: null,
  }),
  computed: {
    imgLocal: {
      get() {
        if (isObject(this.image)) return this.image
        return this.image
      },
      set({ secure_url }) {
        this.$emit('target', secure_url)
        return secure_url
      },
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
        this.isUploading = true
        await this.$refs.provider.validate(e)
        this.imgLocal = await this.uploadImage({
          formData,
          folder: this.folder,
          user: this.user,
        })
        this.isUploading = false
      } catch (error) {
        this.isUploading = false
        console.log(error)
      }
    },
    removeImageAction() {
      this.$emit('target', {})
    },
  },
}
</script>

<style lang="scss" scoped>
// File Input
//
.dropbox {
  @apply transition-all duration-100 ease-in-out mt-2;
  @apply flex content-center justify-center flex-wrap;
  @apply bg-white text-primary text-center cursor-pointer;
  &:hover {
    @apply text-light;
  }
  &-content {
    @apply absolute my-auto;
  }
}
.input-file {
  @apply opacity-0 w-full h-full cursor-pointer bg-primary inline-block;
}
</style>
