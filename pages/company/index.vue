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
                    alt="Nicole"
                    src="/img/shop.jpg"
                    class="rounded-lg border-white border-2 -mt-10 max-h-20 md:max-h-10"
                  />
                </div>
              </div>
              <div class="mt-2 text-info">
                <h3 class="text-xl leading-none font-bold">
                  Tim & Struppi
                </h3>
                <div class="text-sm">
                  <span class="text-light">Textilwaren</span>
                  <div class="font-medium mt-1">
                    Sesamstrasse 24 <br />
                    38100 Braunschweig <br />
                    <a href="tel:+49 531 2015511">+49 531 2015511</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <hr class="my-5" />
            </div>
            <div>
              <h2 class="text-info">Über uns</h2>
              <p>
                <b>Tim & Struppi</b> is based on the idea of selling unique
                vintage clothes by the kilo. A varied range of one-off items and
                accessories from past decades is a key element of our store
                concept and can be found in PICKNWEIGHT stores in Hamburg,
                Berlin, Cologne, Munich, Ibiza and Braunschweig. What could be
                better than owning an item of clothing that no one else is
                wearing apart from you?
              </p>
              <dl
                class="grid grid-cols-1 col-gap-4 row-gap-8 sm:grid-cols-2 my-5"
              >
                <div class="sm:col-span-1">
                  <dt class="leading-5 font-medium text-light ">
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
                            src="https://randomuser.me/api/portraits/women/19.jpg"
                            alt=""
                          />
                        </div>
                        <div class="ml-3">
                          <p class="leading-5 font-bold text-primary">
                            Maren Steinert
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
                    Mo - Fr 8:00 Uhr - 19:00 <br />
                    Sa - So Geschlossen
                  </dd>
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
export default {
  name: 'Ompany',
  data: () => ({})
}
</script>

<style lang="css" scoped />
