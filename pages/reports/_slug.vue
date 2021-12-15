<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center pt-4 lg:pb-40 sm:pb-32 pb-20">
    <div class="container relative">
      <SocialIcon class="ml-auto mr-0" />
      <div
        v-if="linked_event"
        class="
          font-title font-bold
          xl:text-3xl
          md:text-2xl
          sm:text-xl
          text-title
          lg:mt-24
          sm:mt-16
          mt-12
          uppercase
          text-center
        "
      >
        {{ linked_event.post_title }}
      </div>
      <Title
        :title="report.title.rendered"
        class="lg:mt-8 sm:mt-6 mt-4 mx-auto"
      />
      <div
        class="
          col-count-2
          md:col-count-3
          gap-4
          md:gap-6
          before:box-inherit
          after:box-inherit
        "
      >
        <div
          v-for="(photo, index) in photos"
          :key="index"
          class="break-inside mb-6"
        >
          <img
            :src="photo.url"
            :srcset="`
              ${photo.sizes.thumbnail} 320px,
              ${photo.sizes.medium} 768px,
              ${photo.sizes.large}
            `"
            alt=""
          />
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
  async asyncData({ $axios, params, error }) {
    try {
      const data = await $axios.$get(`/api/report?slug=${params.slug}`)
      const report = data[0]
      // eslint-disable-next-line camelcase
      const { photos, linked_event } = report.ACF
      return { report, photos, linked_event }
    } catch (e) {
      return error(e)
    }
  },
  head() {
    return {
      title: this.report?.yoast_title,
      meta: this.report?.yoast_meta.map((meta) => {
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
