import Vue from 'vue'
import evaIcons from '~/components/elements/utils/evaIcons.vue'
import card from '~/components/layout/card'
import toast from '@/components/elements/utils/toast.vue'
import modal from '@/components/elements/utils/modal.vue'
import lottie from '@/components/elements/utils/lottie.vue'
import imageLoader from '@/components/elements/utils/imageLoader.vue'

// Mixins

Vue.component('evaIcons', evaIcons)
Vue.component('card', card)
Vue.component('toast', toast)
Vue.component('modal', modal)
Vue.component('lottie', lottie)
Vue.component('imageLoader', imageLoader)
