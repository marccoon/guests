<template>
<div class="pt-4 lg:pb-40 sm:pb-32 pb-20 bg-bg2 bg-repeat-y bg-100% bg-center">
  <div class="container relative">
    <SocialIcon
      class="ml-auto mr-0"
    />
    <Title
      title="Галерея"
      class="lg:mt-24 sm:my-16 mt-12 mx-auto"
    />
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-6 gap-5">
      <div v-for="(img, index) in images" :key="index" >
        <img :src="img"  class="mx-auto">

      </div>
    </div>
    <Button
      btn="Смотреть еще"
      class="block lg:mt-24 sm:mt-16 mt-12 mx-auto w-max"
    />
  </div>
</div>
</template>

<script>
import SocialIcon from "~/components/app/SocialIcon";
import Title from "~/components/app/Title";
import Button from "~/components/form/Button";

export default {
  components: {Title, Button, SocialIcon},
  layout: 'no-footer',
  props:{
  },
  data: () => ({
    images: [
      'img/index-about-img.png','img/index-about-img.png','img/index-about-img.png','img/index-about-img.png',
      'img/index-about-img.png','img/index-about-img.png','img/index-about-img.png','img/index-about-img.png',
      'img/index-about-img.png',
    ]
  }),

}
</script>

<style scoped>

</style>
