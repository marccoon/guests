<template>
  <div class="group relative">
    <img :src="img" class="w-full" alt="" />

    <div
      class="group-hover:opacity-100 opacity-0 absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 xl:w-4/5 sm:w-11/12 sm:h-3/5 h-3/4 lg:py-8 lg:py-6 sm:p-5 px-6 py-4 lg:max-w-sm w-64 border bg-card flex flex-col items-center justify-center"
    >
      <TitleSmall :title="title" />
      <div class="text-card uppercase mt-8" v-html="date"></div>
      <div class="mt-3 text-white" v-html="excerpt"></div>
      <div class="lg:mt-8 sm:mt-8 mt-6 sm:min-w-xxs sm:w-auto w-full">
        <button class="btn" @click.prevent="openModal">
          {{ $t('btns.posterBtn') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TitleSmall from '~/components/app/TitleSmall'

export default {
  name: 'PosterCard',
  components: { TitleSmall },
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  methods: {
    openModal() {
      this.$store.dispatch('showModal')
    },
  },
}
</script>
