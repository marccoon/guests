<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center">
    <section class="md:h-96 h-56 bg-lunch bg-cover bg-center">
      <div class="container flex items-center justify-center h-full">
        <Title :title="$t('lunchMenu.title')" />
      </div>
    </section>
    <section class="lg:py-40 sm:py-32 py-20">
      <div class="container flex items-start flex-wrap">
        <div class="md:w-1/4 w-full md:pr-4">
          <ul
            ref="menu-list"
            class="
              md:block
              overflow-y-scroll
              scrollbar-hide
              flex flex-nowrap
              w-full
              items-center
              gap-4
            "
          >
            <li
              v-for="(item, index) in menu"
              :key="index"
              ref="menu-tab"
              class="
                uppercase
                md:mb-5
                flex-shrink-0
                text-category
                cursor-pointer
              "
              :class="{
                'text-category lg:text-base text-xs': activeTab !== index,
                'text-category-active lg:text-lg md:text-sm text-xs':
                  activeTab === index,
              }"
              @click="tabCLickHandler(index)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div
          class="
            md:w-3/4
            w-full
            grid
            md:grid-cols-2
            gap-4
            bg-dishes
            xl:px-16
            lg:px-12
            md:px-6
            px-4
            md:mt-0
            mt-8
          "
        >
          <div v-for="(item, index) in dishes" :key="index">
            <MenuItem
              :image="item.image"
              :price="item.price"
              :title="item.name"
              :text="item.description"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="bg-main-menu bg-cover bg-center w-full xl:py-40 md:py-24 py-20"
    >
      <div class="container flex justify-center">
        <Card
          :title="$t('lunchMenu.cardTitle')"
          :btn="$t('lunchMenu.btn')"
          link="/main-menu"
        />
      </div>
    </section>
  </div>
</template>
<script>
import Title from '~/components/app/Title'
import MenuItem from '~/components/app/MenuItem'
import Card from '~/components/cards/Card'

export default {
  components: { Card, Title, MenuItem },
  layout: 'no-footer',
  async asyncData({ app }) {
    const data = await app.$axios.$get(
      `/api/pages?lang=${app.i18n.locale}&slug=lunch-menu`
    )
    const menu = data[0].ACF.group
    return { menu }
  },
  data: () => ({
    activeTab: 0,
  }),
  computed: {
    dishes() {
      return this.menu[this.activeTab].dishes
    },
    locale() {
      return this.$i18n.locale
    },
  },
  watch: {
    locale() {
      this.$router.push(this.localePath('/lunch-menu'))
    },
  },
  methods: {
    tabCLickHandler(index) {
      this.activeTab = index
      this.$refs['menu-list'].scrollLeft =
        index !== 0 ? this.$refs['menu-tab'][index].offsetLeft : 0
    },
  },
}
</script>

<style scoped></style>
