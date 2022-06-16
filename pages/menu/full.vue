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
  </div>
</template>
<script>
import { decode } from 'html-entities'
import Title from '~/components/app/Title'
import Card from '~/components/cards/Card'
import DishedMenu from '~/components/app/DishedMenu'

export default {
  components: { DishedMenu, Card, Title },
  layout: 'no-footer',
  async asyncData ({ app }) {
    const data = await app.$axios.$get(
      `/api/pages?lang=${app.i18n.locale}&slug=main-menu`
    )
    const page = data[0]
    const menu = page.ACF.group.filter((item) => {
      return item.private === false
    })
    return { menu, page }
  },
  head () {
    return {
      title: decode(this.page?.yoast_title)
    }
  }
}
</script>

<style scoped></style>
