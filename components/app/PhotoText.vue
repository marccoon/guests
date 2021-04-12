<template>
  <div
    class="lg:w-11/12 mx-auto flex sm:justify-between flex-wrap"
    :class="{
      'flex-row': !reverse,
      'flex-row-reverse': reverse,
    }"
  >
    <img class="sm:w-5/12 w-full object-cover" :src="img" alt="" />
    <div class="py-2 sm:w-1/2 w-full flex flex-col justify-center sm:m-0 mt-2">
      <Title v-if="title" :title="title" />
      <div class="md:text-base text-xs text-text" v-html="text"></div>
      <Link
        v-if="linkName"
        class="xl:mt-16 lg:mt-12 md:mt-10 sm:mt-6 mt-3 ml-auto lg:mr-36 md:mr-6 mr-4 flex-end"
        :link-name="linkName"
        :link="link"
      />
    </div>
  </div>
</template>

<script>
import Link from '~/components/app/Link'
import Title from '~/components/app/Title'

export default {
  name: 'PhotoText',
  components: { Title, Link },
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
    linkName: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped></style>
