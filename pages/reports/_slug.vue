<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center pt-4 lg:pb-40 sm:pb-32 pb-20">
    <div class="container relative">
      <SocialIcon class="ml-auto mr-0" />
      <Title
        :title="report.title.rendered"
        class="lg:mt-24 sm:my-16 mt-12 mx-auto"
      />
      <div
        class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-6 gap-5"
      >
        <div v-for="(img, index) in images" :key="index">
          <img :src="img.url" class="mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcon from '~/components/app/SocialIcon'
import Title from '~/components/app/Title'

export default {
  components: { Title, SocialIcon },
  layout: 'no-footer',
  async asyncData({ $axios, route }) {
    const data = await $axios.$get(`/report?slug=${route.params.slug}`)
    const report = data[0]
    const images = report.ACF.photos
    return { report, images }
  },
  head() {
    return {
      title: this.report.yoast_title,
      meta: this.report.yoast_meta.map((meta) => {
        meta.content = meta.content.replace(
          'wp.gosti-minsk.by',
          'gosti-minsk.by'
        )
        return meta
      }),
    }
  },
}
</script>

<style scoped></style>
