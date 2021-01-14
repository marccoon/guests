<template>
  <div class="relative">
    <div @click="active = !active">
      LangSwitcher
    </div>

    <div v-if="active" class="absolute top-full">
      <ul>
        <li>ru</li>
        <li>en</li>
        <li>pl</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LangSwitcher",
  data: () => ({
    active: false
  })
}
</script>

<style scoped>

</style>
