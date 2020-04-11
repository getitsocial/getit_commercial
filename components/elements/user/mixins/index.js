/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions } from 'vuex'
import VueSimpleSuggest from 'vue-simple-suggest'

import bottomArea from '~/components/layout/bottomarea'
import imageUpload from '~/components/elements/utils/imageUpload'
import wysiwyg from '~/components/elements/utils/wysiwyg'

const coreMixin = {
  components: {
    ValidationObserver,
    ValidationProvider,
    bottomArea,
    imageUpload,
    wysiwyg,
    VueSimpleSuggest,
  },
  methods: {
    ...mapActions({
      update: 'updateUser',
      logout: 'logout',
    }),
    setImage({ secure_url }) {
      // eslint-disable-next-line camelcase
      this.myUser.picture = secure_url
    },
    async getSuggestionList(data) {
      const response = await this.$axios.$get('/api/maps/geocode', {
        params: { query: data },
      })
      return response
    },
  },
}

export default coreMixin
