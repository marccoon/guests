<template>
  <div>
    <Header  />

    <Nuxt />

    <Footer />
  </div>
</template>
<style>

</style>
<script>
import Header from "~/components/header/Header";
import Footer from "~/components/footer/Footer";
export default {
  components: {Footer, Header}
}
</script>
