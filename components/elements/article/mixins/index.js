import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions, mapState } from 'vuex'

import bottomArea from '~/components/layout/bottomarea'
import imageUpload from '~/components/elements/utils/imageUpload'
import wysiwyg from '~/components/elements/utils/wysiwyg'
import toggle from '~/components/elements/utils/toggle'

const coreMixin = {
  components: {
    ValidationProvider,
    ValidationObserver,
    bottomArea,
    imageUpload,
    wysiwyg,
    toggle,
  },
  computed: {
    haveStock() {
      return this.article.stock !== -1
    },
    ...mapState({ loadState: (state) => state.articles.loading }),
  },
  methods: {
    ...mapActions({
      create: 'articles/create', // map `this.add()` to `this.$store.dispatch('increment')`
      update: 'articles/update',
      deleteAction: 'articles/delete',
    }),
    setImage(img) {
      this.article.picture = img
    },
    addStock() {
      this.article.stock = 0
    },
    removeStock() {
      this.article.stock = -1
    },
  },
}

export default coreMixin
