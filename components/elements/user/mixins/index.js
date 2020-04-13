/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions } from 'vuex'

import bottomArea from '~/components/layout/bottomarea'
import imageUpload from '~/components/elements/utils/imageUpload'
import wysiwyg from '~/components/elements/utils/wysiwyg'
import autocomplete from '~/components/elements/utils/autocomplete'

const coreMixin = {
  components: {
    ValidationObserver,
    ValidationProvider,
    bottomArea,
    imageUpload,
    wysiwyg,
    autocomplete,
  },
  data: () => ({}),
  methods: {
    ...mapActions({
      update: 'updateUser',
      logout: 'logout',
    }),
    setImage({ secure_url }) {
      // eslint-disable-next-line camelcase
      this.myUser.picture = secure_url
    },
    async getSuggestionList() {
      const response = await this.$axios.$get('/api/maps/geocode', {
        params: { query: this.query },
      })
      return response
    },
  },
}

export default coreMixin
