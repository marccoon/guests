<template>
  <div class="relative sm:px-16 px-7">
    <button
      class="w-4 sm:w-auto next absolute rotate-180 right-0 top-1/2 transform -translate-y-1/2 z-10"
      @click="slider.slideNext()"
    >
      <img src="~assets/img/slider-arrow.svg" alt="" />
    </button>
    <button
      class="w-4 sm:w-auto prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
      @click="slider.slidePrev()"
    >
      <img src="~assets/img/slider-arrow.svg" alt="" />
    </button>
    <Swiper ref="slider" :options="sliderOptions" @slideChange="onSlideChange">
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <img :src="slide" class="mx-auto" />
      </SwiperSlide>
    </Swiper>
    <div class="flex justify-center items-center overflow-hidden sm:mt-12 mt-3">
      <div
        v-for="(btn, index) in slides"
        :key="index"
        class="flex items-center px-2.5 py-1.5 cursor-pointer"
        @click="slider.slideTo(index)"
      >
        <button
          class="bg-pagination"
          :class="{
            'sm:w-1 w-0.5 sm:h-4 h-2.5 ': index === currentSlide,
            'sm:w-0.5 w-px sm:h-3 h-1.5': index !== currentSlide,
          }"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GallerySlider',
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    currentSlide: 0,
    sliderOptions: {
      keyboard: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 30,
    },
  }),
  // components: {Card},
  computed: {
    slider() {
      return this.$refs.slider.$swiper
    },
  },
  methods: {
    onSlideChange() {
      this.currentSlide = this.slider.activeIndex
    },
  },
}
</script>

<style scoped></style>
