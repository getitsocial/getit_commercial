import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapActions, mapState } from 'vuex'
import { debounce } from 'lodash'
import { mapFields } from 'vuex-map-fields'
import autocomplete from '~/components/elements/utils/autocomplete'
import imageUpload from '~/components/elements/utils/imageUpload'
import wysiwyg from '~/components/elements/utils/wysiwyg'
import bottomArea from '~/components/layout/bottomarea'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    autocomplete,
    imageUpload,
    wysiwyg,
    bottomArea,
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
    companyLocation(e) {
      // if (!this.myUser.location) return
      return this.address?.label
    },
  },
  methods: {
    ...mapActions({
      create: 'shop/create',
      update: 'shop/update',
      check: 'shop/checkName',
    }),
    checkName: debounce(async function (e) {
      try {
        await this.check(this.name)
      } catch ({ response: { data } }) {
        this.$refs.start.setErrors({
          Name: ['Shopname existiert bereits'],
        })
      }
    }, 500),
    selectLocation({ address, locationId, label }) {
      this.address = { ...address, label, locationId }
    },
    selectPicture(data) {
      this.picture = data
    },
    selectLogo(data) {
      this.logo = data
    },
    async goNext() {
      try {
        await this.$refs.shop.validate()
        this.$router.push('/onboarding/picture')
      } catch (error) {
        console.log(error)
      }
    },
  },
}
