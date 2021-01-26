<template>
  <div class="relative sm:px-16 px-7">
    <button
      class="w-4 sm:w-auto next absolute rotate-180 right-0 top-1/2 transform -translate-y-1/2 z-10"
      @click="slider.slideNext()"
    >
      <img src="~assets/img/slider-arrow.svg" alt="">
    </button>
    <button
      class="w-4 sm:w-auto prev absolute  left-0 top-1/2 transform -translate-y-1/2 z-10"
      @click="slider.slidePrev()"
    >
      <img src="~assets/img/slider-arrow.svg" alt="" >
    </button>
    <Swiper
      :options="sliderOptions"
      ref="slider"
      @slideChange="onSlideChange"
    >

      <SwiperSlide v-for="(slide, index) in slides" :key="index" >
        <img :src="slide"  class="mx-auto">
      </SwiperSlide>
    </Swiper>
    <div class="flex justify-center items-center overflow-hidden sm:mt-12 mt-3">
      <button
        class=" bg-pagination mx-2"
        v-for="(btn, index) in slides"
        :class="{'sm:w-1 w-0.5 sm:h-4 h-2.5 ': index === currentSlide, 'sm:w-0.5 w-px sm:h-3 h-1.5': index !== currentSlide,}"
        @click="slider.slideTo(index)"
      ></button>
    </div>
  </div>

</template>

<script>
export default {
  name: "GallerySlider",
  props: {
    slides: {
      type: Array,
      required: true,
    }
  },
  data: () => ({
    currentSlide: 0,
    sliderOptions: {
      keyboard: true,
      speed: 1000,
      slidesPerView: 1,
    },
  }),
  methods: {
    onSlideChange () {
      this.currentSlide = this.slider.activeIndex
    }
  },
  // components: {Card},
  computed: {
    slider() {
      return this.$refs.slider.$swiper
    }
  }
}
</script>

<style scoped>

</style>
