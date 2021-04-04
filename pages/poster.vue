<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center pt-4 lg:pb-40 sm:pb-32 pb-20">
    <div class="container relative">
      <SocialIcon class="ml-auto mr-0" />
      <Title
        :title="$t('posters.title')"
        class="lg:mt-24 sm:mt-16 my-12 mx-auto"
      />
      <div>
        <Posters :posters="posters" class="lg:mt-24 sm:mt-16 mt-8" />
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcon from '~/components/app/SocialIcon'
import Title from '~/components/app/Title'
import Posters from '~/components/cards/Posters'
export default {
  components: { SocialIcon, Title, Posters },
  layout: 'no-footer',
  async asyncData({ app }) {
    const posters = await app.$axios.$get('/afisha')
    // console.log(posters)
    return { posters }
  },
}
</script>

<style scoped></style>
