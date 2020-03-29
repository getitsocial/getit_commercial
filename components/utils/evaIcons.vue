<template>
  <client-only>
    <i class="eva-hover">
      <!-- eslint-disable -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        viewBox="0 0 24 24"
        :fill="fill"
        class="eva eva-animation"
        :class="`eva-icon-hover-${animation}`"
        @click="$emit('click')"
        v-html="icon"
      />
    </i>
  </client-only>
</template>

<script>
export default {
  name: 'EvaIcon',
  props: {
    // Name of the icon
    name: {
      type: String,
      default: undefined
    },
    // Width of the icon
    width: {
      type: [String, Number],
      default: 24
    },
    // Height of the icon
    height: {
      type: [String, Number],
      default: 24
    },
    // Animation of the icon
    animation: {
      type: String,
      default: undefined
    },
    // Fill color of the Icon like #ff0000
    fill: {
      type: String,
      default: 'inherit'
    }
  },
  computed: {
    icon() {
      // Computed icon name
      // @arg The argument is a string value representing the name of the icon
      return this.getEvaIcon(this.name)
    }
  },
  methods: {
    // @vuese
    // Get name of the icon
    getEvaIcon(name) {
      if (name && process.client) {
        try {
          return require('eva-icons/eva').icons[name].contents
        } catch (e) {
          // Todo: Bind error handler
        }
      }
    }
  }
}
</script>
<style lang="scss">
.eva-hover {
  vertical-align: middle;
}
</style>
