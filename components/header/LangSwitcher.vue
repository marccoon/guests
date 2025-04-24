<template>
  <div class="relative">
    <div
      class="cursor-pointer border border-select text-select w-16 h-9 flex items-center justify-around uppercase"
      @click="active = !active"
    >
      {{ locale }}
      <svg
        :class="{
          'rotate-180': active,
        }"
        class="transition-all duration-150 transform"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.83589 3.55986C8.05471 3.77858 8.05471 4.13319 7.83589 4.352L4.39606 7.79194C4.2867 7.90109 4.14334 7.95588 3.99998 7.95588C3.85662 7.95588 3.71328 7.90131 3.60395 7.79194L0.164125 4.352C-0.0547082 4.13319 -0.0547082 3.77858 0.164125 3.55986C0.382902 3.3411 0.737604 3.3411 0.956326 3.55986L3.99996 6.60351L7.04362 3.55986C7.26234 3.34121 7.61717 3.34121 7.83589 3.55986ZM3.60395 4.44035C3.71326 4.5495 3.85662 4.60429 3.99998 4.60429C4.14334 4.60429 4.2867 4.5495 4.39606 4.44035L7.83589 1.00052C8.05471 0.781654 8.05471 0.426935 7.83589 0.208157C7.61708 -0.0105477 7.26234 -0.0105477 7.04364 0.208157L3.99998 3.25181L0.956345 0.208157C0.737622 -0.0105477 0.382921 -0.0105477 0.164143 0.208157C-0.0546899 0.426935 -0.0546899 0.781654 0.164143 1.00052L3.60395 4.44035Z"
          fill="#C9AB81"
        />
      </svg>
    </div>
    <div
      v-if="active"
      class="absolute right-0 top-full uppercase py-4 text-select bg-black"
    >
      <ul class="text-center">
        <li v-for="(local, lidx) in $i18n.locales" :key="lidx">
          <nuxt-link
            :to="switchLocalePath(local)"
            class="
              block
              p-3
              transition-all
              duration-150
              hover:text-select-hover
              cursor-pointer
            "
            @click.native="active = false"
          >
            {{ $t(`languagesNative.${local}`) }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data: () => ({
    active: false
  }),
  computed: {
    locale () {
      return this.$i18n.locale
    }
  }
}
</script>

<style scoped></style>
