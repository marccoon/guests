export default {
  data: () => ({
    activeTab: 0
  }),
  computed: {
    dishes () {
      return this.menu[this.activeTab].dishes
    }
  },
  methods: {
    tabCLickHandler (index) {
      this.activeTab = index
      this.$refs['menu-list'].scrollLeft =
        index !== 0 ? this.$refs['menu-tab'][index].offsetLeft - 16 : 0
    }
  }
}
