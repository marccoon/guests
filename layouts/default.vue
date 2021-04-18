<template>
  <div>
    <Header />

    <Nuxt />

    <Footer />
    <ModalMap />
    <Modal />
  </div>
</template>

<script>
import Header from '~/components/header/Header'
import Footer from '~/components/footer/Footer'
import ModalMap from '~/components/app/ModalMap'
import Modal from '~/components/app/Modal'

export default {
  components: { Modal, ModalMap, Footer, Header },
}
</script>
