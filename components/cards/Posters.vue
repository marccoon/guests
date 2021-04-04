<template>
  <div
    class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-9 lg:gap-6 gap-5"
  >
    <div v-for="(poster, index) in posters" :key="index" class="relative group">
      <img
        :src="poster.featured_image_url"
        class="mx-auto object-cover position-absolute"
      />
      <PosterCard
        :title="poster.title.rendered"
        :date="poster.ACF.date"
        :excerpt="poster.excerpt.rendered"
        class="group-hover:opacity-100 opacity-0 absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 xl:w-4/5 sm:w-11/12 sm:h-4/5 h-3/4"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    posters: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
