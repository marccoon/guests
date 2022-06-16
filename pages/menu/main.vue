<template>
  <div class="bg-bg bg-repeat-y bg-100% bg-center">
    <section class="md:h-96 h-56 bg-main-menu bg-cover bg-center">
      <div class="container flex items-center justify-center h-full">
        <Title :title="$t('mainMenu.title')" />
      </div>
    </section>
    <DishedMenu :menu="menu" />
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
            <button
              type="button"
              class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              @click="$store.dispatch('usedLanguageSelection', { root: true})"
            >
              <CloseSvg />
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
import { decode } from 'html-entities'
import Title from '~/components/app/Title'
import Card from '~/components/cards/Card'
import CloseSvg from '~/components/svg/CloseSvg'
import DishedMenu from '~/components/app/DishedMenu'

export default {
  components: { DishedMenu, Card, Title, CloseSvg },
  layout: 'no-footer',
  async asyncData ({ app }) {
    const data = await app.$axios.$get(
      `/api/pages?lang=${app.i18n.locale}&slug=main-menu`
    )
    const page = data[0]
    const menu = data[0].ACF.group
    return { menu, page }
  },
  head () {
    return {
      title: decode(this.page?.yoast_title)
    }
  },
  computed: {
    languagesDialogOpened () {
      return !this.$store.state.usedLanguageSelection
    }
  }
}
</script>

<style scoped></style>
