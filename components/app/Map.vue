<template>
  <div class=" relative h-full">
    <img src="img/map.png" alt="" class="w-full xl:h-full lg:h-auto md:h-128 object-cover cursor-pointer" @click="openMap">
    <div class="absolute top-1/3 left-1/3  bg-contact lg:py-5 sm:pt-3 sm:pb-4 lg:px-9 sm:pl-6 sm:pr-3 lg:max-w-56 sm:max-w-48">
      <div class="relative">
        <span class="text-contact lg:text-2xl sm:text-xl uppercase">Госцi</span>
        <p class="text-text lg:text-base sm:text-sm lg:mt-3 sm:mt-2"> г. Минск, пр-т Независимости, 25</p>
        <img src="img/location.svg" class="absolute -left-12 -bottom-5 ">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  methods: {
    openMap () {
      this.$store.dispatch('modals/showMap')
    }
  }
}
</script>
