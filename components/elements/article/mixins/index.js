/* eslint-disable camelcase */

import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions, mapState, mapGetters } from 'vuex'
import { clone } from 'lodash'
import bottomArea from '~/components/layout/bottomarea'
import imageUpload from '~/components/elements/utils/imageUpload'
import wysiwyg from '~/components/elements/utils/wysiwyg'
import toggle from '~/components/elements/utils/toggle'
import autocomplete from '~/components/elements/utils/autocomplete'

const coreMixin = {
  components: {
    ValidationProvider,
    ValidationObserver,
    bottomArea,
    imageUpload,
    wysiwyg,
    toggle,
    autocomplete,
  },
  computed: {
    haveStock() {
      return this.article.stock !== -1
    },
    ...mapState({ loadState: (state) => state.articles.loading }),
    ...mapGetters({ findDataInStore: 'categories/list' }),
  },
  methods: {
    ...mapActions({
      create: 'articles/create',
      update: 'articles/update',
      getCategories: 'categories/getAll',
      deleteAction: 'articles/delete',
    }),
    setImage(data) {
      this.article.picture = data
    },
    addStock() {
      this.article.stock = 0
    },
    removeStock() {
      this.article.stock = -1
    },
    async getSuggestionList() {
      await this.getCategories()
      return clone(this.findDataInStore.rows)
    },
  },
}

export default coreMixin
