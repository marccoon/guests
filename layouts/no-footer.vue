<template>
  <div>
    <Header />

    <Nuxt />

    <footer class="bg-bg footer">
      <div class="container">
        <Form class="" title="true" />
        <div class="flex flex-col items-center lg:py-16 sm:py-12 py-8">
          <Logo />
          <Contacts class="sm:mt-8 mt-4" />
        </div>
        <div class="lg:pt-7 pt-4 pb-2 text-footer text-sm text-center">
          ООО "Белпримстрой" / УНП 190133337
        </div>
        <div class="lg:pb-7 pb-4 text-footer text-sm text-center">
          <a href="https://marccoon.com"
            >дизайн и разработка сайта marccoon.com</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from '~/components/header/Header'

export default {
  components: { Header },
}
</script>
