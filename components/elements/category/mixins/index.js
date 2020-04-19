import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions, mapState } from 'vuex'
import bottomArea from '~/components/layout/bottomarea'
import wysiwyg from '~/components/elements/utils/wysiwyg'
import imageUpload from '~/components/elements/utils/imageUpload'

const coreMixin = {
  components: {
    ValidationObserver,
    ValidationProvider,
    bottomArea,
    wysiwyg,
    imageUpload,
  },
  computed: mapState({ loadState: (state) => state.categories.loading }),
  methods: {
    ...mapActions({
      create: 'categories/create',
      update: 'categories/update',
      deleteAction: 'categories/delete',
    }),
  },
}

export default coreMixin
