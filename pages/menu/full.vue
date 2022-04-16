<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center">
    <section class="md:h-96 h-56 bg-main-menu bg-cover bg-center">
      <div class="container flex items-center justify-center h-full">
        <Title :title="$t('mainMenu.title')" />
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
    <section class="bg-lunch bg-cover bg-center w-full xl:py-40 md:py-24 py-20">
      <div class="container flex justify-center">
        <Card
          :title="$t('mainMenu.cardTitle')"
          :btn="$t('mainMenu.btn')"
          link="/menu/lunch"
        />
      </div>
    </section>

    <!-- Main modal -->
    <div
      v-if="languagesDialogOpened"
      tabindex="-1"
      aria-hidden="true"
      class="bg-dishes bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full inset-0 h-full justify-center items-center flex"
      role="dialog"
    >
      <div class="relative p-4 w-full max-w-2xl h-auto">
        <!-- Modal content -->
        <div class="relative bg-dishes shadow">
          <!-- Modal header -->
          <div class="flex justify-between items-start p-5 pb-0">
            <button type="button" class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" @click="$store.dispatch('usedLanguageSelection', { root: true})">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="7.39313"
                  y="0.322327"
                  width="40"
                  height="1"
                  transform="rotate(45 7.39313 0.322327)"
                  fill="#C9AB81"
                />
                <rect
                  x="1.02917"
                  y="6.68628"
                  width="40"
                  height="1"
                  transform="rotate(45 1.02917 6.68628)"
                  fill="#C9AB81"
                />
                <rect
                  x="0.322327"
                  y="28.6066"
                  width="40"
                  height="1"
                  transform="rotate(-45 0.322327 28.6066)"
                  fill="#C9AB81"
                />
                <rect
                  x="6.68628"
                  y="34.9706"
                  width="40"
                  height="1"
                  transform="rotate(-45 6.68628 34.9706)"
                  fill="#C9AB81"
                />
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 pb-20 flex flex-wrap gap-6 justify-center">
            <nuxt-link
              v-for="(local, lidx) in $i18n.locales"
              :key="lidx"
              class="px-10 py-6 border border-select text-link text-2xl flex-1 max-w-48 text-center"
              :to="switchLocalePath(local)"
              @click.native="$store.dispatch('usedLanguageSelection', { root: true})"
            >
              {{ $t(`languagesNative.${local}`) }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from '~/components/app/Title'
import MenuItem from '~/components/app/MenuItem'
import Card from '~/components/cards/Card'

export default {
  components: { Card, Title, MenuItem },
  layout: 'no-footer',
  async asyncData ({ app }) {
    const data = await app.$axios.$get(
      `/api/pages?lang=${app.i18n.locale}&slug=main-menu`
    )
    const menu = data[0].ACF.group
    return { menu }
  },
  data: () => ({
    activeTab: 0
  }),
  computed: {
    dishes () {
      return this.menu[this.activeTab].dishes
    },
    languagesDialogOpened () {
      return !this.$store.state.usedLanguageSelection
    }
  },
  methods: {
    tabCLickHandler (index) {
      this.activeTab = index
      this.$refs['menu-list'].scrollLeft =
        index !== 0 ? this.$refs['menu-tab'][index].offsetLeft : 0
    }
  }
}
</script>

<style scoped></style>
