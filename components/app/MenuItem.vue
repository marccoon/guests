<template>
  <div class="flex flex-col w-full flex-nowrap items-start">
    <div
      v-if="image"
      class="w-full mb-4"
    >
      <div class="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3">
        <img
          :src="src"
          class="absolute inset-0 w-full h-full object-cover"
          alt=""
        >
      </div>
    </div>
    <div class="w-full">
      <div class="flex justify-between items-baseline">
        <span class="uppercase text-dish-title lg:text-base text-sm w-auto">
          {{ title }}
        </span>
        <div
          class="bg-line bg-repeat-x flex-shrink w-auto h-1.5 flex-grow mx-2"
        />
        <span v-if="price" class="flex-shrink-0 text-dish-title lg:text-lg text-md">
          {{ price }} <span class="text-xs">{{ "BYN" }}</span>
        </span>
      </div>
      <div class="text-dish-text lg:text-sm text-xs md:w-4/5 w-full mt-3" v-html="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: [Object, Boolean],
      default: () => {}
    },
    price: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    src () {
      return this.image?.sizes.medium_large
    }
  }
}
</script>

<style scoped></style>
