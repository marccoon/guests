<template>
  <div class="lg:w-11/12  mx-auto flex sm:justify-between flex-wrap"
       :class="{
              'flex-row': !reverse,
              'flex-row-reverse': reverse
            }"
  >
    <img class="sm:w-5/12 w-full sm:h-auto h-48 object-cover "
      :src="img"
    >
    <div class="py-2 sm:w-1/2 w-full flex flex-col justify-center sm:m-0 mt-2">
      <Title
        v-if="title"
        :title="title"
      />
      <p class="md:text-base text-xs text-text" v-html="text">
      </p>
      <Link class="xl:mt-16 lg:mt-12 md:mt-10 sm:mt-6 mt-3 ml-auto lg:mr-36 md:mr-6 mr-4 flex-end"
            v-if="linkName"
            :linkName="linkName"
            :link="link"
      />
    </div>

  </div>
</template>

<script>
import Link from "~/components/app/Link";
import Title from "~/components/app/Title";
export default {
  name: "PhotoText",
  props: {
    img: {
      type: String,
      required: true,
      default: false
    },
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    linkName: {
      type: String,
      required: false,
      default: false
    },
    link: {
      type: String,
      required: false,
      default: false
    },
    reverse:{
      type: Boolean,
      required: true,
    },
  },
  components: {Title, Link},
}
</script>

<style scoped>

</style>
