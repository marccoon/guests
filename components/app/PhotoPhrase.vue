<template>
  <div
    class="mx-auto flex sm:justify-between justify-center flex-wrap sm:px-0 px-4"
    :class="{
      'sm:flex-row flex-row-reverse': reverse,
      'flex-row-reverse': !reverse,
    }"
  >
    <div
      class="py-2 sm:w-1/2 flex items-center justify-center"
      :class="{
        'sm:justify-end': reverse,
        'sm:justify-start': !reverse,
      }"
    >
      <div
        class="lg:w-5/6 sm:w-11/12 w-full xl:max-w-none lg:max-w-md md:max-w-sm sm:max-w-xs flex flex-col items-center"
        :class="{
          'sm:items-end': reverse,
          'sm:items-start': !reverse,
        }"
      >
        <img
          src="~assets/img/svg/title-icon.svg"
          class="transform rotate-0 sm:rotate-90"
        />
        <div
          class="font-phrase sm:w-full text-base text-phrase xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg md:my-10 my-2 sm:max-w-xl max-w-72 text-center"
          :class="{
            'sm:text-right': reverse,
            'sm:text-left': !reverse,
          }"
          v-html="phrase"
        ></div>
        <img
          src="~assets/img/svg/title-icon.svg"
          class="transform rotate-0 sm:rotate-90"
        />
      </div>
    </div>
    <img
      class="sm:w-5/12 w-full lg:h-132 sm:h-auto h-48 object-cover sm:mt-0 mt-4"
      :src="img"
    />
  </div>
</template>

<script>
export default {
  name: 'PhotoPhrase',
  props: {
    img: {
      type: String,
      required: true,
    },
    phrase: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped></style>
