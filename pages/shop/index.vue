<template>
  <div>
    <main class="profile-page">
      <section class="relative block" style="height: 300px;">
        <div
          class="absolute top-0 w-full h-full bg-repeat"
          style="background-image: url('./img/bgpattern.png');"
        ></div>
      </section>
      <section class="relative">
        <div class="container mx-auto px-2">
          <card class="relative -mt-64 md:-mt-48 overflow-visible" padded>
            <div class="flex flex-wrap md:flex-row justify-start">
              <div class="mr-0 md:mr-5">
                <div class="relative">
                  <img
                    :src="picture"
                    class="rounded-lg shadow -mt-10 max-h-20 md:max-h-10 w-full"
                  />
                </div>
              </div>
              <div class="mt-4 text-info">
                <h3 class="text-xl leading-none font-bold">
                  {{ shop.name }}
                </h3>
                <div class="text-sm">
                  <!-- <span class="text-light">Textilwaren</span> -->
                  <div class="font-medium mt-2 leading-snug">
                    {{ shop.address.street }} {{ shop.address.houseNumber
                    }}<br />
                    {{ shop.address.postalCode }} {{ shop.address.city }} <br />
                    <a :href="`tel:${shop.contact.phone}`">{{
                      shop.contact.phone
                    }}</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <hr class="my-5" />
            </div>
            <div>
              <div v-if="shop.description" v-html="shop.description" />
              <empty-content
                v-else
                content="Du hast noch keine Shopbeschreibung angelegt. Lege
                        jetzt eine an!"
                route="/shop"
              />
              <dl
                class="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2 my-5"
              >
                <div class="sm:col-span-1">
                  <dt class="leading-5 font-medium text-light">
                    Store Manager
                  </dt>
                  <dd class="mt-2 leading-5">
                    <nuxt-link
                      to="/profile"
                      class="flex-shrink-0 group block focus:outline-none focus:no-underline"
                    >
                      <div class="flex items-center">
                        <div>
                          <img
                            class="inline-block h-9 w-9 rounded-full"
                            :src="user.picture"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="leading-5 font-bold text-primary">
                            {{ user.name }}
                          </p>
                          <p class="leading-4 font-medium text-light">
                            Profildetails
                          </p>
                        </div>
                      </div>
                    </nuxt-link>
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="leading-5 font-medium text-light">
                    Öffnungszeiten
                  </dt>
                  <dd class="mt-1 leading-5">
                    <!--
                    Mo - Fr 8:00 Uhr - 19:00 <br />
                    Sa - So Geschlossen
                  --></dd>
                </div>
              </dl>
            </div>
          </card>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
/* eslint-disable camelcase */
import { mapGetters } from 'vuex'
import emptyContent from '~/components/elements/utils/emptyContent'

export default {
  name: 'Shop',
  middleware: ['authenticated'],
  components: {
    emptyContent,
  },
  computed: {
    ...mapGetters(['shop']),
    picture() {
      if (this.shop.picture) return this.shop.picture?.secure_url
      return '/img/placeholder.svg'
    },
  },
}
</script>

<style lang="css" scoped />
