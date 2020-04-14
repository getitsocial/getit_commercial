import { ValidationProvider } from 'vee-validate'
import { createHelpers } from 'vuex-map-fields'
import autocomplete from '~/components/elements/utils/autocomplete'

const { mapFields } = createHelpers({
  getterType: 'company/getField',
  mutationType: 'company/updateField',
})

export default {
  components: {
    ValidationProvider,
    autocomplete,
  },
  data: () => ({}),
  computed: {
    ...mapFields(['company.name', 'company.size', 'company.address']),
  },
}
