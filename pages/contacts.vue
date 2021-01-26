<template>
  <div class="pt-4 bg-bg2 bg-repeat-y bg-100% bg-center">
    <div class="container relative">
      <SocialIcon
        class="ml-auto mr-0"
      />
      <Title
        title="Контакты"
        class="lg:mt-24 sm:mt-16 mt-12 mx-auto"
      />
      <Contacts
      />
      <Map
        class="w-full lg:mt-24 xl:h-144"
        />
    </div>
  </div>
</template>

<script>
import SocialIcon from "~/components/app/SocialIcon";
import Title from "~/components/app/Title";
import Contacts from "~/components/app/Contacts";
export default {
  // name: "BlogSlider",
  components: {SocialIcon, Title, Contacts },
}
</script>
