import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions, mapState } from 'vuex'
import bottomArea from '~/components/layout/bottomarea'

const coreMixin = {
  components: {
    ValidationObserver,
    ValidationProvider,
    bottomArea,
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
