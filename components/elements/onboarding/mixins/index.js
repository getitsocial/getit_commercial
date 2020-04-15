import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions, mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import autocomplete from '~/components/elements/utils/autocomplete'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    autocomplete,
  },
  data: () => ({}),
  computed: {
    ...mapState({ loadState: (state) => state.categories.loading }),
    ...mapFields('shop', [
      'name',
      'size',
      'address',
      'description',
      'companyType',
      'contact.phone',
      'contact.website',
      'picture',
      'pictureId',
      'logo',
      'logoId',
    ]),
  },
  methods: {
    ...mapActions({
      create: 'shop/create',
    }),
  },
}
