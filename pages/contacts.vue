<template>
  <div class="pt-4 bg-bg bg-repeat-y bg-100% bg-center">
    <div class="container relative">
      <SocialIcon class="ml-auto mr-0" />
      <Title
        :title="$t('contacts.title')"
        class="lg:mt-24 sm:mt-16 mt-12 mx-auto"
      />
      <Contacts />
      <Map class="w-full lg:mt-24 xl:h-144" />
    </div>
  </div>
</template>

<script>
import SocialIcon from '~/components/app/SocialIcon'
import Title from '~/components/app/Title'
import Contacts from '~/components/app/Contacts'
import Map from '~/components/app/Map'

export default {
  // name: "BlogSlider",
  components: { Map, SocialIcon, Title, Contacts }
}
</script>
