<template>
  <section
    class="sm:py-24 py-16"
  >
    <div
      class="overflow-x-hidden"
      :class="{
        'md:relative fixed top-0 z-20 w-full bg-bg bg-repeat-y bg-100% bg-center': fixedOnTop,
      }"
    >
      <div
        ref="selectCategory"
        class="container flex pt-6 md:mb-12"
        :class="{'py-6 md:pb-0': fixedOnTop}"
      >
        <transition name="slide-fade-absolute">
          <div v-if="activeCategoryIndex || activeCategoryIndex === 0" class="w-full">
            <div
              class="inline-flex items-center text-link md:text-4xl cursor-pointer text-2xl capitalize"
              @click="categorySwitchHandler"
            >
              <div class="flex items-center w-7 h-7">
                <MenuBurgerSvg
                  width="24"
                  height="15"
                />
              </div>
              {{ $t(`commonMenu.${categories[activeCategoryIndex] || 'menu'}`) }}
            </div>
            <ul
              ref="menu-list_mobile"
              class="mt-2 overflow-y-scroll scrollbar-hide flex flex-nowrap w-full items-center gap-4 md:hidden"
            >
              <li
                v-for="(item, index) in formattedMenu"
                :key="index"
                ref="menu-tab_mobile"
                class="uppercase md:mb-5 flex-shrink-0 cursor-pointer"
                :class="{
                  'text-category lg:text-base text-sm': activeTab !== index,
                  'text-category-active lg:text-lg text-sm':
                    activeTab === index,
                }"
                @click="tabCLickHandler(index)"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </transition>
        <transition name="slide-fade-absolute">
          <div v-if="!activeCategoryIndex && activeCategoryIndex !== 0" class="whitespace-nowrap text-link md:text-4xl text-xl capitalize">
            {{ $t('commonMenu.emptyList') }}:
          </div>
        </transition>
      </div>
    </div>

    <div
      ref="menu-items"
      class="container flex items-start flex-wrap"
      :class="{
        'pt-12 md:pt-0': fixedOnTop,
        'pt-20 md:pt-0' :fixedOnTop && (activeCategoryIndex || activeCategoryIndex === 0)
      }"
    >
      <div class="md:w-1/4 hidden md:block md:pr-4">
        <transition name="slide-fade">
          <ul
            v-if="formattedMenu.length > 0"
            ref="menu-list"
            class="md:block overflow-y-scroll scrollbar-hide flex flex-nowrap w-full items-center gap-4"
          >
            <li
              v-for="(item, index) in formattedMenu"
              :key="index"
              ref="menu-tab"
              class="uppercase md:mb-5 flex-shrink-0 cursor-pointer"
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
        </transition>
      </div>
      <div
        v-if="formattedDishes"
        class="md:w-3/4 w-full grid md:grid-cols-2 gap-4 gap-y-10 bg-dishes xl:px-16 lg:px-12 md:px-6 px-4 py-10 md:mt-0 mt-8"
      >
        <MenuItem
          v-for="(item, index) in formattedDishes"
          :key="`${categories[activeCategoryIndex]}-${activeTab}-${index}`"
          :image="item.image"
          :price="item.price"
          :title="item.name"
          :text="item.description"
        />
      </div>
      <div v-else class="md:w-3/4 w-full grid md:grid-cols-2 gap-4 gap-y-10 bg-dishes xl:px-16 lg:px-12 md:px-6 px-4 py-10 md:mt-0 mt-8">
        <ul
          class="overflow-y-scroll scrollbar-hide  w-full items-center gap-4"
        >
          <li
            v-for="(key, index) in categories"
            :key="index"
            class="flex-shrink-0 cursor-pointer mt-4 text-white md:text-4xl text-xl capitalize"
            @click="tabCategoryCLickHandler(index)"
          >
            {{ $t(`commonMenu.${key}`) }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import MenuItem from '~/components/app/MenuItem'
import MenuBurgerSvg from '~/components/svg/MenuBurgerSvg'

export default {
  name: 'DishedMenu',
  components: { MenuBurgerSvg, MenuItem },
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeTab: 0,
      fixedOnTop: false,
      activeCategoryIndex: false,
      categories: []
    }
  },
  computed: {
    formattedMenu () {
      return this.menu.filter(item => item.category === this.categories[this.activeCategoryIndex])
    },
    dishes () {
      return this.menu[this.activeTab].dishes
    },
    formattedDishes () {
      return this.formattedMenu[this.activeTab]?.dishes
    }
  },
  mounted () {
    this.menu.forEach((item) => {
      if (!this.categories.includes(item.category)) {
        this.categories.push(item.category)
      }
    })
    if (this.categories.length === 1) { this.activeCategoryIndex = 0 }
    const { offsetTop } = this.$refs.selectCategory

    window.addEventListener('scroll', () => {
      this.fixedOnTop = window.scrollY > offsetTop
    })
  },
  methods: {
    tabCategoryCLickHandler (index) {
      this.activeCategoryIndex = index
      this.activeTab = 0
    },
    tabCLickHandler (index) {
      this.activeTab = index
      this.$refs['menu-list'].scrollLeft =
          index !== 0 ? this.$refs['menu-tab'][index].offsetLeft - 80 : 0
      this.$refs['menu-list_mobile'].scrollLeft =
          index !== 0 ? this.$refs['menu-tab_mobile'][index].offsetLeft - 80 : 0

      this.scrollToContent()
    },
    scrollToContent () {
      if (this.fixedOnTop) {
        this.$refs['menu-items'].scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      }
    },
    categorySwitchHandler () {
      if (this.categories.length > 1) {
        this.activeCategoryIndex = false
        this.scrollToContent()
      }
    }
  }
}
</script>

<style scoped>

</style>
