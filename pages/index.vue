<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center">
    <section class="bg-index bg-cover bg-center lg:h-144 sm:h-96 h-80 py-4">
      <div class="container h-full flex flex-col justify-between">
        <SocialIcon class="ml-auto mr-0" />
        <div>
          <div class="invisible md:visible grid grid-cols-3 gap-4 -mb-10">
            <div class="flex items-center bg-form text-white py-4 px-6">
              <TitleSmall to="/novyj-god" tag="h4" title="Новый год" />
            </div>
            <div class="flex items-center bg-form text-white py-4 px-6">
              <TitleSmall to="korporativ" tag="h4" title="Корпоратив" />
            </div>
            <div class="flex items-center bg-form text-white py-4 px-6">
              <TitleSmall to="/den-rozhdeniya" tag="h4" title="День рождения" />
            </div>
          </div>
          <Form class="transform sm:translate-y-16 translate-y-1/2" />
        </div>
      </div>
    </section>

    <section class="lg:pt-32 sm:pt-24 pt-48">
      <div class="container">
        <div class="visible md:invisible grid grid-rows-3 gap-4 -mb-10">
          <div class="flex items-center bg-form text-white py-4 px-6">
            <TitleSmall to="/novyj-god" tag="h4" title="Новый год" />
          </div>
          <div class="flex items-center bg-form text-white py-4 px-6">
            <TitleSmall
              to="/novyj-god-v-karaoke"
              tag="h4"
              title="Новый год в караоке"
            />
          </div>
          <div class="flex items-center bg-form text-white py-4 px-6">
            <TitleSmall to="korporativ" tag="h4" title="Корпоратив" />
          </div>
        </div>
      </div>
    </section>
    <section class="lg:pt-32 lg:pb-20 sm:pt-24 sm:pb-16 pt-20 pb-10">
      <div class="container">
        <PhotoText
          img="img/index-about-img-top.jpg"
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
        img="img/img-3.jpg"
        :phrase="$t('mainPage.phrase')"
        :reverse="true"
      />
    </section>
    <section class="flex flex-wrap">
      <div
        class="
          md:w-1/2
          w-full
          xl:py-56
          lg:py-36
          md:py-16
          sm:py-20
          py-16
          bg-index-menu-1 bg-cover
        "
      >
        <Card
          :title="$t('mainPage.mainMenuTitle')"
          :btn="$t('mainPage.menuBtn')"
          link="main-menu"
          class="mx-auto"
        />
      </div>
      <div
        class="
          md:w-1/2
          w-full
          xl:py-56
          lg:py-36
          md:py-16
          sm:py-20
          py-16
          bg-index-menu-2 bg-cover
        "
      >
        <Card
          :title="$t('mainPage.lunchMenuTitle')"
          :btn="$t('mainPage.menuBtn')"
          link="lunch-menu"
          class="mx-auto"
        />
      </div>
    </section>
    <section class="lg:pt-40 lg:pb-20 sm:pt-32 sm:pb-16 pt-20 pb-10">
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
      <div
        class="
          lg:w-1/2
          w-full
          bg-contact
          flex
          justify-center
          items-center
          py-10
        "
      >
        <div class="flex flex-col items-center">
          <Title :title="$t('contacts.title')" class="mx-auto block" />
          <div>
            <div class="text-text md:text-base text-xs text-center">
              {{ $t('contacts.address') }}
            </div>
            <div
              class="
                text-contact
                md:text-base
                text-xs
                flex
                lg:flex-col
                sm:flex-row
                flex-col
                items-center
                underline
                lg:mt-5
                sm:mt-4
                mt-2
              "
            >
              <a class="lg:mx-0 sm:mx-5" href="tel:+375 29 6777999"
                >+375 29 6777999</a
              >
            </div>
          </div>
          <div class="sm:mt-8 mt-4">
            <div class="text-text md:text-base text-xs text-center">
              {{ $t('contacts.timeTitle') }}
            </div>
            <div
              class="
                text-contact
                md:text-base
                text-xs
                lg:mt-5
                sm:mt-4
                mt-2
                flex
                lg:flex-col
                sm:flex-row
                flex-col
              "
            >
              <div class="flex justify-end lg:mx-0 sm:mx-5">
                <div class="text-right sm:mr-5 mr-3">
                  {{ $t('contacts.day1') }}
                </div>
                <div class="text-text">{{ $t('contacts.time1') }}</div>
              </div>
              <div
                class="flex justify-end lg:mt-2 lg:mx-0 sm:mx-5 sm:mt-0 mt-1"
              >
                <div class="text-right sm:mr-5 mr-3">
                  {{ $t('contacts.day2') }}
                </div>
                <div class="text-text">{{ $t('contacts.time2') }}</div>
              </div>
              <div
                class="flex justify-end lg:mt-2 lg:mx-0 sm:mx-5 sm:mt-0 mt-1"
              >
                <div class="text-right sm:mr-5 mr-3">
                  {{ $t('contacts.day3') }}
                </div>
                <div class="text-text">{{ $t('contacts.time3') }}</div>
              </div>
            </div>
          </div>
          <SocialIcon class="sm:mt-10 mt-5" />
        </div>
      </div>
      <Map class="lg:w-1/2 w-full" />
    </section>
  </div>
</template>

<script>
import Card from '~/components/cards/Card'
import SocialIcon from '~/components/app/SocialIcon'
import Form from '~/components/form/Form'
import PhotoText from '~/components/app/PhotoText'
import PhotoPhrase from '~/components/app/PhotoPhrase'
import Title from '~/components/app/Title'
import GallerySlider from '~/components/Sliders/GallerySlider'
import Map from '~/components/app/Map'
import PosterSlider from '~/components/Sliders/PosterSlider'
import Button from '~/components/form/Button'
import TitleSmall from '~/components/app/TitleSmall'

export default {
  components: {
    TitleSmall,
    Button,
    PosterSlider,
    Card,
    SocialIcon,
    Form,
    PhotoText,
    PhotoPhrase,
    Title,
    GallerySlider,
    Map,
  },
  async asyncData({ app }) {
    const data = await app.$axios.$get(
      `/pages?lang=${app.i18n.locale}&slug=main`
    )
    const posterSlides = await app.$axios.$get('/afisha?per_page=7')

    const page = data[0]
    const gallerySlides = page.ACF.image_gallery.map((image) => {
      return image.url
    })
    return { page, gallerySlides, posterSlides }
  },
  head() {
    return {
      title: this.page.yoast_title,
      meta: this.page.yoast_meta.map((meta) => {
        meta.content = meta.content.replace(
          'wp.gosti-minsk.by',
          'gosti-minsk.by'
        )
        return meta
      }),
    }
  },
}
</script>
