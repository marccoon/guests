<template>
  <div class="group relative">
    <img
         :src="img"
         class="w-full"
    >

    <Card
      :title="title"
      :btn="btn"
      :link="link"
      class="mx-auto transition-all duration-150 opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2
            transform -translate-x-1/2 -translate-y-1/2"
    />

  </div>
</template>

<script>
import Card from "~/components/cards/Card";
export default {
  name: "PosterSlide",
  props:{
    img: {
      type: String,
      required: true
    },
    title:{
      type: String,
      required: true
    },
    btn:{
      type: String,
      required: true
    },
    link:{
      type: String,
      required: true
    }
  },
  components: {Card},
}
</script>
<style scoped>

</style>
