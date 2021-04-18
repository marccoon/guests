<template>
  <div>
    <n-link v-if="link" :to="localePath(link)" tag="button" class="btn">
      {{ btn }}
    </n-link>
    <button v-else class="btn">
      {{ btn }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btn: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
