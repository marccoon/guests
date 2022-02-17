<template>
  <div class="flex items-center justify-between w-full">
    <img src="~assets/img/svg/title-icon.svg" alt="" />
    <component
      :is="to ? 'nuxt-link' : tag"
      :to="to"
      v-bind="$attrs"
      class="text-title uppercase text-center"
      :class="{
        'lg:text-2xl sm:text-xl': tag === 'h2',
        'lg:text-xl sm:text-lg': tag === 'h3',
        'lg:text-lg sm:text-md': tag === 'h4',
      }"
      v-html="title"
    ></component>
    <img src="~assets/img/svg/title-icon.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'TitleSmall',
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: undefined,
    },
    tag: {
      type: String,
      default: 'h2',
    },
  },
}
</script>

<style scoped></style>
