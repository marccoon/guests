<template>
  <div>
    <div class="font-normal text-text md:text-base text-xs text-center">
      {{ $t('contacts.address') }}
    </div>
    <div
      class="font-normal text-contact md:text-base text-xs flex sm:flex-row flex-col justify-center items-center underline mt-4"
    >
      <a class="sm:mx-5" href="tel:+375 29 6777999">+375 29 6777999</a>
    </div>
    <div
      class="text-contact sm:mt-8 mt-4 md:text-base text-xs lg:mt-10 sm:mt-4 mt-2 flex justify-center items-center sm:flex-row flex-col"
    >
      <div class="flex justify-end sm:mx-5">
        <div class="text-right sm:mr-5 mr-3">{{ $t('contacts.day1') }}</div>
        <div class="text-text">{{ $t('contacts.time1') }}</div>
      </div>
      <div class="flex justify-end sm:mx-5 sm:mt-0 mt-1">
        <div class="text-right sm:mr-5 mr-3">{{ $t('contacts.day2') }}</div>
        <div class="text-text">{{ $t('contacts.time2') }}</div>
      </div>
      <div class="flex justify-end sm:mx-5 sm:mt-0 mt-1">
        <div class="text-right sm:mr-5 mr-3">{{ $t('contacts.day3') }}</div>
        <div class="text-text">{{ $t('contacts.time3') }}</div>
      </div>
    </div>
    <SocialIcon class="sm:mt-10 mt-5 mx-auto" />
  </div>
</template>

<script>
import SocialIcon from '~/components/app/SocialIcon'

export default {
  name: 'Contacts',
  components: { SocialIcon },
}
</script>

<style scoped></style>
