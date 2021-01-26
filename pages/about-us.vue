<template>
  <div class="bg-bg2 bg-repeat-y bg-100% bg-center">
    <section class="md:h-96 h-56 bg-about-bg bg-cover bg-center">
      <div class="container flex items-center justify-center h-full">

        <Title
          title="О нас"
        />
      </div>
    </section>
    <section class="lg:pt-40 lg:pb-20 sm:pt-32 sm:pb-16 pt-20 pb-10">
      <div class="container">
        <PhotoText
          img="img/index-about-img.png"
          title=""
          text="
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
            <br>
            <br>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
            <br>
            <br>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          "
          linkName=""
          link=""
          :reverse="false"
        />
      </div>
    </section>
    <section class="lg:py-20 sm:py-16 py-10">
      <PhotoPhrase
        img="img/img-3.png"
        phrase="Мы гордимся нашей
                  непринужденной атмосферой
                  и дружелюбным персоналом."
        :reverse="true"
      />
    </section>
    <section class="lg:py-20 sm:py-16  py-10">
      <div class="container">
        <video controls autoplay class="w-full">
          <source src="https://www.pexels.com/ru-ru/video/-1860079/">

        </video>
      </div>
    </section>
    <section class="lg:py-20 sm:py-16 py-10">
      <PhotoPhrase
        img="img/img-3.png"
        phrase="Хорошие продукты и техника лежат в основе того, что мы делаем. Мы считаем, что лучшие блюда — это опыт."
        :reverse="false"
      />
    </section>
    <section class="lg:pt-20 lg:pb-40 sm:pt-16 sm:pb-32 pt-10 pb-20">
      <div class="container">
        <PhotoText
          img="img/index-about-img.png"
          title=""
          text="
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
            <br>
            <br>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
            <br>
            <br>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          "
          linkName="Перейти в меню"
          link="/"
          :reverse="true"
        />
      </div>
    </section>
  </div>
</template>
<script>
import Title from "~/components/app/Title";
import PhotoText from "~/components/app/PhotoText";
import PhotoPhrase from "~/components/app/PhotoPhrase";
import Form from "~/components/form/Form";
import Logo from "~/components/app/Logo";
import Contacts from "~/components/app/Contacts";
export default {
  layout: 'no-footer',
  components: {Title, PhotoText, PhotoPhrase, Form, Logo, Contacts},
}
</script>
