<template>
  <menu
    class="absolute left-0 bg-menu transform transition-all duration-750 lg:px-8 sm:px-6 px-4 md:pt-10 pt-5 md:pb-40 pb-20 xl:w-1/3 lg:w-2/5 sm:w-1/2 w-full m-0"
    :class="{
      'top-full translate-y-0': active,
      'top-0 -translate-y-full': !active,
    }"
    active
  >
    <ul class="text-menu uppercase md:text-xl sm:text-base text-sm">
      <li class="my-6">
        <nuxt-link
          :to="localePath('/about-us')"
          @click.native="$emit('closeMenu')"
        >
          {{ $t('navigation.item1') }}
        </nuxt-link>
      </li>
      <li class="my-6" @click="subMenu = !subMenu">
        <span class="flex items-center cursor-pointer">
          {{ $t('navigation.item2') }}
          <svg
            :class="{
              'rotate-0': !subMenu,
              'rotate-180': subMenu,
            }"
            class="transition-all duration-150 transform ml-3"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.83589 3.55986C8.05471 3.77858 8.05471 4.13319 7.83589 4.352L4.39606 7.79194C4.2867 7.90109 4.14334 7.95588 3.99998 7.95588C3.85662 7.95588 3.71328 7.90131 3.60395 7.79194L0.164125 4.352C-0.0547082 4.13319 -0.0547082 3.77858 0.164125 3.55986C0.382902 3.3411 0.737604 3.3411 0.956326 3.55986L3.99996 6.60351L7.04362 3.55986C7.26234 3.34121 7.61717 3.34121 7.83589 3.55986ZM3.60395 4.44035C3.71326 4.5495 3.85662 4.60429 3.99998 4.60429C4.14334 4.60429 4.2867 4.5495 4.39606 4.44035L7.83589 1.00052C8.05471 0.781654 8.05471 0.426935 7.83589 0.208157C7.61708 -0.0105477 7.26234 -0.0105477 7.04364 0.208157L3.99998 3.25181L0.956345 0.208157C0.737622 -0.0105477 0.382921 -0.0105477 0.164143 0.208157C-0.0546899 0.426935 -0.0546899 0.781654 0.164143 1.00052L3.60395 4.44035Z"
              fill="#C9AB81"
            />
          </svg>
        </span>

        <ul
          ref="submenu"
          class="overflow-hidden ml-7 md:text-base sm:text-sm text-xs"
        >
          <li class="mt-6">
            <nuxt-link
              :to="localePath('/menu/full')"
              @click.native="$emit('closeMenu')"
            >
              {{ $t('navigation.item3') }}
            </nuxt-link>
          </li>

          <li class="mt-4">
            <nuxt-link
              :to="localePath('/menu/lunch')"
              @click.native="$emit('closeMenu')"
            >
              {{ $t('navigation.item4') }}
            </nuxt-link>
          </li>
        </ul>
      </li>
      <li class="my-6">
        <nuxt-link
          :to="localePath('/poster')"
          @click.native="$emit('closeMenu')"
        >
          {{ $t('navigation.item5') }}
        </nuxt-link>
      </li>
      <li class="my-6">
        <nuxt-link
          :to="localePath('/reports')"
          @click.native="$emit('closeMenu')"
        >
          {{ $t('navigation.item6') }}
        </nuxt-link>
      </li>
      <li class="my-6">
        <nuxt-link
          :to="localePath('/contacts')"
          @click.native="$emit('closeMenu')"
        >
          {{ $t('navigation.item7') }}
        </nuxt-link>
      </li>
    </ul>
    <Button
      class="max-w-128 mx-auto lg:col-span-2 restoplace-click-open"
      :btn="$t('buttons.bookTable')"
      onclick="window.restoOpenModal('banquet')"
    />

    <!--    <Link-->
    <!--      :linkName="$t('links.menuLink')"-->
    <!--      link="/poster"-->
    <!--      class="mt-8"-->
    <!--    />-->
  </menu>
</template>

<script>
import Button from '~/components/form/Button.vue'

export default {
  name: 'Menu',
  components: { Button },
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    subMenu: true,
    height: null
  }),
  watch: {
    subMenu () {
      if (this.subMenu) {
        this.$refs.submenu.style.height = this.height
      } else {
        this.$refs.submenu.style.height = 0
      }
    }
  },
  mounted () {
    this.height = this.$refs.submenu.offsetHeight + 'px'
    this.subMenu = false
  }
}
</script>
