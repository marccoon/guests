<template>
  <div v-click-outside="closeMenu" class="relative">
    <header
      class="bg-bg bg-repeat-y py-3 sm:py-0 bg-100% bg-center relative z-20"
    >
      <div class="container relative flex justify-between items-center z-20">
        <div @click.stop="menuOpen = !menuOpen">
          <div class="w-16 h-8 flex justify-center items-center">
            <button>
              <svg
                v-if="!menuOpen"
                width="50"
                height="31"
                viewBox="0 0 50 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="1" fill="#C9AB81" />
                <rect y="9" width="40" height="1" fill="#C9AB81" />
                <rect x="10" y="21" width="40" height="1" fill="#C9AB81" />
                <rect x="10" y="30" width="40" height="1" fill="#C9AB81" />
              </svg>
              <svg
                v-else
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

export default {
  name: 'Header',
  components: { Menu, LangSwitcher, Logo },
  data: () => ({
    menuOpen: false,
  }),
  methods: {
    closeMenu() {
      this.menuOpen = false
    },
  },
}
</script>

<style scoped></style>
