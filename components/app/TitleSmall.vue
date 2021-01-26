<template>
  <div class="flex items-center justify-between w-full">
    <img src="~assets/img/svg/title-icon.svg">
    <h2 class="lg:text-2xl sm:text-xl text-title uppercase text-center" v-html="title">
    </h2>
    <img src="~assets/img/svg/title-icon.svg">
  </div>
</template>

<script>
export default {
  name: "TitleSmall",
  props: {
    title:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
