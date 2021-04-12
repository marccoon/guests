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
        <PosterSlide
          :img="slide.featured_image_url"
          :title="slide.title.rendered"
          :date="slide.ACF.date"
          :excerpt="slide.excerpt.rendered"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import PosterSlide from '~/components/Sliders/PosterSlide'
export default {
  name: 'PosterSlider',
  components: { PosterSlide },
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
      spaceBetween: 0,
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        1360: {
          slidesPerView: 2,
          spaceBetween: 100,
        },
      },
    },
  }),
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
