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
  middleware: ['haveShop'],
  data: () => ({}),
  computed: {
    ...mapState({ loadState: (state) => state.categories.loading }),
    ...mapFields('shop', [
      'shop.name',
      'shop.size',
      'shop.address',
      'shop.description',
      'shop.companyType',
      'shop.contact.phone',
      'shop.contact.website',
      'shop.picture',
      'shop.logo',
    ]),
  },
  methods: {
    ...mapActions({
      create: 'shop/create',
    }),
  },
}
