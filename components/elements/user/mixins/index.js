/* eslint camelcase: ["error", {"properties": "never", ignoreDestructuring: true}] */

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions } from 'vuex'

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
  },
}

export default coreMixin
