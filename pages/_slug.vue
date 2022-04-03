<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center">
    <section
      class="md:h-96 h-56 bg-cover bg-center"
      :class="{ 'bg-about-bg': !page.featured_image_url }"
      :style="
        page.featured_image_url
          ? `background-image: url(${page.featured_image_url})`
          : ''
      "
    ></section>
    <section class="lg:pt-32 sm:pt-24 pt-16">
      <div class="container flex items-center justify-center">
        <Title class="drop-shadow-xl" :title="page.title.rendered" />
      </div>
    </section>
    <section class="lg:pt-16 lg:pb-20 sm:pt-10 sm:pb-16 pt-12 pb-10">
      <div class="container">
        <div class="prose text-white" v-html="page.content.rendered" />
      </div>
    </section>
  </div>
</template>

<script>
import { decode } from 'html-entities'
import Title from '~/components/app/Title'

export default {
  name: 'Slug',
  components: { Title },
  async asyncData({ $axios, params, error }) {
    try {
      const data = await $axios.$get(`/api/pages?slug=${params.slug}`)
      const page = data[0]
      if (!page) {
        return error({ statusCode: 404, message: 'Post not found' })
      }

      // eslint-disable-next-line camelcase
      return { page }
    } catch (e) {
      return error(e)
    }
  },
  head() {
    return {
      title: decode(this.page?.yoast_title),
      meta: this.page?.yoast_meta.map((meta) => {
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
