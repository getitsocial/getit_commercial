import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions } from 'vuex'

import bottomArea from '~/components/layout/bottomarea'
// import imageUpload from '~/components/elements/utils/imageUpload'
// import wysiwyg from '~/components/elements/utils/wysiwyg'

const coreMixin = {
  components: {
    ValidationObserver,
    ValidationProvider,
    bottomArea,
    // imageUpload,
    // wysiwyg
  },
  methods: {
    ...mapActions({
      update: 'updateUser',
      logout: 'logout',
    }),
    setImage(img) {
      console.log(img)
      this.user.picture = img
    },
  },
}

export default coreMixin
