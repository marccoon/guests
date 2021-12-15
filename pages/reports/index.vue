<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center pt-4 lg:pb-40 sm:pb-32 pb-20">
    <div class="container relative">
      <SocialIcon class="ml-auto mr-0" />
      <Title
        :title="$t('gallery.title')"
        class="lg:mt-24 sm:my-16 mt-12 mx-auto"
      />
      <div
        class="
          grid
          lg:grid-cols-3
          sm:grid-cols-2
          grid-cols-1
          xl:gap-10
          lg:gap-6
          gap-5
        "
      >
        <div v-for="(report, index) in reports" :key="index">
          <nuxt-link :to="localePath(`/reports/${report.slug}`)">
            <div class="group relative">
              <img :src="report.featured_image_url" class="w-full" alt="" />

              <div
                class="
                  group-hover:opacity-100
                  opacity-0
                  absolute
                  top-1/2
                  left-1/2
                  z-10
                  transform
                  -translate-x-1/2 -translate-y-1/2
                  xl:w-4/5
                  sm:w-11/12 sm:h-3/5
                  h-3/4
                  lg:py-8 lg:py-6
                  sm:p-5
                  px-6
                  py-4
                  lg:max-w-sm
                  w-64
                  border
                  bg-card
                  flex flex-col
                  items-center
                  justify-center
                "
              >
                <TitleSmall
                  :title="
                    report.ACF.linked_event
                      ? report.ACF.linked_event.post_title
                      : report.title.rendered
                  "
                />
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <Button
        :btn="$t('gallery.btn')"
        class="block lg:mt-24 sm:mt-16 mt-12 mx-auto w-max"
      />
    </div>
  </div>
</template>

<script>
import SocialIcon from '~/components/app/SocialIcon'
import Title from '~/components/app/Title'
import Button from '~/components/form/Button'
import TitleSmall from '~/components/app/TitleSmall'

export default {
  components: { TitleSmall, Title, Button, SocialIcon },
  layout: 'no-footer',
  async asyncData({ $axios }) {
    const reports = await $axios.$get(`/api/report`)
    return { reports }
  },
  head() {
    return {
      title: `Фотоотчеты c ресторана "Гости"`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
