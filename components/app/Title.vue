<template>
  <div class="flex items-center max-w-max lg:mb-12 sm:mb-8 mb-6">
    <img src="~assets/img/svg/title-icon.svg" alt="" />
    <h2
      class="
        font-title font-bold
        xl:text-5xl
        md:text-4xl
        sm:text-3xl
        text-xl text-title
        sm:mx-6
        mx-3
        uppercase
        text-center
      "
      v-html="title"
    />
    <img src="~assets/img/svg/title-icon.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
