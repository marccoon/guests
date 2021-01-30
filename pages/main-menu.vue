<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center">
    <section class="md:h-96 h-56 bg-main-menu bg-cover bg-center">
      <div class="container flex items-center justify-center h-full">

        <Title
          :title="$t('mainMenu.title')"
        />
      </div>
    </section>
    <section class="lg:py-40 sm:py-32 py-20">
      <div class="container flex items-start flex-wrap">
        <div class="md:w-1/4 w-full md:pr-4">
          <ul class="md:block grid sm:grid-cols-3 grid-cols-2 gap-2">
            <li v-for="(item, index) in menu"
                :key="index"
                @click="tabCLickHandler(item.name)"
                class="uppercase md:mb-5 text-category cursor-pointer"
                :class="{
                  'text-category lg:text-base text-xs': activeTab !== index,
                  'text-category-active lg:text-lg md:text-sm text-xs': activeTab === index
                }"
            >

              {{item.name}}
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
              :title="item.name"
              :text="item.description"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-lunch bg-cover bg-center w-full xl:py-40 md:py-24 py-20">
      <div class="container flex justify-center">
        <Card
          :title="$t('mainMenu.cardTitle')"
          :btn="$t('mainMenu.btn')"
          link="/lunch-menu"
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
  components: {Card, Title, MenuItem},
  async asyncData({ app }) {
    const data = await app.$axios.$get(`/pages?lang=${app.i18n.locale}&slug=main-menu`)
    const menu = data[0].ACF.group
    return { menu }
  },
  data: () => ({
    activeTab: 0,
  }),
  computed:{
    dishes() {
      return this.menu[this.activeTab].dishes
    },
    locale () {
      return this.$i18n.locale
    }
  },
  methods:{
    tabCLickHandler(val) {
      this.activeTab = this.menu.findIndex(i => i.name === val )

      // console.log(currentIndex)
    }
  },
  watch: {
    locale () {
      this.$router.push(this.localePath('/main-menu'))
    }
  }
}
</script>

<style scoped>

</style>
