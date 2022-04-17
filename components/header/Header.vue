<template>
  <div v-click-outside="closeMenu" class="relative">
    <header
      class="bg-bg bg-repeat-y py-3 sm:py-0 bg-100% bg-center relative z-20"
    >
      <div class="container relative flex justify-between items-center z-20">
        <div @click.stop="menuOpen = !menuOpen">
          <div class="w-16 h-8 flex justify-center items-center">
            <button>
              <MenuBurgerSvg v-if="!menuOpen" />
              <CloseSvg v-else />
            </button>
          </div>
        </div>

        <Logo />

        <LangSwitcher />
      </div>
    </header>
    <div
      ref="menu"
      class="
        absolute
        container
        h-full
        left-1/2
        top-0
        transform
        -translate-x-1/2
        z-10
      "
    >
      <Menu v-if="menuOpen" :active="menuOpen" @closeMenu="closeMenu" />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/app/Logo'
import LangSwitcher from '~/components/header/LangSwitcher'
import Menu from '~/components/header/Menu'
import CloseSvg from '~/components/svg/CloseSvg'
import MenuBurgerSvg from '~/components/svg/MenuBurgerSvg'

export default {
  name: 'Header',
  components: { MenuBurgerSvg, CloseSvg, Menu, LangSwitcher, Logo },
  data: () => ({
    menuOpen: false
  }),
  methods: {
    closeMenu () {
      this.menuOpen = false
    }
  }
}
</script>

<style scoped></style>
