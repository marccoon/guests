<template>
  <div class="my-10">
    <div class="flex flex-col w-full flex-nowrap items-start">
      <div class="w-full mb-4">
        <div
          v-if="image"
          class="aspect-w-16 aspect-h-9 md:aspect-w-4 md:aspect-h-3"
        >
          <img
            :src="src"
            class="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div class="w-full">
        <div class="flex justify-between items-baseline">
          <span class="uppercase text-dish-title lg:text-base text-sm w-auto">
            {{ title }}
          </span>
          <div
            class="bg-line bg-repeat-x flex-shrink w-auto h-1.5 flex-grow mx-2"
          ></div>
          <span class="flex-shrink-0 text-dish-title lg:text-lg text-sm">
            {{ price }}
          </span>
        </div>
        <p class="text-dish-text lg:text-sm text-xs w-4/5 mt-3">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: [Object, Boolean],
      default: () => {},
    },
    price: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    src() {
      return this.image?.url
    },
  },
}
</script>

<style scoped></style>
