<template>
  <div class="bg-primary text-light px-2 md:px-4 py-8 border-t">
    <div class="container mx-auto">
      <div class="flex flex-wrap overflow-hidden sm:-mx-2">
        <div
          class="w-full text-center md:text-left my-4 overflow-hidden sm:my-2 sm:px-2 md:w-1/3"
        >
          <!-- First Column Content -->
          <ul class="list-menu-light">
            <li>
              <nuxt-link to="/imprint">
                {{ $t('imprint') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" exact>
                {{ $t('terms') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" exact>
                {{ $t('privacy_policy') }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div
          class="text-center md:text-left my-6 overflow-hidden sm:my-2 sm:px-2 md:w-1/3"
        >
          <!-- Center Column Content -->
          <p>
            {{ $t('feedback_hint') }}
          </p>
          <button class="primary link w-auto mx-auto md:ml-0 mt-3 p-0">
            {{ $t('feedback') }}
          </button>
        </div>
        <div
          class="w-full text-center md:text-right my-6 overflow-hidden sm:my-2 sm:px-2 md:w-1/3"
        >
          <!-- Last Column Content -->
          <div class="flex h-full justify-center md:justify-end">
            <div>
              <button class="button-blanc text-white">
                <eva-icons name="facebook" fill="#ffffff" />
              </button>
            </div>
            <div class="">
              <button class="button-blanc">
                <eva-icons name="linkedin" fill="#ffffff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
