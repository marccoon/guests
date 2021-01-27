<template>
  <div class="">
    <n-link :to="localePath(`/${link}`)" v-if="link" tag="button" class="w-full block uppercase text-btn border
            border-btn lg:text-base text-sm py-3 px-4 text-center hover:text-btn-hover transition-all duration-150">
      {{btn}}
    </n-link>
    <button v-else  class="block w-full uppercase text-btn border border-btn lg:text-base text-sm py-3 px-4 text-center
            hover:text-btn-hover transition-all duration-150">
      {{btn}}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    btn: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>

</style>
