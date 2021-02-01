<template>
<div class="bg-bg bg-repeat-y bg-100% bg-center pt-4 lg:pb-40 sm:pb-32 pb-20 ">
  <div class="container relative">
    <SocialIcon
      class="ml-auto mr-0"
    />
    <Title
      :title="$t('gallery.title')"
      class="lg:mt-24 sm:my-16 mt-12 mx-auto"
    />
    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-6 gap-5">
      <div v-for="(report, index) in reports" :key="index" >
        <NLink :to="localePath(`/reports/${report.slug}`)">
          <img v-show="report.featured_image_url"
               :src="report.featured_image_url"
               class="mx-auto" />
        </NLink>
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
import SocialIcon from "~/components/app/SocialIcon";
import Title from "~/components/app/Title";
import Button from "~/components/form/Button";

export default {
  components: {Title, Button, SocialIcon},
  layout: 'no-footer',
  async asyncData({$axios}) {
    const reports = await $axios.$get(`/report`)
    return { reports }
  },

}
</script>

<style scoped>

</style>
