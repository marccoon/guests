<template>
  <div class="flex flex-col items-center">
    <div>
      <div class="text-text md:text-base text-xs text-center">
        {{ $t('contacts.address') }}
      </div>
      <div
        class="
          text-contact
          md:text-base
          text-xs
          flex flex-col
          items-center
          underline
          lg:mt-5
          sm:mt-4
          mt-2
        "
      >
        <a class="lg:mx-0 sm:mx-5" href="tel:+375296777999">
          +375 29 6777999
        </a>
      </div>
    </div>
    <div class="sm:mt-8 mt-4">
      <div class="text-text md:text-base text-xs text-center">
        {{ $t('contacts.timeTitle') }}
      </div>
      <div
        class="
          text-contact
          md:text-base
          text-xs
          lg:mt-5
          sm:mt-4
          mt-2
          flex flex-col
        "
      >
        <div class="flex justify-end lg:mx-0 sm:mx-5">
          <div class="text-right sm:mr-5 mr-3">
            {{ $t('contacts.day1') }}
          </div>
          <div class="text-text">{{ $t('contacts.time1') }}</div>
        </div>
        <div class="flex justify-end lg:mt-2 lg:mx-0 sm:mx-5 sm:mt-0 mt-1">
          <div class="text-right sm:mr-5 mr-3">
            {{ $t('contacts.day2') }}
          </div>
          <div class="text-text">{{ $t('contacts.time2') }}</div>
        </div>
        <div class="flex justify-end lg:mt-2 lg:mx-0 sm:mx-5 sm:mt-0 mt-1">
          <div class="text-right sm:mr-5 mr-3">
            {{ $t('contacts.day3') }}
          </div>
          <div class="text-text">{{ $t('contacts.time3') }}</div>
        </div>
        <div class="flex justify-end lg:mt-2 lg:mx-0 sm:mx-5 sm:mt-0 mt-1">
          <div class="text-right sm:mr-5 mr-3">
            {{ $t('contacts.day4') }}
          </div>
          <div class="text-text">{{ $t('contacts.time4') }}</div>
        </div>
      </div>
    </div>
    <SocialIcon class="sm:mt-10 mt-5" />
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
