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
          <card
            class="relative flex flex-col min-w-0 break-words w-full -mt-64 md:-mt-48 overflow-visible"
            padded
          >
            <div>
              <div class="flex flex-wrap justify-center">
                <div class="w-full flex justify-center">
                  <div class="relative">
                    <img
                      alt="Maren"
                      :src="user.picture"
                      class="rounded-full h-auto align-middle border-white border-2 -mt-12"
                      width="110"
                    />
                  </div>
                </div>
              </div>
              <div class="text-center mt-2 font-bold text-info">
                <h3 class="text-4xl leading-normal">
                  {{ user.name }}
                </h3>
                <div class="text-sm leading-normal uppercase">
                  Braunschweig, Deutschland
                </div>
                <div class="mt-5 font-bold text-light">
                  Shop Manager - Tim & Struppi
                </div>
              </div>
              <div class="w-full">
                <hr class="my-8 max-w-lg m-auto" />
              </div>
              <div class="text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full max-w-3xl px-2 md:px-4">
                    <p class="mb-4 text-lg">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <div class="pb-2 flex justify-end">
                      <button
                        class="w-auto mr-2"
                        @click="$router.push('/profile/settings')"
                      >
                        Einstellungen
                      </button>
                      <button class="w-auto" @click="logoutUser">Logout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </card>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Profile',
  middleware: ['authenticated'],
  data: () => ({}),
  methods: {
    ...mapActions(['logout']),
    async logoutUser() {
      await this.logout()
      await this.$router.push('/login')
    },
  },
}
</script>

<style lang="css" scoped />
