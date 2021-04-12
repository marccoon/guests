<template>
  <div class="py-4 bg-bg bg-repeat-y bg-100% bg-center">
    <div class="container flex justify-between items-center">
      <Logo />
      <div class="text-footer text-sm text-right">
        ООО «Медиа повод»<br />
        220030, г. Минск. Проспект независимости, 25, помещение 5<br />
        УНП 193330080<br />
        Свидетельство о гос.регистрации № 193330080 выдано Мингорисполкомом от
        21.10.2019 Лицензия № 50000/49496 от Регистрация в Торговом реестре -
        29.04.2019
      </div>
    </div>
    <div class="text-footer text-sm text-center">
      <a href="https://marccoon.com">дизайн и разработка: marccoon.com</a>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/app/Logo'

export default {
  name: 'Footer',
  components: { Logo },
}
</script>
