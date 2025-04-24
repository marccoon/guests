<template>
  <div>
    <Header />

    <Nuxt />

    <Footer />
    <ModalMap />
  </div>
</template>

<script>
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
import ModalMap from '~/components/app/ModalMap'

export default {
  components: { ModalMap, Footer, Header }
}
</script>
