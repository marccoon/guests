<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center">
    <section class="md:h-96 h-56 bg-about-bg bg-cover bg-center">
      <div class="container flex items-center justify-center h-full">
        <Title :title="$t('aboutUs.aboutUsTitle')" />
      </div>
    </section>
    <section class="lg:pt-40 lg:pb-20 sm:pt-32 sm:pb-16 pt-20 pb-10">
      <div class="container">
        <PhotoText
          img="img/index-about-img.png"
          title=""
          :text="$t('aboutUs.text1')"
          link-name=""
          link=""
          :reverse="false"
        />
      </div>
    </section>
    <section class="lg:py-20 sm:py-16 py-10">
      <PhotoPhrase
        img="img/img-3.jpg"
        :phrase="$t('aboutUs.phrase1')"
        :reverse="true"
      />
    </section>
    <section class="lg:py-20 sm:py-16 py-10">
      <div class="container">
        <video controls autoplay class="w-full">
          <source src="https://www.pexels.com/ru-ru/video/-1860079/" />
        </video>
      </div>
    </section>
    <section class="lg:py-20 sm:py-16 py-10">
      <PhotoPhrase
        img="img/img-3.jpg"
        :phrase="$t('aboutUs.phrase2')"
        :reverse="false"
      />
    </section>
    <section class="lg:pt-20 lg:pb-40 sm:pt-16 sm:pb-32 pt-10 pb-20">
      <div class="container">
        <PhotoText
          img="img/index-about-img.png"
          title=""
          :text="$t('aboutUs.text2')"
          :link-name="$t('aboutUs.link1')"
          link="/"
          :reverse="true"
        />
      </div>
    </section>
  </div>
</template>
<script>
import Title from '~/components/app/Title'
import PhotoText from '~/components/app/PhotoText'
import PhotoPhrase from '~/components/app/PhotoPhrase'

export default {
  components: { Title, PhotoText, PhotoPhrase },
  layout: 'no-footer',
}
</script>
