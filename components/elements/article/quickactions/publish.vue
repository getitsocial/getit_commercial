<template>
  <div class="form-content my-3">
    <label class="form-label w-full" for="articleDescription">
      <span class="text-info">Veröffentlicht?</span>
      <toggle :boolean-value="article.published" @change="updateArticle" />
    </label></div
></template>

<script>
import { mapActions } from 'vuex'
import toggle from '~/components/elements/utils/toggle'

export default {
  name: 'PublishAction',
  components: {
    toggle,
  },
  props: {
    article: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({}),
  methods: {
    ...mapActions({
      updateAction: 'articles/update', // map `this.add()` to `this.$store.dispatch('increment')`
    }),
    async updateArticle(val) {
      this.article.published = val
      await this.updateAction(this.article)
      this.$addToast({ message: `Artikel ist ${val ? 'Online' : 'Offline'}` })
    },
  },
}
</script>

<style lang="css" scoped></style>
