<template>
  <div
    v-if="active"
    class="bg-black flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-50 transition-opacity duration-500"
    @click.self="close"
  >
    <div class="container h-4/5">
      <button class="absolute top-3 right-3" @click="close">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="7.39313"
            y="0.322327"
            width="40"
            height="1"
            transform="rotate(45 7.39313 0.322327)"
            fill="#C9AB81"
          />
          <rect
            x="1.02917"
            y="6.68628"
            width="40"
            height="1"
            transform="rotate(45 1.02917 6.68628)"
            fill="#C9AB81"
          />
          <rect
            x="0.322327"
            y="28.6066"
            width="40"
            height="1"
            transform="rotate(-45 0.322327 28.6066)"
            fill="#C9AB81"
          />
          <rect
            x="6.68628"
            y="34.9706"
            width="40"
            height="1"
            transform="rotate(-45 6.68628 34.9706)"
            fill="#C9AB81"
          />
        </svg>
      </button>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A149abdf718b46933b4aa17e29d21b4df9dd3cbe2197c279a4a493d57e5ff480a&amp;source=constructor"
        width="100%"
        height="100%"
        frameborder="0"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalMap',
  computed: {
    active () {
      return this.$store.state.map
    }
  },
  methods: {
    close () {
      this.$store.dispatch('hideMap')
    }
  }
}
</script>

<style scoped></style>
