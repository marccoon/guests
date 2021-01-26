<template>
  <div class="lg:py-12 lg:px-4  sm:py-8 px-2 py-4 lg:max-w-xs sm:max-w-64  max-w-48 border bg-card flex flex-col items-center">
    <TitleSmall
      :title="title"
    />
    <Button class="lg:mt-10 sm:mt-8 mt-6 sm:min-w-xxs sm:w-auto w-full"
      :btn="btn"
      :link="link"
    />
  </div>
</template>

<script>
import Title from "~/components/app/Title";
import Button from "~/components/form/Button";
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    btn: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  components: {Title, Button},
}
</script>

<style scoped>

</style>
