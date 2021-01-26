<template>
  <div class="bg-bg2 bg-repeat-y bg-100% bg-center">
    <section class="md:h-96 h-56 bg-lunch bg-cover bg-center">
      <div class="container flex items-center justify-center h-full">

        <Title
          title="Обеденное меню"
        />
      </div>
    </section>
    <section class="lg:py-40 sm:py-32 py-20">
      <div class="container flex items-start flex-wrap">
        <div class="md:w-1/4 w-full md:pr-4">
          <ul class="md:block grid sm:grid-cols-3 grid-cols-2 gap-2">
            <li v-for="(item, index) in menu"
                :key="index"
                @click="tabCLickHandler(item.titleSection)"
                class="uppercase md:mb-5 text-category"
                :class="{
                  'text-category lg:text-base text-xs': activeTab !== index,
                  'text-category-active lg:text-lg md:text-sm text-xs': activeTab === index
                }"
            >

              {{item.titleSection}}
            </li>
          </ul>
        </div>
        <div class="md:w-3/4 w-full bg-dishes xl:px-16 lg:px-12 md:px-6 px-4 md:mt-0 mt-8">
          <div class="w-full"
               v-for="(item, index) in dishes"
               :key="index"
          >
            <MenuItem
              :price="item.price"
              :title="item.title"
              :text="item.text"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-main-menu bg-cover bg-center w-full xl:py-40 md:py-24 py-20">
      <div class="container flex justify-center">
        <Card
          title="Основное меню"
          btn="перейти в меню"
          link="/"
        />
      </div>
    </section>
  </div>
</template>
<script>
import Title from "~/components/app/Title";
import MenuItem from "~/components/app/MenuItem";
import Card from "~/components/cards/Card";

export default {
  layout: 'no-footer',
  data: () => ({
    activeTab: 0,
    menu: [
      {
        titleSection: 'Блюда белорусской кухни',
        dishes: [
          {
            title: 'Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },
          {
            title: 'Драники с белыми грибами в сливочном соусе ',
            price: '19 р.',
          },
          {
            title: 'Драники с красной икрой',
            price: '16 р.',
          },
          {
            title: 'Мачанка с картофельными оладьями',
            price: '18 р.',
            text: 'Оладьи картофельные, свинина тушёная, колбаса жареная, соус сметанный и грибами',
          },
          {
            title: 'Драник-бургер',
            price: '12 р.',
          },
        ]
      },
      {
        titleSection: 'Холодные закуски',
        dishes: [
          {
            title: '2 Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },

        ]
      },
      {
        titleSection: 'Салаты',
        dishes: [
          {
            title: '2 Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },

        ]
      },
      {
        titleSection: 'Супы',
        dishes: [
          {
            title: '2 Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },

        ]
      },
      {
        titleSection: 'Блюда из рыбы',
        dishes: [
          {
            title: '2 Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },

        ]
      },
      {
        titleSection: 'Блюда из мяса',
        dishes: [
          {
            title: '2 Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },

        ]
      },
      {
        titleSection: 'Блюда из птицы',
        dishes: [
          {
            title: '2 Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },

        ]
      },
      {
        titleSection: 'Гарниры',
        dishes: [
          {
            title: '2 Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },

        ]
      },
      {
        titleSection: 'Хлеб',
        dishes: [
          {
            title: '2 Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },

        ]
      },
      {
        titleSection: 'Десерты',
        dishes: [
          {
            title: '2 Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },

        ]
      },
      {
        titleSection: 'Закуски к пиву',
        dishes: [
          {
            title: '2 Горшочек «По‑деревенски»',
            price: '16 р.',
            text: 'Оладьи картофельные, соус сырный, морковь, лук, ветчина, курица отварная, \n' +
              'горошек зелёный консервированный',
          },

        ]
      },

    ]
  }),
  computed:{
    dishes() {
      return this.menu[this.activeTab].dishes
    }
  },
  methods:{
    tabCLickHandler(val) {
      this.activeTab = this.menu.findIndex(i => i.titleSection === val )

      // console.log(currentIndex)
    }
  },
  components: {Card, Title, MenuItem},

}
</script>

<style scoped>

</style>
