<template>
  <div class="lg:py-12 lg:py-10 sm:p-5 px-4 py-4  lg:max-w-sm w-64  border bg-card
  flex flex-col items-center justify-center">
    <TitleSmall
      :title="title"
    />
    <p class="text-card uppercase mt-8" v-html="date"></p>
    <p class="mt-3 text-white" v-html="excerpt"></p>
    <Button class="lg:mt-8 sm:mt-8 mt-6 sm:min-w-xxs sm:w-auto w-full"
            :btn="$t('btns.posterBtn')"
    />
  </div>
</template>

<script>
import TitleSmall from "~/components/app/TitleSmall";
import Button from "~/components/form/Button";

export default {
  name: "PosterCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    btn: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  components: {TitleSmall, Button},
}
</script>
