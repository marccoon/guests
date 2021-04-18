<template>
  <div
    class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-9 lg:gap-6 gap-5"
  >
    <div v-for="(poster, index) in posters" :key="index">
      <PosterCard
        :img="poster.featured_image_url"
        :title="poster.title.rendered"
        :date="poster.ACF.date"
        :excerpt="poster.excerpt.rendered"
      />
    </div>
  </div>
</template>

<script>
import PosterCard from '~/components/cards/PosterCard'

export default {
  name: 'Post',
  components: { PosterCard },
  props: {
    posters: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
