<template>
  <menu
    class="absolute "
    :class="{
      '-left-full': !active,
      'left-0': active
    }"
  >
    <ul>
      <li>
        123123123123123 21
      </li>

      <li>
        123
      </li>

      <li @click="subMenu = !subMenu">
        снаружи
        <ul
          ref="submenu"
          class="overflow-hidden"
        >
          <li>
            Внутри 1
          </li>
          <li>
            Внутри 2
          </li>
        </ul>
      </li>
    </ul>
  </menu>
</template>

<script>
export default {
  name: "Menu",
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
  mounted() {
    this.height = this.$refs.submenu.offsetHeight + 'px'
    this.subMenu = false
  },
  watch: {
    subMenu () {
      if (this.subMenu) {
        this.$refs.submenu.style.height = this.height
      } else {
        this.$refs.submenu.style.height = 0
      }
    }
  }
}
</script>

<style scoped>

</style>
