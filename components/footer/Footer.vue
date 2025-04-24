<template>
  <div class="py-4 bg-bg bg-repeat-y bg-100% bg-center">
    <div class="container flex justify-between items-center">
      <Logo />

      <div class="text-footer text-sm text-right">
        ООО «Медиа повод»<br>
        220030, г. Минск. Проспект независимости, 25, помещение 5<br>
        УНП 193330080<br>
        Свидетельство о гос.регистрации № 193330080 выдано Мингорисполкомом от
        21.10.2019<br>
        Лицензия № 50000/49907 от Регистрация в Торговом реестре - 29.04.2019
      </div>
    </div>

    <div class="text-footer text-sm text-center mt-4">
      разработка сайта:
      <a class="underline" href="https://marccoon.com">marccoon.com</a>
    </div>

    <script src="//app.restoplace.cc/widget.js?h=0aaee5d2407822b50ee0" async />
  </div>
</template>

<script>
import Logo from '~/components/app/Logo'

export default {
  name: 'Footer',
  components: { Logo }
}
</script>
