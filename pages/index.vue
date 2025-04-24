<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center">
    <section class="bg-index bg-cover bg-center lg:h-144 sm:h-96 h-80 py-4">
      <div class="container h-full flex flex-col justify-between">
        <SocialIcon class="ml-auto mr-0" />
        <div>
          <div
            v-if="reserveTabs"
            class="hidden md:flex justify-center gap-4 -mb-10"
          >
            <div
              v-for="tab in reserveTabs"
              :key="tab.url"
              class="flex items-center bg-form text-white w-1/3 py-4 px-6"
            >
              <TitleSmall
                :href="tab.url"
                tag="a"
                class="lg:text-lg sm:text-md"
                :title="tab.name"
              />
            </div>
          </div>

          <FormRestoplace class="transform sm:translate-y-16 translate-y-1/4" />
        </div>
      </div>
    </section>

    <section v-if="reserveTabs" class="md:hidden lg:pt-32 sm:pt-16 pt-36">
      <div class="container">
        <div class="flex flex-col gap-4">
          <div
            v-for="tab in reserveTabs"
            :key="tab.url"
            class="flex items-center bg-form text-white py-4 px-6"
          >
            <TitleSmall
              :href="tab.url"
              tag="a"
              class="lg:text-lg sm:text-md"
              :title="tab.name"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="lg:pt-32 lg:pb-20 sm:pt-24 sm:pb-16 pt-20 pb-10">
      <div class="container">
        <PhotoText
          img="/img/index-about-img-top.jpg"
          :title="$t('mainPage.aboutUsTitle')"
          :text="page.content.rendered"
          :link-name="$t('mainPage.aboutUsLink')"
          link="/about-us"
          :reverse="false"
        />
      </div>
    </section>
    <section class="lg:pt-20 lg:pb-40 sm:pt-16 sm:pb-32 pt-10 pb-20">
      <PhotoPhrase
        img="/img/img-3.jpg"
        :phrase="$t('mainPage.phrase')"
        :reverse="true"
      />
    </section>
    <section class="flex flex-wrap">
      <div class="md:w-1/2 w-full xl:py-56 lg:py-36 md:py-16 sm:py-20 py-16 bg-index-menu-1 bg-cover">
        <Card
          :title="$t('mainPage.mainMenuTitle')"
          :btn="$t('mainPage.menuBtn')"
          link="/menu/main"
          class="mx-auto"
        />
      </div>
      <div class="md:w-1/2 w-full xl:py-56 lg:py-36 md:py-16 sm:py-20 py-16 bg-index-menu-2 bg-cover">
        <Card
          :title="$t('mainPage.lunchMenuTitle')"
          :btn="$t('mainPage.menuBtn')"
          link="/menu/lunch"
          class="mx-auto"
        />
      </div>
    </section>
    <section
      v-if="posterSlides.length"
      class="lg:pt-40 lg:pb-20 sm:pt-32 sm:pb-16 pt-20 pb-10"
    >
      <div class="container">
        <div class="text-center xl:w-3/5 lg:w-4/5 mx-auto">
          <Title :title="$t('mainPage.posterTitle')" class="mx-auto block" />
          <div class="md:text-base text-xs text-text">
            {{ $t('mainPage.posterText') }}
          </div>
        </div>
        <client-only>
          <PosterSlider :slides="posterSlides" class="lg:mt-24 sm:mt-16 mt-8" />
          <Button
            :btn="$t('gallery.btn')"
            link="poster"
            class="block lg:mt-16 sm:mt-12 mt-8 mx-auto w-max"
          />
        </client-only>
      </div>
    </section>
    <section class="lg:pt-20 lg:pb-40 sm:pt-16 sm:pb-32 pt-10 pb-20">
      <div class="container">
        <Title :title="$t('mainPage.galleryTitle')" class="mx-auto block" />
        <client-only>
          <GallerySlider :slides="gallerySlides" class="sm:mt-16 mt-8" />
        </client-only>
      </div>
    </section>
    <section class="flex flex-wrap">
      <div class="lg:w-1/2 w-full bg-contact flex justify-center items-center py-10">
        <div class="flex flex-col items-center">
          <Title :title="$t('contacts.title')" class="mx-auto block" />
          <Contacts />
        </div>
      </div>
      <Map class="lg:w-1/2 w-full" />
    </section>
  </div>
</template>

<script>
import { decode } from 'html-entities'
import Card from '~/components/cards/Card'
import SocialIcon from '~/components/app/SocialIcon'
import FormRestoplace from '~/components/form/FormRestoplace'
import PhotoText from '~/components/app/PhotoText'
import PhotoPhrase from '~/components/app/PhotoPhrase'
import Title from '~/components/app/Title'
import GallerySlider from '~/components/Sliders/GallerySlider'
import Map from '~/components/app/Map'
import PosterSlider from '~/components/Sliders/PosterSlider'
import Button from '~/components/form/Button'
import TitleSmall from '~/components/app/TitleSmall'
import Contacts from '~/components/app/Contacts'

export default {
  components: {
    Contacts,
    TitleSmall,
    Button,
    PosterSlider,
    Card,
    SocialIcon,
    FormRestoplace,
    PhotoText,
    PhotoPhrase,
    Title,
    GallerySlider,
    Map
  },
  async asyncData ({ app }) {
    const data = await app.$axios.$get(
      `/api/pages?lang=${app.i18n.locale}&slug=main`
    )

    const page = data[0]
    const gallerySlides = page.acf.image_gallery.map((image) => {
      return image.url
    })
    const reserveTabs = page.acf.reserve_tabs

    return { page, gallerySlides, reserveTabs }
  },
  data () {
    return {
      posterSlides: []
    }
  },
  head () {
    return {
      title: decode(this.page.yoast_title),
      meta: this.page.yoast_meta.map((meta) => {
        meta.content = meta.content.replace(
          'wp.gosti-minsk.by',
          'gosti-minsk.by'
        )
        return meta
      })
    }
  },
  async mounted () {
    this.posterSlides = await this.$axios.$get('/api/afisha?per_page=7')
  }
}
</script>
