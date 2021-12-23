<template>
  <div class="relative h-full">
    <img
      src="~assets/img/map.png"
      alt=""
      class="w-full xl:h-full lg:h-auto md:h-128 object-cover cursor-pointer"
      @click="openMap"
    />
    <div
      class="absolute bg-contact pt-4 pb-5 pl-7 pr-5 max-w-56"
      style="transform: translate3d(0, -100%, 0px); top: 55%; left: 45%"
    >
      <div class="relative">
        <span class="text-contact lg:text-2xl sm:text-xl uppercase">
          {{ $t('contacts.name') }}
        </span>
        <p class="text-text lg:text-base sm:text-sm lg:mt-3 sm:mt-2">
          {{ $t('contacts.address') }}
        </p>
        <img
          src="~assets/img/location.svg"
          class="absolute -left-12 -bottom-5"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
  methods: {
    openMap() {
      this.$store.dispatch('showMap')
    },
  },
}
</script>
