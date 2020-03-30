<template>
  <div>
    <gmap-map
      :center="center"
      :map-type-id="mapTypeId"
      :zoom="14"
      :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false
      }"
    >
      <gmap-marker
        v-for="(item, index) in markers"
        :key="index"
        :position="item.position"
        @click="center = item.position"
      />
    </gmap-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 52.2688736, lng: 10.5267696 },
      mapTypeId: 'terrain',
      markers: [{ position: { lat: 52.2688736, lng: 10.5267696 } }]
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  @apply relative z-30;
  height: 450px;
  width: 100%;
}
</style>
