<template>
  <div
    class="
      flex flex-col items-center
      border
      bg-card
      lg:py-12 sm:py-8 py-4
      lg:px-4 px-6
      lg:max-w-xs max-w-64
    "
  >
    <TitleSmall :title="title" />
    <div v-if="date" class="text-card uppercase mt-8" v-html="date" />
    <div v-if="excerpt" class="mt-3 text-white" v-html="excerpt" />
    <Button
      class="lg:mt-10 sm:mt-8 mt-6 sm:min-w-xxs sm:w-auto w-full"
      :btn="btn"
      :link="link"
    />
  </div>
</template>

<script>
import Button from '~/components/form/Button'
import TitleSmall from '~/components/app/TitleSmall'
export default {
  name: 'Card',
  components: { TitleSmall, Button },
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      default: ''
    },
    btn: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
