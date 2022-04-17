<template>
  <section class="lg:py-40 sm:py-32 py-20">
    <div class="container flex items-start flex-wrap">
      <div class="md:w-1/4 w-full md:pr-4">
        <ul
          ref="menu-list"
          class="md:block overflow-y-scroll scrollbar-hide flex flex-nowrap w-full items-center gap-4"
        >
          <li
            v-for="(item, index) in menu"
            :key="index"
            ref="menu-tab"
            class="uppercase md:mb-5 flex-shrink-0 text-category cursor-pointer"
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
      <div class="md:w-3/4 w-full grid md:grid-cols-2 gap-4 gap-y-10 bg-dishes xl:px-16 lg:px-12 md:px-6 px-4 py-10 md:mt-0 mt-8">
        <MenuItem
          v-for="(item, index) in dishes"
          :key="index"
          :image="item.image"
          :price="item.price"
          :title="item.name"
          :text="item.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import DishesMenuMixin from '~/mixins/dishesMenuMixin'
import MenuItem from '~/components/app/MenuItem'

export default {
  name: 'DishedMenu',
  components: { MenuItem },
  mixins: [DishesMenuMixin],
  props: {
    menu: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
