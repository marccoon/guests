<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center">
    <section class="bg-index bg-cover bg-center lg:h-144 sm:h-96 h-80 py-4">
      <div class="container h-full flex flex-col justify-between">
        <SocialIcon
          class="ml-auto mr-0 "
        />
        <Form class="transform sm:translate-y-16 translate-y-1/2 "

        />
      </div>
    </section>
    <section class="lg:pt-40 lg:pb-20 sm:pt-32 sm:pb-16 pt-40 pb-10">
      <div class="container">
        <PhotoText
          img="img/index-about-img.png"
          :title="$t('mainPage.aboutUsTitle')"
          :text="page.content.rendered"
          :linkName="$t('mainPage.aboutUsLink')"
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
      <div class="md:w-1/2 w-full xl:py-56 lg:py-36 md:py-16 sm:py-20 py-16 bg-index-menu-1 bg-cover">
        <Card
          :title="$t('mainPage.mainMenuTitle')"
          :btn="$t('mainPage.menuBtn')"
          link="/main-menu"
          class="mx-auto"
        />
      </div>
      <div class="md:w-1/2 w-full xl:py-56 lg:py-36 md:py-16 sm:py-20 py-16 bg-index-menu-2 bg-cover">
        <Card
          :title="$t('mainPage.mainMenuTitle')"
          :btn="$t('mainPage.menuBtn')"
          link="/lunch-menu"
          class="mx-auto"
        />
      </div>

    </section>
    <section class="lg:pt-40 lg:pb-20 sm:pt-32 sm:pb-16 pt-20 pb-10">
      <div class="container">
        <div class="text-center xl:w-3/5 lg:w-4/5 mx-auto">
          <Title
            :title="$t('mainPage.posterTitle')"
            class="mx-auto block"
          />
          <div class="md:text-base text-xs text-text">
            {{ $t('mainPage.posterText') }}
          </div>
        </div>
        <client-only>
          <PosterSlider
            :slides="posterSlides"
            class="lg:mt-24 sm:mt-16 mt-8"
          />
        </client-only>
      </div>
    </section>
    <section class="lg:pt-20 lg:pb-40 sm:pt-16 sm:pb-32 pt-10 pb-20">
      <div class="container">
        <Title
          :title="$t('mainPage.galleryTitle')"
          class="mx-auto block"
        />
        <client-only>
          <GallerySlider
            :slides="gallerySlides"
            class="sm:mt-16 mt-8"
          />
        </client-only>
      </div>
    </section>
    <section class="flex flex-wrap">
      <div class="lg:w-1/2 w-full bg-contact flex justify-center items-center py-10">
        <div class=" flex flex-col items-center">
          <Title
            :title="$t('contacts.title')"
            class="mx-auto block"
          />
          <div>
            <div class="text-text md:text-base text-xs text-center">{{$t('contacts.address')}}</div>
            <div class="text-contact md:text-base text-xs flex lg:flex-col sm:flex-row flex-col items-center underline lg:mt-5 sm:mt-4 mt-2">
              <a class="lg:mx-0 sm:mx-5 ">+375 29 6777999</a>
              <a class="lg:mt-2 lg:mx-0 sm:mx-5 sm:mt-0 mt-1">+375 17 3277841</a>
              <a class="lg:mt-2 lg:mx-0 sm:mx-5 sm:mt-0 mt-1">+375 29 1506508</a>
            </div>
          </div>
          <div class="sm:mt-8 mt-4">
            <div class="text-text md:text-base text-xs text-center">{{$t('contacts.timeTitle')}}</div>
            <div class="text-contact md:text-base text-xs lg:mt-5 sm:mt-4 mt-2 flex lg:flex-col sm:flex-row flex-col">
              <div class="flex justify-end lg:mx-0 sm:mx-5">
                <div class="text-right sm:mr-5 mr-3">{{$t('contacts.day1')}}</div>
                <div class="text-text">{{$t('contacts.time1')}}</div>
              </div>
              <div class="flex justify-end lg:mt-2 lg:mx-0 sm:mx-5 sm:mt-0 mt-1">
                <div class="text-right sm:mr-5 mr-3">{{$t('contacts.day2')}}</div>
                <div class="text-text">{{$t('contacts.time2')}}</div>
              </div>
              <div class="flex justify-end lg:mt-2 lg:mx-0 sm:mx-5 sm:mt-0 mt-1">
                <div class="text-right sm:mr-5 mr-3">{{$t('contacts.day3')}}</div>
                <div class="text-text">{{$t('contacts.time3')}}</div>
              </div>
            </div>
          </div>
          <SocialIcon
            class="sm:mt-10 mt-5"
          />
        </div>
      </div>
      <Map
        class="lg:w-1/2 w-full"
      />
    </section>
  </div>
</template>

<script>
import Card from "@/components/cards/Card";
import SocialIcon from "~/components/app/SocialIcon";
import Form from "~/components/form/Form";
import PhotoText from "~/components/app/PhotoText";
import PhotoPhrase from "~/components/app/PhotoPhrase";
import Title from "~/components/app/Title";
import PosterSlider from "~/components/Sliders/PosterSlider";
import GallerySlider from "~/components/Sliders/GallerySlider";
import Map from "~/components/app/Map";
export default {
  async asyncData({ app }) {
    const data = await app.$axios.$get(`/pages?lang=${app.i18n.locale}&slug=main`)
    const page = data[0]
    return { page }
  },
  data: () => ({
    posterSlides: [
      {
        img: 'img/poster-img-1.png',
        title: 'Happy B-day<br> Нам 8 лет',
        btn: 'Подробнее',
        link:'/'
      },
      {
        img: 'img/poster-img-1.png',
        title: 'Happy B-day<br> Нам 8 лет',
        btn: 'Подробнее',
        link:'/'
      },
      {
        img: 'img/poster-img-1.png',
        title: 'Happy B-day<br> Нам 8 лет',
        btn: 'Подробнее',
        link:'/'
      },
    ],
    gallerySlides:[
      'img/gallery-img-1.png', 'img/gallery-img-1.png', 'img/gallery-img-1.png',
    ],
  }),
  components: {Card, SocialIcon, Form, PhotoText, PhotoPhrase, Title, PosterSlider, GallerySlider, Map},
}
</script>
