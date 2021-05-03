<template>
  <div class="relative sm:px-16 px-7">
    <button
      class="w-4 md:w-auto next absolute rotate-180 right-0 top-1/2 transform -translate-y-1/2 z-10"
      @click="slider.slideNext()"
    >
      <img src="~assets/img/slider-arrow.svg" alt="" />
    </button>
    <button
      class="w-4 md:w-auto prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
      @click="slider.slidePrev()"
    >
      <img src="~assets/img/slider-arrow.svg" alt="" />
    </button>
    <Swiper ref="slider" :options="sliderOptions" @slideChange="onSlideChange">
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <PosterCard
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
import PosterCard from '~/components/cards/PosterCard'

export default {
  name: 'PosterSlider',
  components: { PosterCard },
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
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1360: {
          slidesPerView: 3,
          spaceBetween: 40,
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
