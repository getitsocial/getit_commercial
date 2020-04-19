<template>
  <div>
    <div class="container max-w-3xl mx-auto">
      <div
        class="shop-picture min-h-full relative z-10"
        :style="{ backgroundImage: `url('${picture}')` }"
      ></div>

      <div class="relative block -mt-48 px-3 z-20">
        <img
          :src="logo"
          :alt="shop.name"
          width="150"
          class="mb-3 shadow-xl rounded-lg"
        />
        <div
          class="flex flex-col bg-white p-3 rounded-lg shadow-xl text-primary"
        >
          <div class="flex w-full">
            <div class="w-full">
              <h2 class="font-bold">{{ shop.name }}</h2>
            </div>
            <div class="h-full mt-2">
              <a
                :href="`tel:${shop.contact.phone}`"
                class="text-primary content-center"
              >
                <eva-icons
                  name="phone-outline"
                  fill="currentColor"
                  width="70"
                />
              </a>
            </div>
          </div>
          <div class="flex">
            <eva-icons name="pin" fill="currentColor" width="20" />
            <div class="text-light ml-1 inline-block align-middle">
              {{ shop.address.label }}
            </div>
          </div>
        </div>
      </div>
      <div class="px-3 py-6">
        <avatar :img-src="user.picture" custom="my-auto"
          ><div class="flex flex-col leading-none text-sm ml-1">
            <div class="font-bold text-primary">{{ user.name }}</div>
            <div class="text-light">Store Manager</div>
          </div></avatar
        >
      </div>
      <div v-if="shop.description" class="px-3">
        <div class="shop-content" v-html="shop.description" />
      </div>
      <empty-content
        v-else
        content="Du hast noch keine Shopbeschreibung angelegt. Lege jetzt eine an!"
        route="/shop/edit"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import { mapGetters } from 'vuex'
import emptyContent from '~/components/elements/utils/emptyContent'
import avatar from '~/components/elements/avatar'

export default {
  name: 'Shop',
  middleware: ['authenticated'],
  components: {
    avatar,
    emptyContent,
  },
  subNavigation: {
    rightNavigationContent: [
      {
        name: 'Einstellungen',
        route: '/shop/edit',
      },
    ],
  },
  computed: {
    ...mapGetters(['shop']),
    logo() {
      if (this.shop.picture) return this.shop.logo?.secure_url
      return '/img/placeholder.svg'
    },
    picture() {
      if (this.shop.picture) return this.shop.picture?.secure_url
      return '/img/placeholder.svg'
    },
  },
}
</script>

<style lang="scss" scoped>
.shop {
  &-picture {
    @apply bg-cover bg-center;
    height: 28rem;
  }
  &-content {
    @apply leading-relaxed text-light;
  }
}
</style>
