<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center pt-4 lg:pb-40 sm:pb-32 pb-20 ">
    <div class="container relative">
      <SocialIcon
        class="ml-auto mr-0"
      />
      <Title
        :title="$t('posters.title')"
        class="lg:mt-24 sm:mt-16 my-12 mx-auto"
      />
      <div >
          <Posters
            :posters="posters"
            class="lg:mt-24 sm:mt-16 mt-8"
          />
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcon from "~/components/app/SocialIcon";
import Title from "~/components/app/Title";
import Posters from "~/components/cards/Posters";
export default {
  layout: 'no-footer',
  data: () => ({
    posters: [
      {
        img: 'img/post-img-1.png',
        title: 'Happy B-day<br> Нам 8 лет',
        btn: 'Забронировать',
        date: '5 ноября',
        address: 'г. Минск,<br> пр-т Независимости, 25'
      },
      {
        img: 'img/post-img-1.png',
        title: 'Happy B-day<br> Нам 8 лет',
        btn: 'Забронировать',
        date: '5 ноября',
        address: 'г. Минск,<br> пр-т Независимости, 25'
      },
      {
        img: 'https://images.pexels.com/photos/2113279/pexels-photo-2113279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        title: 'Happy B-day<br> Нам 8 лет',
        btn: 'Забронировать',
        date: '5 ноября',
        address: 'г. Минск,<br> пр-т Независимости, 25'
      },
    ]
  }),
  components: {SocialIcon, Title, Posters},
}
</script>

<style scoped>

</style>
