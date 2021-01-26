<template>
  <div class="lg:my-10 sm:my-6 my-4">
    <div class="flex justify-between sm:items-end items-center">
      <span class="flex-shrink-0 uppercase text-dish-title lg:text-lg sm:text-sm text-xs sm:w-auto w-4/5">
        {{title}}
      </span>
      <div class="bg-line bg-repeat-x flex-shrink w-auto h-3.5 flex-grow mx-2 sm:block hidden"></div>
      <span class="flex-shrink-0 text-dish-title lg:text-lg sm:text-sm text-xs">
        {{price}}
      </span>
    </div>
    <p class="text-dish-text lg:text-base text-xs w-4/5  mt-3">
      {{text}}
    </p>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props:{
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false,
    },
  }
}
</script>

<style scoped>

</style>
